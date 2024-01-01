var timer = 60;
var score =0 ;
var rn = 0 ;

function newscore() {
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}
function newhit() {
    rn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = rn;
}
function makebubble() {
    var clutter = '';
    for (var i = 0; i < 96; i++) {
        var r = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${r}</div>`;
    }
    document.querySelector(".game").innerHTML = clutter;
}
function runtimer() {
    var timerint = setInterval(function () {
        if (timer==1) {
            clearInterval(timerint);
            document.querySelector(".game").innerHTML=`<div class="gameover"> GAME OVER </div>`;
        }

        timer--; 
        document.querySelector("#timeval").textContent = timer;
    },1000);
}

document.querySelector(".game").addEventListener("click",function (a) {
    if (Number(a.target.textContent)==rn) {
        newscore();
        newhit();
        makebubble();
    }
})

runtimer();
makebubble();
newhit();
newscore();
