package models;

import javax.persistence.Entity;
import javax.persistence.Table;

import play.db.jpa.Model;

/**
 * Created by humin on 03/06/2017.
 */
@Entity
@Table(name="v_cfg_generate_mode")
public class VCfgGenerateMode extends Model {

    public String prof_name; // 专业

    public String prod_type; // 生成方式

    public Integer con; // 数量


}
