const words = [

"Civil Engineer",

"Chief Engineer",

"Founder & CEO",

"Programmer",

"Web Developer",

"Construction Consultant",

"Structural Designer",

"Project Manager",

"Quantity Surveyor"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

const typing = document.getElementById("typing");

function type(){

    if(!typing) return;

    let current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(type,1500);

            return;

        }

    }

    else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting=false;

            wordIndex++;

            if(wordIndex>=words.length){

                wordIndex=0;

            }

        }

    }

    setTimeout(type,deleting?50:100);

}

type();