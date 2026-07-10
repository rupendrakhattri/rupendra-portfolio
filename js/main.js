document.addEventListener("DOMContentLoaded",()=>{

const loader=document.getElementById("loader");
const menu=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");
const revealItems=document.querySelectorAll(".card,.service-card,.about-preview,.profile-card");

if(loader){

loader.classList.add("hidden");

}

if(menu && nav){

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}

if(revealItems.length){

const showItem=(item)=>item.classList.add("active");

if("IntersectionObserver" in window){

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

showItem(entry.target);
observer.unobserve(entry.target);

}

});

},{threshold:0.15});

revealItems.forEach((item)=>observer.observe(item));

}

else{

revealItems.forEach(showItem);

}

}

});
