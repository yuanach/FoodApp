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
        //android����js���� 
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
    	 String[] str1={"�ؿ���","�ؿ�����","�ؿ��С","�ؿ�λ��","����ũ��"};
    	 String[] str2={"000001","��ũ-P0001","422","�й�ũҵ��ѧ","�й�ũҵ��ѧ"};
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
