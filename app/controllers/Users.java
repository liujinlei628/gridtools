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
        
        // 数据字典集合
        String queryDict=" 1=1 ";
        queryDict += " AND delFlag = 0 " ;
        Logger.info(queryDict);
        List<TCfgDict> dictList = TCfgDict.find(queryDict).fetch();
        
        TCfgUser tCfgUser = new TCfgUser("", "", "");
        // 修改
        if(id != null && !"".equals(id)){
            // 数据字典
            tCfgUser = TCfgUser.findById(id);
            render(tCfgUser, dictList);
        } 
        render(tCfgUser, dictList);
    }
    
    /**
     * 跳转到新增/修改页面页面
     */
    public static void toEditUserInfo(Long id) {
        
        // 数据字典集合
        String queryDict=" 1=1 ";
        queryDict += " AND delFlag = 0 " ;
        Logger.info(queryDict);
        List<TCfgDict> dictList = TCfgDict.find(queryDict).fetch();
        
        TCfgUser tCfgUser = new TCfgUser("", "", "");
        // 修改
        if(id != null && !"".equals(id)){
            // 数据字典
            tCfgUser = TCfgUser.findById(id);
            render(tCfgUser, dictList);
        } 
        render(tCfgUser, dictList);
    }
    
    /**
     * 保存用户信息
     * @param loginName 登陆名
     * @param password 密码
     * @param fullname 用户名
     * @param isAdmin 是否管理员
     * @param remarks 备注
     */
    public @ResponseBody String save(Long id, String loginName, String password, String fullname, String isAdmin, String remarks) {
        
        String msg = "0";
        try {
            TCfgUser tCfgUser = new TCfgUser(loginName, password, fullname);
            if(id != null && !"".equals(id)){
                tCfgUser = TCfgUser.findById(id);
            }
            
            // 保存节点信息
            if(!"".equals(loginName) && !"".equals(loginName)) {
                tCfgUser.loginName = loginName;
                tCfgUser.password = password;
                tCfgUser.fullname = fullname;
                if("true".equals(isAdmin)){
                    tCfgUser.isAdmin = true;
                } else {
                    tCfgUser.isAdmin = false;
                }
                tCfgUser.remarks = remarks;
                tCfgUser.delFlag = "0";
            }
            tCfgUser.save();
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