$(document).ready(function(){

$("#send-button").click(function(event){
	  event.preventDefault();
	  message = $("#chat-message").val();
	  $("#chat-message").val('');
	  $(".messages_container").append('<div class="row"><div class="col-lg-6 col-md-offset-3"><p class="bg-primary chat-box">'+message+'</p></div></div>');
		 sendMessageToWit(message);
		});


	//Getting the query string 
 
 var queryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
  return query_string;
}();
 
 console.log(queryString.order_id);
 $("body").append('<input type="hidden" value="'+queryString.order_id+'" id="orderid">');

});



function sendMessageToWit(message) {
	   orderid = $("#orderid").val();
				$.ajax({
												url: 'http://127.0.0.1:8000/bot?message='+message+'&order_id='+orderid, 
												headers: {
													'Access-Control-Allow-Credentials': true
												},
					       success: function(result) {
					       				console.log(result);
        							 	  $(".messages_container").append('<div class="row"><div class="col-lg-6 col-md-offset-3"><p class="bg-info chat-box">'+result+'</p></div></div>');
    								}
    							});
}