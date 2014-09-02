package com.cau.transit;

import java.util.ArrayList;
import java.util.List;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.cau.foodapp.FoodApp;
import com.cau.foodapp.SecondActivity;
import com.cau.plugin.data.UserLogin;
import com.zbar.lib.CaptureActivity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.webkit.JavascriptInterface;

public class Converse extends CordovaPlugin{
	
	private static final int QR_REQUEST=0x11;
	private static final int RFID_REQUEST=0x11;
	public static final String ACTION = "call";
	
	/*
	 @Override  
	    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {  
	        if (action.equals(ACTION)) {  
	            try {    
	            	Intent intent = new Intent().setClass(cordova.getActivity(), Class.forName(args.getString(0)));  
	                this.cordova.startActivityForResult(this, intent, QR_REQUEST);  
	                //下面三句为cordova插件回调页面的逻辑代码  
	                PluginResult mPlugin = new PluginResult(PluginResult.Status.NO_RESULT);  
	                mPlugin.setKeepCallback(true);  
	                callbackContext.sendPluginResult(mPlugin);  
	                callbackContext.success("success");   
	                  
	            } catch (Exception e) {    
	                e.printStackTrace();  
	                return false;  
	            }  
	        }  
	  
	        return true;  
	    }  
	 */
	@JavascriptInterface
    public boolean wrap(String data) throws JSONException{
    	//System.out.println("---------"+data); 
    	//List<JSONObject> jsnlist=new ArrayList<JSONObject>();
    	JSONObject jsn=new JSONObject(data);  	
        return true;		
	} 
	
	@JavascriptInterface
	public void signInRequest(String username,String password) throws JSONException{
		UserLogin login=new UserLogin(username,password);
		login.login();
	}
	
	  //返回启动结果
    @Override
    public void onActivityResult(int requestCode,int resultCode,Intent intent){
    	if(requestCode == QR_REQUEST  && resultCode == QR_REQUEST){
    		Bundle data = intent.getExtras();
    	}
    }
    
    //启动二维码扫描
    @JavascriptInterface
    public void startQR(){
    	Log.d("DEBUG","----startQrScanner--------");
    	//onPause();
    	cordova.getActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
            	try{
                Context context = cordova.getActivity()
                        .getApplicationContext();
                Intent intent = new Intent(context, CaptureActivity.class);
                cordova.getActivity().startActivity(intent);
            	}catch(Exception e){
            		Log.e("DEBUG ERROR","Start error",e);
            	}
            }       
          }); 	
    }
    
    //启动RFID
    @JavascriptInterface
    public void startRFID(){
    	Log.d("DEBUG","----startRFIDScanner--------");
    	//onPause();
    	cordova.getActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
            	try{
                Context context = cordova.getActivity()
                        .getApplicationContext();
                Intent intent = new Intent(context, SecondActivity.class);
                cordova.getActivity().startActivity(intent);
            	}catch(Exception e){
            		Log.e("DEBUG ERROR","Start error",e);
            	}
            }       
          }); 	 	
    }
}
