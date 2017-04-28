package com.codeclan.example.highestcard;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

/**
 * Created by user on 02/03/2017.
 */

public class Deck {

    private ArrayList<Card> cards;

    public Deck(){
        cards = new ArrayList<Card>();
        populateCards();
        // method in the constructor so that it automatically fills the deck with cards

    }

    public void populateCards(){
       for(Suit suit : Suit.values()){
           for(Rank rank : Rank.values()){
            cards.add(new Card(suit, rank));
           }
       }
    }
// Suit.value is calling from the Enum class and .add within a list

    public int getNumberOfCards(){
        return cards.size();
    }

    public Card removeCard(){
        Card card = cards.remove(0);
        return card;
    }

    public void shuffleCards(){
        Collections.shuffle(cards);
    }
    //Collections is another inbuilt java method

}
