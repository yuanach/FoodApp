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
    public boolean put(String obj,String jsn) throws JSONException{
    	System.out.println(obj+"---------"+jsn); 
    	//JSONObject jo=new JSONObject();
    	jsn=jsn.substring(1, jsn.length()-1);
    	String objArray[]=obj.split(",");
    	
    	String jo[]=jsn.split(","); //
    	String jo2[];
    	/*
    	for(int i=0;i<objArray.length;i++){
    		jo2[i]=new String[objArray.length];
    	}
    	*/
    	List<String[]> list= new ArrayList<String[]>();
    	
    	for(int i=0;i<jo.length;i++){
    		//System.out.println(jo[i]);
    		jo[i]=jo[i].substring(1, jo[i].length()-1);
    		jo2=jo[i].split("\":");
    		if(jo2[1].equals("\"")) jo2[1]="";
    		else jo2[1]=jo2[1].substring(1, jo2[1].length());
    		//System.out.println(jo2[0]+","+jo2[1]);
    		list.add(jo2);
    	}
    	System.out.println(list.toString());
        return true;		
	} 
}
