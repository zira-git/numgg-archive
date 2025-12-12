@@ -1,4 +1,4 @@

bestScore = 0;
streak = 0;
function start() {
    RightRandomNumber = Math.floor(Math.random() * 100)
@@ -23,10 +23,16 @@ function start() {
function inc() {
    streak++;
    document.getElementById("xp").innerHTML = streak;
    if(document.getElementById('highScore').innerHTML == 0 || document.getElementById('highScore').innerHTML < streak ) {
        bestScore = streak;
        document.getElementById('highScore').innerHTML = bestScore;
        console.log(streak)
    }
}

function lose() {
    document.getElementById("xp").innerHTML = "0";
    streak = 0;
    document.getElementById("xp").innerHTML = streak;
}

function f1() {
@@ -57,4 +63,5 @@ function f3() {
                start(); lose()
        window.alert("YOU DIED!!!");
    }
}
}
