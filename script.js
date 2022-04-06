document.querySelector("#roll").addEventListener("click", randomFn);
function randomFn() {
    let a = Math.floor(Math.random() * 6) + 1;
    let b = Math.floor(Math.random() * 6) + 1;
    let c = Math.floor(Math.random() * 6) + 1;
    document.querySelector("#member-1>h1").innerText = a;
    document.querySelector("#member-2>h1").innerText = b;
    document.querySelector("#member-3>h1").innerText = c;
    document.querySelector("#member-1").style.color = "black";
    document.querySelector("#member-2").style.color = "black";
    document.querySelector("#member-3").style.color = "black";

    var ans = all(a, b, c);
    if(a===b&&b===c){
        document.querySelector("#member-1").style.color = "blue";
        document.querySelector("#member-2").style.color = "blue";
        document.querySelector("#member-3").style.color = "blue";
        document.querySelector("#winner>h1").innerText = "Roll Again Its a Tie"
    }
  else if (a === b) {
        document.querySelector("#member-1").style.color = "blue";
        document.querySelector("#member-2").style.color = "blue";
        document.querySelector("#winner>h1").innerText = "Roll Again Its a Tie"
    } else if (a == c) {
        document.querySelector("#member-1").style.color = "blue";
        document.querySelector("#member-3").style.color = "blue";
        document.querySelector("#winner>h1").innerText = "Roll Again Its a Tie"

    } else if (b === c) {
        document.querySelector("#member-2").style.color = "blue";
        document.querySelector("#member-3").style.color = "blue";
        document.querySelector("#winner>h1").innerText = "Roll Again Its a Tie"

    }
    else if (ans[0] === a) {
        document.querySelector("#winner>h1").innerText = "Winner...is Member A"
        document.querySelector("#member-1").style.color = "green";
        if(ans[1]==b){
            document.querySelector("#member-2").style.color = "yellow";
            document.querySelector("#member-3").style.color = "red";
        }else{
            document.querySelector("#member-3").style.color = "yellow";
            document.querySelector("#member-2").style.color = "red";
        }
    } else if (ans[0] === b) {
        document.querySelector("#winner>h1").innerText = "Winner...is Member B"
        document.querySelector("#member-2").style.color = "green";
        if(ans[1]==c){
            document.querySelector("#member-3").style.color = "yellow";
            document.querySelector("#member-1").style.color = "red";
        }else{
            document.querySelector("#member-1").style.color = "yellow";
            document.querySelector("#member-3").style.color = "red";
        }
    } else if (ans[0] === c) {
        document.querySelector("#winner>h1").innerText = "Winner...is Member c"
        document.querySelector("#member-3").style.color = "green";
        if(ans[1]==a){
            document.querySelector("#member-1").style.color = "yellow";
            document.querySelector("#member-2").style.color = "red";
        }else{
            document.querySelector("#member-2").style.color = "yellow";
            document.querySelector("#member-1").style.color = "red";
        }
    }

}
// function max_of_three(x, y, z) {
//     max_val = [];
//     if (x > y) {
//         max_val[0] = x;
//     } else {
//         max_val[0] = y;
//     }
//     if (z > max_val[0]) {
//         max_val[0] = z;
//     }


//     return max_val;
// }

function all(a, b, c) {
    var places = [];
    if (c > b && b > a) {
        places[0] = c;
        places[1] = b;
        places[2] = a;
    }
    else if (c > a && a > b) {
        places[0] = c;
        places[1] = a;
        places[2] = b;
    }
    else if (b > a && a > c) {
        places[0] = b;
        places[1] = a;
        places[2] = c;
    }
    else if(b>c && c>a){
        places[0] = b;
        places[1] = c;
        places[2] = a;
    }
    else if (a > b && b > c) {
        places[0] = a;
        places[1] = b;
        places[2] = c;
    }
    else if(a>b&&c>b){
        places[0] = a;
        places[1] = c;
        places[2] = b;
    }
    return places
}


