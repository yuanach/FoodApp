package com.cau.plugin.data;

import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;

import android.webkit.JavascriptInterface;

public class Upload {
	
	List<JSONObject> rawList;
	
	public Upload(List<JSONObject> rawList){
		this.rawList=rawList;
	}
	public List<JSONObject> addIdentification(List<JSONObject> list){
		return list;
	}
	public void uploadPackedData(){
		
	}
	
}
