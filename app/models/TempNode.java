package models;

/**
 * Created by humin on 02/06/2017.
 */
public class TempNode implements Comparable<TempNode> {

    public String name;

    public String shortname;

    public String displayname;

    public String category;

    public Boolean draggable=true;

    public Integer x;

    public Integer y;
    
    public boolean isleaf = false;
    
    public String source;
    
    public String target;

    @Override
    public int compareTo(TempNode o) {
        if(this.name != o.name){
            return 1;
        }
        return 0;
    }
}
