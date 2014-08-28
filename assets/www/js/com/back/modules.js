/**
 * 模块操作
 */
 
 //查询模块
 
 //创建查询模块
 function createQueryTemplate(arg){
 	return tem;
 }
 
 function deleteQueryTemplate(arg){
 	$(arg).remove();
 }
 
 	//divTem属性
 	var divTem,className,divId;
 	var ulTem,ulId;
 function setDivTemplate(a_divTem,a_className,a_divId){
 	divTem=a_divTem.clone();
 	className=a_className;
 	divId=a_divId;
 }
 
  function setUlTemplate(a_ulTem,a_ulId){
 	ulTem=a_ulTem;
 	ulId=a_ulId;
 }
  
  function createDiv(a_divTem,a_divId){
	  var div=a_divTem.clone();
	  div.attr("id",a_divId);
	  return div;
  }
 //创建切换标签
 function createHeadTagTemplate(tagNum,aId){
 	var tag=divTem.clone();
 	tag.addClass(className);
 	tag.attr({"id":divId,"data-role":"navbar","data-position":"fixed"});
 	tag.append("<ul></ul>").trigger("create");
 	for(var i=1;i<=tagNum;i++){		
 		tag.find("ul").append("<li><a id=\""+aId+"\" pos=\""+i+"\"></a></li>").trigger("create");
 		
 	}
 	//alert(tag.html());
 	return tag;
 }
 
 //网格布局属性
 var low=new Array("a","b","c","d","e");
 //创建网格布局
 function createGridLayout(rowNum,colNum){

 }
 
 function insertLable(obj,value){
		var lable="<lable for=\""+obj.attr("id")+"\">"+value+": "+"</lable>";
		return lable;
	}

function createTable(){
	var table="<table></table>";
	return table;
}

function createTableLine(){
	var tr="<tr><td></td><td></td></tr>";
	return tr;
}
 
//
function createInputText(inputTem,inputId){
	var input=inputTem.clone();
	input.attr({"id":inputId});
	return input;
}

function createButton(aTem,btnId,text,inline,mini){
	var btn=aTem.clone();
	btn.attr({"id":btnId,"data-role":"button","data-inline":inline,"data-mini":mini});
	btn.text(text);
	return btn;
}

function createList(rowNum,text){
 	var ul=ulTem.clone();
 	ul.attr({"id":ulId+"_ul_list","data-role":"listview"});
 	for(var i=1;i<=rowNum;i++){
 		ul.append("<li ><a id=\"item\" pos=\""+i+"\">"+text[i-1]+"</a></li>").trigger("create");
 	}
 	return ul;
 }


 