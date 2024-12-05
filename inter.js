//This will make it dropdown menu.
//the .dropdown element in the html file.
//The transform: translateY(0px) moves the .dropdown element to
// its normal position making it visible
function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
//This is for closing the dropdown menu. When u click on the .dropdown element
//for the second time this happens. 
//The transform: translateY(-500px) moves it off the screen so that nothing 
//else is impacted.
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
    "DEVELOPER",
    "DESIGNER",
    "YOUTUBER"
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter