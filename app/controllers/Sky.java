package controllers;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import play.*;
import play.mvc.*;

import java.util.*;

import models.*;

public class Sky extends Controller {

    public static void index() {
        render();
    }
    
    public static void graph(String name) {

    	render(name);
    }

    public static void getData(String name) {

        List<TCfgBusiness> _businesses = TCfgBusiness.find("area",name).fetch();
        Set<TempNode> keySet = new TreeSet<TempNode>();
        TCfgBusiness _post_business = null;
        List<TempLink> links = new ArrayList<TempLink>();
        TempLink link = null;
        TempNode node = null;
        Set<String> _key = new HashSet<String>();
        int i=0;
        for(TCfgBusiness business: _businesses){
            node = new TempNode();
            node.name= business.business_id+" "+business.description.trim();
            if(!_key.contains(node.name)) {
                keySet.add(node);
                _key.add(node.name);
            }
            _post_business = TCfgBusiness.find("business_id",business.post_business_id).first();

            if(_post_business!=null) {
                node = new TempNode();
                node.name= _post_business.business_id+" "+_post_business.description.trim();
                if(!_key.contains(node.name)) {
                    keySet.add(node);
                    _key.add(node.name);
                }
                link = new TempLink();
                link.source = business.business_id + " " + business.description.trim();
                link.target = _post_business.business_id + " " + _post_business.description.trim();
                if(i%2==0)
                link.value=String.valueOf(3);
                links.add(link);
                i++;
            }
        }


        JsonObject _output = new JsonObject();
        Gson gson = new Gson();
        _output.add("nodes",gson.toJsonTree(keySet));
        _output.add("links",gson.toJsonTree(links));

        System.out.println(_output);

        renderText(_output);

    }


    public static void search(String keyword) {
		String query="";
		if(keyword!=null){
			keyword = keyword.toUpperCase();
			if(keyword.contains(",")){
				for(String k:keyword.split(",")){
					if(!query.equals("")){
						query+=" or ";
					}
					query+= "business_id = '"+k+"'";
				}
			}
		}

		if(query.equals("")){
			query= "business_id = '"+keyword+"'";
		}

		query ="("+query+")";

		Logger.info(query);

		List<TCfgBusiness> _businesses = TCfgBusiness.find(query+" and business_id not in (select post_business_id from TCfgBusiness where post_business_id is not null and post_business_id <> '/')").fetch();

		if(_businesses==null || _businesses.size()==0){
			query= "business_id like '%"+keyword+"%'";
			query ="("+query+")";

			_businesses = TCfgBusiness.find(query+" and business_id not in (select post_business_id from TCfgBusiness where post_business_id is not null and post_business_id <> '/')").fetch();

		}



		Map<String, List<TCfgBusiness>> trees = new TreeMap<String, List<TCfgBusiness>>();

		List<TCfgBusiness> _child_business = null;

		Set<String> _id_set = new HashSet<String>();;

		Set<String> nodeSet = new HashSet<String>();

		Set<String> linkSet = new HashSet<String>();

		Set<String> categorySet = new HashSet<String>();

		Set<String> leaderSet = new HashSet<String>();

		List<TempNode> nodeList = new ArrayList<TempNode>();
		List<TempLink> linkList = new ArrayList<TempLink>();
		List<TempCategory> categoryList = new ArrayList<TempCategory>();

		TempNode node = null;

		TempLink link = null;

		TempCategory category = null;


		for(TCfgBusiness _busi: _businesses){
			node = new TempNode();
			node.name = _busi.business_id;
			node.displayname= node.name+"\n"+_busi.name +"\n"+_busi.description;
			node.category = _busi.area;
			if(!nodeSet.contains(node.name)) {
				nodeList.add(node);
				nodeSet.add(node.name);
			}

			if(!leaderSet.contains(node.name)){
				leaderSet.add(node.name);
			}

			category = new TempCategory();
			category.name = _busi.area;
			if(!categorySet.contains(category.name)) {
				categoryList.add(category);
				categorySet.add(category.name);
			}

			node = new TempNode();
			node.name = _busi.post_business_id;
			node.displayname= node.name+"\n"+_busi.post_business_name +"\n"+_busi.post_business_description;
			node.category = _busi.post_area;
			if(!nodeSet.contains(node.name)) {
				nodeList.add(node);
				nodeSet.add(node.name);
			}

			category = new TempCategory();
			category.name = _busi.post_area;
			if(!categorySet.contains(category.name)) {
				categoryList.add(category);
				categorySet.add(category.name);
			}

			link = new TempLink();
			link.source = _busi.business_id;
			link.target = _busi.post_business_id;
			link.value = _busi.relation;
			Logger.info("source:"+link.source+";target:"+link.target);
			if(!linkSet.contains(link.source+"-"+link.target)) {
				linkList.add(link);
				linkSet.add(link.source+"-"+link.target);
			}
			findNext(leaderSet,nodeSet, linkSet, categorySet, nodeList, linkList, categoryList, _busi.post_business_id, keyword);
		}

		JsonObject _output = new JsonObject();
		Gson gson = new Gson();

		Boolean _r = true;
		if(keyword!=null){
			keyword = keyword.toUpperCase();
			if(keyword.contains(",")){
				for(String k:keyword.split(",")){
					if(!nodeSet.contains(k)){
						_r = false;
					}
				}
			}
		}

		if(_r) {
			_output.add("nodes", gson.toJsonTree(nodeList));
			_output.add("links", gson.toJsonTree(linkList));
			_output.add("categories", gson.toJsonTree(categoryList));
		}

		renderText(_output);
	}

	private static void findNext(Set<String>  leaderSet,Set<String> nodeSet,Set<String> linkSet, Set<String> categorySet, List<TempNode> nodeList, List<TempLink> linkList, List<TempCategory> categoryList, String _next_id, String keyword) {
		TempNode node = null;
		TempCategory category = null;
		TempLink link = null;
		List<TCfgBusiness> _child_businesses = TCfgBusiness.find("business_id",_next_id).fetch();
		for(TCfgBusiness _busi: _child_businesses){
			node = new TempNode();
			node.name = _busi.post_business_id;
			node.displayname= node.name+"\n"+_busi.post_business_name +"\n"+_busi.post_business_description;
			node.category = _busi.post_area;

			if(!nodeSet.contains(node.name)) {
				nodeList.add(node);
				nodeSet.add(node.name);
			}

			if(!leaderSet.contains(_busi.business_id)){
				leaderSet.add(_busi.business_id);
			}

			category = new TempCategory();
			category.name = _busi.post_area;
			if(!categorySet.contains(category.name)) {
				categoryList.add(category);
				categorySet.add(category.name);
			}

			link = new TempLink();
			link.source = _busi.business_id;
			link.target = _busi.post_business_id;
			link.value = _busi.relation;
			if(!linkSet.contains(link.source+"-"+link.target)) {
				linkList.add(link);
				linkSet.add(link.source+"-"+link.target);
			}

			Boolean _r = false;
			if(keyword!=null){
				keyword = keyword.toUpperCase();
				if(keyword.contains(",")){
					for(String k:keyword.split(",")){
						Logger.info(k+"-"+_busi.post_business_id);
						if(_busi.post_business_id.equalsIgnoreCase(k)){
							Logger.info(k+"-"+_busi.post_business_id);
							_r = true;
						}
					}
				}
			}

			Logger.info(":"+_r);

			if(!_r) {
				if (!leaderSet.contains(_busi.post_business_id)) {
					findNext(leaderSet, nodeSet, linkSet, categorySet, nodeList, linkList, categoryList, _busi.post_business_id, keyword);
				}
			}

		}
	}

}