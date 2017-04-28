import static org.junit.Assert.assertEquals;
import org.junit.*;


import cardgame.*;

public class TestPlayer{
  Player player1;
  Player player2;
  Hand hand1;
  Hand hand2;
  Card lowCard;
  Card highCard;

  @Before
  public void before(){
    hand1 = new Hand();
    hand2 = new Hand();
    player1 = new Player("John", hand1);
    player2 = new Player("Yoko", hand2);
    lowCard = new Card(3, "hearts");
    highCard = new Card(9, "hearts");
  }

  @Test
  public void canGetName(){
    assertEquals("John", player1.getName());
  }

  @Test
  public void canDealCard(){
    player1.addCard(lowCard);
    player2.addCard(highCard);

    assertEquals(1, player1.getHandSize());
    assertEquals(1, player2.getHandSize());
  }
}