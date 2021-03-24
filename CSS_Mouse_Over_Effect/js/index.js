document.querySelectorAll('a').forEach(element => {
    element.onmouseenter =
    element.onmouseleave = e => {
        // tolerance: tolerance
        // get the width of padding-box from clientWidth
        // set tolerance to be 5
        const tolerance = 5;
        const left = 0;
        const right = element.clientWidth;
        // pageX: mouse's x coord of current event
        // offsetLeft: the off set value of current element for parent element
        // set x as center
        // if x is positive, means mouse come into from right
        // if x is negative, means mouse come into from left
        let x = e.pageX - element.offsetLeft;

        if(x - tolerance < left) {
            x = left;
        }
        if (x + tolerance > right) {
            x =right;
        }

        element.style.setProperty('--x',`{x}px`);
    }
})