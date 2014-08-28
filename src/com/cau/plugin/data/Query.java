package com.cau.plugin.data;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.webkit.JavascriptInterface;

public class Query {
	
	@JavascriptInterface 
    public JSONObject run(String str) throws JSONException { 
        //android调用js代码 
       // FoodApp.this.appView.loadUrl("javascript:getNode3()"); 
        JSONObject obj= new JSONObject();
        JSONArray array=new JSONArray();
        obj.put("hello", "world");
        obj.put("hello", "foodapp");
        array.put(obj);
        System.out.println(obj);
        System.out.println(array);
        return obj;
    } 
    
    @JavascriptInterface 
    public JSONObject getList(String str) throws JSONException{
    	System.out.println("---------"+str);
    	 JSONObject obj= new JSONObject();
    	 String[] str1={"地块编号","地块名称","地块大小","地块位置","所属农场"};
    	 String[] str2={"000001","中农-P0001","422","中国农业大学","中国农业大学"};
		for(int i=0;i<5;i++){
			obj.put(str1[i],str2[i]);
		}
		JSONArray array=new JSONArray();
		array.put(obj);
    	//JSONArray jlist=null;
        return obj;		
	} 
    
    @JavascriptInterface
    public boolean wrap(String obj,String jstring,String img,String video) throws JSONException{
    	System.out.println("---------"+jstring); 
    	JSONObject jsn=Data.toJSONObject(jstring);
    	System.out.println(jsn); 
        return true;		
	} 
   
}
