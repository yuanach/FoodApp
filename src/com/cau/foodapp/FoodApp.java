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

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.webkit.JavascriptInterface;

import org.apache.cordova.*;

import com.cau.transit.Converse;
import com.zbar.lib.CaptureActivity;

public class FoodApp extends CordovaActivity 
{

    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState); 
        super.init(); 
        
        super.loadUrl(Config.getStartUrl());  
        //super.loadUrl("file:///android_asset/www/index.html")
       // 
        this.appView.addJavascriptInterface(new Converse(), "android"); 
     //this.appView.addJavascriptInterface(new CameraLauncher(), "navigator"); 
    } 
    
  
    @Override
    public void onPause(){
    	super.onPause();
    	Log.d("DEBUG","----WebView Paused--------");
    }
    
}

