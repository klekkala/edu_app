package com.example.klsriharshini.quiz;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemSelectedListener;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;


/**
 * Created by K L SRIHARSHINI on 10-02-2017.
 */
public class ResultActivity extends Activity  {
    String Name,Age,Region;
    private RadioButton radioSexButton;



    @Override

    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_result);

        Button submit=(Button) findViewById(R.id.submit);
        TextView textResult = (TextView) findViewById(R.id.textResult);
         //RadioGroup radioSexGroup = (RadioGroup) findViewById(R.id.radioSex);





        Bundle b = getIntent().getExtras();




        int score = b.getInt("score");

        textResult.setText("Your score is " + " " + score + ". Thanks for playing the game.");


        // find the radiobutton by returned id


        submit.setOnClickListener(new View.OnClickListener() {
            public void onClick(View view) {
                TextView details = (TextView) findViewById(R.id.text);
                EditText name= (EditText) findViewById(R.id.EditTextName);
                EditText age= (EditText) findViewById(R.id.EditTextage);
                EditText region= (EditText) findViewById(R.id.EditTextregion);

                RadioGroup radioSexGroup = (RadioGroup) findViewById(R.id.radioSex);
                Name=name.getText().toString();
                Age=age.getText().toString();
                Region=region.getText().toString();
                int selectedId = radioSexGroup.getCheckedRadioButtonId();

                // find the radiobutton by returned id
                radioSexButton = (RadioButton) findViewById(selectedId);
                details.setText("Thanks for playing\n");

            }
        });


        // Spinner Drop down elements


    }

    public void playagain(View o) {

        Intent intent = new Intent(this, QuestionActivity.class);

        startActivity(intent);

    }



}
