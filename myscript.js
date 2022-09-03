//LOADER
/*
let timing;

function loaderFunction(){
    timing = setTimeout(showPage, 4000);
}

function showPage(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("myPage").style.display = "block";
}
//end
*/

//TYPEWRITER EFFECT
class TypeWriter {
    constructor(txtElement, words, wait=5000){
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

//TYPE METHOD
    type(){
        //CURRENT INDEX OF WORD
        const current = this.wordIndex % this.words.length;
        //GET FULL TEXT OF CURRENT WORD
        const fullTxt = this.words[current];
        //CHECK IF IT'S DELETING
        if(this.isDeleting){
            //REMOVE CHAR
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }
        else {
            //ADD CHAR
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        //INSERT TXT INTO ELEMENTS
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        //INITIAL TYPE SPEED
        let typeSpeed = 40;

        if(this.isDeleting){
            typeSpeed /= 2;
        }
        //IF WORD IS COMPLETE
        if(!this.isDeleting && this.txt === fullTxt){
            //MAKE PAUSE AT THE END
            typeSpeed = this.wait;
            //SET DELETE TO TRUE
            this.isDeleting = true;
        }
        else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        //MOVE TO THE NEXT WORD
        this.wordIndex++;
        //PAUSE BEFORE STARTING TO TYPING
        typeSpeed = 300;
        }
        
        setTimeout(() => this.type(), typeSpeed);
        }
}

//INIT ON DOM LOAD

document.addEventListener('DOMContentLoaded', init);

//INIT APP
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //INIT TYPEWRITER
    new TypeWriter(txtElement, words, wait);
}
//END

/* NAVIGATION SECTION */
function openSlideMenu(){
    document.getElementById("side-menu").style.width = "360px";
    document.getElementById("body").style.marginLeft = "360px";
    document.getElementById("overlay-body").style.display = "block";
    document.getElementById("worded").style.fontSize = "40px";
}

function closeSideMenu(){
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("body").style.marginLeft = "0";
    document.getElementById("overlay-body").style.display = "none";
    document.getElementById("worded").style.fontSize = "50px";
}

/*
let shiftwindow = function(){scrollBy(0, -50)};
if (location.hash) shiftwindow();
window.addEventListener("hashchange", shiftwindow);
*/
