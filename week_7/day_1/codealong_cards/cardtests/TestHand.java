import static org.junit.Assert.assertEquals;
import org.junit.*;


import cardgame.*;

public class TestHand{
  Hand hand;
  Card card;

  @Before
  public void before(){
    hand = new Hand();
    card = new Card(2, "clubs");
  }

  @Test
  public void checkEmptyHand(){
    assertEquals(0, hand.getSize());
  }

  @Test
  public void canAddCard(){
    hand.addCard(card);
    assertEquals(1, hand.getSize());
  }

  @Test
  public void canGetTotal(){
    hand.addCard(card);
    assertEquals(2, hand.getTotal());
  }


}