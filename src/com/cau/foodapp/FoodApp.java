/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.cau.foodapp;

import android.content.ComponentName;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.webkit.JavascriptInterface;

import org.apache.cordova.*;
import org.apache.cordova.camera.CameraLauncher;
import org.json.JSONException;
import org.json.JSONObject;

import com.cau.plugin.data.Query;
import com.cau.plugin.data.Upload;
import com.cau.transit.Converse;

public class FoodApp extends CordovaActivity 
{
	private static final int QR_REQUEST=0x11;
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState); 
        super.init(); 
        
        super.loadUrl(Config.getStartUrl());  
        //super.loadUrl("file:///android_asset/www/index.html")
       // 
        this.appView.addJavascriptInterface(new FoodApp(), "native"); 
        this.appView.addJavascriptInterface(new Converse(), "android"); 
     //this.appView.addJavascriptInterface(new CameraLauncher(), "navigator"); 
    } 
    
    //返回启动结果
    @Override
    public void onActivityResult(int requestCode,int resultCode,Intent intent){
    	if(requestCode == QR_REQUEST  && resultCode == QR_REQUEST){
    		Bundle data = intent.getExtras();
    	}
    }
    
    @Override
    public void onPause(){
    	Log.d("DEBUG","----WebView Paused--------");
    }
    
    //启动二维码扫描
    @JavascriptInterface
    public void startQR(){
    	Log.d("DEBUG","----startQrScanner--------");
    	onPause();
    	try{
    		Intent intent=new Intent(FoodApp.this,CaptureActivity.class);
    		startActivity(intent);
    	}catch(Exception e){
    		Log.e("DEBUG ERROR","Start error",e);
    	}
    }
    
    //启动RFID
    @JavascriptInterface
    public void startRFID(){
    	Log.d("DEBUG","----startRFIDScanner--------");
    	onPause();
    	try{
    		Intent intent=new Intent(FoodApp.this,SecondActivity.class);
    		startActivity(intent);
    		
    	}catch(Exception e){
    		Log.e("DEBUG ERROR","Start error",e);
    	}
    }
}

