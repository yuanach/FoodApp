/**
 * 
 */

(function(){
    var food={},
        myDevice,
        create,
        image,
        location,
        file,
        dialogs,
        scanner,
        upload;

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady(){
        myDevice=
            food.myDevice={
                model:device.model,
                cordova:device.cordova,
                platform:device.platform,
                uuid:device.uuid,
                version:device.version,
                name:device.name
            };
        image.pictureSource=navigator.camera.PictureSourceType;
        image.destinationType=navigator.camera.DestinationType;
    }

    create=
    food.create={
        grid:function(){},
        addBlock:function(grid){
            var imglength=food.upload.img.length;
            if( imglength!=0){
                var i=( imglength-1) % 3;
                var turn;
                switch(i){
                    case 0: turn="ui-block-a"; break;
                    case 1: turn="ui-block-b"; break;
                    case 2: turn="ui-block-c"; break;
                }
                grid.children("div")
                    .append("<div class=\""+turn+"\"><img src=\"\"></div>")
                        .trigger("create");
                grid.children("div").last().find("img").src="data:image/jpeg;base64,"+food.upload.img[imglength-1];
            }
            //
        }
    };

    image=
    food.image={
        img:"",
    initImage:function(){
        this.img="";
        this.imgView="";
    },
    capturePhoto:function(){
        // 使用摄像头拍照并返回一个base64-encoded字符串编码的图像数据
        navigator.camera.getPicture( this.onPhotoDataSuccess,  this.onFail, {
            quality: 50,
            destinationType: image.destinationType.DATA_URL });
    },
    capturePhotoEdit:function(){
        // 使用摄像头拍照并返回一个base64-encoded字符串编码的图像数据，允许编辑
        navigator.camera.getPicture( this.onPhotoDataSuccess,  this.image.onFail, {
            quality: 20,
            allowEdit: true,
            destinationType: image.destinationType.DATA_URL
        });
    },
    getPhoto:function(callback) {
        this.callback=callback;
        // 从本地选择资源
        navigator.camera.getPicture(this.onPhotoDataSuccess, this.onFail, {
            quality: 50,
            destinationType:  image.destinationType.DATA_URL,
            sourceType: image.pictureSource.PHOTOLIBRARY
        });
    },
    onPhotoDataSuccess:function (imageData) {
        image.img=imageData;
        image.imgView="data:image/jpeg;base64," + imageData;
        image.callback();
    },
    onPhotoURISuccess:function(imageURI) {
        var largeImage = document.getElementById('largeImage');
        //largeImage.style.display = 'block';
        largeImage.src = imageURI;
    },
    onFail:function(message) {
        //alert('Failed because: ' + message);
    }
};

    location=
    food.location={
        initLocator:function(maximumAge,timeout,enableHighAccuracy){
            location.position={};
            var options={};
            try{
                options={
                    maximumAge: (maximumAge != undefined && typeof maximumAge == "number" )?maximumAge:3000,
                    timeout: (timeout != undefined && typeof timeout == "number" )?timeout:5000,
                    enableHighAccuracy: (enableHighAccuracy  != undefined && typeof enableHighAccuracy == "boolean" )?enableHighAccuracy:false
                };
            }catch(err){
                console.log("OPTIONS' initialization failed: "+err);
            }
            location.options=options;
            location.watchID=null;
            this.addEventListener();
        },
        getCurrentPosition:function(callback){
            this.callback=callback;
            navigator.geolocation.getCurrentPosition(
                location.geolocationSuccess,
                location.geolocationError,
                location.options);
        },
        watchPosition:function(){
            navigator.geolocation.watchPosition(
                location.geolocationSuccess,
                location.geolocationError,
                location.options);
        },
        clearWatch:function(){
            if (location.watchID != null) {
                navigator.geolocation.clearWatch(location.watchID);
                location.watchID = null;
            }
        },
        geolocationSuccess:function(position){
            console.log("Get position information Successfully.");
            location.position=position;
            location.retrieval();
        },
        geolocationError:function(err){
            location.retrieval();
            console.log("Get position information failed: "+err);
        },
        retrieval:function(){
            this.callback(location.position);
        }
    };

    file=
    food.file={

    };

    sacnner=
    food.scanner={
      qrScanner:function(){
          native.startQR();
      },
      rfidReader:function(){
          native.startRFID();
      }
    };
    dialogs=
    food.dialogs={
        showAlert:function(message,title,buttonName){
            navigator.notification.alert(
                message,
                this.alertDismissed,
                title,
                buttonName
            );
        },
        showConfirm:function(message,title,buttonLabels){
            navigator.notification.confirm(
                message,
                this.onConfirm,
                title,
                buttonLabels
            );
        },
        showPrompt:function(message,title,buttonLabels,defaultText) {
            navigator.notification.prompt(
                message,
                this.onPrompt,
                title,
                buttonLabels,
                defaultText
            );
        },
        alertDismissed:function(){

        },
        onConfirm:function(buttonIndex){
           // alert('You selected button ' + buttonIndex);
        },
        onPrompt:function(results){
          //  alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
        }
    };

    upload=
    food.upload = {
        initUpload:function(){
            this.img={};
            this.video={};
            this.metaData={
                obj:"",
                position:{},
                comments:{}
            };
         },
        wrap:function() {
             android.wrap(
                 JSON.stringify(upload.metaData),
                 JSON.stringify(upload.jsn),
                JSON.stringify(upload.img),
                JSON.stringify(upload.video));
            // return true;
        },
        onSubmit:function (obj, jsn) {
            this.jsn = jsn;
            this.metaData.obj=(obj != undefined)?obj:"";
            location.getCurrentPosition(function(position){
                    upload.metaData.position=position;
            });
            upload.wrap();
        },
        addImage:function (type, image_count,callback) {
             this.image_count=image_count;
             this.callback=callback;
               image[type](function(){
                   if (image.img.length != 0) {
                       upload.img[upload.image_count] = image.img;
                       upload.callback();
                   }
               });
        },
        "addVideo":function (type, video_count) {
            //  food.image[type]();
            // food.upload.video[video_count]=null;
        }
    };

    window.food=food;
})();