package com.cau.ws;

import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;

public interface FoodWebServices {
	public void initSoap() throws JSONException;
	public JSONObject login() throws JSONException;
	public JSONObject uploadData() throws JSONException;
}
