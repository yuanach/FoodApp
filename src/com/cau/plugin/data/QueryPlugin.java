package com.cau.plugin.data;

import java.util.*;

import android.webkit.WebView;

import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;

public class QueryPlugin  extends CordovaPlugin{
	private  CordovaWebView webview;
	private CordovaInterface cord;
	
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		System.out.println("Action---------"+action);
		if (action.equals("greet")) {
            String message = "If you can see me, so it works.";
            this.greet(message, callbackContext);
            return true;
        }
        return false;
    }

	public QueryPlugin(CordovaInterface cordova,CordovaWebView webView){
		   //initialize(cordova, webView);
		    // your init code here
	}
	
	@Override
	public void initialize(CordovaInterface cordova, CordovaWebView webView) {
	    super.initialize(cordova, webView);
	    // your init code here
	}

	private void greet(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
        	System.out.println("---------"+message);
            callbackContext.success(message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }

}
