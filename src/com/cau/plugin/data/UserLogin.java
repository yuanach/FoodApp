package com.cau.plugin.data;

import com.cau.ws.FoodWS;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class UserLogin {
	private String username;
	private String passwd;
	FoodWS loginWS;
	public UserLogin(String username, String passwd) {
		super();
		this.username = username;
		this.passwd = passwd;
	}
	public void login() throws JSONException{
		
		JSONArray account=new JSONArray("{'username':'"+username+"','password':'"+passwd+"'}");
		loginWS=new FoodWS("login",account);
		String res=loginWS.login();
	}
}
