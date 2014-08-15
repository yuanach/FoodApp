/**
 * 
 */



$(document).ready(function(){
	$('#tem').hide();
	$('#hideGallery').hide();
	
try{
//查询页面
$("#"+p_queryId[p_query[0]]).ready(function(){
	
	//查询页面加载,
	$('a#farm').tap(function(){
		if($("#"+p_queryId[p_query[2]]).length==0){
			//创建切换标签
		var tag=createHeadTag($("#divTem"),p_queryId[p_query[2]],p_queryTypes);
		$("#"+p_queryId[p_query[1]]).after(tag).trigger("create");
		}
		//响应标签，查询
		tag.find("[id$='toContent']").tap(function(){ 
			var div_content=$("#"+p_queryId[p_query[3]]);
			div_content.empty(); //隐藏响应内容
			if($(this).attr("pos")=="3"){
				$("#Gallery a").photoSwipe();
				div_content.css(divs);
				//$.mobile.pageContainer.trigger("create");
				var gallery=$('#Gallery').clone(true);
				//gallery.photoSwipe();
				div_content.append(gallery);
			
			}
			else{
			div_content.css(divs_query);
			var content=createDiv($('#divTem'),p_queryId[p_query[4]]);
			//关键字输入
			var input_id=tag.attr("id")+"_input";
			var input=createInputText($('#inputTem'),input_id);
			var btn=createButton($('#aTem'),"submit","查询","true","false");
			content.append(input).trigger("create");
			input.attr("placeholder",p_keyStrings[parseInt($(this).attr("pos"))-1]);
			content.append(btn).trigger("create");	
			div_content.append(content).trigger("create");				
			//查询
			btn.tap(function(){
				var res;
				setUlTemplate($("#ulTem"),p_queryId[p_query[3]]);
				res=createList(5);
				content.hide();
				div_content.append(res).trigger("create");	
				div_content.css(divs_result);
				//列表项内容显示处理
				res.find("[id$='item']").tap(function(){
					res.hide();
					var pos=$(this).attr("pos");
					var detail=createDetail($('#ulTem'),p_queryId);
					var rt=createButton($('#aTem'),"return","返回","true","false");
					detail.append(rt);
					div_content.append(detail).trigger("create");
					rt.click(function(){
						detail.hide();
						res.show();
					});
				});
			});
		}/*end_else*/
		});/**/
	});	/**/
});/**/

//页面切换处理
$(document).on("pagebeforeshow","#query",function(){
	//query_farm=$('div#query_farm').detach();
	});
$(document).on("pagebeforeshow","#query_farm",function(){
	
	});

}catch(err){alert(err);}
});

/*
try{}
catch(err){alert(err);}

*/