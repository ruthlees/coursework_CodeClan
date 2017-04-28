import static org.junit.Assert.*;
import org.junit.*;
import org.mockito.*;
import static org.mockito.Mockito.*;

public class GameTest {

  Game game;
  Rollable spyDice;
  Rollable dice;
  
  @Before 
  public void before(){
    dice = new Dice(6);
    spyDice = Mockito.spy(dice);
    game = new Game(spyDice);
  }


@Test
  public void testTakeTurnFailureStub(){
    Mockito.when(spyDice.roll()).thenReturn(1);

    boolean result = game.nextTurn();
    assertEquals(false, result);
  }

@Test 
  public void testTakeTurnPassStub(){
    Mockito.when(spyDice.roll()).thenReturn(4);
// shorter version of the equation
    assertEquals(true, game.nextTurn());
  }  
  
@Test
  public void takeTurnMock(){
    Rollable diceMock = mock(Rollable.class);
    game = new Game(diceMock);
    game.nextTurn();
    assertEquals(1, game.getTurnCount());
    Mockito.verify(diceMock, times(1)).roll();
  }

}
