package controllers;

import java.util.List;

import javax.persistence.Query;

import org.springframework.web.bind.annotation.ResponseBody;

import models.TCfgDict;
import models.TCfgUser;
import play.Logger;
import play.db.jpa.JPA;
import play.mvc.Before;
import play.mvc.Controller;
import play.mvc.With;

public class Users extends Controller {
    
    
    /**
     * 跳转到基础数据列表页面
     * @param id 
     */
    public static void list(int startPosition, String loginName, String fullname) {
        
        /*Query query = JPA.em().createQuery("select type, count(id) AS con from TCfgDict GROUP BY type");
        List<Object[]> list = query.getResultList();
        render(list);*/
        // 用户总数
        int totalReport = TCfgUser.findAll().size();
        String query=" 1=1 ";
        
        if(loginName !=null && !"".equals(loginName)){
            query += " AND loginName like '%" + loginName + "%'" ;
        }
        if(fullname !=null && !"".equals(fullname)){
            query += " AND fullname like '%" + fullname + "%'" ;
        }
        
        query += " AND delFlag = '0' ORDER BY ID" ;
        List<TCfgUser> list =TCfgUser.find(query).from(startPosition*10).fetch(10);
        
        // 数据字典集合
        String queryDict=" 1=1 ";
        queryDict += " AND delFlag = 0 " ;
        Logger.info(queryDict);
        List<TCfgDict> dictList = TCfgDict.find(queryDict).fetch();
        
        render(startPosition, totalReport, list, dictList);
    }
    
    /**
     * 分页方法：上一页
     * @param startPosition 页码
     * @param business 编号
     * @param name 名称
     * @param content 内容
     */
    @SuppressWarnings("unused")
    public static void previousPage(int startPosition, String loginName, String fullname) {  
        int totalUpload = TCfgDict.findAll().size()/10;  
        if(startPosition == 0) {  
            startPosition = startPosition;
        } else {  
            startPosition = startPosition - 1;
        }  
        list(startPosition, loginName, fullname);
    }  

    /**
     * 分页方法：下一页
     * @param startPosition 页码
     * @param business 编号
     * @param name 名称
     * @param content 内容
     */
    public static void nextPage(int startPosition, String loginName, String fullname) {  
        int totalUpload = TCfgDict.findAll().size();  
        if(startPosition >= totalUpload/10) {
            startPosition = startPosition;
        } else {  
            startPosition = startPosition + 1;
        }  
        list(startPosition, loginName, fullname);
    }
    
    /**
     * 跳转到新增/修改页面页面
     */
    public static void form(Long id) {
        
        TCfgUser tCfgUser = null;
        // 修改
        if(id != null && !"".equals(id)){
            // 数据字典
            tCfgUser = TCfgUser.findById(id);
            render(tCfgUser);
        } 
        render(tCfgUser);
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
    public @ResponseBody static String deleteUserById(Long userId) {
        
        String msg = "0";
        try {
            if(userId != null && !"".equals(userId)){
                TCfgUser tCfgUser = TCfgUser.findById(userId);
                tCfgUser.delFlag = "1";
                tCfgUser.save();
                msg = "1";
            }
        } catch (Exception e) {
            msg = "-1";
        }
        return msg;
    }

}