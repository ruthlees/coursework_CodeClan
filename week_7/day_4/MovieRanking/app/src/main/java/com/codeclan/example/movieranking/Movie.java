package com.codeclan.example.movieranking;

/**
 * Created by user on 23/02/2017.
 */

public class Movie {

    private String title;
    private String genre;
    private int currentRanking;

    //contructor
    public Movie(String title, String genre, int currentRanking){
        this.title = title;
        this.genre = genre;
        this.currentRanking = currentRanking;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getCurrentRanking() {
        return currentRanking;
    }

    public void setCurrentRanking(int currentRanking) {
        this.currentRanking = currentRanking;
    }

    // use toString when you want to call the Object and print it out on screen
    @Override
    public String toString() {
       return "Title: " + this.title + " Genre: " + this.genre + " Rank: " + this.currentRanking;
    }
}
