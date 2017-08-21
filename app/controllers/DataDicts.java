package controllers;

import java.io.File;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.jeecgframework.poi.excel.entity.ImportParams;
import org.springframework.web.bind.annotation.ResponseBody;

import controllers.utils.ExcelImportUtil;
import models.TCfgBusiness;
import models.TCfgDataDict;
import models.TCfgDict;
import models.TCfgTemp;
import models.VCfgDataCategory;
import models.VCfgDataFrom;
import models.VCfgDataMain;
import models.VCfgDataStructure;
import models.VCfgGenerateMode;
import play.Logger;
import play.mvc.Controller;

public class DataDicts extends Controller {
    
    /**
     * 跳转到业务数据列表页面
     * @param startPosition 页码
     * @param data_mainid 序号1
     * @param busi_des 业务事项
     * @param data_item 数据项
     * @param sys_name 系统名称
     */
    public static void list(int startPosition, String data_mainid, String busi_des, String data_item, String sys_name) {
        
        String user = Security.connected();
        // 总数
        int totalReport = TCfgDataDict.findAll().size();
        String query=" 1=1 ";
        
        if(data_mainid !=null && !"".equals(data_mainid)){
            query += " AND data_mainid ='" + data_mainid + "'" ;
        }
        if(busi_des !=null && !"".equals(busi_des)){
            query += " AND name like '%" + busi_des + "%'" ;
        }
        
        if(data_item !=null && !"".equals(data_item)){
            query += " AND data_item like '%" + data_item + "%'" ;
        }
        if(sys_name !=null && !"".equals(sys_name)){
            query += " AND sys_name like '%" + sys_name + "%'" ;
        }
        
        query += " AND delFlag = 0 ORDER BY ID" ;
        List<TCfgDataDict> list =TCfgDataDict.find(query).from(startPosition*10).fetch(10);
        render(user, startPosition, totalReport, list, data_mainid, busi_des, data_item, sys_name);
    }
    
    /**
     * 分页方法：上一页
     * @param startPosition 页码
     * @param business 编号
     * @param name 名称
     * @param content 内容
     */
    @SuppressWarnings("unused")
    public static void previousPage(int startPosition, String data_mainid, String busi_des, String data_item, String sys_name) {  
        int totalUpload = TCfgDataDict.findAll().size()/10;  
        if(startPosition == 0) {  
            startPosition = startPosition;
        } else {  
            startPosition = startPosition - 1;
        }  
        list(startPosition, data_mainid, busi_des, data_item, sys_name);
    }  

    /**
     * 分页方法：下一页
     * @param startPosition 页码
     * @param business 编号
     * @param name 名称
     * @param content 内容
     */
    public static void nextPage(int startPosition, String data_mainid, String busi_des, String data_item, String sys_name) {  
        int totalUpload = TCfgDataDict.findAll().size();  
        if(startPosition >= totalUpload/10) {
            startPosition = startPosition;
        } else {  
            startPosition = startPosition + 1;
        }  
        list(startPosition, data_mainid, busi_des, data_item, sys_name);
    }
    
    /**
     * 跳转到新增/修改页面页面
     */
    public static void form(Long id) {
        
        TCfgDataDict tCfgDataDict = new TCfgDataDict();
        // 修改
        if(id != null && !"".equals(id)){
            // 数据字典
            tCfgDataDict = TCfgDict.findById(id);
            render(tCfgDataDict);
        } 
        render(tCfgDataDict);
    }
    
    /**
     * 跳转到详情页面
     */
    public static void detail(Long id) {
        
        TCfgDataDict tCfgDataDict = new TCfgDataDict();
        // 修改
        if(id != null && !"".equals(id)){
            // 业务数据
            tCfgDataDict = TCfgDataDict.findById(id);
            render(tCfgDataDict);
        }
        render(tCfgDataDict);
    }
    
    /**
     * 保存节点信息与关系
     * @param name 业务名称
     * @param content 业务内容
     * @param title 业务事项
     * @param major 专业
     * @param area 所属板块
     * @param description 业务内容描述
     */
    public @ResponseBody String save(Long id, String value, String label, String type, String description, String sort, String remarks) {
        
        String msg = "0";
        try {
            TCfgDict tCfgDict = new TCfgDict();
            if(id != null && !"".equals(id)){
                tCfgDict = TCfgDict.findById(id);
            }
            // 保存节点信息
            if(!"".equals(type) && !"".equals(type)) {
                tCfgDict.value = value;
                tCfgDict.label = label;
                tCfgDict.type = type;
                tCfgDict.description = description;
                tCfgDict.sort = sort;
                tCfgDict.remarks = remarks;
                tCfgDict.delFlag = "0";
            }
            tCfgDict.save();
            msg = "1";
        } catch (Exception e) {
            msg = "-1";
        }
        return msg;
    }
    
    /**
     * 根据ID删除业务数据
     * @param businessId
     */
    public @ResponseBody static String deleteDataDictById(Long dictId) {
        
        String msg = "0";
        try {
            if(dictId != null && !"".equals(dictId)){
                TCfgDataDict tCfgDataDict = TCfgDataDict.findById(dictId);
                tCfgDataDict.delFlag = "1";
                tCfgDataDict.save();
                msg = "1";
            }
        } catch (Exception e) {
            msg = "-1";
        }
        return msg;
    }
    
    
    /**
     * 跳转到数据架构页面
     */
    public static void dataArchitecture() {
        
        // 数据字典集合
        String query=" 1=1 ";
        query += " AND delFlag = 0 " ;
        Logger.info(query);
        List<TCfgDict> dictList = TCfgDict.find(query).fetch();
        
        render(dictList);
    }
    
    /**
     * 跳转到业务数据展示页面
     */
    public static void showBusData(String majorName) {
        render(majorName);
    }
    
    /**
     * 跳转到业务数据展示页面2
     */
    public static void showBusData2() {
        render();
    }
    
    /**
     * 生成方式图表数据
     * @param majorName 专业
     * @return modes
     */
    public @ResponseBody String getBusData2(){
        
        // 生成方式
        String query = " 1=1 ";
        Logger.info(query);
        // 数据集合
        List<TCfgTemp> vTempList = TCfgTemp.find(query).fetch();
        // 类型集合
        query += " GROUP BY source ";
        List<TCfgTemp> vTempGroup = TCfgTemp.find(query).fetch();
        
        String node = "";
        String link = "";
        String type = "";
        String temps = "{\"nodes\":[";
        
        if(vTempGroup.size() > 0){
            for (int i = 0; i < vTempGroup.size(); i++) {
                node += "{\"name\":" + "\"" + vTempGroup.get(i).source + "\",";
                node += "\"label\":" + "\"" + vTempGroup.get(i).source + ":" + vTempGroup.get(i).con + "\"" +  "},";
            }
            if(node.length() > 0){
                node = node.substring(0, node.length() - 1);
                temps += node + "],\"names\":[";
            }
            for (int i = 0; i < vTempGroup.size(); i++) {
                type += "\"" + vTempGroup.get(i).source + "\",";
            }
        }
        
        if(type.length() > 0){
            type = type.substring(0, type.length() - 1);
            temps += type + "],\"links\":[";
        }
        
        if(vTempList.size() > 0){
            for (int i = 0; i < vTempList.size(); i++) {
                link += "{\"source\":" + "\"" + vTempList.get(i).source + "\"" + ","; 
                link += "\"target\":" + "\"" + vTempList.get(i).target + "\"" + "," + "\"weight\": 0.9, \"name\": \"属于\"" + "},"; 
            }
            
            for (int i = 0; i < vTempList.size(); i++) {
                link += "{\"target\":" + "\"" + vTempList.get(i).target + "\"" + ","; 
                link += "\"source\":" + "\"" + vTempList.get(i).source + "\"" + "," + "\"weight\": 1" + "},"; 
            }
        }
        
        if(link.length() > 0){
            link = link.substring(0, link.length() - 1);
        }
        
        temps = temps + link + "]}";
        
        Logger.info(temps);
        
        return temps;
    }
    
    /**
     * 生成方式图表数据
     * @param majorName 专业
     * @return modes
     */
    public @ResponseBody String getModesData(String majorName){
        
        // 生成方式
        String query = " 1=1 ";
        if(majorName !=null && !"".equals(majorName)){
            query += " AND prof_name = '" + majorName + "'" ;
        }
        Logger.info(query);
        List<VCfgGenerateMode> vModeList = VCfgGenerateMode.find(query).fetch();
        
        String data = "";
        String type = "";
        String modes = "{\"datas\":[";
        
        if(vModeList.size() > 0){
            for (int i = 0; i < vModeList.size(); i++) {
                data += "{\"value\":" + vModeList.get(i).con + ",";
                data += "\"name\":" + "\"" + vModeList.get(i).prod_type + "\"" + "},";
            }
            if(data.length() > 0){
                data = data.substring(0, data.length() - 1);
                modes += data + "],\"names\":[";
            }
            for (int i = 0; i < vModeList.size(); i++) {
                type += "\"" + vModeList.get(i).prod_type + "\",";
            }
            
            if(type.length() > 0){
                type = type.substring(0, type.length() - 1);
            }
        }
        modes = modes + type + "]}";
        
        Logger.info(modes);
        
        return modes;
    }
    
    /**
     * 系统来源图表数据
     * @param majorName 专业
     * @return sysModes
     */
    public @ResponseBody String getSrcSysData(String majorName){
        
        // 来源系统
        String query = " 1=1 ";
        if(majorName !=null && !"".equals(majorName)){
            query += " AND prof_name = '" + majorName + "'" ;
        }
        Logger.info(query);
        List<VCfgDataFrom> vSysList = VCfgDataFrom.find(query).fetch();
        
        String sysData = "";
        String sysType = "";
        String sysModes = "{\"datas\":[";
        
        if(vSysList.size() > 0){
            for (int i = 0; i < vSysList.size(); i++) {
                sysData += "{\"value\":" + vSysList.get(i).con + ",";
                sysData += "\"name\":" + "\"" + vSysList.get(i).src_sys + "\"" + "},";
            }
            if(sysData.length() > 0){
                sysData = sysData.substring(0, sysData.length() - 1);
                sysModes += sysData + "],\"names\":[";
            }
            for (int i = 0; i < vSysList.size(); i++) {
                sysType += "\"" + vSysList.get(i).src_sys + "\",";
            }
            
            if(sysType.length() > 0){
                sysType = sysType.substring(0, sysType.length() - 1);
            }
        }
        sysModes = sysModes + sysType + "]}";
        
        return sysModes;
    }
    
    /**
     * 数据分类图表数据
     * @param majorName 专业
     * @return sysModes
     */
    public @ResponseBody String getCategoryData(String majorName){
        
        // 是否上线数据
        String cateQuery = " 1=1 ";
        if(majorName !=null && !"".equals(majorName)){
            cateQuery += " AND prof_name = '" + majorName + "'" ;
        }
        Logger.info(cateQuery);
        List<VCfgDataCategory> vCateList = VCfgDataCategory.find(cateQuery).fetch();
        
        cateQuery += " GROUP BY type ";
        Logger.info(cateQuery);
        List<VCfgDataCategory> vCateGroup = VCfgDataCategory.find(cateQuery).fetch();
        
        // 是否结构化数据
        String struQuery = " 1=1 ";
        if(majorName !=null && !"".equals(majorName)){
            struQuery += " AND prof_name = '" + majorName + "'" ;
        }
        Logger.info(struQuery);
        List<VCfgDataStructure> vStruList = VCfgDataStructure.find(struQuery).fetch();
        
        struQuery += " GROUP BY type ";
        Logger.info(struQuery);
        List<VCfgDataStructure> vStruGroup = VCfgDataStructure.find(struQuery).fetch();
        
        // 是否主数据
        String mainQuery = " 1=1 ";
        if(majorName !=null && !"".equals(majorName)){
            mainQuery += " AND prof_name = '" + majorName + "'" ;
        }
        Logger.info(mainQuery);
        List<VCfgDataMain> vMainList = VCfgDataMain.find(mainQuery).fetch();
        
        mainQuery += " GROUP BY type ";
        Logger.info(mainQuery);
        List<VCfgDataMain> vMainGroup = VCfgDataMain.find(mainQuery).fetch();
        
        String datax = "";
        String datay = "";
        String type = "";
        String cates = "{\"datax\":[";
        
        if(vCateList.size() > 0){
            for (int i = 0; i < vCateList.size(); i++) {
                if(vCateList.get(i).category.equals("否")){
                    datax += "\"" + vCateList.get(i).con + "\",";
                }
            }
        }
        
        if(vStruList.size() > 0){
            for (int i = 0; i < vStruList.size(); i++) {
                if(vStruList.get(i).category.equals("否")){
                    datax += "\"" + vStruList.get(i).con + "\",";
                }
            }
        }
        
        if(vMainList.size() > 0){
            for (int i = 0; i < vMainList.size(); i++) {
                if(vMainList.get(i).category.equals("否")){
                    datax += "\"" + vMainList.get(i).con + "\",";
                }
            }
        }
        
        if(datax.length() > 0){
            datax = datax.substring(0, datax.length() - 1);
            cates += datax + "],\"datay\":[";
        }
        
        if(vCateList.size() > 0){
            for (int i = 0; i < vCateList.size(); i++) {
                if(vCateList.get(i).category.equals("是")){
                    datay += "\"" + vCateList.get(i).con + "\",";
                }
            }
        }
        
        if(vStruList.size() > 0){
            for (int i = 0; i < vStruList.size(); i++) {
                if(vStruList.get(i).category.equals("是")){
                    datay += "\"" + vStruList.get(i).con + "\",";
                }
            }
        }
        
        if(vMainList.size() > 0){
            for (int i = 0; i < vMainList.size(); i++) {
                if(vMainList.get(i).category.equals("是")){
                    datay += "\"" + vMainList.get(i).con + "\",";
                }
            }
        }
        
        if(datay.length() > 0){
            datay = datay.substring(0, datay.length() - 1);
            cates += datay + "],\"names\":[";
        }
        
        if(vCateGroup.size() > 0){
            if(vCateGroup.size() > 0){
                for (int i = 0; i < vCateGroup.size(); i++) {
                    type += "\"" + vCateGroup.get(i).type + "\",";
                }
            }
        }
        
        if(vStruGroup.size() > 0){
            if(vStruGroup.size() > 0){
                for (int i = 0; i < vStruGroup.size(); i++) {
                    type += "\"" + vStruGroup.get(i).type + "\",";
                }
            }
        }
        
        if(vMainGroup.size() > 0){
            if(vMainGroup.size() > 0){
                for (int i = 0; i < vMainGroup.size(); i++) {
                    type += "\"" + vMainGroup.get(i).type + "\",";
                }
            }
        }
        
        if(type.length() > 0){
            type = type.substring(0, type.length() - 1);
        }
        
        cates = cates + type + "]}";
        Logger.info(cates);
        return cates;
    }
    
    /**
     * 跳转到业务数据导入页面
     */
    public static void toUpload() {
        
        // 数据字典集合
        String query=" 1=1 ";
        query += " AND delFlag = 0 " ;
        Logger.info(query);
        List<TCfgDict> dictList = TCfgDict.find(query).fetch();
        render(dictList);
    }
    
    /**
     * 业务数据excel文件导入
     * @param file
     */
    public static void uploadDataDicts(File file, String prof_name) {
        
        Logger.info("Get file:"+ file);
        
        ImportParams params = new ImportParams();
        // 表格标题行数
        params.setTitleRows(0);
        // 是否需要保存上传的Excel,默认为false
        // params.setNeedSave(true);
        
        List<Map<String, Object>> list = ExcelImportUtil.importExcel(file, Map.class, params);
        
        TCfgDataDict dataDict = null;
        for (Map<String, Object> map : list) {
            
            String mainId = "";
            String _subId = "";
            
            if(map.get("序号1")!=null){
                mainId = map.get("序号1").toString();
            } else {
                Logger.info("Cannot found the mainID.......");
            }
            
            if(map.get("序号2")!=null){
                _subId = map.get("序号2").toString();
            }
            
            Logger.info("Get the MainId:" + mainId);
            
            if(mainId !=null && !"".equals(mainId)){
                dataDict = TCfgDataDict.find("data_mainid = ? And data_subid = ?", mainId, _subId).first();
                if(dataDict == null){
                    dataDict = new TCfgDataDict();
                    dataDict.data_mainid = mainId;
                    dataDict.data_subid =_subId;
                }
                
                if(prof_name != null && !"".equals(prof_name)){
                    dataDict.prof_name = prof_name;
                }
                
                if(map.get("业务事项") != null){
                    dataDict.busi_des = map.get("业务事项").toString();
                }
                
                if(map.get("数据项") != null){
                    dataDict.data_item = map.get("数据项").toString();
                }
                
                if(map.get("是否线上数据") != null){
                    dataDict.if_online = map.get("是否线上数据").toString();
                }
                
                if(map.get("是否结构化数据") != null){
                    dataDict.if_struct = map.get("是否结构化数据").toString();
                }
                
                if(map.get("传输方式") != null){
                    dataDict.trans_type = map.get("传输方式").toString();
                }
                
                if(map.get("来源系统") != null){
                    dataDict.src_sys = map.get("来源系统").toString();
                }
                
                if(map.get("接收系统") != null){
                    dataDict.rec_sys = map.get("接收系统").toString();
                }
                
                if(map.get("是否可做主数据") != null){
                    dataDict.if_maindata = map.get("是否可做主数据").toString();
                }
                
                if(map.get("系统名称") != null){
                    dataDict.sys_name = map.get("系统名称").toString();
                }
                
                if(map.get("系统部署方式") != null){
                    dataDict.deploy_type = map.get("系统部署方式").toString();
                }
                
                if(map.get("数据输入菜单") != null){
                    dataDict.input_menu = map.get("数据输入菜单").toString();
                }
                
                if(map.get("数据库表名") != null){
                    dataDict.table_name = map.get("数据库表名").toString();
                }
                
                if(map.get("表中文名") != null){
                    dataDict.table_zhname = map.get("表中文名").toString();
                }
                
                if(map.get("数据库字段名") != null){
                    dataDict.col_name = map.get("数据库字段名").toString();
                }
                
                if(map.get("字段中文名") != null){
                    dataDict.col_zhname = map.get("字段中文名").toString();
                }
                
                if(map.get("是否一手数据1") != null){
                    dataDict.if_onehand1 = map.get("是否一手数据1").toString();
                }
                
                if(map.get("是否一手数据2") != null){
                    dataDict.if_onehand2 = map.get("是否一手数据2").toString();
                }
                
                if(map.get("生成方式") != null){
                    dataDict.prod_type = map.get("生成方式").toString();
                }
                
                if(map.get("线下数据表名") != null){
                    dataDict.table_zhname = map.get("线下数据表名").toString();
                }
                
                if(map.get("数据标准") != null){
                    dataDict.standard_type = map.get("数据标准").toString();
                }
                
                if(map.get("是否共享数据") != null){
                    dataDict.if_shared = map.get("是否共享数据").toString();
                }
                
                if(map.get("是否共享数据修改") != null){
                    dataDict.if_shared_modify = map.get("是否共享数据修改").toString();
                }
                
                if(map.get("数据录入角色") != null){
                    dataDict.input_oper = map.get("数据录入角色").toString();
                }
                
                if(map.get("数据录入频率") != null){
                    dataDict.input_frequency = map.get("数据录入频率").toString();
                }
                
                if(map.get("数据维护角色") != null){
                    dataDict.maintain_oper = map.get("数据维护角色").toString();
                }
                
                if(map.get("数据维护频率") != null){
                    dataDict.maintain_freq = map.get("数据维护频率").toString();
                }
                
                if(map.get("是否完整") != null){
                    dataDict.if_complete = map.get("是否完整").toString();
                }
                
                if(map.get("是否重复数据") != null){
                    dataDict.if_dup = map.get("是否重复数据").toString();
                }
                
                if(map.get("存在系统") != null){
                    dataDict.exist_sys = map.get("存在系统").toString();
                }
                
                if(map.get("数据量") != null){
                    dataDict.data_quantity = map.get("数据量").toString();
                }
                
                dataDict.delFlag = "0";
                dataDict.save();
            }
        }
    }

}