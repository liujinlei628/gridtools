package controllers;
 
import models.*;
 
public class Security extends Secure.Security {
	
    // 验证登陆
    static boolean authenticate(String username, String password) {
        return TCfgUser.connect(username, password) != null;
    }
    
    // 注销事件跳转到首页
    static void onDisconnected() {
        Application.index();
    }
    
    // 登陆事件跳转到基础数据页面
    static void onAuthenticated() {
        Dicts.list(0, "", "");
    }
    
    // 是否管理员
    static boolean check(String profile) {
        if("admin".equals(profile)) {
            return TCfgUser.find("byLoginName", connected()).<TCfgUser>first().isAdmin;
        }
        return false;
    }
}