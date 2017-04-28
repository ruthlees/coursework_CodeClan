import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.Before;
import wizard_management.Broomstick;

public class BroomstickTest {

  Broomstick broom;

  @Before
  public void before(){
    broom = new Broomstick("Nimbus",10);
  }

  @Test
  public void hasBrand(){
    assertEquals("Nimbus", broom.getBrand());
  }

  @Test
  public void hasSpeed(){
    assertEquals(10, broom.getSpeed());
  }

  @Test
  public void canFly(){
    assertEquals(broom.fly(),"mounting broom, running, skipping, flying!");
  }

}