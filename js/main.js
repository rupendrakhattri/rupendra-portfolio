document.addEventListener("DOMContentLoaded",()=>{

const loader=document.getElementById("loader");
const menu=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");
const revealItems=document.querySelectorAll(".card,.service-card,.about-preview,.profile-card");

if(loader){

loader.classList.add("hidden");

}

if(menu && nav){

const setMenuOpen=(open)=>{

nav.classList.toggle("active",open);
menu.setAttribute("aria-expanded",String(open));

};

menu.setAttribute("role","button");
menu.setAttribute("tabindex","0");
menu.setAttribute("aria-label","Toggle navigation menu");
menu.setAttribute("aria-expanded","false");

menu.addEventListener("click",()=>{

setMenuOpen(!nav.classList.contains("active"));

});

menu.addEventListener("keydown",(event)=>{

if(event.key==="Enter" || event.key===" "){

event.preventDefault();
setMenuOpen(!nav.classList.contains("active"));

}

});

nav.querySelectorAll("a").forEach((link)=>{

link.addEventListener("click",()=>setMenuOpen(false));

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
