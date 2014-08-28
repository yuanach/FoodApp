package com.cau.transit;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;

import com.cau.plugin.data.UserLogin;

import android.webkit.JavascriptInterface;

public class Converse {
	
	@JavascriptInterface
    public boolean wrap(String metaDatas,String jstring,String imgs,String videos) throws JSONException{
    	//System.out.println("---------"+imgs); 
    	List<JSONObject> jsnlist=new ArrayList<JSONObject>();
    	jsnlist.add(new JSONObject(jstring));
    	jsnlist.add(new JSONObject(metaDatas));
    	jsnlist.add(new JSONObject(imgs));
    	jsnlist.add(new JSONObject(videos));
    	
        return true;		
	} 
	
	@JavascriptInterface
	public void signInRequest(String username,String password){
		UserLogin login=new UserLogin(username,password);
	}
	
}
