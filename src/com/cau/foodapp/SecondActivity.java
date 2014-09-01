package com.cau.foodapp;

import com.zbar.lib.CaptureActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;

public class SecondActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		setContentView(R.layout.activity_second);
		
		Button bn=(Button)findViewById(R.id.bn1);
		bn.setOnClickListener(new OnClickListener(){
			@Override
			public void onClick(View source){
				Intent intent=new Intent(SecondActivity.this,CaptureActivity.class);
	    		startActivity(intent);
			}
		});
	}
}
