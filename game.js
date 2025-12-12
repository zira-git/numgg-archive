@@ -78,25 +78,25 @@
        start(); lose()
    }
}
<title>Number Guessing Game 3.1.0<title>
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

console.log(RightRandomNumber)
console.log(RightRandomNumber)
