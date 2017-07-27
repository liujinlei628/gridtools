package models;

import net.sf.oval.constraint.MaxLength;
import play.data.validation.MaxSize;
import play.data.validation.Required;
import play.db.jpa.Model;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by humin on 03/06/2017.
 */
@Entity
@Table(name="t_cfg_dict")
public class TCfgDict extends Model {

    @Required
    public String value; // 数据值

    @Required
    public String label; // 标签名

    @Required
    public String type; // 类型

    @MaxSize(100)
    @MaxLength(100)
    public String description; // 描述
    
    @Required
    public String sort; // 排序
    
    @Required
    public String parentId; // 父级编号
    
    @Required
    public String remarks; // 备注
    
    @Required
    public String delFlag; // 删除标识

    public String toString(){
        return this.description + "-" + this.type + "-" + this.label + "-" + this.value;
    }

}
