$(document).ready(function(){
  $("#add").click (function(){
    var entered_item = $("#entered_item").val();
    var list_item = $('<li></li>').text(entered_item);

  list_item.click(function () {
    $(this).wrap("<strike>");
  });

  list_item.dblclick(function () {
    $(this).fadeOut('fast');
  });

  if (entered_item!=""){
      $("ul").append(list_item);
      $("#entered_item").val('');}

  });
});

$(document).keypress(function(e){
    if(e.which == 13){
    var entered_item = $("#entered_item").val();
    var list_item = $('<li></li>').text(entered_item);

  list_item.click(function () {
    $(this).wrap("<strike>");
  });

  list_item.dblclick(function () {
    $(this).fadeOut('fast');
  });

  if (entered_item!=""){
      $("ul").append(list_item);
      $("#entered_item").val('');}
      
  };
});


