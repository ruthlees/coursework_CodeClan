package com.codeclan.example.movieranking;

import org.junit.Before;
import org.junit.Test;

import static junit.framework.Assert.assertEquals;
import static junit.framework.Assert.assertNotNull;

/**
 * Created by user on 23/02/2017.
 */

public class TestRanking {

    private Ranking rank;
    private Movie movie1;
    private Movie movie2;
    private Movie movie3;

    @Before
    public void before(){
        rank = new Ranking();
        movie1 = new Movie("Rogue One", "sci-fi", 1);
        movie2 = new Movie("Deadpool", "Adventure", 10);
        movie3 = new Movie("Titanic", "Romance", 9);
        rank.addMovie(movie1);
    }


    @Test
    public void testAddMovie() {
        assertEquals(1, rank.getSize());
    }

    @Test
    public void testGetMovieAtRanking() {
        Movie movie = rank.getMovieByRank(1);
        assertEquals("Rogue One", movie.getTitle());
    }

        @Test
        public void testReplacedLastMovie(){
            rank.addMovie(movie2);
            rank.replaceLastMovie(movie3);
            Movie movie = rank.getMovieByRank(10);
            assertEquals("Titanic", movie.getTitle());
        }


    @Test
    public void testFindMovieByTitle(){
        Movie movie = rank.findMovieByName("Rogue One");
        assertEquals("Rogue One", movie.getTitle());
    }

    @Test
    public void testMoveMovieUp(){
        rank.addMovie(movie2);
        rank.addMovie(movie3);
        rank.move(10, 9);
        Movie movie = rank.getMovieByRank(9);
        assertEquals("Deadpool", movie.getTitle());
    }
}
