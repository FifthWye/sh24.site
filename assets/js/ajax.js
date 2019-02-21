var ajax = new XMLHttpRequest();
var method = "GET";
var url = "assets/php/connection.php";
var asynchronous = true;

ajax.open(method,url,asynchronous);
//sending ajax request 
ajax.send();

//response from data.php
ajax.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        console.log(data);
    }
}