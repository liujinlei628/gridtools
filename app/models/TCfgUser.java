package models;
 
import javax.persistence.Entity;
import javax.persistence.Table;

import play.data.validation.Email;
import play.data.validation.Required;
import play.db.jpa.Model;
 
@Entity
@Table(name="t_cfg_user")
public class TCfgUser extends Model {

    @Email
    @Required
    public String loginName; // 登陆名
    
    @Required
    public String password; // 密码
    
    public String fullname; // 用户名
    
    public boolean isAdmin; // 是否管理员
    
    public TCfgUser(String loginName, String password, String fullname) {
        this.loginName = loginName;
        this.password = password;
        this.fullname = fullname;
    }
    
    public static TCfgUser connect(String loginName, String password) {
        return find("byLoginNameAndPassword", loginName, password).first();
    }
    
    public String toString() {
        return loginName;
    }
 
}