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
@Table(name="t_cfg_business_process")
public class TCfgBusinessProcess extends Model {

    @Required
    public String processCode; // 流程编号
    
    @Required
    public String processName; // 流程名称
    
    @Required
    public String busCode; // 业务编号

    @Required
    public String busName; // 业务名称

    @MaxLength(1024)
    @Required
    public String busContent; // 业务内容
    
    @Required
    public String busItem; // 业务事项

    @MaxSize(100000)
    @MaxLength(100000)
    public String busDescription; // 业务内容描述
    
    @Required
    public String busArea; // 所属板块
    
    @Required
    public String busMajor; // 专业
    
    @Required
    public String delFlag; // 删除标识

    public String toString(){
        return this.processName + "-" + this.busCode + "-" + this.busName + "-" + this.busContent;
    }
    
}
