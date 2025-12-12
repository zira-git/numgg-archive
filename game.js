bestEver = 0;
bestEver = localStorage.getItem("bestEver") || 0
bestScore = 0;
streak = 0;


function start() {



    RightRandomNumber = Math.floor(Math.random() * 100)
    secondRandomNumber = Math.floor(Math.random() * 100)
    firstRandomNumber = Math.floor(Math.random() * 100)
@@ -20,7 +22,9 @@ function start() {
        document.getElementById('btn3').innerHTML = RightRandomNumber;
        document.getElementById('btn1').innerHTML = firstRandomNumber;
        document.getElementById('btn2').innerHTML = secondRandomNumber;
    } 
    }
console.log(RightRandomNumber)
    document.getElementById("be").innerHTML = localStorage.getItem("bestEver");
}


@@ -53,7 +57,7 @@ function appear() {
}

function hintTimer() {
    setTimeout(appear, 1000 * 10)
    setTimeout(appear, 1000 * 30)
}

function inc() {
@@ -66,6 +70,12 @@ function inc() {
    } else if(document.getElementById('be').innerHTML == 0 || document.getElementById('be').innerHTML < streak || document.getElementById('be').innerHTML < bestScore) {
        bestEver = bestScore;
    }
    
    if (bestScore > bestEver ) {
        bestEver = bestScore;
        localStorage.setItem("bestEver", bestEver.toString())
    }

}

function lose() {
@@ -103,4 +113,4 @@ function f3() {
    }
}


console.log(RightRandomNumber)
