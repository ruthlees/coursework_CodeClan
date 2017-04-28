package com.codeclan.example.movieranking;

import org.hamcrest.Matcher;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;

/**
 * Created by user on 23/02/2017.
 */

public class TestMovie {
    Movie movie1;
    Movie movie2;

@Before
    public void before(){

       movie1 = new Movie("Deadpool", "Action and Adventure", 3);
       movie2 = new Movie("Rogue One", "Science Fiction", 4);
}
// getters pulling the information from the class
 @Test
    public void testGetGenre(){
     assertEquals("Science Fiction", movie2.getGenre());
 }

 @Test
    public void testGetTitle(){
     assertEquals("Deadpool", movie1.getTitle());
 }

 @Test
    public void testGetCurrentRanking(){
     assertEquals(4, movie2.getCurrentRanking());
 }

  @Test
    public void testSetGenre(){
      movie1.setGenre("Action");
      assertEquals("Action", movie1.getGenre());
  }

    //setters test to see if you can change the details
  @Test
    public void testSetTitle() {
      movie2.setTitle("Rogue One");
      assertEquals("Rogue One", movie2.getTitle());
  }

  @Test
     public void testSetCurrentRanking(){
        movie1.setCurrentRanking(3);
        assertEquals(3, movie1.getCurrentRanking());
      }

    // toString overides
  @Test
    public void testMovieToString(){
      assertEquals("Title: Rogue One Genre: Sci-fi Rank: 4", movie2.toString());
  }




}
