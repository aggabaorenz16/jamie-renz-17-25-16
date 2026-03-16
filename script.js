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
    heart.innerHTML = "❤️";

    // Random horizontal position
    heart.style.left = Math.random() * 100 + "vw";
    // Random size
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    // Random animation duration
    let duration = 3 + Math.random() * 4;
    heart.style.animationDuration = duration + "s";

    document.body.appendChild(heart);

    // Remove heart after animation completes
    setTimeout(()=>{
      heart.remove();
    }, duration * 1000);

  }, 300);
}
