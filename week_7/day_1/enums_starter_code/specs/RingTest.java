import static org.junit.Assert.*;
import org.junit.*;
import jewellery.*;

public class RingTest {

  Ring ring;
  
  @Before 
  public void before(){
    ring = new Ring(MetalType.GOLD, GemType.EMERALD);
  }

  @Test
  public void canGetMetal(){
    assertEquals(MetalType.GOLD, ring.getMetal());
  }
  
  @Test
  public void canGetGem(){
    assertEquals(GemType.EMERALD, ring.getGem());
  }

  @Test
  public void testGemtoString(){
    assertEquals("EMERALD", ring.getGem().toString());
  }

  // @Test
  // public void canMisspellMetal(){
  //   ring = new Ring("Gooollld"); 
  //    assertEquals("Gooollld", ring.getMetal());
  // }

  // @Test
  // public void canBeBanana(){
  //   ring = new Ring("banana"); 
  //    assertEquals("banana", ring.getMetal());
  // }

}


