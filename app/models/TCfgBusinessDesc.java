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
    public String business;

    @Required
    public String name;

    @Required
    public String title;

    @MaxLength(1024)
    public String content;

    @MaxSize(100000)
    @MaxLength(100000)
    public String description;


    public String toString(){
        return this.business+"-"+this.name+"-"+this.title+"-"+this.content;
    }

}
