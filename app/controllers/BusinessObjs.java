package controllers;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import models.TCfgBusinessDesc;
import models.TCfgBusinessObj;
import models.TCfgDataLife;
import models.TCfgDict;
import models.TCfgLogicalEntity;
import models.TCfgPhysicalEntity;
import models.TempBusObj;
import play.Logger;

/**
 * Created by humin on 03/06/2017.
 */
@CRUD.For(TCfgBusinessObj.class)
public class BusinessObjs extends CRUD {

    /**
     * 跳转到信息查看页面
     * @param id 
     */
    public static void list(int startPosition, String major, String business, String name, String content) {
        
        String query=" 1=1 ";
        if(major !=null && !"".equals(major)){
            query += " AND major ='" + major + "'" ;
        }
        
        if(business !=null && !"".equals(business)){
            query += " AND business ='" + business + "'" ;
        }
        
        if(name !=null && !"".equals(name)){
            query += " AND name like '%" + name + "%'" ;
        }
        
        if(content !=null && !"".equals(content)){
            query += " AND content like '%" + content + "%'" ;
        }
        query += " ORDER BY ID" ;
        
        Logger.info(query);
        
        List<TCfgBusinessDesc> list =TCfgBusinessDesc.find(query).from(startPosition*10).fetch(10);
        
        // 总数
        int totalReport = list.size();
        
        // 数据字典集合
        String queryDict=" 1=1 ";
        queryDict += " AND delFlag = 0 " ;
        Logger.info(queryDict);
        List<TCfgDict> dictList = TCfgDict.find(queryDict).fetch();
        
        render(startPosition, totalReport, list, dictList, major, business, name, content);
        
    }
    
    /**
     * 分页方法：上一页
     * @param startPosition 页码
     * @param business 编号
     * @param name 名称
     * @param content 内容
     */
    @SuppressWarnings("unused")
    public static void previousPage(int startPosition, int totalReport, String major, String business, String name, String content) {  
        int totalUpload = totalReport/10;  
        if(startPosition == 0) {  
            startPosition = startPosition;
        } else {  
            startPosition = startPosition - 1;
        }  
        list(startPosition, major, business, name, content);
    }  

    /**
     * 分页方法：下一页
     * @param startPosition 页码
     * @param business 编号
     * @param name 名称
     * @param content 内容
     */
    public static void nextPage(int startPosition, int totalReport, String major, String business, String name, String content) {  
        
        int totalUpload = totalReport;
        if(startPosition >= totalUpload/10) {
            startPosition = startPosition;
        } else {  
            startPosition = startPosition + 1;
        }  
        list(startPosition, major, business, name, content);
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
     * 跳转到业务对象页面<br/>
     * 根据业务内容描述查询该业务内容描述下的业务对象实体
     * @param busContent 业务内容描述
     */
    public static void toBusObj(String busContent) {
        
        String query=" 1=1 ";
        if(busContent !=null && !"".equals(busContent)){
            query += " AND bus_content ='" + busContent + "'" ;
        }
        query += " ORDER BY ID" ;
        Logger.info(query);
        // 获取业务对象集合
        List<TCfgBusinessObj> list =TCfgBusinessObj.find(query).fetch();
        List<TempBusObj> tempBusObjList = new ArrayList<TempBusObj>();
        // 给VO对象赋值
        if(list.size() > 0){
            for(int i = 0 ; i < list.size() ; i ++){
                // 定义业务对象VO
                TempBusObj tempBusObj = new TempBusObj();
                // 存入VO对象
                tempBusObj.tCfgBusinessObj = list.get(i);
                // 获取当前业务对象下的所有逻辑实体对象
                List<TCfgLogicalEntity> tempLogicaEntityList = new ArrayList<TCfgLogicalEntity>();
                if(tempBusObj.tCfgBusinessObj.bus_obj_code != null){
                    tempLogicaEntityList = TCfgLogicalEntity.find("bus_obj_code=?", tempBusObj.tCfgBusinessObj.bus_obj_code).fetch();
                }
                // 存入VO对象
                tempBusObj.tCfgLogicalEntitieList = tempLogicaEntityList;
                // 获取每一个逻辑实体下的物理实体对象
                List<TCfgPhysicalEntity> tCfgPhysicalEntitieList = new ArrayList<TCfgPhysicalEntity>();
                for(int j = 0 ; j < tempLogicaEntityList.size(); j ++){
                    TCfgLogicalEntity logicalEntity = tempLogicaEntityList.get(j);
                    if(!"".equals(logicalEntity.bus_attr_code) && logicalEntity.bus_attr_code != null){
                        List<TCfgPhysicalEntity> tCfgPhysicalEntities = TCfgPhysicalEntity.find("bus_attr_code=?", logicalEntity.bus_attr_code).fetch();
                        if(tCfgPhysicalEntities.size() > 0){
                            for(TCfgPhysicalEntity physicalEntity : tCfgPhysicalEntities){
                                tCfgPhysicalEntitieList.add(physicalEntity);
                            }
                        }
                    }
                }
                // 存入VO对象
                tempBusObj.tCfgPhysicalEntitieList = tCfgPhysicalEntitieList;
                // VO集合
                tempBusObjList.add(tempBusObj);
            }
        }
        render(busContent, list, tempBusObjList);
    }
    
    /**
     * 跳转到业务对象页面<br/>
     * 根据业务内容描述查询该业务内容描述下的业务对象实体
     * @param busContent 业务内容描述
     */
    public static void toBusObj2(String busContent) {
        
        String query=" 1=1 ";
        if(busContent !=null && !"".equals(busContent)){
            query += " AND bus_content ='" + busContent + "'" ;
        }
        query += " ORDER BY ID" ;
        Logger.info(query);
        // 获取业务对象集合
        List<TCfgBusinessObj> list =TCfgBusinessObj.find(query).fetch();
        List<TempBusObj> tempBusObjList = new ArrayList<TempBusObj>();
        // 给VO对象赋值
        if(list.size() > 0){
            for(int i = 0 ; i < list.size() ; i ++){
                // 定义业务对象VO
                TempBusObj tempBusObj = new TempBusObj();
                // 存入VO对象
                tempBusObj.tCfgBusinessObj = list.get(i);
                // 获取当前业务对象下的所有逻辑实体对象
                List<TCfgLogicalEntity> tempLogicaEntityList = new ArrayList<TCfgLogicalEntity>();
                if(tempBusObj.tCfgBusinessObj.bus_obj_code != null){
                    tempLogicaEntityList = TCfgLogicalEntity.find("bus_obj_code=?", tempBusObj.tCfgBusinessObj.bus_obj_code).fetch();
                }
                // 存入VO对象
                tempBusObj.tCfgLogicalEntitieList = tempLogicaEntityList;
                // 获取每一个逻辑实体下的物理实体对象
                List<TCfgPhysicalEntity> tCfgPhysicalEntitieList = new ArrayList<TCfgPhysicalEntity>();
                for(int j = 0 ; j < tempLogicaEntityList.size(); j ++){
                    TCfgLogicalEntity logicalEntity = tempLogicaEntityList.get(j);
                    if(!"".equals(logicalEntity.bus_attr_code) && logicalEntity.bus_attr_code != null){
                        List<TCfgPhysicalEntity> tCfgPhysicalEntities = TCfgPhysicalEntity.find("bus_attr_code=?", logicalEntity.bus_attr_code).fetch();
                        if(tCfgPhysicalEntities.size() > 0){
                            for(TCfgPhysicalEntity physicalEntity : tCfgPhysicalEntities){
                                tCfgPhysicalEntitieList.add(physicalEntity);
                            }
                        }
                    }
                }
                // 存入VO对象
                tempBusObj.tCfgPhysicalEntitieList = tCfgPhysicalEntitieList;
                // VO集合
                tempBusObjList.add(tempBusObj);
            }
        }
        
        render(busContent, list, tempBusObjList);
    }
    
    /**
     * 根据业务属性编号查询该业务属性下的所有的物理实体
     * @param busAttrCode 业务属性编号
     * @return List<TCfgPhysicalEntity>
     */
    public @ResponseBody JsonObject queryPhyEnByBusAttr(String busAttrCode){
        
        List<TCfgPhysicalEntity> tCfgPhysicalEntitieList = new ArrayList<TCfgPhysicalEntity>();
        if(busAttrCode != null && !"".equals(busAttrCode)){
            tCfgPhysicalEntitieList = TCfgPhysicalEntity.find("bus_attr_code=?", busAttrCode).fetch();
        }
        
        JsonObject _output = new JsonObject();
        Gson gson = new Gson();
        _output.add("list", gson.toJsonTree(tCfgPhysicalEntitieList));
        
        return _output;
    }
    
    /**
     * 跳转到业务数据生命周期页面
     * @param busAttrCode 业务属性编号
     */
    public static void toBusDataLife(String busAttrName, String busAttrCode){
        
        String queryData=" 1=1 ";
        if(busAttrCode !=null && !"".equals(busAttrCode)){
            queryData += " AND bus_attr_code ='" + busAttrCode + "'" ;
        }
        queryData += " AND delFlag = '0' ORDER BY ID" ;
        Logger.info(queryData);
        // 数据生命周
        TCfgDataLife tCfgDataLife = TCfgDataLife.find(queryData).first();
        List<String> strList = new ArrayList<String>();
        List<TCfgLogicalEntity> list = new ArrayList<TCfgLogicalEntity>();
        if(tCfgDataLife == null){
            tCfgDataLife = new TCfgDataLife();
            String query=" 1=1 ";
            if(busAttrName !=null && !"".equals(busAttrName)){
                query += " AND bus_attr_name ='" + busAttrName + "'" ;
            }
            query += " GROUP BY bus_content ORDER BY ID" ;
            Logger.info(query);
            // 获取业务逻辑实体集合
            list =TCfgLogicalEntity.find(query).fetch();
            
            render(busAttrName, busAttrCode, list, tCfgDataLife, strList);
        } else {
            if(tCfgDataLife.app_nodes.length() > 0){
                String strs[] = tCfgDataLife.app_nodes.split(",");
                for(String str : strs){
                    strList.add(str);
                }
            }
            saveDataLife(busAttrName, busAttrCode, tCfgDataLife.start_node, tCfgDataLife.end_node);
        }
        render();
    }
    
    /**
     * 保存业务生命周期数据
     * @param busAttrName
     * @param busAttrCode
     * @param start_node
     * @param end_node
     */
    public static void saveDataLife(String busAttrName,String busAttrCode, String start_node, String end_node){
        
        // 如果有已存在的生命周期数据，则先删除
        if(busAttrCode != null && !"".equals(busAttrCode)){
            TCfgDataLife vo = TCfgDataLife.find("bus_attr_code=?", busAttrCode).first();
            if(vo != null){
                vo.delete();
            }
        }
        // 根据业务属性名称查询业务属性集合
        String query=" 1=1 ";
        if(busAttrName !=null && !"".equals(busAttrName)){
            query += " AND bus_attr_name ='" + busAttrName + "'" ;
        }
        query += " GROUP BY bus_content ORDER BY ID" ;
        Logger.info(query);
        // 获取业务逻辑实体集合
        List<TCfgLogicalEntity> list =TCfgLogicalEntity.find(query).fetch();
        
        for(int i = list.size() - 1; i >= 0; i--){
            if(list.get(i).bus_content.equals(start_node)){
                list.remove(i);
            }
            if(list.get(i).bus_content.equals(end_node)){
                list.remove(i);
            }
        }
        
        String tempStr = "";
        for(TCfgLogicalEntity vo : list){
            tempStr += vo.bus_content + ",";
        }
        
        List<String> strList = new ArrayList<String>();
        if(tempStr.length() > 0){
            String strs[] = tempStr.split(",");
            for(String str : strs){
                strList.add(str);
            }
        }
        // 保存生命周期数据
        TCfgDataLife tCfgDataLife = new TCfgDataLife();
        tCfgDataLife.bus_attr_code = busAttrCode;
        tCfgDataLife.start_node = start_node;
        tCfgDataLife.end_node = end_node;
        tCfgDataLife.app_nodes = tempStr;
        tCfgDataLife.delFlag = "0";
        tCfgDataLife.save();
        
        List<TCfgBusinessObj> startObjList = TCfgBusinessObj.find("bus_content=?", start_node).fetch();
        List<TCfgBusinessObj> endObjList = TCfgBusinessObj.find("bus_content=?", end_node).fetch();
        List<TCfgBusinessObj> appObjList = new ArrayList<TCfgBusinessObj>();
        
        for(String busContent : strList){
            List<TCfgBusinessObj> objList = TCfgBusinessObj.find("bus_content=?", busContent).fetch();
            if(objList.size() > 0){
                for(TCfgBusinessObj obj : objList){
                    appObjList.add(obj);
                }
            }
        }
        
        render(busAttrName, busAttrCode, tCfgDataLife, strList, startObjList, endObjList, appObjList);
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
    
}
