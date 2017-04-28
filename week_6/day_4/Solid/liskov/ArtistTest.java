import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;

public class ArtistTest {
  Artist artist;
  Square square;
  Circle circle;
  Triangle triangle;
  Hexagon hexagon;

  @Before
  public void before(){
    artist = new Artist();
    square = new Square();
    circle = new Circle();
    triangle = new Triangle();
    hexagon = new Hexagon();
  }

  @Test
  public void canDrawSquare(){
    assertEquals("I'm drawing a square!", artist.drawShape(square));
  }

  @Test
  public void canDrawCircle(){
    assertEquals("I'm drawing a circle!", artist.drawShape(circle));
  }

  @Test
  public void canDrawTriangle(){
    assertEquals("I'm drawing a triangle!", artist.drawShape(triangle));
  }

  @Test
  public void canDrawHexagon(){
    assertEquals("I'm drawing a hexagon!", artist.drawShape(hexagon));
  }
}