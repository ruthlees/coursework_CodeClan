import static org.junit.Assert.assertEquals;
import org.junit.*;

import cardgame.*;

public class TestCard{
  Card card;

  @Before
  public void before(){
    this.card = new Card(3, "hearts");
  }

  @Test
  public void testCardHasValueAndSuit(){
    assertEquals(3, card.getValue());
    assertEquals("hearts", card.getSuit());
  }
}