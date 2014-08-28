package com.cau.ws;

import java.io.IOException;
import java.util.ArrayList;
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
	private JSONArray properties;
	private String methodName;
	

	
	private FoodWS(){
		super();
		targetNameSpace=Param.targetNameSpace;
		serviceUrl=Param.serviceUrl;
		version=Param.VER;
	}
	public FoodWS(String methodName,JSONArray properties){
		this();
		this.methodName=methodName;
		this.properties=properties;
	}

	public FoodWS(int version, String targetNameSpace, String serviceUrl,
			JSONArray properties, String methodName) {
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
	public JSONArray getProperties() {
		return properties;
	}
	
	@Override
	public void initSoap() throws JSONException {
		this.request=new SoapObject(targetNameSpace,methodName);
		for(int i=0;i<properties.length();i+=2){
			request.addProperty(properties.getString(i),properties.getString(i+1));
		}
		this.envelope=new SoapSerializationEnvelope(version);
		envelope.dotNet=true;
		envelope.bodyOut=request;
		this.ht=new HttpTransportSE(serviceUrl);
		ht.debug=true;
	}
	
	@Override
	public List<String> uploadData(JSONObject packedJsn) throws JSONException {
		List<String> reslist=new ArrayList<String>();
		
		initSoap();
		
		try {
			ht.call(targetNameSpace+methodName,envelope);
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (XmlPullParserException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		try{
			result=(SoapObject)envelope.getResponse();
			int count=result.getPropertyCount();
			for(int i=0;i<count;i++){
				reslist.add(result.getProperty(i).toString());
			}
		}catch(Exception e){
			System.out.println(e);
			reslist.add(e.toString());
		}
		return reslist;
	}
	
	@Override
	public String login() throws JSONException {
		
		String res;
		initSoap();
		
		try {
			ht.call(targetNameSpace+methodName,envelope);
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (XmlPullParserException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		try{
			result=(SoapObject)envelope.getResponse();
			res=result.getProperty(0).toString();
		}catch(Exception e){
			System.out.println(e);
			res=e.toString();
		}
		return res;
	}
	
	
}
