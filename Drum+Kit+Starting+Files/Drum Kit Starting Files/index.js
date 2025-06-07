// alert("keep it up")
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function() {
  var btn=this.innerHTML;
  sound(btn);
  buttonAnimation(btn);
});
}
  document.addEventListener("keypress",function(e){
    sound(e.key);
    buttonAnimation(e.key);
    
});

function sound(key){
    switch (key) {
    
        
        case "a":
        var aud=new Audio('sounds/kick.mp3');
   aud.play();
   
        break;
        case "w":
        var audio=new Audio('sounds/crash.mp3');
   audio.play();
        break;
   case "s":
        var audio1=new Audio('sounds/snare.mp3');
   audio1.play();
        break;
        case "d":
        var audio2=new Audio('sounds/tom-1.mp3');
   audio2.play();
        break;
        case "j":
        var audio3=new Audio('sounds/tom-2.mp3');
   audio3.play();
        break;
        case "k":
        var audio4=new Audio('sounds/tom-3.mp3');
   audio4.play();
        break;
        case "l":
        var audio5=new Audio('sounds/tom-4.mp3');
   audio5.play();
        break;
    default:alert("gone wrong");
        break;
   }
}
 function buttonAnimation(currentKey){
var currentbtn=document.querySelector("."+currentKey);
currentbtn.classList.add("pressed");
setTimeout(function(){
currentbtn.classList.remove("pressed");
},1000);
 }
