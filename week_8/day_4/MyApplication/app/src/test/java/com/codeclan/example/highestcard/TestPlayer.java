package com.codeclan.example.highestcard;

import org.junit.Before;
import org.junit.Test;

import static junit.framework.Assert.assertNotNull;

/**
 * Created by user on 02/03/2017.
 */

public class TestPlayer {

    Player player;
    Dealer dealer;
    Deck deck;

    @Before
    public void before(){
        player = new Player("Ruth");
        deck = new Deck();
        dealer = new Dealer(deck);
    }


    @Test
    public void testCanTakeCard(){
        Card card = dealer.deal();
        player.takeCard(card);
        assertNotNull(player.getCard());
    }
}

