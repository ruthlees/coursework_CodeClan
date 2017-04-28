import java.util.HashMap;

public class Countries {

  public static void main(String[] args) {
    
    HashMap<String, Integer>countries = new HashMap<String, Integer>();

     countries.put("UK", 64100000);
     countries.put("Germany", 80620000);
     countries.put("France", 66030000);
     countries.put("Japan", 127300000);


    for (String key : countries.keySet()){
     Integer population = countries.get(key);
     System.out.println(key + " has the population of " + population);
    }
    


     Integer population = countries.get("Japan");

     System.out.println("Japan has the population of " + population);
     System.out.println(countries.values());



  }
}