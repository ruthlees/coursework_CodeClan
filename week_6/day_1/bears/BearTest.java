import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.Before;


public class BearTest {
  Bear bear;

  @Before
   public void before(){
    bear = new Bear("Baloo", 14, 95.62, 1.2);
   }

  @Test 
  public void hasName() {
    assertEquals("Baloo", bear.getName());
  }
  
  @Test
  public void hasAge(){
    assertEquals(14, bear.getAge());
  }
  
  @Test
  public void hasWeight(){
    assertEquals(95.62, bear.getWeight(), 0.01);
  }

  @Test
  public void hasHeight(){
    assertEquals(1.2, bear.getHeight(), 0.01);
  }

  @Test
  public void readyToHibernateIfGreaterThan30(){
    assertEquals(true, bear.readyToHibernate());

  }

 @Test
 public void notReadyToHibernateIfLessThan30(){
  Bear thinBear = new Bear ("Baloo", 14, 65.44, 2);
  assertEquals(false, thinBear.readyToHibernate());

 } 
}