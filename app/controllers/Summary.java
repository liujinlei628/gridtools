package controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;

import org.springframework.web.bind.annotation.ResponseBody;

import models.TCfgBusiness;
import models.TCfgBusinessDesc;
import models.TCfgDict;
import models.TempCategory;
import models.TempLink;
import models.TempNode;
import play.Logger;
import play.db.jpa.JPA;

/**
 * Created by humin on 03/06/2017.
 */
@CRUD.For(TCfgBusinessDesc.class)
public class Summary extends CRUD {

    /**
     * 查询所有的一级业务节点
     * @param busName
     */
    public static void queryBusNodeList(String busName){
        
        String query=" 1=1 ";
        if(busName !=null && !"".equals(busName)){
            query += "AND name like '%" + busName + "%'" ;
        }
        query +=" GROUP BY name";
        Logger.info(query);
        // 根据业务名称查询
        List<TCfgBusinessDesc> busNodeList = TCfgBusinessDesc.find(query).fetch();
        render(busName, busNodeList);
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
     * 跳转到新增页面
     */
    /*public static void form(Long id) {
        if(id != null && !"".equals(id)) {
            TCfgBusinessDesc businessDesc = TCfgBusinessDesc.findById(id);
            render(businessDesc);
        }
        render();
    }*/
    
    /**
     * 跳转到信息查看页面
     */
    public static void detail(Long id) {
        if(id != null && !"".equals(id)) {
            TCfgBusinessDesc businessDesc = TCfgBusinessDesc.findById(id);
            render(businessDesc);
        }
        render();
    }
    
    /**
     * 跳转到新增业务信息页面
     * @param keyWord
     */
    public static void addOneNode(String keyWord){
        
        Map<String, Object> map = queryNodeList(keyWord);
        List<TempNode> nodes = (List<TempNode>) map.get("nodes");
        List<TempLink> links = (List<TempLink>) map.get("links");
        List<TempCategory> categoryList = (List<TempCategory>) map.get("categoryList");
        
        // 数据字典集合
        List<TCfgDict> dictList = TCfgDict.findAll();
        if(nodes.size() > 0){
            render(keyWord, nodes, links, categoryList, dictList);
        }
        render();
    }
    
    /**
     * 保存节点信息与关系
     * @param id ID
     * @param name 业务名称
     * @param content 业务内容
     * @param title 业务事项
     * @param major 专业
     * @param area 所属板块
     * @param description 业务内容描述
     * @param prevNode 前置节点
     * @param nextNode 后置节点
     */
    public static void save(String keyWord, String name, String content, String title, 
                    String major,String majorName, String area, String description, String prevNode, String nextNode) {
        
        TCfgBusinessDesc tCfgBusinessDesc = new TCfgBusinessDesc();
        // 获取某一个专业总数量
        long majorCount = TCfgBusinessDesc.count("major = ?", majorName);
        if(!"".equals(name)) {
            tCfgBusinessDesc.name = name;
            tCfgBusinessDesc.content = content;
            tCfgBusinessDesc.title = title;
            tCfgBusinessDesc.area = area;
            tCfgBusinessDesc.major = majorName;
            tCfgBusinessDesc.description = description;
            tCfgBusinessDesc.business = (major + "-" + (majorCount + 1));
            tCfgBusinessDesc.delFlag = "0";
        }
        tCfgBusinessDesc.save();
    }
    
    /**
     * 根据业务ID删除节点信息
     * @param businessId
     */
    public @ResponseBody static String deleteSummaryById(String businessId) {
        
        String msg = "0";
        String sql = "UPDATE t_cfg_business_desc SET del_flag = 1 WHERE business = " + businessId;
        int count = JPA.em().createQuery(sql).executeUpdate();
        Logger.info("删除个数:" + count);
        if(count > 0){
            msg = "1";
        } else {
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
