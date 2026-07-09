const galleryButtons = document.querySelectorAll(".gallery-btn");

galleryButtons.forEach(button=>{

button.addEventListener("click",()=>{

galleryButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

});

});



