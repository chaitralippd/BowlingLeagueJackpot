
$(document).ready(function() {

$("#loginid").click(function(){
	


var data={
email: $('#username').val(),
 password: $('#password').val(),

}

var res=$.cookie("encodedString");
//alert(res);
$.ajax({
  type: 'POST',
  url: "http://bowling-api.nextcapital.com/api/login",
  data:JSON.stringify(data),

  success: function(data){
    alert(JSON.stringify(data));
     window.location="leagues.html";	

  },
  error: function(e) {
    console.log(e);
  },
  dataType: "json",
  contentType: "application/json",
  headers:{
	  "Authorization": "Basic "+res,
  }
  
  });
  
 });



});