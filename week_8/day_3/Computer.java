public class Computer {

  private ArrayList<Choices> choices;


  public Computer(){
    choices = new ArrayList<Choices>();

    for (Choices choice : Choices.values()){
      choices.add(choice);
    }
  }

  public String getChoice(){
        Random rand = new Random();
        int length = choices.size();
        int index = rand.nextInt(length);
        String answer = choices.get(index);
        return answer;
    }




}