import org.java.util.ArrayList;

public class Hand {
   private ArrayList<Card> cards;

//construtor
  public Hand(){
    cards = new ArrayList<Card>();
  }

//clear the cards
  public void clear(){
    cards.clear();
  }

//add the card
  public void add(Card card){
    cards.add(card);
  }

// show the cards each player has
  public String showHand(){
    String string = "";
    for (Card card: cards){
      string += card.toString();
    }
    return string;
  }

// give a card to the player
  public boolean giveCard(Card card, Hand playingHand){
    if (!cards.contains(card)){
      return false;
    }
    else {
      cards.remove(card);
      playingHand.add(card);
      return true;
    }
  }

   public int getTotal(){
    int totalPoints = 0; 
    boolean hasAce = false;
      for (int i = 0; i < cards.size(); i++){
        totalPoints += cards.get(i).getRank();
        if (cards.get(i).printRank() == "Ace") {
          hasAce = true;
        }
        if (hasAce && totalPoints <= 11){
          totalPoints += 10;
        }
      }
    
  return totalPoints;
   }

}