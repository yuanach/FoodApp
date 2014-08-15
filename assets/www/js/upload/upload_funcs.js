 /**
 * 
 */
food.upload={
		"grap":function Upload(input,labels,obj){
			//var jsn={obj:[{},{}]};
			var jsn={};
			var i=0;
			input.find(":text").each(function(){	
				jsn[labels[i++]]=$(this).val();
			});
			//android.put(obj,jsn);
			return true;
		}
}

food.image={
		"pictureSource":navigator.camera.PictureSourceType,
		"destinationType":navigator.camera.DestinationType,
		"addEventListener":function(){
			document.addEventListener("deviceready",function(){},false);
		},
		"capturePhoto":function(){  
				// 使用摄像头拍照并返回一个base64-encoded字符串编码的图像数据
			  navigator.camera.getPicture(food.image.onPhotoDataSuccess, food.image.onFail, { 
				quality: 50,
			    destinationType: food.image.destinationType.DATA_URL });
		},
		"capturePhotoEdit":function(){
			// 使用摄像头拍照并返回一个base64-encoded字符串编码的图像数据，允许编辑
			  navigator.camera.getPicture(food.image.onPhotoDataSuccess, food.image.onFail, {
				  	quality: 20, 
				  	allowEdit: true,
				  	destinationType: food.image.destinationType.DATA_URL 
			    });
		},
		"getPhoto":function() {
			  // 从本地选择资源
			  navigator.camera.getPicture(food.image.onPhotoURISuccess, food.image.onFail, { 
				quality: 50,
			    destinationType: food.image.destinationType.FILE_URI,
			    sourceType: food.image.pictureSource.PHOTOLIBRARY
			    });
		},
		"onPhotoDataSuccess":function (imageData) {
			  var smallImage = document.getElementById('smallImage');
			  smallImage.style.display = 'block';
			  smallImage.src = "data:image/jpeg;base64," + imageData;
		},
		"onPhotoURISuccess":function(imageURI) {
			  var largeImage = document.getElementById('largeImage');
			  largeImage.style.display = 'block';
			  largeImage.src = imageURI;
			},
		"onFail":function(message) {
			  alert('Failed because: ' + message);
		}
}

food.upload={
		"imgDialog":function(ulTem){
		var dialog_list=
			food.create.List(ulTem,"ul",new Array("本地图片库","使用照相机"))
				.find("[id$='item']").click(function(){
					var pos=parseInt($(this).attr("pos"));
					if(pos==1){
						food.image.getPhoto();
					}else{
						food.image.capturePhoto();
					}
			});
		$("#dialog").append(dialog_list).trigger("create");	
		}
}




