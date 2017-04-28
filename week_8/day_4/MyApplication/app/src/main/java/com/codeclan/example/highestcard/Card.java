package com.codeclan.example.highestcard;

/**
 * Created by user on 02/03/2017.
 */

public class Card {

    private Suit suit;
    private Rank rank;

    public Card(Suit suit, Rank rank){
        this.suit = suit;
        this.rank = rank;
    }

    public int getValue(){
        return this.rank.ordinal() + 1;
    }




}
