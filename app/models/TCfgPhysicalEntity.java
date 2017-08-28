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
@Table(name="t_cfg_physical_entity")
@Entity
public class TCfgPhysicalEntity  extends Model{

    public String bus_attr_code; // 业务属性编号
    
    public String bus_sys_src; // 来源系统
    
    public String bus_data_type; // 数据类型（结构化/非结构化）
    
    public String bus_table_name_en; // 数据库表名（英文）
    
    public String bus_table_name_cn; // 数据库表名（中文）
    
    public String bus_colnum_name; // 数据项名称（英文）
    
    public String bus_if_onehand; // 是否一手业务数据
    
    public String breaks; // 备注
    
    public String delFlag; // 删除标识
    
}
