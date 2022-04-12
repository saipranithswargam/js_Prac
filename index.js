// document.querySelector("button").addEventListener("click",fn);//make sure that the method should be a string .if we add the paranthesis 
// //in function then it will get called without any click i.e., it is automatically called 
// function fn(){
//     alert("i got clicked :|");
// }
// var obj=document.querySelectorAll("button");
// for(var i=0;i<7;i++){
//     obj[i].addEventListener("click",function (){
//         var audio=new Audio("sounds/tom-1.mp3");
//         audio.play();
//     });
     

// }
//we can write an anonymous function and add it into event listner as follows
// obj.addEventListner("click",function (){alert("i got clicked ");})
//debbguer; and hold shift and press enter to go into debug mode in concole in chrome developer tools
//after that call the function we want to debug
var obj=document.querySelectorAll("button");
for(var i=0;i<7;i++){
    obj[i].addEventListener("click",function (){
      
        // this.style.color="#fff";//this gives us the object that triggered the event click here
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);

    });
     

}
document.addEventListener("keydown",function(event){
    //now the parameter event will give us the key wch made the event to occur.
    //we may give any variable in that place but yes that parameter will allow us to tap the thg wch triggered the event
    // console.log(event)
    // var audio=new Audio("sounds/tom-1.mp3"); 
    // audio.play();
    makeSound(event.key);//that is passing the key parameter that is the key pressed to the function make sound
    buttonAnimation(event.key);

}) 

function makeSound(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/snare.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/crash.mp3");
            snare.play();
            break;
        case "k":
            var kickbass=new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        case "l":
            var crash=new Audio("sounds/tom-4.mp3");
            crash.play();
            break;
        default:console.log(this.innerHTML)//this isnt necessary 
        

}
}
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
    activeButton.classList.remove("pressed");

    },0.01)
}

