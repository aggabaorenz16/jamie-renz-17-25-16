let text = "Happy 20th Monthsary, my beautiful my love! You are the best thing that has ever happened to me, and I cherish every moment we spend together. You are my best friend, my confidante, and my safe space. Thank you for filling my life with so much joy and love. I promise to always support your dreams, hold your hand through the hard times, and cherish every single moment with you. I love you more than words can express";
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
