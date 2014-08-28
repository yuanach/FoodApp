package com.cau.plugin.data;

import org.json.JSONException;
import org.json.JSONObject;

public class Data {
	private JSONObject jsn;
	Data(){
		
	}
	
	public static JSONObject toJSONObject(String jstring) throws JSONException{
		JSONObject jsn=new JSONObject();	
		jstring=jstring.substring(1, jstring.length()-1); 
    	String jo[]=jstring.split(","); 
    	String jo2[];
    	for(int i=0;i<jo.length;i++){
    		jo[i]=jo[i].substring(1, jo[i].length()-1);
    		jo2=jo[i].split("\":");
    		if(jo2[1].equals("\"")) jo2[1]="";
    		else jo2[1]=jo2[1].substring(1, jo2[1].length());
    		System.out.println(jo2[0]+","+jo2[1]);   		
    		jsn.put(jo2[0], jo2[1]);
    	}
		return jsn;
	}
}
