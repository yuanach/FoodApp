package com.cau.transit;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;

import com.cau.plugin.data.UserLogin;

import android.content.Context;
import android.content.Intent;
import android.webkit.JavascriptInterface;

public class Converse {
	
	@JavascriptInterface
    public boolean wrap(String data) throws JSONException{
    	//System.out.println("---------"+imgs); 
    	//List<JSONObject> jsnlist=new ArrayList<JSONObject>();
    	JSONObject jsn=new JSONObject(data);  	
        return true;		
	} 
	
	@JavascriptInterface
	public void signInRequest(String username,String password) throws JSONException{
		UserLogin login=new UserLogin(username,password);
		login.login();
	}
	
	@JavascriptInterface
	public void qrScanner(){
	}
	
}
