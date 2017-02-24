package com.example.klsriharshini.quiz;

/**
 * Created by K L SRIHARSHINI on 10-02-2017.
 */

import java.util.List;
import java.util.Timer;
import java.util.concurrent.TimeUnit;
import android.annotation.SuppressLint;
import android.annotation.TargetApi;
import android.app.Activity;
import android.content.Intent;
import android.graphics.Typeface;
import android.media.MediaPlayer;
import android.os.Build;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class QuestionActivity extends Activity {

    List<Question> quesList;

    int score = 0;

    int qid = 0;

    Question currentQ;

    TextView txtQuestion, times, scored;

    Button button1, button2, button3;

    @Override

    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        QuizHelper db = new QuizHelper(this);  // my question bank class

        quesList = db.getAllQuestions();  // this will fetch all quetonall questions

        currentQ = quesList.get(qid); // the current question



        txtQuestion = (TextView) findViewById(R.id.txtQuestion);

        // the textview in which the question will be displayed

        // the three buttons,

        // the idea is to set the text of three buttons with the options from question bank

        button1 = (Button) findViewById(R.id.button1);

        button2 = (Button) findViewById(R.id.button2);

        button3 = (Button) findViewById(R.id.button3);

        scored = (TextView) findViewById(R.id.score);

        times = (TextView) findViewById(R.id.timers);

        setQuestionView();

        times.setText("00:02:00");

        CounterClass timer = new CounterClass(60000, 1000);

        timer.start();

        button1.setOnClickListener(new View.OnClickListener() {

            @Override

            public void onClick(View v) {

                getAnswer(button1.getText().toString());

            }

        });

        button2.setOnClickListener(new View.OnClickListener() {

            @Override

            public void onClick(View v) {

                getAnswer(button2.getText().toString());

            }

        });

        button3.setOnClickListener(new View.OnClickListener() {

            @Override

            public void onClick(View v) {

                getAnswer(button3.getText().toString());

            }

        });

    }

    public void getAnswer(String AnswerString) {

        if (currentQ.getANSWER().equals(AnswerString)) {



            // if conditions matches increase the int (score) by 1

            // and set the text of the score view

            score++;

            scored.setText("Score : " + score);

        } //else {

            //Intent intent = new Intent(QuestionActivity.this,

//                    ResultActivity.class);
//
  //          Bundle b = new Bundle();

//            b.putInt("score", score); // Your score

//            intent.putExtras(b); // Put your score to your next

  //          startActivity(intent);

//            finish();

  //      }

        if (qid < 20) {

            currentQ = quesList.get(qid);

            setQuestionView();

        } else {



            // if over do this

            Intent intent = new Intent(QuestionActivity.this,

                    ResultActivity.class);

            Bundle b = new Bundle();

            b.putInt("score", score); // Your score

            intent.putExtras(b); // Put your score to your next

            startActivity(intent);

            finish();

        }

    }

    @TargetApi(Build.VERSION_CODES.GINGERBREAD)

    @SuppressLint("NewApi")

    public class CounterClass extends CountDownTimer {



        public CounterClass(long millisInFuture, long countDownInterval) {

            super(millisInFuture, countDownInterval);

            // TODO Auto-generated constructor stub

        }

        @Override

        public void onFinish() {

            times.setText("Time is up");

        }

        @Override

        public void onTick(long millisUntilFinished) {

            // TODO Auto-generated method stub

            long millis = millisUntilFinished;

            String hms = String.format(

                    "%02d:%02d:%02d",

                    TimeUnit.MILLISECONDS.toHours(millis),

                    TimeUnit.MILLISECONDS.toMinutes(millis)

                            - TimeUnit.HOURS.toMinutes(TimeUnit.MILLISECONDS

                                    .toHours(millis)),

                    TimeUnit.MILLISECONDS.toSeconds(millis)

                            - TimeUnit.MINUTES.toSeconds(TimeUnit.MILLISECONDS

                                    .toMinutes(millis)));

            System.out.println(hms);

            times.setText(hms);

        }

    }

    private void setQuestionView() {



        // the method which will put all things together

        txtQuestion.setText(currentQ.getQUESTION());

        button1.setText(currentQ.getOPTA());

        button2.setText(currentQ.getOPTB());

        button3.setText(currentQ.getOPTC());



        qid++;

    }


}
