var timer = 60;
var score = 0;
var rn = 0;
function MakeBubble() {
  var clutter = "";
  for (var i = 0; i <= 74; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer() {
  var TimeInter = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(TimeInter);

      document.querySelector("#pbottom").innerHTML = `<h1 style = "color:rgb(5, 44, 0);" >Game Over Your Score: ${score} </h1>`;
    }
  }, 1000);
}

function NewHit() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = rn;
}

function InScore() {
  score += 10;
  document.querySelector("#addscore").textContent = score;
}

document.querySelector("#pbottom").addEventListener("click", function (dets) {
  var clickeddNum = dets.target.textContent;
  var clickedNum = parseInt(clickeddNum);
  if (clickedNum === rn) { 
    InScore();
    MakeBubble();
    NewHit();
  }
});

runTimer();
MakeBubble();
NewHit();
