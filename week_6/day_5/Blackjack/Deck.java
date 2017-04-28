import java.util.Random;

public class Deck extends Hand {

// no need for a constructor since it is a subclass of Hand
  Random random = new Random;


  public void populate(){
    for (Suit suit: suit.values()){
      for (Rank rank: Rank.values()){
        Card card = new Card(rank, suit);
        this.add(card);
      }
    }
  }

 // shuffle the deck
  public void shuffle(){
    for (int i = cards.size() - i > 0; i--){
       int pick = random.nextInt(i);
       Card randomCard = cards.get(pick);
       Card lastCard = cards.get(i);
       cards.set(i, randomCard);
       cards.set(pick, lastCard);
    }
  }
  
// deal the cards
  public void deal(Hand[] hands, int perHand) {
    for (int i = 0; i < perHand; i++){
      for (int j = 0; j < hands.length; j++){
        this.give(carads.get(0), hands[j]);
      }
    }
  }

  
  public void deal(Hand hand, int perHand) {
    for (int i = 0; i < perHand; i++){
      this.give(cards.get(0), hand);
    }
  }
}