public enum Suit {

  HEARTS("Hearts"),
  SPADES("Spades"),
  DIAMONDS("Diamonds"),
  CLUBS("Clubs");

  private final String suitName;

//the constructor
  private Suit( String suitNames){
    this.suitName = suitName;
  }  

// getter - getting the suit of the card
  public String getSuit(){
    return suitName;
  }


}

