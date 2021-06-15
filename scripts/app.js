/* Temporary sprite scripts */
$("#charmander").hide();
$("#charmeleon").hide();
$("#charizard").hide();
$("#missingNo").hide();



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
        $("#userInputName").css({"font-size": "40px;", "color": "red"});
        $(".nameInput").hide();
    }
  })
}; 

let hunger = 10;
let energy = 10;
let entertainment = 10;
let time = 60;

//Life Status
  //Green = 7+ Value
  //Yellow = 4-6
  //Red = 1-3

//Add interaction animation like eating and entertainment
  //Hungy --> feed --> Give food animation

//Evolve tamagotchi

//Age / Time system



//ICEBOX: Money system with bonus and buying items