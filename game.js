@@ -1,67 +1,106 @@
bestEver = 0;
bestScore = 0;
streak = 0;
function start() {
    RightRandomNumber = Math.floor(Math.random() * 100)
    secondRandomNumber = Math.floor(Math.random() * 100)
    firstRandomNumber = Math.floor(Math.random() * 100)
    let select = Math.floor(Math.random() * 3)
    if (select == 0) {
        document.getElementById('btn1').innerHTML = RightRandomNumber;
        document.getElementById('btn2').innerHTML = firstRandomNumber;
        document.getElementById('btn3').innerHTML = secondRandomNumber;
    } else if (select == 1) {
        document.getElementById('btn2').innerHTML = RightRandomNumber;
        document.getElementById('btn1').innerHTML = firstRandomNumber;
        document.getElementById('btn3').innerHTML = secondRandomNumber;
    } else if (select == 2) {
        document.getElementById('btn3').innerHTML = RightRandomNumber;
        document.getElementById('btn1').innerHTML = firstRandomNumber;
        document.getElementById('btn2').innerHTML = secondRandomNumber;
    } 
}

function hint() {
    if(document.getElementById('btn1').innerHTML == RightRandomNumber) {
         document.getElementById('btn1').style.backgroundColor = "red;";        
    } else if(document.getElementById('btn2').innerHTML == RightRandomNumber) {
        document.getElementById('btn2').style.backgroundColor = 'red';
    } else if(document.getElementById('btn3').innerHTML == RightRandomNumber) {
        document.getElementById('btn3').style.backgroundColor = 'red';
    } else {
        throw new Error(`Error@ ${document.title}`);
        
    }
        document.getElementById('h').style.display = "none"
        setTimeout(function(){    if(document.getElementById('btn1').innerHTML == RightRandomNumber) {
         document.getElementById('btn1').style.backgroundColor = "greenyellow";        
    } else if(document.getElementById('btn2').innerHTML == RightRandomNumber) {
        document.getElementById('btn2').style.backgroundColor = 'greenyellow';
    } else if(document.getElementById('btn3').innerHTML == RightRandomNumber) {
        document.getElementById('btn3').style.backgroundColor = 'greenyellow';
    } else {
        throw new Error(`Error@ ${document.title}`);
        
    }},1000 * 2)
}
function appear() {
    document.getElementById('h').style.display = 'block'
}
function hintTimer() {
    setTimeout(appear, 1000 * 10)
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

function f3() {
    if (document.getElementById('btn3').innerHTML == RightRandomNumber) {
        window.alert("YOU WERE RIGHT!!!")
        inc(); start(); 
    } else if (document.getElementById('btn3').innerHTML == firstRandomNumber || document.getElementById('btn3').innerHTML == secondRandomNumber) {
                start(); lose()
        window.alert("YOU DIED!!!");
    }
}


