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
@Table(name="t_cfg_logical_entity")
@Entity
public class TCfgLogicalEntity  extends Model{

    public String bus_obj_code; // 业务对象编号
    
    public String bus_content; // 业务内容描述
    
    public String bus_attr_name; // 业务属性名称
    
    public String bus_attr_code; // 业务属性编号
    
    public String bus_attr_type; // 业务属性类型:0:业务属性；1：操作属性
    
    public String breaks; // 备注
    
    public String delFlag; // 删除标识
    
}
