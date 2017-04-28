package cardgame;
import java.util.ArrayList;

public class Deck {
  // These are all possible values for cards + suits
  private int[] values = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13};
  private String[] suits = {"hearts", "diamonds", "clubs", "spades"};

  // Stores the deck
  private ArrayList<Card> cards;

  public Deck(){
    cards = new ArrayList<Card>();

    // Nested "for" loop; loop through all values, then create one for each suit 
    for(int value : values){
      for(String suit : suits){
        Card card = new Card(value, suit);
        cards.add(card);
      }
    }
  }

  public int getSize(){
    return cards.size();
  }
}