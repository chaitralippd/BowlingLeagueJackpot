
$(document).ready(function() {

$("#bowlerid").click(function(){

var data=$('#bowler').val();

var res=$.cookie("encodedString");
//alert(res);

$.ajax({
  type: 'POST',
  url: "http://bowling-api.nextcapital.com/api/bowlers",
  data:JSON.stringify({"name": data}),
  success: function(data){
    var res1=JSON.stringify(data); 
	document.getElementById("result").innerHTML=res1;
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