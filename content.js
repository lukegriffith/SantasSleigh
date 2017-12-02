var img = document.createElement('img');
var body = document.getElementsByTagName("body")[0];

img.src = 'https://i.imgur.com/FbKX78t.png';
img.style = 'z-index: 10; position: absolute; top: 40px; right: 0px; width: 200px; height: auto;'
img.style.transform = 'scaleX(-1)'
body.appendChild(img);

var i = 0;
var maxRight = window.outerWidth - img.width;
var left = true; 

function myTimer() { 

    if (i > maxRight) {
        left = false;
        img.style.transform = 'scaleX(1)'
    }
    else if (i < 0) {
        left = true;
        img.style.transform = 'scaleX(-1)'
    }

    if (left) {

        i++;
        img.style.right = i + 'px';
    }
    else {
        i-- ;
        img.style.right = i + 'px';
    }
}


setInterval(myTimer, 10);