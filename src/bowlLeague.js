
$(document).ready(function() {

$("#submit").click(function(){


var data=$('#bowlerid').val();

var legid=$('#leagueid').val();
var res=$.cookie("encodedString");
//alert(res);


$.ajax({
  type: "PUT",
  url: "http://bowling-api.nextcapital.com/api/leagues/"+legid+"/bowlers",
  data:JSON.stringify({"bowler_id":data}),
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