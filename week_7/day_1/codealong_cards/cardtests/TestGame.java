import static org.junit.Assert.assertEquals;
import org.junit.*;

import java.util.ArrayList;
import cardgame.*;

public class TestGame{
  Deck deck;
  Player player1;
  Player player2;
  Hand hand1;
  Hand hand2;
  Card lowCard;
  Card highCard;
  Game game;

  @Before
  public void before(){
    deck = new Deck();

    hand1 = new Hand();
    hand2 = new Hand();
    player1 = new Player("John", hand1);
    player2 = new Player("Yoko", hand2);

    lowCard = new Card(3, "hearts");
    highCard = new Card(9, "hearts");

    player1.addCard(highCard);
    player2.addCard(lowCard);

    ArrayList<Player> players = new ArrayList<Player>();
    players.add(player1);
    players.add(player2);

    game = new Game(players, deck);
  }

  @Test
  public void testGameHasPlayers(){
    assertEquals(2, game.getNumberOfPlayers());
  }

  @Test
  public void testWinner(){
    assertEquals(player1, game.getWinner());
  }
}