
$(document).ready(function() {

$("#submit").click(function(){

var data=$('#bowlerid').val();

var legid=$('#leagueid').val();
var lotid=$('#lotteryid').val();
	
	
var res=$.cookie("encodedString");

$.ajax({
  type: "POST",
  url: "http://bowling-api.nextcapital.com/api/leagues/"+legid+"/lotteries/"+lotid+"/tickets",
  data:JSON.stringify({"bowler_id": data}),
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