package models;

import net.sf.oval.constraint.MaxLength;
import play.data.validation.MaxSize;
import play.data.validation.Required;
import play.data.validation.Unique;
import play.db.jpa.Model;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by humin on 01/06/2017.
 */
@Table(name="t_cfg_business_data")
@Entity
public class TCfgBusinessData  extends Model{

    public String bus_area; // 业务框架 
    
    public String bus_name; // 业务名称
    
    public String bus_content; // 业务内容
    
    public String bus_code; // 业务编号
    
    public String bus_des; // 业务内容描述
    
    public String bus_obj_code; // 业务对象实体编号
    
    public String bus_obj_name; // 业务对象实体名称
    
    public String bus_attr_name; // 数据项
    
    public String bus_attr_code; // 业务属性编号
    
    public String bus_sys_src; // 来源系统
    
    public String bus_data_struct; // 数据类型（结构化/非结构化）
    
    public String bus_table_name; // 数据库表名（英文）
    
    public String bus_table_zhname; // 数据库表名（中文）
    
    public String bus_col_name; // 数据项名称（英文）
    
    public String bus_data_type; // 数据项类型
    
    public String bus_data_length; // 数据项长度
    
    public String bus_if_onehand; // 是否一手数据
    
    public String del_flag; // 删除标识
    
}
