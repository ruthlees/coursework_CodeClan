package com.codeclan.example.highestcard;

/**
 * Created by user on 02/03/2017.
 */

public class Player {

    Card card;
    String name;

    public Player(String name){
        this.name = name;

    }

    public String getName() {
        return name;
    }

    public void takeCard(Card card){
        this.card = card;

    }

    public Card getCard(){
        return this.card;
    }

    public int getHandValue(){
        return this.card.getValue();
    }
}
