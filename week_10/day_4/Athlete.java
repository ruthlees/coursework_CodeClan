public class Athlete {
  private int totalDistance;
  private AthleteLog log;

  public Athlete(AthleteLog log){
       this.log = log;
  
  }

  public void run(int distance){
    totalDistance += distance;
    this.log.distance(distance, totalDistance);
  }
}