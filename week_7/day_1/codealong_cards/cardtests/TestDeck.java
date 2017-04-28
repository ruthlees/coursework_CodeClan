import static org.junit.Assert.assertEquals;
import org.junit.*;


import cardgame.*;

public class TestDeck{
  Deck deck;

  @Before
  public void before(){
    deck = new Deck();
  }

  @Test
  public void testCardsInDeck(){
    assertEquals(52, deck.getSize()); 
  }
}