// smooth reveal animation

const boxes = document.querySelectorAll(
".timeline-box,.skill-box,.project-box,.right-box"
);

window.addEventListener("scroll",()=>{

boxes.forEach(box=>{

const top = box.getBoundingClientRect().top;

if(top < window.innerHeight-100){
box.style.opacity="1";
box.style.transform="translateY(0)";
}

});

});

boxes.forEach(box=>{

box.style.opacity="0";
box.style.transform="translateY(50px)";
box.style.transition="0.8s";

});