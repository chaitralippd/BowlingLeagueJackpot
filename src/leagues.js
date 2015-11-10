$(document).ready(function() {
$("#leagueid").click(function(){

var data=$('#league').val();
//alert(data);

var res=$.cookie("encodedString");
//alert(res);

$.ajax({
  type: 'POST',
  url: "http://bowling-api.nextcapital.com/api/leagues",
 data:JSON.stringify({"name": data}),
  success: function(data){
    var res=JSON.stringify(data); 
	document.getElementById("result").innerHTML=res;
   //window.location="bowler.html";	
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