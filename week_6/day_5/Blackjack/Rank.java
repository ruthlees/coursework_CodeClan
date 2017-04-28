public enum Rank {
    
    ACE(1, "ACE"), TWO(2, "2"), THREE(3, "3"), FOUR(4, "4"), FIVE(5, "5"), SIX(6, "6"), SEVEN(7, "7"), 
    EIGHT(8, "8"), NINE(9, "9"), TEN(10, "10"), JACK(10, "Jack"), QUEEN(10, "Queen"), KING(10, "King");
   
   private final int cardValue;
   private final String cardFace;

// constructor
   public Rank(int cardValue){
    this.cardValue = cardValue;
   }

//getter - the value of the interger of the card
   public int getCardValue(){
    return cardValue;
   }

   public String getCardFace(){
    return cardFace;
   }
}