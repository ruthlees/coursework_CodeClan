package com.codeclan.example.highestcard;

import java.util.ArrayList;

/**
 * Created by user on 02/03/2017.
 */

public class Runner {

    public static void main(String[] args) {

        ArrayList<Player> players = new ArrayList<Player>();
        Deck deck = new Deck();
        Dealer dealer = new Dealer(deck);
        Player player1 = new Player("Ruth");
        Player player2 = new Player("David");
        players.add(player1);
        players.add(player2);
        Game game = new Game(players, dealer);

        game.play();
        String result = game.compareCards();
        System.out.println(result);
    }
}
