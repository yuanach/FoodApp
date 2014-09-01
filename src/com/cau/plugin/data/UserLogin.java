package com.cau.plugin.data;

import com.cau.ws.FoodWS;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class UserLogin {
	private String username;
	private String passwd;
	FoodWS loginWS;
	private JSONObject res;
	public UserLogin(String username, String passwd) {
		super();
		this.username = username;
		this.passwd = passwd;
	}
	public void login() throws JSONException{
		
		JSONObject account=new JSONObject("{'username':'"+username+"','password':'"+passwd+"'}");
		loginWS=new FoodWS("login",account);
		res=loginWS.login();
	}
}
