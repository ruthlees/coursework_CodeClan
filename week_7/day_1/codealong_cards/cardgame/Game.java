package cardgame;

import java.util.ArrayList;

public class Game {
  private Deck deck;
  private ArrayList<Player> players;

  public Game(ArrayList<Player> players, Deck deck){
    this.players = players;
    this.deck = deck;
  }

  public int getNumberOfPlayers(){
    return players.size();
  }

  public Player getWinner(){
    // set the first player as the initial winner
    Player winner = players.get(0);

    // remove the first player from the players ArrayList, 
    // so that we don't loop over them
    players.remove(0);

    // loop over the remaining players and decide who the winner is
    for(Player player : players){
      if(player.getHandTotal() > winner.getHandTotal()){
        winner = player;
      }
    }
    return winner;
  }
}