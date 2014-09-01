package com.cau.plugin.data;

import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;

import com.cau.ws.FoodWS;

import android.webkit.JavascriptInterface;

public class Upload {
	
	JSONObject rawObject;
	JSONObject oneObject;
	final String methodName="upload";
	FoodWS uploadWS;
	public Upload(List<JSONObject> rawList){
		//this.rawList=rawList;
	}
	public List<JSONObject> addIdentification(List<JSONObject> list){
		return list;
	}
	public void toJSONObject(JSONObject jsn){
		
	}
	public void uploadPackedData(){
		//uploadWS=new FoodWS(methodName);
	}
	
}
