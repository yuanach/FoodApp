package com.cau.ws;

import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;

public interface FoodWebServices {
	public void initSoap() throws JSONException;
	public String login() throws JSONException;
	public List<String> uploadData(JSONObject packedJsn) throws JSONException;
}
