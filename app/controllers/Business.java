package controllers;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.*;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import models.*;
import org.apache.poi.ss.usermodel.Workbook;
import org.jeecgframework.poi.excel.ExcelExportUtil;
import org.jeecgframework.poi.excel.ExcelImportUtil;
import org.jeecgframework.poi.excel.entity.ExportParams;
import org.jeecgframework.poi.excel.entity.ImportParams;

import org.jeecgframework.poi.excel.entity.params.ExcelExportEntity;
import play.Logger;
import play.Play;

public class Business extends CRUD {

	public static void index() {
		render();
	}
	
	public static void toUpload() {
		
		render();
	}
	
	public static void uploadAsset(File file) {
		Logger.info("Get file:"+ file);
		ImportParams params = new ImportParams();
		params.setTitleRows(1);
		//params.setHeadRows(3);

		//String[] fields = {"idx","index","title","content","summary","relation","post-index","post-title","post-content","post-summary","col-1","col-2","style","remark"}
		//params.setImportFields(fields);
		//params.setSheetNum(9);
		params.setNeedSave(true);
		long start = new Date().getTime();
		List<Map<String, Object>> list = ExcelImportUtil.importExcel(file, Map.class, params);

		TCfgBusiness busi = null;
        for (Map<String, Object> map : list) {
        	String name = "";
        	String _name = "";
        	if(map.get("业务内容描述序号")!=null){
				name=map.get("业务内容描述序号").toString();
			} else {
        		Logger.info("Cannot found the number.......");
			}

			if(map.get("衔接业务内容描述序号")!=null){
				_name=map.get("衔接业务内容描述序号").toString();
			}

			Logger.info("Get the name:"+name);

			if(name !=null && !"".equals(name)){
				busi = TCfgBusiness.find("business_id=? And post_business_id=?", name, _name).first();
				if(busi==null){
					busi = new TCfgBusiness();
					busi.business_id=name;
					busi.post_business_id=_name;
				}

				if(map.get("版块")!=null){
					busi.area=map.get("版块").toString();
				}

				if(map.get("专业")!=null){
					busi.professional=map.get("专业").toString();
				}

				if(map.get("业务名称")!=null){
					busi.name=map.get("业务名称").toString();
				}

				if(map.get("业务内容")!=null){
					busi.content=map.get("业务内容").toString();
				}

				if(map.get("业务内容描述")!=null){
					busi.description=map.get("业务内容描述").toString();
				}

				if(map.get("关系")!=null){
					busi.relation=map.get("关系").toString();
				}

				if(map.get("值")!=null){
					busi.value=map.get("值").toString();
				}

				if(map.get("衔接版块")!=null){
					busi.post_area=map.get("衔接版块").toString();
				}

				if(map.get("衔接专业")!=null){
					busi.post_professional=map.get("衔接专业").toString();
				}



				if(map.get("衔接业务名称")!=null){
					busi.post_business_name=map.get("衔接业务名称").toString();
				}

				if(map.get("衔接业务内容")!=null){
					busi.post_business_content=map.get("衔接业务内容").toString();
				}

				if(map.get("衔接业务内容描述")!=null){
					busi.post_business_description=map.get("衔接业务内容描述").toString();
				}

				busi.save();
			}


        }
		
	}
	
	public static void uploadBusiness() {
		
	}

	public static void single(String keyword){

		render(keyword);
	}

	public static void force(String keyword){

		render(keyword);
	}

	public static void echarts(String keyword){
		render(keyword);
	}

	public static void query(String keyword) {
		String query="";
		if(keyword!=null ){
			keyword = keyword.toUpperCase();
			if(keyword.contains(" ")){
				for(String k:keyword.split(" ")){
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

		List<TCfgBusiness> _businesses = TCfgBusiness.find("  business_id not in (select post_business_id from TCfgBusiness where post_business_id is not null and post_business_id <> '/')").fetch();

		if(_businesses==null || _businesses.size()==0){
			query= "business_id like '%"+keyword+"%'";

			query ="("+query+")";

			Logger.info(query +";"+_businesses.size());

			_businesses = TCfgBusiness.find(query+" and business_id not in (select post_business_id from TCfgBusiness where post_business_id is not null and post_business_id <> '/')").fetch();


		}

		Set<String> _key_set = new HashSet<String>();

		List<TCfgBusiness> _distinct_business = new ArrayList<TCfgBusiness>();
		for(TCfgBusiness b: _businesses){

			if(_key_set.contains(b.business_id)){

			} else {
				_distinct_business.add(b);
				_key_set.add(b.business_id);
			}
		}


		render(keyword, _distinct_business);
	}

	private static void findNext(List<TCfgBusiness> _businesses, String _next_id, Set<String> _id_set) {
		Logger.info("id sets:"+_id_set.size());
		List<TCfgBusiness> _child_businesses = TCfgBusiness.find("business_id",_next_id).fetch();
		for(TCfgBusiness business: _child_businesses){
			_businesses.add(business);
			_id_set.add(business.business_id);
			if(!_id_set.contains(business.post_business_id)) {
				findNext(_businesses, business.post_business_id, _id_set);
			}
		}
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
		
		Integer _x_min=80;
        Integer _y_min=50;

        Integer _x_d = 230;
        Integer _y_d = 200;

        Integer xx = 1;

        int i = 0;

		for(TCfgBusiness _busi: _businesses){
			node = new TempNode();
			node.name = _busi.business_id;
			node.displayname = node.name + "\n" + _busi.description;
			node.category = _busi.area;
			
			node.source = _busi.business_id;
            node.target = _busi.post_business_id;
            node.x=_x_min + (i*_x_d);
            node.y=_y_min + (i*_y_d);
			
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
			node.displayname = node.name + "\n" + _busi.post_business_description;
			node.category = _busi.area;
			
			node.source = _busi.business_id;
            node.target = _busi.post_business_id;
            node.x = _x_min + _x_d ;
            node.y = _y_min +((i-_businesses.size()/2)*_y_d);
			
			if(!nodeSet.contains(node.name)) {
				nodeList.add(node);
				nodeSet.add(node.name);
			}

			category = new TempCategory();
			category.name = _busi.area;
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
			findAllNext(leaderSet,nodeSet, linkSet, categorySet, nodeList, linkList, categoryList, _busi.post_business_id, keyword, node.x, node.y, _x_d, _y_d, xx);
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

		List<TempNode> nodeListDw = new ArrayList<TempNode>();
		List<TempNode> nodeListZy = new ArrayList<TempNode>();
		List<TempNode> nodeListFz = new ArrayList<TempNode>();
		for (TempNode temNode : nodeList) {
		    if("电网业务".equals(temNode.category)){
		        nodeListDw.add(temNode);
	        }
		    if("资源保障".equals(temNode.category)){
		        nodeListZy.add(temNode);
            }
            if("辅助保障".equals(temNode.category)){
                nodeListFz.add(temNode);
            }
		}
		
		if(_r) {
			_output.add("nodes", gson.toJsonTree(nodeList));
			_output.add("nodeDws", gson.toJsonTree(nodeListDw));
			_output.add("nodeZys", gson.toJsonTree(nodeListZy));
			_output.add("nodeFzs", gson.toJsonTree(nodeListFz));
			_output.add("links", gson.toJsonTree(linkList));
			_output.add("categories", gson.toJsonTree(categoryList));
		}

		renderText(_output);
	}

	private static void findAllNext(Set<String>  leaderSet,Set<String> nodeSet,Set<String> linkSet, Set<String> categorySet, List<TempNode> nodeList, List<TempLink> linkList, List<TempCategory> categoryList, String _next_id, String keyword, Integer x, Integer y, Integer _x_d, Integer _y_d, Integer xx) {
		TempNode node = null;
		TempCategory category = null;
		TempLink link = null;
		List<TCfgBusiness> _child_businesses = TCfgBusiness.find("business_id",_next_id).fetch();
		
		int i=0;
		for(TCfgBusiness _busi: _child_businesses){
			node = new TempNode();
			node.name = _busi.post_business_id;
			node.displayname = node.name + "\n" + _busi.post_business_description;
			node.category = _busi.area;

            node.source = _busi.business_id;
            node.target = _busi.post_business_id;
            node.x = x + _x_d;
            
            if(_child_businesses.size()>1){
                node.y = y + _y_d *(i-_child_businesses.size()/2);
            } else {
                node.y = y + _y_d * (i);
            }
			
			if(!nodeSet.contains(node.name)) {
				nodeList.add(node);
				nodeSet.add(node.name);
			}

			if(!leaderSet.contains(_busi.business_id)){
				leaderSet.add(_busi.business_id);
			}

			category = new TempCategory();
			category.name = _busi.area;
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

			xx++;
			Logger.info(":"+_r);

			if(!_r) {
				if (!leaderSet.contains(_busi.post_business_id)) {
				    findAllNext(leaderSet, nodeSet, linkSet, categorySet, nodeList, linkList, categoryList, _busi.post_business_id, keyword, node.x, node.y, _x_d, _y_d, xx);
				}
			}

		}
	}

	public static void searchAll(String keyword) {
		String query="";
		String keyId = ""; // ljl
		if(keyword != null){
			keyword = keyword.toUpperCase();
			keyId = keyword.substring(0,2);
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

		Logger.info("SQL:"+query);



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

		Integer _x_min=80;
		Integer _y_min=50;

		Integer _x_d = 230;
		Integer _y_d = 200;

		Integer xx = 1;

		int i = 0;

		for(TCfgBusiness _busi: _businesses){
			node = new TempNode();
			node.name = _busi.business_id;
			node.displayname= node.name+"\n"+_busi.name +"\n"+_busi.description;
			node.category = _busi.professional;
			node.source = _busi.business_id;
			node.target = _busi.post_business_id;
			node.x=_x_min + (i*_x_d);
			node.y=_y_min + (i*_y_d);
			if(!nodeSet.contains(node.name)) {
				nodeList.add(node);
				nodeSet.add(node.name);
			}

			if(!leaderSet.contains(node.name)){
				leaderSet.add(node.name);
			}

			category = new TempCategory();
			category.name = _busi.professional;
			if(!categorySet.contains(category.name)) {
				categoryList.add(category);
				categorySet.add(category.name);
			}
			
			if(keyId.equalsIgnoreCase("GH")){
				if( _busi.post_business_id.substring(0, 2).equalsIgnoreCase("GH")){ //ljl
					node = new TempNode();
					node.name = _busi.post_business_id;
					node.displayname= node.name+"\n"+_busi.post_business_name +"\n"+_busi.post_business_description;
					node.category = _busi.post_professional;
					node.source = _busi.business_id;
					node.target = _busi.post_business_id;
					node.x = _x_min + _x_d ;
					node.y = _y_min +((i-_businesses.size()/2)*_y_d);
					if(!nodeSet.contains(node.name)) {
						nodeList.add(node);
						nodeSet.add(node.name);
					}
				}
			}else{
				node = new TempNode();
				node.name = _busi.post_business_id;
				node.displayname= node.name+"\n"+_busi.post_business_name +"\n"+_busi.post_business_description;
				node.category = _busi.post_professional;
				node.source = _busi.business_id;
				node.target = _busi.post_business_id;
				node.x = _x_min + _x_d ;
				node.y = _y_min +((i-_businesses.size()/2)*_y_d);
				if(!nodeSet.contains(node.name)) {
					nodeList.add(node);
					nodeSet.add(node.name);
				}
			}
			
			category = new TempCategory();
			category.name = _busi.post_professional;
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

			i++;

			if(!_busi.relation.equalsIgnoreCase("引用")) {
				findNext(leaderSet, nodeSet, linkSet, categorySet, nodeList, linkList, categoryList, _busi.post_business_id, keyword, node.x, node.y, _x_d, _y_d, xx);
			}
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
			_output.addProperty("xx",4000);
		}


		renderText(_output);
	}

	private static void findNext(Set<String>  leaderSet,Set<String> nodeSet,Set<String> linkSet, Set<String> categorySet, List<TempNode> nodeList, List<TempLink> linkList, List<TempCategory> categoryList, String _next_id, String keyword, Integer x, Integer y, Integer _x_d, Integer _y_d, Integer xx) {
		TempNode node = null;
		TempCategory category = null;
		TempLink link = null;
		List<TCfgBusiness> _child_businesses = TCfgBusiness.find("business_id",_next_id).fetch();
		if(_child_businesses == null || _child_businesses.size() == 0){
			TempNode nodetmp =  nodeList.get(nodeList.size()-1);
			if(nodetmp.name.startsWith("GH")){
				nodetmp.isleaf = true;
			}
		}
		//ljl
		String keyId = "";
		if(keyword != null){
			keyId = keyword.substring(0,2);
		}
		
		int i=0;
		for(TCfgBusiness _busi: _child_businesses){
			if(keyId.equalsIgnoreCase("GH")){
				if(_busi.post_business_id.substring(0, 2).equalsIgnoreCase("GH")){
					node = new TempNode();
					node.name = _busi.post_business_id;
					node.displayname= node.name+"\n"+_busi.post_business_name +"\n"+_busi.post_business_description;
					node.category = _busi.post_professional;
					node.source = _busi.business_id;
					node.target = _busi.post_business_id;
					node.x = x + _x_d;

					if(_child_businesses.size()>1){
						node.y = y + _y_d *(i-_child_businesses.size()/2);
					} else {
						node.y = y + _y_d * (i);
					}
//					if(node.x.intValue()>1024){
//						node.y = y + _y_d * (i)*2;
//					}else {
		//
//					}

					if(!nodeSet.contains(node.name)) {
						nodeList.add(node);
						nodeSet.add(node.name);
					}

					if(!leaderSet.contains(_busi.business_id)){
						leaderSet.add(_busi.business_id);
					}

					category = new TempCategory();
					category.name = _busi.post_professional;
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


					xx++;
					if(_busi.relation.equalsIgnoreCase("引用")){
						break;
					}
					if(!_r) {
						if (!leaderSet.contains(_busi.post_business_id)) {
							findNext(leaderSet, nodeSet, linkSet, categorySet, nodeList, linkList, categoryList, _busi.post_business_id, keyword, node.x, node.y, _x_d, _y_d,xx);
						}
					}
					i++;
				}
				
			}else{
//				if(_busi.relation.equalsIgnoreCase("后置") && _busi.business_id.contains("GH")){
//					TCfgBusiness tmp = TCfgBusiness.find("business_id",_busi.post_business_id).first();
//					if(tmp != null ){
//						
//					}
//					if(tmp.relation.equals("后置") && _busi.business_id.contains("GH")){
//						break;
//					}
//					if(tmp == null){
//						continue;
//					}
//				}
				node = new TempNode();
				node.name = _busi.post_business_id;
				node.displayname= node.name+"\n"+_busi.post_business_name +"\n"+_busi.post_business_description;
				node.category = _busi.post_professional;
				node.source = _busi.business_id;
				node.target = _busi.post_business_id;
				node.x = x + _x_d;

				if(_child_businesses.size()>1){
					node.y = y + _y_d *(i-_child_businesses.size()/2);
				} else {
					node.y = y + _y_d * (i);
				}
//				if(node.x.intValue()>1024){
//					node.y = y + _y_d * (i)*2;
//				}else {
	//
//				}

				if(!nodeSet.contains(node.name)) {
					nodeList.add(node);
					nodeSet.add(node.name);
				}

				if(!leaderSet.contains(_busi.business_id)){
					leaderSet.add(_busi.business_id);
				}

				category = new TempCategory();
				category.name = _busi.post_professional;
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


				xx++;
				if(_busi.relation.equalsIgnoreCase("引用")){
					break;
				}
				if(!_r) {
					if (!leaderSet.contains(_busi.post_business_id)) {
						findNext(leaderSet, nodeSet, linkSet, categorySet, nodeList, linkList, categoryList, _busi.post_business_id, keyword, node.x, node.y, _x_d, _y_d,xx);
					}
				}
				i++;
			}

		}
	}

	
	public static void export(String keyword) throws IOException {
		String query="";
		if(keyword!=null){
			keyword = keyword.toUpperCase();
			if(keyword.contains(" ")){
				for(String k:keyword.split(" ")){
					if(!query.equals("")){
						query+=" or ";
					}
					query+= "business_id like '%"+k+"%'";
				}
			}
		}

		if(query.equals("")){
			query= "business_id like '%"+keyword+"%'";
		}

		query ="("+query+")";


		Logger.info(query);

		List<TCfgBusiness> _businesses = TCfgBusiness.find(query+" and business_id not in (select post_business_id from TCfgBusiness where post_business_id is not null and post_business_id <> '/')").fetch();

		Map<String, List<TCfgBusiness>> trees = new HashMap<String, List<TCfgBusiness>>();

		List<TCfgBusiness> _child_business = null;

		Set<String> _id_set = new HashSet<String>();;

		for(TCfgBusiness _busi: _businesses){
			if(trees.containsKey(_busi.business_id)){
				_child_business = trees.get(_busi.business_id);
			} else {
				_child_business = new ArrayList<TCfgBusiness>();
				_child_business.add(_busi);
			}
			findNext(_child_business, _busi.post_business_id, _id_set);
			trees.put(_busi.business_id, _child_business);
		}



		List<ExcelExportEntity> entity = new ArrayList<ExcelExportEntity>();
		entity.add(new ExcelExportEntity("涉及专业", "name"));
		entity.add(new ExcelExportEntity("环节数量", "size"));
		ExcelExportEntity cell=null;
		for(int i=1; i<13; i++) {
			cell=new ExcelExportEntity("Q"+i, "Q"+i, 40);
			cell.setWrap(true);
			entity.add(cell);
		}



		List<Map<String, String>> list = new ArrayList<Map<String, String>>();
		Map<String, String> map;
		for (String _id: trees.keySet()) {
			map = new HashMap<String, String>();
			List<TCfgBusiness> _bss = trees.get(_id);
			map.put("name", keyword);
			map.put("size", String.valueOf(_bss.size()));
			int i=0;
			for(TCfgBusiness b: _bss){
				i++;
				map.put("Q"+i,b.business_id+" "+" "+b.name+b.description);
			}
			list.add(map);
		}

		Workbook workbook = ExcelExportUtil.exportExcel(new ExportParams(
				keyword, keyword), entity, list);


		String filename = Play.tmpDir+File.separator+UUID.randomUUID()+".xls";

		FileOutputStream fos = new FileOutputStream(filename);
		workbook.write(fos);
		fos.close();

		renderBinary(new File(filename));

	}

	public static void desc(TCfgBusiness business) {
		TCfgBusinessDesc desc = TCfgBusinessDesc.find("content", business.description).first();
		render(business,desc);
	}

	public static void getData(TCfgBusiness business) {

		Set<TempNode> keySet = new TreeSet<TempNode>();
		TCfgBusiness _post_business = null;
		List<TempLink> links = new ArrayList<TempLink>();
		TempLink link = null;
		TempNode node = null;
		Set<String> _key = new HashSet<String>();
		int i=0;
			node = new TempNode();
			node.name= business.business_id+" "+business.description.trim();
			if(!_key.contains(node.name)) {
				keySet.add(node);
				_key.add(node.name);
			}
			_post_business = TCfgBusiness.find("business_id",business.post_business_id).first();

			if(_post_business!=null) {
				node = new TempNode();
				node.name= "下一节点:<br/>"+_post_business.business_id+" "+_post_business.description.trim();
				if(!_key.contains(node.name)) {
					keySet.add(node);
					_key.add(node.name);
				}
				link = new TempLink();
				link.source = business.business_id + " " + business.description.trim();
				link.target = node.name;
				if(i%2==0)
					link.value=String.valueOf(3);
				links.add(link);
				i++;
			}



		JsonObject _output = new JsonObject();
		Gson gson = new Gson();
		_output.add("nodes",gson.toJsonTree(keySet));
		_output.add("links",gson.toJsonTree(links));

		System.out.println(_output);

		renderText(_output);

	}


	private static void findNextPoint(List<TCfgBusiness> _businesses, String _next_id) {
		TCfgBusiness business = TCfgBusiness.find("business_id",_next_id).first();
		if(business!=null) {
			_businesses.add(business);
			findNextPoint(_businesses, business.post_business_id);
		}
	}
	
}