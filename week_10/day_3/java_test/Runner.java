public class Runner{

  public static void main(String[] arg){
    ThreadExample r1 = new ThreadExample();
    Thread t1 = new Thread(r1);
    t1.start();
    Thread t2 = new Thread(r1);
    // r1.timeToQuit = true;
    t2.start();
  }
}