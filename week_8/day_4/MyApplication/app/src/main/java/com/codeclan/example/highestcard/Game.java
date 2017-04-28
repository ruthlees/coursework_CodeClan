package com.codeclan.example.highestcard;

import java.util.ArrayList;

/**
 * Created by user on 02/03/2017.
 */

public class Game {

    ArrayList<Player> players;
    Dealer dealer;

    public Game(ArrayList<Player>players, Dealer dealer){
        this.players = players;
        this.dealer = dealer;
    }

  public void play(){
      for (Player player : players){
          Card card = dealer.deal();
          player.takeCard(card);
      }
  }

 public String compareCards(){
     int player1Hand = players.get(0).getHandValue();
     int player2Hand = players.get(1).getHandValue();

     if (player1Hand == player2Hand){
         return "Its a draw";
     }
     if (player1Hand > player2Hand){
         return players.get(0).getName() + " wins";
     } else {
         return players.get(1).getName() + " wins";
     }

 }


}
