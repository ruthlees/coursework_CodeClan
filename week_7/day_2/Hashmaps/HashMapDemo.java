import java.util.HashMap;

public class HashMapDemo {

public static void main(String[] args) {


  HashMap<String, Person>people = new HashMap<String, Person>();

  Person john = new Person("John", 36, 2.0);
  Person ally = new Person("Ally", 38, 1.6);

  people.put("John", john);
  people.put("Ally", ally);

  Person person1 = people.get("John");

 
  System.out.println(people.size());
  System.out.println(people.values());

  System.out.println(person1.getName() + " is " + person1.getAge() + " years old");
  
  // HashMap<String, Integer>javaKnowledge = new HashMap<String, Integer>();

  // javaKnowledge.put("John", 101);
  // javaKnowledge.put("Ally", 99);

  // Integer javaKnowl = javaKnowledge.get("John");


  // System.out.println("John's java knowledge " + javaKnowl + "%");
}


}