var drums=document.querySelectorAll(".drum").length
for(i=0;i<drums;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var button=this.innerHTML;
    makeSound(button)
    buttonAnimation(button)
}
);
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key)
})

function makeSound(button){
    switch (button) {
        case 'w':
            var audio=new Audio("./sounds/tom-1.mp3")
            audio.play();
            break;
        case 'a':
            var audio=new Audio("./sounds/tom-2.mp3")
            audio.play();
            break;
        case 's':
            var audio=new Audio("./sounds/tom-3.mp3")
            audio.play();
            break;
        case 'd':
            var audio=new Audio("./sounds/tom-4.mp3")
            audio.play();
            break;
        case 'j':
            var audio=new Audio("./sounds/snare.mp3")
            audio.play();
            break;
        case 'k':
            var audio=new Audio("./sounds/crash.mp3")
            audio.play();
            break; 
        case 'l':
            var audio=new Audio("./sounds/kick-bass.mp3")
            audio.play();
            break;     
    
        default:
            break;
    }
}
function buttonAnimation(button){
    var a=document.querySelector("."+button)
    a.classList.add("pressed");
    setTimeout(function(){
        a.classList.remove("pressed");
    },150)
}