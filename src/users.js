$(document).ready(function() {

//var encodedString;

$("#userid").click(function(){
	var data={
email: $('#username').val(),
password: $('#password').val(),

}

var encoded=btoa(fname.username.value+":"+fname.password.value);
//alert(encoded);
$.cookie("encodedString",encoded,{ expires: 7, path: '/' }); 
//var s=$.cookie("encodedString");
//alert(s);

$.ajax({
  type: 'POST',
  url: "http://bowling-api.nextcapital.com/api/users",
  data:JSON.stringify(data),
  success: function(data){
    alert(JSON.stringify(data)); 

  },
  error: function(e) {
    console.log(e);
  },
  dataType: "json",
  contentType: "application/json",
     
});

});
});