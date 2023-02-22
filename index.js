//returns a list of all the buttons
var drumButtons = document.querySelectorAll(".drum");

//add event listener to each button for when its clicked
for(var i=0; i<drumButtons.length; i++){

    drumButtons[i].addEventListener("click",function (){

        var buttonInnerHTML = this.innerHTML; //innerhtml of button that's clicked
        soundPlay(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//add event listener for when corresponding key pressed
document.addEventListener("keydown", function(event){ //pass the key press event that triggered this fn
    soundPlay(event.key);
    buttonAnimation(event.key);
});

//plays the corresponding sound based on button click or key pressed
function soundPlay(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
          break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
          break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
          break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
          break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
          break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
          break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
          break;
        default:
            console.log(buttonInnerHTML);
          break;
    }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add('pressed');

    //remove pressed effect(css styling) after 100ms
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);


}
