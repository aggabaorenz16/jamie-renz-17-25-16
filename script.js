let text = "Every moment with you is my favorite memory, Happy Monthsary Asawa ko!";
let i = 0;

function typeText(){
if(i < text.length){
document.getElementById("message").innerHTML += text.charAt(i);
i++;
setTimeout(typeText,60);
}
}

function startMemories(){

document.getElementById("music").play();

typeText();

startSlideshow();

createHearts();

}

function startSlideshow(){

let slides = document.querySelectorAll(".slide");
let index = 0;

slides[index].classList.add("active");

setInterval(()=>{

slides[index].classList.remove("active");

index++;

if(index >= slides.length){
index = 0;
}

slides[index].classList.add("active");

},3000);

}

function createHearts(){

setInterval(()=>{

let heart = document.createElement("div");
heart.classList.add("heart");
heart.innerHTML="❤️";

heart.style.left = Math.random()*100 + "vw";
heart.style.fontSize = (10 + Math.random()*20) + "px";
heart.style.animationDuration = (3 + Math.random()*5) + "s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

},300);

}