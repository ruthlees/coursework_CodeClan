public class ThreadExample implements Runnable {

  private int i;
  // public volatile boolean timeToQuit = false;

@Override
public void run(){
  while (!Thread.interrupted()){
  for(int i = 0; i < 100; i++){
    System.out.println(i);
  }
 }
}


}