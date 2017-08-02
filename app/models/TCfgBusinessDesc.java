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
@Table(name="t_cfg_business_desc")
public class TCfgBusinessDesc extends Model {

    @Required
    public String business; // 业务编号

    @Required
    public String name; // 业务名称

    @Required
    public String title; // 业务事项

    @MaxLength(1024)
    @Required
    public String content; // 业务内容

    @MaxSize(100000)
    @MaxLength(100000)
    @Required
    public String description; // 业务内容描述
    
    @Required
    public String area; // 所属板块
    
    @Required
    public String major; // 专业
    
    @Required
    public String delFlag; // 删除标识

    public String toString(){
        return this.business + "-" + this.name + "-" + this.title + "-" + this.content;
    }
    
}
