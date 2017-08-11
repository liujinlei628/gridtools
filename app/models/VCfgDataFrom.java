package models;

import javax.persistence.Entity;
import javax.persistence.Table;

import play.db.jpa.Model;

/**
 * Created by humin on 03/06/2017.
 */
@Entity
@Table(name="v_cfg_data_from")
public class VCfgDataFrom extends Model {

    public String prof_name; // 专业

    public String src_sys; // 来源系统

    public Integer con; // 数量

}
