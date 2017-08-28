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
@Table(name="t_cfg_data_life")
@Entity
public class TCfgDataLife extends Model{

    public String bus_attr_code; // 业务属性编号
    
    public String start_node; // 起始节点
    
    public String end_node; // 终止节点
    
    public String app_nodes; // 流转及应用
    
    public String breaks; // 备注
    
    public String delFlag; // 删除标识
    
}
