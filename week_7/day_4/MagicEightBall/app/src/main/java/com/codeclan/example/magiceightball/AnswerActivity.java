package com.codeclan.example.magiceightball;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

public class AnswerActivity extends AppCompatActivity {

    TextView answer_textview;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_answer);


       answer_textview = (TextView) findViewById(R.id.answer_text);
        Intent intent = getIntent();
        Bundle extras = intent.getExtras();
        String answer = extras.getString("answer");

        answer_textview.setText(answer);


    }
}
