package controllers;

import java.io.File;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.jeecgframework.poi.excel.ExcelImportUtil;
import org.jeecgframework.poi.excel.entity.ImportParams;
import org.springframework.web.bind.annotation.ResponseBody;

import models.TCfgDataDict;
import models.TCfgDict;
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
    public static void uploadDataDicts(File file, String prof_name, Integer con) {
        
        Logger.info("Get file:"+ file);
        
        ImportParams params = new ImportParams();
        // 表格标题行数
        params.setTitleRows(0);
        // 上传表格需要读取的sheet 数量,默认为1
        params.setSheetNum(con);
        // 是否需要保存上传的Excel,默认为false
        // params.setNeedSave(true);
        
        // 开始时间
        long start = new Date().getTime();
        
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
            
            // 结束时间
            long end = new Date().getTime();
            
            Logger.info("用时：" + (start - end));
        }
    }

}