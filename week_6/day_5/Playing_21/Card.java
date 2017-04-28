public class Card {

private Suit cardSuit;
private int cardValue;

public Card(Suit cardSuit, int cardValue){

  this.cardSuit = cardSuit;
  this.cardValue = cardValue;
}


// getter for value of the Card
public int getCardValue(){
  return cardValue;
}
 
 // getter returns the name of the card
public String toString(){
  String string;
  switch(this.cardValue){

    case 2 :
      string = "Two";
      break;

    case 3 :
      string = "Three";
      break;  
    
    case 4 :
      string = "Four";
      break; 

    case 5 :
      string = "Five";
      break;
    
    case 6 :
      string = "Six";
      break;
         
    case 7 :
      string = "Seven";
      break;

    case 8 :
      string = "Eight";
      break;  

    case 9 :
      string = "Nine";
      break;

    case 10 :
      string = "Ten";
      break;   

    case 11 :
      string = "Jack";
      break;   

    case 12 :
      string = "Queen";
      break;  

    case 13 :
      string = "King";
      break;  

    case 1 :
      string = "Ace";
      break;  
  }
return string + "of" + cardSuit.toString();
}



} 