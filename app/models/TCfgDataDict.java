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
@Table(name="t_cfg_data_dict")
@Entity
public class TCfgDataDict  extends Model{

    public String prof_name; // 专业
    
    public String data_mainid; // 序号1
    
    public String data_subid; // 序号2
    
    public String bus_code; // 业务编号
    
    public String busi_des; // 业务事项
    
    public String data_item; // 数据项
    
    public String if_online; // 是否线上数据
    
    public String if_struct; // 是否结构化数据
    
    public String trans_type; // 传输方式
    
    public String src_sys; // 来源系统
    
    public String rec_sys; // 接收系统
    
    public String if_maindata; // 是否可做主数据
    
    public String sys_name; // 系统名称
    
    public String deploy_type; // 系统部署方式
    
    public String input_menu; // 数据输入菜单
    
    public String table_name; // 数据库表名
    
    public String table_zhname; // 表中文名
    
    public String col_name; // 数据库字段名
    
    public String col_zhname; // 字段中文名
    
    public String if_onehand1; // 是否一手数据1
    
    public String if_onehand2; // 是否一手数据2
    
    public String prod_type; // 生成方式
    
    public String offline_table; // 线下数据表名
    
    public String standard_type; // 数据标准
    
    public String if_shared; // 是否共享数据
    
    public String if_shared_modify; // 是否共享数据修改
    
    public String input_oper; // 数据录入角色
    
    public String input_frequency; // 数据录入频率
    
    public String maintain_oper; // 数据维护角色
    
    public String maintain_freq; // 数据维护频率
    
    public String if_complete; // 是否完整
    
    public String if_dup; // 是否重复数据
    
    public String exist_sys; // 存在系统
    
    public String data_quantity; // 数据量
    
    public String delFlag; // 删除标识
    
    public String con; // 数据量
    
}
