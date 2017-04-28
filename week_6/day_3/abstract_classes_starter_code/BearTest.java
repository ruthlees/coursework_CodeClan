import static org.junit.Assert.assertEquals;
import org.junit.*;

public class BearTest {
 
 PolarBear polarBear;
 GrizzlyBear grizzlyBear;

  @Before 
  public void before() {
    polarBear = new PolarBear();
    grizzlyBear = new GrizzlyBear();
  }

@Test
public void polarCanGatherFood(){
  assertEquals("Gathering Food: breaking the ice", polarBear.gatherFood());
}
@Test
public void grizzlyCanGatherFood(){
  assertEquals("Gathering Food: fishing in the river", grizzlyBear.gatherFood());
}

@Test
public void canHibernate(){
  assertEquals("Finding a nice Igloo to sleep in", polarBear.hibernate());
  assertEquals("Finding a nice cave to sleep in", grizzlyBear.hibernate());
}


}