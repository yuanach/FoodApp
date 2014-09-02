/**
 * Created with JetBrains WebStorm.
 * User: Chen Yuan
 * Date: 14-8-19
 * Time: 下午5:01
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function(){
    var content=$("#content");
    content.append($("div#list_item").clone(true)).trigger("create");
    //$("div#footer").detach();
});