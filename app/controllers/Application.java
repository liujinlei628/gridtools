package controllers;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import play.*;
import play.mvc.*;

import java.util.*;

import models.*;

public class Application extends Controller {

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


    private static void findNext(List<TCfgBusiness> _businesses, String _next_id, Set<String> _id_set) {
        if(_id_set==null){
            _id_set = new HashSet<String>();
        }
        TCfgBusiness business = TCfgBusiness.find("business_id",_next_id).first();
        if(business!=null) {
            _businesses.add(business);
            if(!_id_set.contains(business.business_id)) {
                findNext(_businesses, business.post_business_id, _id_set);
            } else {
                _id_set.add(business.business_id);
            }
        }
    }

}