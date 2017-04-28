package com.codeclan.example.highestcard;

import org.junit.Before;
import org.junit.Test;

import static junit.framework.Assert.assertEquals;
import static junit.framework.Assert.assertNotNull;

/**
 * Created by user on 02/03/2017.
 */

public class TestDealer {
    Dealer dealer;
    Deck deck;

    @Before
    public void before(){
        deck = new Deck();
        dealer = new Dealer(deck);

    }



    @Test
    public void testCanDeal(){
        Card card = dealer.deal();
        assertNotNull(card);
        assertEquals(51, deck.getNumberOfCards());
    }

}
