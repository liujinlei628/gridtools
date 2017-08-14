package models;

import javax.persistence.Entity;
import javax.persistence.Table;

import play.db.jpa.Model;

/**
 * Created by humin on 03/06/2017.
 */
@Entity
@Table(name="v_cfg_data_structure")
public class VCfgDataStructure extends Model {

    public String prof_name; // 专业

    public String category; // 分类

    public Integer con; // 数量
    
    public String type; // 类型

}
