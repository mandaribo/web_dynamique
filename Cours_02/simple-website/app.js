'use strict';
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('theme-claire');
    document.body.classList.toggle('theme-sombre');

    const className = document.body.className;
    if(className == "theme-claire") {
    this.textContent = "Sombre";
} else {
    this.textContent = "Claire";
}
    console.log('current class name: ' + className);
});
