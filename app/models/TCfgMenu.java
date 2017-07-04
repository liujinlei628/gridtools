package models;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import play.data.validation.Required;
import play.db.jpa.Model;

@Table(name="t_cfg_menu")
@Entity
public class TCfgMenu extends Model {

	@Required
	public String name;
	
	@ManyToOne
	public TCfgMenu parent_menu;
	
	public String toString(){
		return this.name;
	}
	
}
