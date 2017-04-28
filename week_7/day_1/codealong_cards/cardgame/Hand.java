package cardgame;
import java.util.ArrayList;

public class Hand {

  private ArrayList<Card> cards;

  public Hand(){
    cards = new ArrayList<Card>();
  }

  public void addCard(Card card){
    cards.add(card);
  }

  public int getSize(){
    return cards.size();
  }

  public int getTotal(){
    int value = 0;

    // Loop over all cards in hand and return their totals
    for(Card card : cards){
      value += card.getValue();
    }
    return value;
  }
}