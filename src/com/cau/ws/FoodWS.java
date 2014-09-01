package com.cau.ws;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.ksoap2.SoapEnvelope;
import org.ksoap2.serialization.MarshalBase64;
import org.ksoap2.serialization.SoapObject;
import org.ksoap2.serialization.SoapSerializationEnvelope;
import org.ksoap2.transport.HttpTransportSE;
import org.xmlpull.v1.XmlPullParserException;

public class FoodWS implements FoodWebServices{

	private SoapObject request;
	private SoapObject result;
	private SoapSerializationEnvelope envelope;
	private HttpTransportSE ht;
	private int version;
	private String targetNameSpace;
	private String serviceUrl;
	private JSONObject properties;
	private String methodName;
	

	
	private FoodWS(){
		super();
		targetNameSpace=Param.targetNameSpace;
		serviceUrl=Param.serviceUrl;
		version=Param.VER;
	}
	public FoodWS(String methodName,JSONObject  properties){
		this();
		this.methodName=methodName;
		this.properties=properties;
	}

	public FoodWS(int version, String targetNameSpace, String serviceUrl,
			JSONObject  properties, String methodName) {
		super();
		this.version = version;
		this.targetNameSpace = targetNameSpace;
		this.serviceUrl = serviceUrl;
		this.properties = properties;
		this.methodName = methodName;
	}
	
	public int getVersion() {
		return version;
	}
	public String getTargetNameSpace() {
		return targetNameSpace;
	}
	public String getServiceUrl() {
		return serviceUrl;
	}
	public SoapObject getRequest() {
		return request;
	}
	public SoapObject getResult() {
		return result;
	}
	public SoapSerializationEnvelope getEnvelope() {
		return envelope;
	}
	public HttpTransportSE getHt() {
		return ht;
	}
	public String getMethodName() {
		return methodName;
	}	
	public JSONObject  getProperties() {
		return properties;
	}
	
	@Override
	public void initSoap() throws JSONException{
		this.request=new SoapObject(targetNameSpace,methodName);
		Iterator it=properties.keys();
		while(it.hasNext()){
			String key=(String)it.next();
			String value;
			value = properties.getString(key);
			request.addProperty(key,value);
		}
		request.getAttribute(0);
		this.envelope=new SoapSerializationEnvelope(version);
		envelope.dotNet=true;
		envelope.bodyOut=request;
		this.ht=new HttpTransportSE(serviceUrl);
		ht.debug=true;
	}
	
	@Override
	public JSONObject uploadData() throws JSONException {
		JSONObject reslist=new JSONObject();
		String[] attr={"isSuccess","isFault","message"};	
		initSoap();
		
		try {
			ht.call(targetNameSpace+methodName,envelope);
		} catch (IOException e1) {
			e1.printStackTrace();
		} catch (XmlPullParserException e1) {
			e1.printStackTrace();
		}
		
		try{
			result=(SoapObject)envelope.getResponse();
			result.getProperty("isSuccess");
			result.getProperty("isFault");
			int count=result.getPropertyCount();
			for(int i=0;i<attr.length;i++){
				reslist.put(attr[i], result.getProperty(attr[i]));
			}
		}catch(Exception e){
			System.out.println(e);
				reslist.put("isFault", "2");
				reslist.put("message", "Soap transport error!");
		}
		return reslist;
	}
	
	@Override
	public JSONObject login() throws JSONException{
		
		JSONObject res=new JSONObject();
		initSoap();
		
		try {
			ht.call(targetNameSpace+methodName,envelope);
		} catch (IOException e1) {
			e1.printStackTrace();
		} catch (XmlPullParserException e1) {
			e1.printStackTrace();
		}
		try{
			result=(SoapObject)envelope.getResponse();
			res.put("isFault", result.getProperty("isFault"));
			res.put("message", result.getProperty("message"));
		}catch(Exception e){
			System.out.println(e);
			res.put("isFault", "1");
			res.put("message", e.toString());
		}
		return res;
	}
	
	
}
