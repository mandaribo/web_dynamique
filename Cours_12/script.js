function modifierPara2(){
    document.getElementById("para2").innerHTML = "hi";
}

function modifierLesPara(){
    let allPara = document.getElementsByClassName("paragraph");
    for (let i = 0; i < allPara.length; i++){
        allPara.style.color = "red";
        allPara.style.fontFamily = "Comic Sans MS";
    }
}

function modifierImage(){
    document
}