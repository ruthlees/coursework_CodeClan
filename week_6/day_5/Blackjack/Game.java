public class Game{



public static void main (String[] args){
  Card card

  card1 = new Card(Rank.ACE, Suit.HEARTS);
  card2 = new Card(Rank.KING, Suit.SPADES);

  Hand hand = new Hand();
  hand.add(card1);
  hand.add(card2);
  hand.showHand();
}

// create deck of cards
Deck deck = new Deck();
deck.populate();
deck.shuffle();

Hand h1, h2;

h1 = new Hand();
h2 = new Hand();

Hand[] hands = {h1, h2}
d1,deal(hands, 2);

for (int i = 0; i<hands.length; i++){
  hands(i);
}


}