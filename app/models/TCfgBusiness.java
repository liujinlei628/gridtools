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
@Table(name="t_cfg_business")
@Entity
public class TCfgBusiness  extends Model{

    @Required
    @Unique
    public String business_id; // 业务编号

    @Required
    public String name; // 业务名称

    public String area; // 所属板块

    public String professional; // 专业

    public String value; // 值

    @MaxSize(5120)
    @MaxLength(5120)
    public String content; // 业务内容

    @MaxSize(5120)
    @MaxLength(5120)
    public String description; // 业务内容描述

    @MaxSize(5120)
    public String relation; // 关系

    public String post_business_id; // 衔接业务编号

    public String post_business_name; // 衔接业务名称

    public String post_area; // 衔接板块

    public String post_professional; // 衔接专业

    @MaxSize(5120)
    @MaxLength(5120)
    public String post_business_content; // 衔接业务内容

    @MaxSize(5120)
    @MaxLength(5120)
    public String post_business_description; // 衔接业务内容描述
    
    public String delFlag; // 删除标识

}
