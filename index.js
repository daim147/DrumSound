 var numberDrum= document.querySelectorAll(".drum").length;

for(var i=0; i<numberDrum; i++){

 document.querySelectorAll(".drum")[i].addEventListener("click", function (){
 
    
 var buttonPress=this.innerHTML;
 makeSound(buttonPress);
 animation(buttonPress);
   
}
    );

}

document.addEventListener("keydown", function(event){
var keyPress=event.key;
makeSound(keyPress);
animation(keyPress);

});

function makeSound(clickOrPress){
    switch (clickOrPress) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
             tom1.play();
            break;

            case "a":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;
           
                case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
             tom3.play();
            break;


            case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
             tom4.play();
            break;


            case "j":
            var snare = new Audio("./sounds/snare.mp3");
             snare.play();
            break;



            case "k":
            var crash = new Audio("./sounds/crash.mp3");
             crash.play();
            break;
                
            case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
             kick.play();
            break;

    
        default:console.log(buttonPress);
            break;
    }
}

function animation(buttonToAnimate){
    var button=document.querySelector("."+buttonToAnimate);
    button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove("pressed");
    },100);
}
