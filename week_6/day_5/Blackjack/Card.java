public class Card {

  private Suit suit;
  private Rank rank;

  //constructor
  public Card(Rank rank, Suit suit){
    this.rank = rank;
    this.suit = suit;
  }

//getter - suit of card
  public String getSuit(){
    return suit.getsuit();
  }
//getter for specific ACE 
  public String printRank(){
    return rank.cardFace();
  }

//getter -value of card
  public String getRank(){
    return rank.getCardValue();
  }    

// toString method - getting a whole card in a string
  public String toString() {
    String string = "";
    string += rank.getCardFace() + "of" + suit.getSuit();
    return string;
  }

 
}