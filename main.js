$(function(){
    $("#send").on("click", function(event){
      let id = $("#main").val();
      console.log("通る");
      $.ajax({
        type: "POST",
        url: "post_receive.php",
        data: { "id" : id },
        dataType : "json"
      }).done(function(data){
        $("#return").append('<p>'+data.id+' : '+data.school+' : '+data.skill+'</p>');
      }).fail(function(XMLHttpRequest, status, e){
        alert(e);
      });
    });
  });