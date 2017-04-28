package com.codeclan.example.magiceightball;

import android.util.Log;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

/**
 * Created by user on 28/02/2017.
 */

public class TextFileAnswers implements Answerable {

    private ArrayList<String> answers;
    Scanner fileReader;

    public TextFileAnswers(InputStream file){
        answers = new ArrayList<String>();
        fileReader = new Scanner(file);
        setUpAnswers();
    }

    private void setUpAnswers() {
        boolean moreLinesToRead = fileReader.hasNextLine();
        while (moreLinesToRead) {
            String lineOfText = fileReader.nextLine();
            Log.d("FileAnswer", " Adding " + lineOfText + " to answers");
            answers.add(lineOfText);
            moreLinesToRead = fileReader.hasNextLine();
        }
    }

     public String getAnswer(){
        Random rand = new Random();
        int length = answers.size();
        int index = rand.nextInt(length);
        String answer = answers.get(index);
        return answer;
    }





}
