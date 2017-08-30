package models;

import net.sf.oval.constraint.MaxLength;
import play.data.validation.MaxSize;
import play.data.validation.Required;
import play.data.validation.Unique;
import play.db.jpa.Model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by humin on 01/06/2017.
 */
public class TempBusObj  extends Model{

    public TCfgBusinessObj tCfgBusinessObj; // 业务对象
    
    public List<TCfgLogicalEntity> tCfgLogicalEntitieList; // 业务逻辑实体
    
    public List<TCfgPhysicalEntity> tCfgPhysicalEntitieList; // 业务物理实体
    
}
