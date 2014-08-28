food.create={
		"Div":function(a_divTem,a_divId){
			  return a_divTem.clone().attr("id",a_divId);
			  }
		,
		"HeadTagTemplate":
			function (divTem,divId,tagNum,aId){  
		 	var tag=
		 		divTem.clone().attr({"id":divId,"data-role":"navbar","data-position":"fixed"})
		 			.append("<ul></ul>").trigger("create");
		 	for(var i=1;i<=tagNum;i++){		
		 		tag.find("ul").append("<li><a id=\""+aId+"\" pos=\""+i+"\"></a></li>").trigger("create");
		 	}
		 	return tag;
		 }
		,
		"GridLayout":
			function (rowNum,colNum){ 
		 }
		,
		"Table":
			function(){
			return "<table></table>";
		}
		,
		"TableLine":
			function(){
			return "<tr><td></td><td></td></tr>";
		}
		,
		"InputText":
			function(inputTem,inputId){
			return inputTem.clone().attr({"id":inputId});
		}
		,
		"Button":
			function(aTem,btnId,text,inline,mini){
			return  aTem.clone()
					.attr({"id":btnId,"data-role":"button","data-inline":inline,"data-mini":mini})
						.text(text);
		}
		,
		"List":
			function(ulTem,ulId,text){
		 	var ul=
		 		ulTem.clone()
		 			.attr({"id":ulId+"_ul_list","data-role":"listview"});
		 	for(var i=1;i<=text.length;i++){
		 		ul.append("<li ><a id=\"item\" pos=\""+i+"\">"+text[i-1]+"</a></li>").trigger("create");
		 	}
		 	return ul;
		 },
		 "aList":
				function(ulTem,ulId,text,rel){
			 	var ul=
			 		ulTem.clone()
			 			.attr({"id":ulId+"_ul_list","data-role":"listview"});
			 	for(var i=1;i<=text.length;i++){
			 		ul.append("<li ><a " +
			 				"id=\"item\" " +
			 				"data-rel=\""+rel+"\" "+
			 				"pos=\""+i+"\">"+text[i-1]+
			 				"</a></li>").trigger("create");
			 	}
			 	return ul;
			 }
		,
		"HeadTag":
			function (divTem,tag_id,types){
			var tag_className="tags";
			var tag_num=types.length;
			var tag;
			var aId="toContent";
			tag=food.create.HeadTagTemplate(divTem,tag_id,tag_num,aId);
			for(var i=0;i<tag_num;i++){
				tag.find("li").eq(i).find("a").text(types[i]);
			}
			return tag;
		}
		,
		"InputList":
			function(divTem,divId,lables,inputTem,frtId){
			var div=divTem.clone();
			var input;
			var lable;
			var table,tr;
			table=food.create.Table();
			div.append(table).trigger("create");
			div.attr({"id":divId,"data-role":"fieldcontain"});
			for(var i=1;i<=lables.length;i++){
				input=inputTem.clone();
				input.attr({"id":frtId+"_"+i,"data-role":"text","type":"text","name":lables[i-1]});
				lable=food.insert.Lable(input,lables[i-1]);
				tr=createTableLine();
				div.find("table").append(tr).trigger("create");
				div.find("table tr").last().find("td").eq(0).append(lable).trigger("create");
				div.find("table tr").last().find("td").eq(1).append(input).trigger("create");
			}
			return div;
		}
		,
		"Detail":
			function (divUl,json){
			var ul=divUl.clone().attr("data-role","listview");
			var strlist;
			for(var i in json){
				strlist="<li>"+i+":  "+"<span>"+json[i]+"</span></li>";
				ul.append(strlist);
			}
			return ul;
		}
		,
		"dialog":function(divTem,divId,title){
			return 
				divTem.clone()
					.attr({"id":divId,"data-role":"page"})
						.append(divTem.clone()
							.attr("data-role","page")
								.append("<h1>"+title+"</h1>"))
							.trigger("create");
		},
		"":""
};
food.insert={
		"Lable":
			function(obj,value){
			return "<lable for=\""+obj.attr("id")+"\">"+value+": "+"</lable>";
		}
		,
		"image":function(divId){
			$("#"+divId).append(this).trigger("create");
		}
};