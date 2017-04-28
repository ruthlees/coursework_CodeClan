package cardgame;

public class Player {
  private Hand hand;
  private String name;

  public Player(String name, Hand hand){
    this.name = name;
    this.hand = hand;
  }

  public String getName(){
    return this.name;
  }

  public void addCard(Card card){
    hand.addCard(card);
  }

  public int getHandSize(){
    return hand.getSize();
  }

  public int getHandTotal(){
    return hand.getTotal();
  }
}