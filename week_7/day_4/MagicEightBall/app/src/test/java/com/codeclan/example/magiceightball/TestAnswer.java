package com.codeclan.example.magiceightball;

import java.util.ArrayList;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;


public class TestAnswer {

    Answer eightBall;
    
    private ArrayList<String> testAnswers;

  @Before
    public void before (){

      testAnswers = new ArrayList<String>();
      testAnswers.add("Yes");
      testAnswers.add("No");
      testAnswers.add("Maybe");

     eightBall = new Answer(testAnswers);
  }

  @Test
   public void testGetLength(){
    assertEquals(3, testAnswers.size());
  }

  @Test
  public void testGetAnswer(){
     assertEquals("Yes", eightBall.getAnswerAtIndex(0));
  }

  @Test
    public void testGetRandomAnswer(){
      assertTrue(testAnswers.contains(eightBall.getAnswer()));
}

  @Test
    public void testAddAnswerToList(){
      int originalLength = eightBall.getLength();
      eightBall.addAnswer("That would be time to go home!");
      assertEquals(originalLength + 1, eightBall.getLength());
  }

   @Test
    public void defaultAnswersExist(){
       Answer eightball2 = new Answer();
       assertNotNull(eightball2.getAnswer());
   }


}
