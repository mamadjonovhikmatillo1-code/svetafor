let box = document.querySelectorAll(".box");
let i = 0;

function svetofor() {
    for (let j = 0; j < 3; j++) {
        box[j].style.background = "black";
    }

    if (i == 0) {
        box[0].style.background = "red";
    } else if (i == 1) {
        box[1].style.background = "yellow";
    } else if(i == 2){
        box[2].style.background = "greenyellow";
    }


    i++;

    if (i == 3) {
        i = 0;
    }
}

setInterval(svetofor, 1000);