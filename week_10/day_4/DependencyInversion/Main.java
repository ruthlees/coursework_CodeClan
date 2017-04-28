class Main {
  public static void main(String[] args){
    AthleteFileLog filelog = new AthleteFileLog();
    AthleteConsoleLog consolelog = new AthleteConsoleLog();

    Athlete athlete = new Athlete(filelog);
    Athlete athlete2 = new Athlete(consolelog);


    athlete.run(10);
  }
}
