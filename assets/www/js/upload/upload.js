/**
 * 
 */

$(document).ready(function(){
	$('#tem').hide();
	toastr.options={  "positionClass": "toast-bottom-full-width", "timeOut": "2000"};
	var div_content=$("#"+e_uploadId[e_upload[3]]);
//
$("#"+e_uploadId[e_upload[0]]).ready(function(){
	
	//
	$('a#entity').tap(function(){
		//
		if($("#"+e_uploadId[e_upload[2]]).length==0){
			var tag=food.create.HeadTag($("#divTem"),e_uploadId[e_upload[2]],e_uploadTypes);
			$("#"+e_uploadId[e_upload[1]]).after(tag).trigger("create");
		}
		
		//Get 3th level types
		//uploadObj=android.getTableLabels("entity");
		
		//
		tag.find("[id$='toContent']").tap(function(){ 
			
			div_content.empty(); //
			//$("#"+e_uploadId[e_upload[3]]).css(divs_upload);

			//Get 4th level types
			//objArray=android.getTextLabels($(this).attr("pos"));
			
			//
			var objList;
			objList=food.create.List($("#ulTem"),e_uploadId[e_upload[3]],uploadObj);
			div_content.append(objList).trigger("create");	
			
			//
			objList.find("[id$='item']").tap(function(){
				var pos=parseInt($(this).attr("pos"));
				var btn1=food.create.Button($('#aTem'),"submit","确定","true","false");
				var btn2=food.create.Button($('#aTem'),"cancel","取消","true","false");
				var input=food.create.InputList($("#divTem"),"input_list"
									,objArray[pos-1],$('#inputTem'),"plot");
				var div_input=food.create.Div($("#divTem"),"div_input");
				btn2.attr("href","#upload_e");
				//alert(pos);
				
				//div_content.empty();
				objList.detach();
				div_input.append(input).append(btn1).append(btn2).trigger("create");
				div_content.append(div_input).trigger("create");
				$.mobile.pageContainer.trigger("create");
				//
				btn1.tap(function(){
					if(food.upload.grap(input,objArray[pos-1],(objArray[pos-1]).toString())==false){
						
					}else{
						
					}
				});
				
				btn2.tap(function(){
					div_input.detach()
					div_content.append(objList.detach());
					//div_content.empty();
					//history.back();
					//window.location.href="upload.html#upload_e";
				});
			});
		});
	});	
});

/**/
	$("a#add").click(function(){
		if(div_content.find("#div_input").length==0){
			toastr.error("先选择上传项.");
			return;
		}
		var opt,optList;
		
		if($("#div_add").length==0){ 
			var h_height=$("[id$='header']").css("height");
			optList=food.create.aList($("#ulTem"),"",new Array("Picture","Video"),"dialog");
			//alert(optList.html());			
			opt=food.opt.add($("#divTem"),"div_add",optList)
						.css({"position":"absolute","width":"30%","top":h_height,"height":"20%","right":"2%"});
			$("#"+e_uploadId[e_upload[0]]).append(opt).trigger("create");
		}
		else{
			$("#div_add").detach();
		}
		
		/**/
		optList.find("[id$='item']").tap(function(){
			$("#div_add").detach();		
			var add_picture;
			var pos=parseInt($(this).attr("pos"));
			var div_input=div_content.find("#div_input");
			if(pos==1){	
				food.image.addEventListener();
				food.upload.imgDialog($("#ulTem"));
				$.mobile.changePage("#dialog","");
				add_picture=food.create.Div($("#divTem"),"add_picture");			
				div_input.detach();
				add_picture.html("<b></b>")
					.append(createButton($('#aTem'),"confirm","添加","true","false")
							.click(function(){
								add_picture.remove();
								div_input.detach();
								//$("#input_list").append("<span>--图片<span>").trigger("create");
								div_content.append(div_input);
								//$.mobile.pageContainer.trigger("create");
							})).trigger("create");
				
				div_content.append(add_picture).trigger("create");	
			}else{
				
			}
	   
		});
		//$.mobile.pageContainer.trigger("create");
	});
	
//
$(document).on("pagebeforeshow","#query",function(){
	//query_farm=$('div#query_farm').detach();
	});
$(document).on("pagebeforeshow","#query_farm",function(){
	
	});
});

/*
try{}
catch(err){alert(err);}

*/