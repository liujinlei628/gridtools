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
    public String business_id;

    @Required
    public String name;

    public String area;

    public String professional;

    public String value;

    @MaxSize(5120)
    @MaxLength(5120)
    public String content;

    @MaxSize(5120)
    @MaxLength(5120)
    public String description;

    @MaxSize(5120)
    public String relation;

    public String post_business_id;

    public String post_business_name;

    public String post_area;

    public String post_professional;


    @MaxSize(5120)
    @MaxLength(5120)
    public String post_business_content;


    @MaxSize(5120)
    @MaxLength(5120)
    public String post_business_description;

}
