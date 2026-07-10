const darkBtn = document.querySelector("#theme-toggle");

let dark = true;

if(darkBtn){

darkBtn.addEventListener("click",()=>{

dark=!dark;

if(dark){

document.documentElement.style.setProperty("--bg","#08111f");
document.documentElement.style.setProperty("--bg2","#101a2d");
document.documentElement.style.setProperty("--text","#d8e2ff");

darkBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

else{

document.documentElement.style.setProperty("--bg","#ffffff");
document.documentElement.style.setProperty("--bg2","#eef3f8");
document.documentElement.style.setProperty("--text","#222222");

darkBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

});

}
