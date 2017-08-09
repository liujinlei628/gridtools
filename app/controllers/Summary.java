package controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;

import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import models.TCfgBusiness;
import models.TCfgBusinessDesc;
import models.TCfgBusinessProcess;
import models.TCfgDict;
import models.TempCategory;
import models.TempLink;
import models.TempNode;
import play.Logger;

/**
 * Created by humin on 03/06/2017.
 */
@CRUD.For(TCfgBusinessDesc.class)
public class Summary extends CRUD {

    
    /**
     * 跳转到业务版块业务
     */
    public static void queryAreaList() {
        
        String query=" 1=1 ";
        query +=" GROUP BY area";
        Logger.info(query);
        // 根据业务名称查询
        List<TCfgBusinessDesc> busNodeList = TCfgBusinessDesc.find(query).fetch();
        render(busNodeList);
    }
    
    /**
     * 查询所有的一级业务节点
     * @param busName
     */
    public static void queryBusNodeList(String areaName, String busName){
        
        String query=" 1=1 ";
        if(areaName !=null && !"".equals(areaName)){
            query += " AND area ='" + areaName + "'" ;
        }
        if(busName !=null && !"".equals(busName)){
            query += " AND name like '%" + busName + "%'" ;
        }
        query +=" GROUP BY name";
        Logger.info(query);
        // 根据业务名称查询
        List<TCfgBusinessDesc> busNodeList = TCfgBusinessDesc.find(query).fetch();
        render(areaName, busName, busNodeList);
    }
    
    /**
     * 根据一级业务名称查询该业务下面所有的子业务
     * @param busName
     */
    public static void queryNodeListByName(String busName){
        
        String query=" 1=1 ";
        if(busName !=null && !"".equals(busName)){
            query += "AND name like '%" + busName + "%' ORDER BY ID" ;
        }
        Logger.info(query);
        // 根据业务名称查询
        List<TCfgBusinessDesc> busNodeList = TCfgBusinessDesc.find(query).fetch();
        render(busName, busNodeList);
    }
    
    /**
     * 跳转到信息查看页面
     * @param id 
     */
    public static void detail(Long id) {
        if(id != null && !"".equals(id)) {
            TCfgBusinessDesc businessDesc = TCfgBusinessDesc.findById(id);
            render(businessDesc);
        }
        render();
    }
    
    /**
     * 跳转到信息查看页面
     * @param id 
     */
    public static void list(int startPosition, String business, String name, String content) {
        // 总数
        int totalReport = TCfgBusinessDesc.findAll().size();
        
        String query=" 1=1 ";
        if(business !=null && !"".equals(business)){
            query += " AND business ='" + business + "'" ;
        }
        
        if(name !=null && !"".equals(name)){
            query += " AND name ='" + name + "'" ;
        }
        
        if(content !=null && !"".equals(content)){
            query += " AND content ='" + content + "'" ;
        }
        query += " ORDER BY ID" ;
        
        List<TCfgBusinessDesc> list =TCfgBusinessDesc.find(query).from(startPosition*10).fetch(10);

        render(startPosition, totalReport, list, business, name, content);
        
    }
    
    /**
     * 分页方法：上一页
     * @param startPosition 页码
     * @param business 编号
     * @param name 名称
     * @param content 内容
     */
    @SuppressWarnings("unused")
    public static void previousPage(int startPosition, String business, String name, String content) {  
        int totalUpload = TCfgBusinessDesc.findAll().size()/10;  
        if(startPosition == 0) {  
            startPosition = startPosition;
        } else {  
            startPosition = startPosition - 1;
        }  
        list(startPosition, business, name, content);
    }  

    /**
     * 分页方法：下一页
     * @param startPosition 页码
     * @param business 编号
     * @param name 名称
     * @param content 内容
     */
    public static void nextPage(int startPosition, String business, String name, String content) {  
        int totalUpload = TCfgBusinessDesc.findAll().size();  
        if(startPosition >= totalUpload/10) {
            startPosition = startPosition;
        } else {  
            startPosition = startPosition + 1;
        }  
        list(startPosition, business, name, content);
    }
    
    /**
     * 跳转到修改页面页面
     */
    public static void form(Long id) {
        
        if(id != null && !"".equals(id)) {
            TCfgBusinessDesc businessDesc = TCfgBusinessDesc.findById(id);
            
            String queryArea=" 1=1 ";
            if(businessDesc.area !=null && !"".equals(businessDesc.area)){
                queryArea += "AND area = '" + businessDesc.area + "'" ;
            }
            queryArea += " GROUP BY major ";
            Logger.info(queryArea);
            List<TCfgBusinessDesc> majorList = TCfgBusinessDesc.find(queryArea).fetch();
            
            String queryMajor=" 1=1 ";
            if(businessDesc.area !=null && !"".equals(businessDesc.area)){
                queryMajor += "AND area = '" + businessDesc.area + "'" ;
            }
            if(businessDesc.major !=null && !"".equals(businessDesc.major)){
                queryMajor += "AND major = '" + businessDesc.major + "'" ;
            }
            queryMajor += " GROUP BY name ";
            Logger.info(queryMajor);
            List<TCfgBusinessDesc> busNameList = TCfgBusinessDesc.find(queryMajor).fetch();
            
            // 数据字典集合
            String query=" 1=1 ";
            query += " AND delFlag = 0 " ;
            Logger.info(query);
            List<TCfgDict> dictList = TCfgDict.find(query).fetch();
            render(businessDesc, dictList, majorList, busNameList);
        }
        render();
    }
    
    /**
     * 跳转到新增业务信息页面
     * @param keyWord
     */
    public static void addOneNode(String keyWord){
        
        String query=" 1=1 ";
        query +=" GROUP BY name ORDER BY Id";
        Logger.info(query);
        // 根据业务名称分组查询一级业务
        List<TCfgBusinessDesc> busiInfoList = TCfgBusinessDesc.find(query).fetch();
        
        // 数据字典集合
        String queryDict=" 1=1 ";
        queryDict += " AND delFlag = 0 " ;
        Logger.info(queryDict);
        List<TCfgDict> dictList = TCfgDict.find(queryDict).fetch();
        
        render(keyWord, busiInfoList, dictList);
    }
    
    /**
     * 跳转到新增业务信息页面
     * @param keyWord
     */
    public static void addOneLevel(){
        
        String query=" 1=1 ";
        query +=" GROUP BY name ORDER BY Id";
        Logger.info(query);
        // 根据业务名称分组查询一级业务
        List<TCfgBusinessDesc> busiInfoList = TCfgBusinessDesc.find(query).fetch();
        
        // 数据字典集合
        String queryDict=" 1=1 ";
        queryDict += " AND delFlag = 0 " ;
        Logger.info(queryDict);
        List<TCfgDict> dictList = TCfgDict.find(queryDict).fetch();
        
        render(busiInfoList, dictList);
    }
    
    /**
     * 验证一级业务名称是否重复
     * @return
     */
    public @ResponseBody String checkBusName(String areaName, String majorName, String busName){
        
        String msg = "0";
        
        String query=" 1=1 ";
        if(areaName !=null && !"".equals(areaName)){
            query += " AND area = '" + areaName + "'" ;
        }
        
        if(majorName !=null && !"".equals(majorName)){
            query += " AND major = '" + majorName + "'" ;
        }
        
        query += " GROUP BY name ";
        Logger.info(query);
        List<TCfgBusinessDesc> busInfoList = TCfgBusinessDesc.find(query).fetch();
        
        for(int i = 0 ; i < busInfoList.size() ; i ++){
            
            if(busName.equals(busInfoList.get(i).name)){
                msg = "2";
                return msg;
            }
        }
        return msg;
    }
    
    /**
     * 根据版块名称查询该版块下的全部专业
     * @param proecessCode
     * @return List<TCfgBusinessProcess>
     */
    public @ResponseBody JsonObject queryBusName(String areaName) {
        String query=" 1=1 ";
        if(areaName !=null && !"".equals(areaName)){
            query += "AND area = '" + areaName + "'" ;
        }
        query += " GROUP BY major ";
        Logger.info(query);
        // 根据业务名称查询
        List<TCfgBusinessDesc> busInfoList = TCfgBusinessDesc.find(query).fetch();
        JsonObject _output = new JsonObject();
        Gson gson = new Gson();
        _output.add("majors", gson.toJsonTree(busInfoList));
        return _output;
    }
    
    /**
     * 根据专业名称查询该专业下的全部一级业务名称
     * @param proecessCode
     * @return List<TCfgBusinessProcess>
     */
    public @ResponseBody JsonObject queryMajorName(String areaName, String majorName) {
        
        String query=" 1=1 ";
        if(areaName !=null && !"".equals(areaName)){
            query += " AND area = '" + areaName + "'" ;
        }
        
        if(majorName !=null && !"".equals(majorName)){
            query += " AND major = '" + majorName + "'" ;
        }
        
        query += " GROUP BY name ";
        Logger.info(query);
        List<TCfgBusinessDesc> busInfoList = TCfgBusinessDesc.find(query).fetch();
        JsonObject _output = new JsonObject();
        Gson gson = new Gson();
        _output.add("nodes", gson.toJsonTree(busInfoList));
        return _output;
    }
    
    /**
     * 根据流程编号查询该流程的全部节点信息
     * @param proecessCode
     * @return List<TCfgBusinessProcess>
     */
    public @ResponseBody JsonObject queryProcessByCode(String processCode) {
        String query=" 1=1 ";
        if(processCode !=null && !"".equals(processCode)){
            query += "AND processCode = '" + processCode + "' ORDER BY ID" ;
        }
        Logger.info(query);
        // 根据业务名称查询
        List<TCfgBusinessProcess> processList = TCfgBusinessProcess.find(query).fetch();
        
        JsonObject _output = new JsonObject();
        Gson gson = new Gson();
        _output.add("nodes", gson.toJsonTree(processList));
        
        return _output;
    }
    
    /**
     * 保存节点信息与关系
     * @param keyWord
     * @param name 业务名称
     * @param content 业务内容
     * @param title 业务事项
     * @param major 专业
     * @param area 所属板块
     * @param description 业务内容描述
     */
    public @ResponseBody String save(String keyWord, String name, String business, String content, String title, 
                    String major,String majorName, String area, String description) {
        
        String msg = "0";
        
        // 如果有新增的一级业务名称，其他字段都为空的情况下，先删除一级业务，后插入新的数据。
        String query=" 1=1 ";
        if(area !=null && !"".equals(area)){
            query += " AND area = '" + area + "'" ;
        }
        if(majorName !=null && !"".equals(majorName)){
            query += " AND major = '" + majorName + "'" ;
        }
        
        if(name !=null && !"".equals(name)){
            query += " AND name = '" + name + "'" ;
        }
        
        Logger.info(query);
        List<TCfgBusinessDesc> busInfoList = TCfgBusinessDesc.find(query).fetch();
        
        if(busInfoList.size() > 0){
            TCfgBusinessDesc tempVo = busInfoList.get(0);
            if(tempVo.business == null && tempVo.title == null){
                tempVo.delete();
            }
        }
        
        try {
            TCfgBusinessDesc tCfgBusinessDesc = new TCfgBusinessDesc();
            // 保存节点信息
            if(!"".equals(name)) {
                tCfgBusinessDesc.name = name;
                tCfgBusinessDesc.content = content;
                tCfgBusinessDesc.title = title;
                tCfgBusinessDesc.area = area;
                tCfgBusinessDesc.major = majorName;
                tCfgBusinessDesc.description = description;
                tCfgBusinessDesc.business = business;
                tCfgBusinessDesc.delFlag = "0";
            }
            tCfgBusinessDesc.save();
            msg = "1";
        } catch (Exception e) {
            msg = "-1";
        }
        
        // 保存业务流程信息
        /*if(!"".equals(process)){
            tBusinessProcess.processCode = process;
            tBusinessProcess.processName = processName;
            tBusinessProcess.busName = name;
            tBusinessProcess.busContent = content;
            tBusinessProcess.busItem = title;
            tBusinessProcess.busArea = area;
            tBusinessProcess.busMajor = majorName;
            tBusinessProcess.busDescription = description;
            tBusinessProcess.busCode = (major + "-" + (majorCount + 1));
            tBusinessProcess.delFlag = "0";
        }
        tBusinessProcess.save();
        // 保存串接关系表数据:前置节点
        TCfgBusiness prevBusiness = new TCfgBusiness();
        if(!"".equals(prevNode)){
            
            // 获取前置节点的详细信息
            String query=" 1=1 ";
            query += "AND business ='" + prevNode + "'" ;
            TCfgBusinessDesc descVo = (TCfgBusinessDesc) TCfgBusinessDesc.find(query).fetch().get(0);
            // 获取关系 先不考虑
            TCfgBusiness vo = new TCfgBusiness();
            String query1=" 1=1 ";
            query1 += "AND business ='" + prevNode + "'" ;
            vo = TCfgBusiness.find(query).fetch().get(0);
            
            prevBusiness.business_id = descVo.business;
            prevBusiness.area = descVo.area;
            prevBusiness.professional = descVo.major;
            prevBusiness.value = "";
            prevBusiness.content = descVo.content;
            prevBusiness.description = descVo.description;
            prevBusiness.relation = "后置";
            prevBusiness.post_business_id = (major + "-" + (majorCount + 1));
            prevBusiness.post_business_name = name;
            prevBusiness.post_area = area;
            prevBusiness.post_professional = majorName;
            prevBusiness.post_business_content = content;
            prevBusiness.post_business_description = description;
            prevBusiness.save();
        }
        // 保存串接关系表数据:后置节点
        TCfgBusiness nextBusiness = new TCfgBusiness();
        if(!"".equals(nextNode)){
            String query=" 1=1 ";
            query += "AND business ='" + prevNode + "'" ;
            TCfgBusinessDesc descVo = (TCfgBusinessDesc) TCfgBusinessDesc.find(query).fetch().get(0);
            nextBusiness.business_id = (major + "-" + (majorCount + 1));
            nextBusiness.area = area;
            nextBusiness.professional = major;
            nextBusiness.value = "";
            nextBusiness.content = content;
            nextBusiness.description = description;
            nextBusiness.relation = "后置";
            nextBusiness.post_business_id = descVo.business;
            nextBusiness.post_business_name = descVo.name;
            nextBusiness.post_area = descVo.area;
            nextBusiness.post_professional = descVo.major;
            nextBusiness.post_business_content = descVo.content;
            nextBusiness.post_business_description = descVo.description;
            nextBusiness.save();
        }*/
        
        return msg;
    }
    
    /**
     * 验证编号是否重复
     * @return
     */
    public @ResponseBody String checkBusCode(String business){
        
        String msg = "0";
        String query=" 1=1 ";
        query += "AND business ='" + business + "'" ;
        List<TCfgBusinessDesc> tempVo = TCfgBusinessDesc.find(query).fetch();
        // 如果编号重复，则返回
        if(tempVo.size() > 0){
            if(tempVo.get(0).business != null && !"".equals(tempVo.get(0).business)){
                msg = "2";
                return msg;
            }
        }
        return msg;
    }
    
    /**
     * 保存节点信息与关系
     * @param keyWord
     * @param name 业务名称
     * @param content 业务内容
     * @param title 业务事项
     * @param major 专业
     * @param area 所属板块
     * @param description 业务内容描述
     */
    public @ResponseBody String edit(Long id, String name, String business, String content, String title, 
                    String major,String majorName, String area, String description) {
        
        String msg = "0";
        try {
            TCfgBusinessDesc tCfgBusinessDesc = TCfgBusinessDesc.findById(id);
            // 保存节点信息
            if(!"".equals(name)) {
                tCfgBusinessDesc.name = name;
                tCfgBusinessDesc.content = content;
                tCfgBusinessDesc.title = title;
                tCfgBusinessDesc.area = area;
                tCfgBusinessDesc.major = majorName;
                tCfgBusinessDesc.description = description;
                tCfgBusinessDesc.business = business;
                tCfgBusinessDesc.delFlag = "0";
            }
            tCfgBusinessDesc.save();
            msg = "1";
        } catch (Exception e) {
            msg = "-1";
        }
        return msg;
    }
    
    /**
     * 根据业务ID删除节点信息
     * @param businessId
     */
    public @ResponseBody static String deleteSummaryById(Long businessId) {
        
        String msg = "0";
        try {
            TCfgBusinessDesc tCfgBusinessDesc = TCfgBusinessDesc.findById(businessId);
            tCfgBusinessDesc.delFlag = "1";
            tCfgBusinessDesc.save();
            msg = "1";
        } catch (Exception e) {
            msg = "-1";
        }
        
        return msg;
    }
    
    
    /**
     * 根据节点名称查询与该节点有关系的所有节点
     * @param keyword
     */
    @SuppressWarnings("unused")
    public static Map<String, Object> queryNodeList(String keyword) {
        
        /*Map<String, Object> map = queryNodeList(keyWord);
        List<TempNode> nodes = (List<TempNode>) map.get("nodes");
        List<TempLink> links = (List<TempLink>) map.get("links");
        List<TempCategory> categoryList = (List<TempCategory>) map.get("categoryList");*/
        
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

        Set<String> _id_set = new HashSet<String>();

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
                    node.id = _busi.id;
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
                node.id = _busi.id;
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
            link.id = _busi.id;
            if(!linkSet.contains(link.source+"-"+link.target)) {
                linkList.add(link);
                linkSet.add(link.source+"-"+link.target);
            }

            i++;

            if(!_busi.relation.equalsIgnoreCase("引用")) {
                findNext(leaderSet, nodeSet, linkSet, categorySet, nodeList, linkList, categoryList, _busi.post_business_id, keyword, node.x, node.y, _x_d, _y_d, xx);
            }
        }
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("nodes", nodeList);
        map.put("links", linkList);
        map.put("categories", categoryList);

        return(map);
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
                    node.id = _busi.id;
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
                    node.id = _busi.id;
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
                node = new TempNode();
                node.id = _busi.id;
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
                link.id = _busi.id;
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
}
