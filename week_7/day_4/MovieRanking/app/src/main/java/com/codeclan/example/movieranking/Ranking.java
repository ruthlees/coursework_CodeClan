package com.codeclan.example.movieranking;

import android.test.mock.MockDialogInterface;

import java.util.ArrayList;

/**
 * Created by user on 23/02/2017.
 */

public class Ranking {

   private Movie[] movies;


//contructor
 public Ranking() {
     movies = new Movie[10];
 }



    public int getSize() {
        int count = 0;
        for (Movie movie : movies){
            //condition
            if (movie != null){
               count++;
            }
        }
        return count;
    }

    public void addMovie(Movie movie) {
       int index = movie.getCurrentRanking() - 1;
       movies[index] = movie;
    }

    public Movie getMovieByRank(int rank){
        return movies[rank - 1];
    }

    public void replaceLastMovie(Movie movie){
        movie.setCurrentRanking(10);
        addMovie(movie);

    }

    public Movie findMovieByName(String title){
        for (Movie movie : movies){
            if (title.equals(movie.getTitle())){
                return movie;
            }
        }
        return null;
    }

    public void move(int oldRank, int newRank){
        Movie movie1 = getMovieByRank(newRank);
        Movie movie2 = getMovieByRank(oldRank);
        movie1.setCurrentRanking(oldRank);
        movie2.setCurrentRanking(newRank);
        addMovie(movie1);
        addMovie(movie2);

    }
}
