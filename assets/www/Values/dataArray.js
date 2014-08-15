/**
 * 
 */
//样式列表
var divs={"position":"absolute","width":"100%","top":"10%","height":"100%","left":"0%","right":"0%"};
var divs_query={"position":"absolute","width":"50%","height":"50%","top":"20%","left":"25%","right":"%25"};
//var divs_upload={"position":"absolute","width":"50%","height":"50%","top":"30%","left":"25%","right":"%25"};
var divs_result={"position":"absolute","width":"100%","height":"82%","top":"10%","left":"0%","right":"0%"};
var divs_detail={"position":"absolute","width":"90%","height":"82%","top":"10%","left":"5%","right":"5%"};
var inputs={"position":"absolute","width":"inherit","height":"20px"};
var btns_submit={"position":"relative","top":"40%","right":"10%"};


//查询模块字符串资源
var p_query=new Array("p_queryPageId","p_queryHeaderId",
		"p_queryHeaderTagId","p_queryContentId",
		"p_queryWindowId","p_queryResultUlId");
var p_queryId={
		"p_queryPageId":"query_farm",                         //0查询页面
		"p_queryHeaderId":"query_farm_header",          //1页面标题
		"p_queryHeaderTagId":"farm_head_tag",        //2切换标签
		"p_queryContentId":"query_content",             // 3查询页面容器
		"p_queryWindowId":"query_window",             //4查询输入窗口
		"p_queryResultUlId":"query_content_ul_list",   //5 查询结果列表
		"":"",
		"":"",
		};

var p_queryTypes=new Array("企业农场","种植","视频图像","溯源码");
var p_queryTypeLen=p_queryTypes.length;
var p_keyStrings=new Array("请输入关键字","请输入关键字","请输入关键字","请输入溯源码");


//上传模块字符串资源
var e_upload=new Array("e_uploadPageId","e_uploadHeaderId",
		"e_uploadHeaderTagId","e_uploadContentId",
		"e_uploadWindowId","e_uploadUlId");
var e_uploadId={
		"e_uploadPageId":"upload_e",                         //0上传页面
		"e_uploadHeaderId":"upload_e_header",          //1页面标题
		"e_uploadHeaderTagId":"e_head_tag",        //2切换标签
		"e_uploadContentId":"upload_e_content",             // 3 页面容器
		"e_uploadWindowId":"upload_e_window",             //4上传界面
		"e_uploadUlId":"upload_e_ul_list",   //5 上传界面
		"":"",
		"":"",
		};

var uploadTypes=new Array("基础信息","设备资源","环境","视频图像");
var uploadTypeLen=uploadTypes.length;

var e_uploadTypes=new Array("企业农场","人力资源","",""); 
var e_uploadSubTypes=new Array("企业信息","农场","地块注册"," ");

var uploadObj=new Array("企业","农场","地块","用户");
//var objArray=new Array(new Array());
var ent=new Array();
var farm=new Array("farm_id","farm_name","farm_reg_time","farm_addr","farm_contact","farm_intro");
var plot=new Array("plot_epc","plot_id","plot_name","plot_size","farm_id","farm_name","plot_reg_time");
var objArray=new Array(ent,farm,plot);
//数据
var strArray,strList;
var array,list;













