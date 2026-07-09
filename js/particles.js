/* ==================================

Simple Floating Particles

================================== */

const hero = document.querySelector(".hero");

if(hero){

for(let i=0;i<40;i++){

const p=document.createElement("span");

p.classList.add("particle");

p.style.left=Math.random()*100+"%";

p.style.animationDuration=(6+Math.random()*8)+"s";

p.style.animationDelay=Math.random()*5+"s";

p.style.width=(4+Math.random()*8)+"px";

p.style.height=p.style.width;

hero.appendChild(p);

}

}