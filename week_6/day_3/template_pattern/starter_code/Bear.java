public abstract class Bear {

  public abstract void gatherFood();

  public void roar(){
    System.out.println("Roar!");
  }
  
  public void typicalDay(){
    wakeUp();
    gatherFood();
    roar();
    eat();
    sleep();
  }

  public void wakeUp(){
    System.out.println("Waking up");
  }

  public void eat(){
    System.out.println("Eating yum yum");
  }
 
  public void sleep(){
    System.out.println("Nighty night");
  }
}