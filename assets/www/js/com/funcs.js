/**
 * 
 */

	//¥¥Ω®«–ªª±Í«©
function createHeadTag(divTem,tag_id,types){
	var tag_className="tags";
	var tag_num=types.length;
	var tag;
	var aId="toContent";
	setDivTemplate(divTem,tag_className,tag_id);
	tag=createHeadTagTemplate(tag_num,aId);
	for(var i=0;i<tag_num;i++){
		tag.find("li").eq(i).find("a").text(types[i]);
	}
	//alert(tag.html());
	return tag;
}

function createInputList(divTem,InputNum,lables,inputTem,frtId){
	var div=divTem.clone();
	var input;
	var lable;
	var table,tr;
	table=createTable();
	div.append(table).trigger("create");
	div.attr("data-role","fieldcontain");
	for(var i=1;i<=InputNum;i++){
		input=inputTem.clone();
		input.attr({"id":frtId+"_"+i,"data-role":"text","type":"text","name":lables[i-1]});
		lable=insertLable(input,lables[i-1]);
		tr=createTableLine();
		div.find("table").append(tr).trigger("create");
		div.find("table tr").last().find("td").eq(0).append(lable).trigger("create");
		div.find("table tr").last().find("td").eq(1).append(input).trigger("create");
	}
	return div;
}

function createDetail(divUl,json){
	var ul=divUl.clone();
	ul.attr("data-role","listview");
	var strlist;
	for(var i in json){
		strlist="<li>"+i+":  "+"<span>"+json[i]+"</span></li>";
		ul.append(strlist);
	}
	//alert(ul.html())
	return ul;
}





