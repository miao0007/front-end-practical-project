function byId(id){
    return typeof id === "string" ? document.getElementById(id) :id;

}

var timer = null,
index = 0,
dots = byId("dots"),
dots = byId("dots").getElementByTagName("span"),
pics = byId("banner").getElementByTagName("div"),
prev = byId("prev"),
next = byId("next"),
menu = byId("menu-content"),
subMenu = byId("sub-menu"),
innerBox = subMenu.getElementByClassName("inner-box"),
menuItems = menu.getElementByClassName("menu-item"),
len = pics.length;

function slideImg() {
    var main = byId("main");
    main.onmouseover = function(){
        if(timer) {
            clearInterval(timer);
        }
    }
    main.onmouseout = function(){
        timer = setInterval(function(){
            index++;
            if(index >= len) {
                index = 0;
            }
            changeImg();
        }, 4000);
    }
main.onmouseout();
for (var d = 0 ; d < len; d++) {
    dots[d].id = d;
    dots[d].onclick = function(){
        index = this.id;
        changeImg();
    }
    
}
}
slideImg();
/*
*@description: change pictures by index value
*/
function changeImg() {
    for (var i = 0; i < len; i++) {
        pics[i].style.display = "none";
        dots[i].className = "";
    }
    console.log(index);
    pics[index].style.display = "block";
    console.log();
    dots[index].className = "active";
}

// previous pic
prev.onclick = function() {
    index--;
    if(index < 0){
        index = len - 1 ;

    }
    changeImg();
}

// next pic
next.onclick = function(){
    console.log("Next");
    index++;
    if(index >= len) {
        index = 0;
    }
    changeImg();
}

//Iteration main menu, bind events

for (var m = 0; m< menuItems.length; m ++){
    // add data-index attribute into main menu
    menuItems[m].setAttribute("data-index", m);

    // mouse move in main menu
    menuItems[m].onmouseover = function() {
subMenu.className = "sub-menu";
var indey = this.getAttribute("data-index");
// Iterates sub menu, hide all sub-menu
for (var j = 0; j < innerBox.length; j++){
    innerBox[j].style.display = "none";
    menuItems[j].style.background = "none";
}
menuItems[indey].style.display = "rgba(0,0,0,.1)";
innerBox[indey].style.display = "block";
    }
    

    
}

menu.onmouseout = function() {
    subMenu.className = "sub-menu hide";
}

subMenu.onmouseover = function() {
    console.log("move into sub-menu");
    this.className = "sub-menu";
}

subMenu.onmouseout = function() {
    console.log("move out of sub-menu");
    this.className = "sub-menu hide";

}