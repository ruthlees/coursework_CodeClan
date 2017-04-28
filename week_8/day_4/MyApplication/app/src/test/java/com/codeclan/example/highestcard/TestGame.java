package com.codeclan.example.highestcard;

import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;

import static junit.framework.Assert.assertEquals;

/**
 * Created by user on 02/03/2017.
 */

public class TestGame {

    ArrayList<Player>players;
    Deck deck;
    Dealer dealer;
    Player player1;
    Player player2;
    Game game;


    @Before
    public void before(){
        players = new ArrayList<Player>();
        player1 = new Player("Ruth");
        player2 = new Player("Ellen");
        players.add(player1);
        players.add(player2);
        game = new Game(players, dealer);

    }

    @Test
     public void testComparePlayerHands(){
        player1.takeCard(new Card(Suit.CLUBS, Rank.KING));
        player2.takeCard(new Card(Suit.DIAMONDS, Rank.QUEEN));
        assertEquals("Ruth wins", game.compareCards());
    }




}
