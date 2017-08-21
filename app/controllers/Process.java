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
import models.TCfgBusinessProcess;
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

public class Process extends Controller {
    
    /**
     * 跳转到业务流程列表页面
     * @param startPosition 页码
     */
    public static void list(int startPosition) {
        
        // 总数
        int totalReport = TCfgBusinessProcess.findAll().size();
        String query=" 1=1 ";
        
        query += " AND delFlag = 0 ORDER BY ID" ;
        List<TCfgBusinessProcess> list = TCfgBusinessProcess.find(query).from(startPosition*10).fetch(10);
        render(startPosition, totalReport, list);
    }
    
    /**
     * 分页方法：上一页
     * @param startPosition 页码
     * @param business 编号
     * @param name 名称
     * @param content 内容
     */
    @SuppressWarnings("unused")
    public static void previousPage(int startPosition) {  
        int totalUpload = TCfgBusinessProcess.findAll().size()/10;  
        if(startPosition == 0) {  
            startPosition = startPosition;
        } else {  
            startPosition = startPosition - 1;
        }  
        list(startPosition);
    }  

    /**
     * 分页方法：下一页
     * @param startPosition 页码
     * @param business 编号
     * @param name 名称
     * @param content 内容
     */
    public static void nextPage(int startPosition) {  
        int totalUpload = TCfgBusinessProcess.findAll().size();  
        if(startPosition >= totalUpload/10) {
            startPosition = startPosition;
        } else {  
            startPosition = startPosition + 1;
        }  
        list(startPosition);
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
    
}