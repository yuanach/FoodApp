 /**
 * 



food.image={
		"pictureSource":navigator.camera.PictureSourceType,
		"destinationType":navigator.camera.DestinationType,
		"addEventListener":function(){
			document.addEventListener("deviceready",function(){},false);
		},
		"capturePhoto":function(){  
				// ʹ������ͷ���ղ�����һ��base64-encoded�ַ��������ͼ������
			  navigator.camera.getPicture(food.image.onPhotoDataSuccess, food.image.onFail, { 
				quality: 50,
			    destinationType: food.image.destinationType.DATA_URL });
		},
		"capturePhotoEdit":function(){
			// ʹ������ͷ���ղ�����һ��base64-encoded�ַ��������ͼ�����ݣ�����༭
			  navigator.camera.getPicture(food.image.onPhotoDataSuccess, food.image.onFail, {
				  	quality: 20, 
				  	allowEdit: true,
				  	destinationType: food.image.destinationType.DATA_URL 
			    });
		},
		"getPhoto":function() {
			  // �ӱ���ѡ����Դ
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
			food.create.List(ulTem,"ul",new Array("����ͼƬ��","ʹ�������"))
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

 */


