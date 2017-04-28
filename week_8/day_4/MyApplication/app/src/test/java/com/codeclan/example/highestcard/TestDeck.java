package com.codeclan.example.highestcard;

import org.junit.Before;
import org.junit.Test;

import static junit.framework.Assert.assertEquals;
import static junit.framework.Assert.assertNotNull;

/**
 * Created by user on 02/03/2017.
 */

public class TestDeck {

 // instance variable
    Deck deck;


@Before
   public void before(){
     deck = new Deck();
}

@Test
  public void testDeckHas52Cards(){
     assertEquals(52, deck.getNumberOfCards());
    }

 @Test
   public void testRemoveCard(){
     Card card = deck.removeCard();
     assertNotNull(card);
    assertEquals(51, deck.getNumberOfCards());
 }
}
