

//btns

function donate() {
    window.open("https://www.donationalerts.com/r/spark_aw");
    alert ("Thank you for your support!");
}

function discord() {
    window.open("https://discord.gg/EBfUXwYz3E")
}

function steam() {
    window.open("https://steamcommunity.com/profiles/76561199406960316/")
}

// home page


function arcWarden(){
    let heroImg = document.getElementById("hero-img");
    heroImg.src = "images/arc_warden.png";
    heroImg.classList.remove("brooda");


    let heroName = document.getElementById("heroName");
    heroName.innerHTML = "Arc Warden";
    
    let heroDesc = document.getElementById("heroDesc");
    heroDesc.innerHTML = "Arc Warden is a ranged melee hero who uses a shadowy aura to blind and incapacitate his enemies.";
}

function shadowFiend(){
    let heroImg = document.getElementById("hero-img");
    heroImg.classList.remove("brooda");
    heroImg.src = "images/nevermore.png";

    let heroName = document.getElementById("heroName");
    heroName.innerHTML = "Shadow Fiend";

    let heroDesc = document.getElementById("heroDesc");
    heroDesc.innerHTML = "Shadow Fiend is a ranged melee hero who uses a shadowy aura to blind and incapacitate his enemies.";
    
}

function broodmother(){

    let heroImg = document.getElementById("hero-img");
    heroImg.src = "images/broodmother.png";
    heroImg.classList.add("brooda");

    let heroName = document.getElementById("heroName");
    heroName.innerHTML = "Broodmother";

    let heroDesc = document.getElementById("heroDesc");
    heroDesc.innerHTML = "Broodmother is a melee hero who spreads out of control of her broodlings to attack her enemies.";
}


// projects page

function projectOne(){
}

function projectTwo(){
}




function contactBtn1(){
    window.open("https://t.me/jsparkwebdev")
}
function contactBtn3(){
    window.open("https://www.instagram.com/zxcspark/")
}
function contactBtn4(){
    window.open("https://github.com/sparkxdd1")
}
