package controllers;

import java.util.List;

import org.springframework.web.bind.annotation.ResponseBody;

import models.TCfgDict;
import models.TCfgUser;
import play.mvc.Before;
import play.mvc.Controller;
import play.mvc.With;

/*@Check("admin")
@With(Secure.class)*/
public class Dicts extends Controller {
    
    /*@Before
    public static void setConnectedUser() {
        if(Security.isConnected()) {
            TCfgUser user = TCfgUser.find("byLoginName", Security.connected()).first();
            renderArgs.put("user", user.fullname);
        }
    }*/
    
    /**
     * 跳转到基础数据列表页面
     * @param id 
     */
    public static void list(int startPosition, String type, String description) {
        
        String user = Security.connected();
        // 总数
        int totalReport = TCfgDict.findAll().size();
        String query=" 1=1 ";
        if(type !=null && !"".equals(type)){
            query += " AND type ='" + type + "'" ;
        }
        if(description !=null && !"".equals(description)){
            query += " AND description ='" + description + "'" ;
        }
        query += " AND delFlag = 0 ORDER BY ID" ;
        List<TCfgDict> list =TCfgDict.find(query).from(startPosition*10).fetch(10);
        render(user, startPosition, totalReport, list, type, description);
        
    }
    
    /**
     * 分页方法：上一页
     * @param startPosition 页码
     * @param business 编号
     * @param name 名称
     * @param content 内容
     */
    @SuppressWarnings("unused")
    public static void previousPage(int startPosition, String type, String description) {  
        int totalUpload = TCfgDict.findAll().size()/10;  
        if(startPosition == 0) {  
            startPosition = startPosition;
        } else {  
            startPosition = startPosition - 1;
        }  
        list(startPosition, type, description);
    }  

    /**
     * 分页方法：下一页
     * @param startPosition 页码
     * @param business 编号
     * @param name 名称
     * @param content 内容
     */
    public static void nextPage(int startPosition, String type, String description) {  
        int totalUpload = TCfgDict.findAll().size();  
        if(startPosition >= totalUpload/10) {
            startPosition = startPosition;
        } else {  
            startPosition = startPosition + 1;
        }  
        list(startPosition, type, description);
    }
    
    /**
     * 跳转到新增/修改页面页面
     */
    public static void form(Long id, String type, String description) {
        
        TCfgDict tCfgDict = new TCfgDict();
        // 修改
        if(id != null && !"".equals(id)){
            // 数据字典
            tCfgDict = TCfgDict.findById(id);
            render(tCfgDict);
        } else { // 新增
            tCfgDict.type = type;
            tCfgDict.description = description;
        }
        render(tCfgDict);
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
     * 根据ID删除业务基础数据
     * @param businessId
     */
    public @ResponseBody static String deleteDictById(Long dictId) {
        
        String msg = "0";
        try {
            if(dictId != null && !"".equals(dictId)){
                TCfgDict tCfgDict = TCfgDict.findById(dictId);
                tCfgDict.delFlag = "1";
                tCfgDict.save();
                msg = "1";
            }
        } catch (Exception e) {
            msg = "-1";
        }
        return msg;
    }

}