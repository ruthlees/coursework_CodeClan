package com.codeclan.example.highestcard;

/**
 * Created by user on 02/03/2017.
 */

public class Dealer {

    private Deck deck;

    public Dealer(Deck deck){
        this.deck = deck;
        this.deck.shuffleCards();
    }

    public Card deal(){
        Card card = deck.removeCard();
        return card;
    }
}
