
/* replaces name ID, allow user to change name */



function nameDeclare(){
    $("#confirmName").on("click", function(event){
    $("#name").replaceWith("<p>" + $("#userInputName").val() + "</p>"); 
    $(".nameInput").hide();
    })
    
    $('#userInputName').bind("enterKey",function(e){
    });

    $('#userInputName').keyup(function(e){
    if(e.keyCode == 13) {
        $(this).trigger("enterKey");
        $("#name").replaceWith("<p>" + $("#userInputName").val() + "</p>"); 
        $(".nameInput").hide();
    }
  })
}; 