var changeStyle = function(element, attribute, value) {
    element.style[attribute] = value;
}

window.onload = function() {
    var oBtn = document.getElementsByTagName("input");
    var oDiv = document.getElementById("div1");
    var oAttr = ["width","height","background","display","display"];
    var oVal = ["200px","200px","red","none","block"];

    // Method One
    // stored index in a variable

    for (var i = 0; i < oBtn.length; i ++) {
        // add index attribute to oBtn[i] object, store index number
        oBtn[i].index = i;
        oBtn[i].onclick = function(){
            console.log(this.index);

            // reset button then clear css attr
            // the value of Element.style.cssText is string of inline style
            // hence, vanish its' inline style by reset
            this.index == oBtn.length - 1 && (oDiv.style.cssText = "");
            changeStyle(oDiv, oAttr[this.index], oVal[this.index]);
        }
    }
}