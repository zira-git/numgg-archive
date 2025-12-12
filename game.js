@@ -43,49 +43,49 @@
}

function hintTimer() {
    setTimeout(appear, 1000 * 0.5)
    setTimeout(appear, 1000 * 30)
}

function inc() {
    streak++;
    document.getElementById("xp").innerHTML = streak;
    if(document.getElementById('highScore').innerHTML == 0 || document.getElementById('highScore').innerHTML < streak ) {
        bestScore = streak;
        document.getElementById('highScore').innerHTML = bestScore;
        console.log(streak)
    } else if(document.getElementById('be').innerHTML == 0 || document.getElementById('be').innerHTML < streak || document.getElementById('be').innerHTML < bestScore) {
        bestEver = bestScore;
    }

    if (bestScore > bestEver ) {
        bestEver = bestScore;
        localStorage.setItem("bestEver", bestEver.toString())
    }

}

function lose() {
    streak = 0;
    document.getElementById("xp").innerHTML = streak;
}

function f1() {
    if (document.getElementById('btn1').innerHTML == RightRandomNumber) {
        window.alert("YOU WERE RIGHT!!!")
        inc(); start(); 
    } else if (document.getElementById('btn1').innerHTML == firstRandomNumber || document.getElementById('btn1').innerHTML == secondRandomNumber) {
        window.alert("YOU DIED!!!");
        start(); lose()
    }
}

function f2() {
    if (document.getElementById('btn2').innerHTML == RightRandomNumber) {
        window.alert("YOU WERE RIGHT!!!")
        inc(); start(); 
    } else if (document.getElementById('btn2').innerHTML == firstRandomNumber || document.getElementById('btn2').innerHTML == secondRandomNumber) {
        window.alert("YOU DIED!!!");
        start(); lose()
    }
}
