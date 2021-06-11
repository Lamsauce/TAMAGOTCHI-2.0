
/* replaces name ID, allow user to change name */



function nameDeclare(){
    $("#name").replaceWith("<p>" + $("#userInputName").val() + "</p>"); 
    $(".nameInput").hide();
};