/* ==========================
   Loader
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

/* ==========================
   Navbar Scroll
========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(8,17,31,.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    } else {

        navbar.style.background = "rgba(0,0,0,.25)";
        navbar.style.boxShadow = "none";

    }

});

/* ==========================
   Scroll Reveal
========================== */

const reveals = document.querySelectorAll(

".card,.service-card,.about-preview,.stats,.profile-card"

);

function reveal() {

    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

/* ==========================
   Smooth Anchor Scroll
========================== */

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================
   Current Year
========================== */

const year = document.getElementById("year");

if(year){

    year.innerHTML = new Date().getFullYear();

}

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {

    nav.classList.toggle("active");

});