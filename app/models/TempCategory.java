package models;

/**
 * Created by humin on 02/06/2017.
 */
public class TempCategory implements Comparable<TempCategory> {

    public String name;

    @Override
    public int compareTo(TempCategory o) {
        if(this.name.equals(o.name)){
            return 1;
        }
        return 0;
    }
}
