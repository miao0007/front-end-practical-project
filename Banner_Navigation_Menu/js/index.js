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