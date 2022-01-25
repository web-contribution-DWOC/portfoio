var fab2 = document.getElementById("fab2");
var home = document.getElementById("home");
var stack = document.getElementById("stack");
var projects = document.getElementById("projects");

function myScroll() {
    var y = window.scrollY;

    if(y>200){
        fab2.style.display ="block";
    }
    else {
        fab2.style.display = "none";
    }
}


/**
 * music list
 */
var audio = new Audio("sound/slide.wav");
var back = new Audio("sound/backmusic.mp3");
var tap = new Audio("sound/tap.wav");

function tapSound() {
    tap.currentTime=0;
    tap.play();      
}

function tapStop() {

    tap.pause();    
}


function play() {
    audio.currentTime = 0;
    audio.play();
}
function backmusic() {
   
    back.currentTime = 0;
    back.play();
}




fab2.addEventListener("click", play);
home.addEventListener("click", play);
stack.addEventListener("click", play);
projects.addEventListener("click", play);
window.addEventListener("scroll", myScroll)
//window.addEventListener("mousemove", backmusic);
//document.getElementById('MyAudioElement').play()