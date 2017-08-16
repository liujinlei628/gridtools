package models;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import play.data.validation.Required;
import play.db.jpa.Model;

@Table(name="t_cfg_temp")
@Entity
public class TCfgTemp extends Model {

	public String source;
	
	public String target;
	
	public String con; 
	
}
