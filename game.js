@@ -1,102 +1,114 @@
bestEver = localStorage.getItem("bestEver") || 0
bestScore = 0;
streak = 0;
const mon = new Date().getMonth();

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
console.log(RightRandomNumber)
    document.getElementById("be").innerHTML = localStorage.getItem("bestEver");
}


function hint() {
    if(document.getElementById('btn1').innerHTML == RightRandomNumber) {
        console.log(RightRandomNumber); console.log("1");document.getElementById("h").style.display = "none"; document.getElementById("main").style = "color: red; font-size: 100px;"    
    } else if(document.getElementById('btn2').innerHTML == RightRandomNumber) {
         console.log(RightRandomNumber);   console.log("2");    document.getElementById("h").style.display = "none"; document.getElementById("main").style = "color: yellow; font-size: 100px;"
    } else if(document.getElementById('btn3').innerHTML == RightRandomNumber) {
     console.log(RightRandomNumber);    console.log("3");   document.getElementById("h").style.display = "none"; document.getElementById("main").style = "color: green; font-size: 100px;"
    } 
}

function appear() {
    document.getElementById('h').style.display = 'block'
}

function hintTimer() {
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

function f3() {
    if (document.getElementById('btn3').innerHTML == RightRandomNumber) {
        window.alert("YOU WERE RIGHT!!!")
        inc(); start(); 
    } else if (document.getElementById('btn3').innerHTML == firstRandomNumber || document.getElementById('btn3').innerHTML == secondRandomNumber) {
                start(); lose()
        window.alert("YOU DIED!!!");
    }
}

if(mon === 10 || mon === 11 || mon === 0 || mon === 1 || mon === 2) {
    document.body.style.backgroundImage = "url('https://t4.ftcdn.net/jpg/01/78/03/83/360_F_178038332_TVgrU6KKD4lhXvtk2M5NxSHFaYglDSwW.jpg')";
} else if(mon === 3 || mon === 4 || mon === 5) {
    document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLfQHp9TAE_jVDKg0tZ_vff2f5U7QMIJKfNA&s')";
} else if(mon === 6 || mon === 7 || mon === 8) {
    document.body.style.backgroundImage = "url('https://miro.medium.com/v2/resize:fit:1400/0*1DtL639ZXJQj8ZDA.jpg')";
} else if(mon === 9) {
    document.body.style.backgroundImage = "url('https://img.freepik.com/free-photo/digital-art-halloween-illustration_23-2151822706.jpg?semt=ais_hybrid&w=740&q=80')";
}


console.log(mon)
