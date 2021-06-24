/* Temporary sprite scripts */
$("#charmander").hide();
$("#charmeleon").hide();
$("#charizard").hide();
$("#missingNo").hide();

/* replaces name ID, allow user to change name w/ enter keybind*/
function nameDeclare(){
    $("#confirmName").on("click", function(event){
    $("#name").replaceWith("<p>" + $("#userInputName").val() + "</p>"); 
    $(".nameInput").hide();
    timerCountdown();
    })
    
    $('#userInputName').bind("enterKey",function(e){
    });

    $('#userInputName').keyup(function(e){
    if(e.keyCode == 13) {
        $(this).trigger("enterKey");
        $("#name").replaceWith("<p>" + $("#userInputName").val() + "</p>"); 
        $("#userInputName").css({"font-size": "40px;", "color": "red"});
        $(".nameInput").hide();
        timerCountdown();
    }
  })
}; 

/* ======== Increase stats ======== */
let hunger = 10;
const increaseHunger = function increaseHunger(){
  $("#hungerButton").on("click", function(event){
  if(hunger < 10) {
      hunger++;
      $("#hunger").text(`Hunger: ${hunger}/10`);
      console.log("Feed!", hunger);
      }         
      else {
      console.log(`It doesn't want to eat right now...`)
      }
  });
};

let energy=10;
const increaseEnergy = function increaseEnergy(){
    $("#energyButton").on("click", function(event){
        
    if(energy < 10) {
        energy++;
        $("#energy").text(`Energy ${energy}/10`);
        console.log("Sleep!", energy);
        } else {
        console.log(`It has too much energy!`)
        }
    })
};

let entertainment=10;
const increaseEntertainment = function increaseEntertainment(){
    $("#entertainmentButton").on("click", function(event){
    if(entertainment < 10) {
        entertainment++;
        console.log("Play!", entertainment);
        } else {
        console.log(`It seems to be enjoying itself!`);
        }
    })
};

/* ======== Decrease stats ========*/
const decreaseHunger = function decreaseHunger() {
  if (hunger > 0){
      hunger--;
      $("#hunger").text(`Hunger: ${hunger}/10`);
  }
};

const decreaseEnergy = function decreaseEnergy() {
    if (energy > 0){
        energy--;
        $("#energy").text(`Energy: ${energy}/10`);
    }
};

const decreaseEntertainment = function decreaseEntertainment() {
    if(entertainment > 0) {
        entertainment--;
        $("#entertainment").text(`Entertainment: ${entertainment}/10`);
        console.log("Getting bored...");
    }
};

/* ======== Timer ======== */
let time = 60;
const timerCountdown = function timerCountdown(){
    const resetTime = function resetTime() {
    console.log("AGING slowly...", time);
    time--;
    if (time <= 0) {
        clearInterval(timer);
    } 
    if (time % 15 == 0){
        decreaseHunger();
    } 
    if (time % 24 == 0){
        decreaseEnergy();
    }
    if (time % 28 == 0){
        decreaseEntertainment();
    }
  };
    const timer = setInterval(resetTime, 1000);
};



//Life Status
  //Green = 7+ Value
  //Yellow = 4-6
  //Red = 1-3

//Add interaction animation like eating and entertainment
  //Hungy --> feed --> Give food animation

//Evolve tamagotchi

//Age / Time system



//ICEBOX: Money system with bonus and buying items