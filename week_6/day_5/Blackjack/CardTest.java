import static org.junit.Assert.*;
import org.junit.*;

public class CardTest {

 Card card

 @Before
 public void before(){
   card = new Card(rank.ace, suit.hearts);
 }

 @Test
 
 public void testCardRetrievel(card) {
    assertEquals(Rank.ace, card.getRank());
    assertEquals(Suit.clubs, card.getSuit());
 }





 
}