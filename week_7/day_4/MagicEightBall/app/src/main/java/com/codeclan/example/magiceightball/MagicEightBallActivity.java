package com.codeclan.example.magiceightball;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import java.io.InputStream;

public class MagicEightBallActivity extends AppCompatActivity {

    EditText questionEditText;
    Button shakeButton;
    TextFileAnswers eightBall;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_magic_eight_ball);

        InputStream input = getResources().openRawResource(R.raw.answers);
        this.eightBall = new TextFileAnswers(input);

        questionEditText = (EditText) findViewById(R.id.question_edittext);
        shakeButton = (Button) findViewById(R.id.shake_btn);

    }

    public void onShakeButtonClicked(View button){
        String answer = eightBall.getAnswer();
        Intent intent = new Intent(MagicEightBallActivity.this, AnswerActivity.class);
        intent.putExtra("answer", answer);

        startActivity(intent);
    }

    public void websiteButtonClicked(View button){
        String url = "http://www.codeclan.com";
        Intent intent = new Intent(Intent.ACTION_VIEW);
        intent.setData(Uri.parse(url));

        startActivity(intent);
    }
}
