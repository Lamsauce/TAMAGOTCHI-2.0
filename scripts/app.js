/* Temporary sprite scripts */
$("#charmander").hide();
$("#charmeleon").hide();
$("#charizard").hide();
$("#missingNo").hide();

/* replaces name ID, allow user to change name w/ enter keybind*/
function nameDeclare(){
    $("#confirmName").on("click", function(event){
    $("#name").replaceWith("<h2>" + $("#userInputName").val() + "</h2>"); 
    $(".nameInput").hide();
    timerCountdown();
    })
    
    $('#userInputName').bind("enterKey",function(e){
    });

    $('#userInputName').keyup(function(e){
    if(e.keyCode == 13) {
        $(this).trigger("enterKey");
        $("#name").replaceWith("<h2>" + $("#userInputName").val() + "</h2>"); 
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
      hunger = 10;
      $(".hunger").css("width", "100%");
      $(".hunger").css("background-color", "#57ff2d");
    }
  });
};

let energy=10;
const increaseEnergy = function increaseEnergy() {
  $("#energyButton").on("click", function(event){      
  if(energy < 10) {
    energy = 10;
    $(".energy").css("width", "100%");
    $(".energy").css("background-color", "#57ff2d");
    }
  })
};

let entertainment=10;
const increaseEntertainment = function increaseEntertainment(){
    $("#entertainmentButton").on("click", function(event){
    if(entertainment < 10) {
      entertainment = 10;
      $(".entertainment").css("width", "100%");
      $(".entertainment").css("background-color", "#57ff2d");
    }
  })
};

/* ======== Decrease stats ========*/
const decreaseHunger = function decreaseHunger() {
  if (hunger > 0){
    hunger--;
    $(".hunger").css("width", "-=10%");
  if (hunger > 1 && hunger <= 5){
      $(".hunger").css("background-color", "#d8b51b");
    }
    else if (hunger == 1){
      $(".hunger").css("background-color", "red");
    }
  }
};

const decreaseEnergy = function decreaseEnergy() {
  if (energy > 0){
    energy--;
    $(".energy").css("width", "-=10%");
    if (energy > 1 && energy <= 5){
      $(".energy").css("background-color", "#d8b51b");
    }
    else if (energy == 1){
      $(".energy").css("background-color", "red");
    }
  }
};

const decreaseEntertainment = function decreaseEntertainment() {
  if(entertainment > 0) {
    entertainment--;
    $(".entertainment").css("width", "-=10%");
    if (entertainment > 1 && entertainment <= 5){
      $(".entertainment").css("background-color", "#d8b51b");
    }
    else if (entertainment == 1){
      $(".enteratinment").css("background-color", "red");
    }
  }
};

/* ======== Age ======== */
let age = 0;
const ageTime = function ageTime() {
    if (age >= 1 && age <= 12){
        time = 30;
        $("#egg").hide();
        $("#charmander").show();
    } else if (age >= 13 && age <= 17){
        time = 90;
        $("#charmander").hide();
        $("#charmeleon").show();
    } else if (age >= 18){
        time = 90;
        $("#charmeleon").hide();
        $("#charizard").show();
    }
    timerCountdown();
};

/* ======== Timer ======== */
let time = 60;
const timerCountdown = function timerCountdown(){
    const resetTime = function resetTime() {
    console.log(time);
    time--;
    if (time <= 0) {
        clearInterval(timer);
        age++;
        $("#age").text(`Age: ${age}`);
        if (age > 0) {
            ageTime();
        }
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

// Animate sprites

// Add increase function

// Add game over when a bar hits zero

//Add interaction animation like eating and entertainment
  //Hungy --> feed --> Give food animation



//ICEBOX: Money system with bonus and buying items