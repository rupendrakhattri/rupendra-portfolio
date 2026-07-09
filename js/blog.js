const search = document.getElementById("searchInput");

if(search){

search.addEventListener("keyup",()=>{

const value = search.value.toLowerCase();

const cards = document.querySelectorAll(".blog-card");

cards.forEach(card=>{

const text = card.innerText.toLowerCase();

card.style.display =
text.includes(value)
?
"block"
:
"none";

});

});

}