let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let msg_container = document.querySelector(".msg-container");
let new_btn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");

let turnO = true;

const winpatters = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];

const reset_game = () => {

let turnO = true;
enable();
msg_container.classList.remove("hide");


}

const disable = () => {

    for (let box of boxes) {
        box.disabled = true;
    }

}

const enable = () => {

    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }

}

boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if (turnO){ //playerO
            box.innerText = "O";
            turnO=false;
        } else { //playerx
            box.innerText = "x"; 
            turnO=true;
        }
box.disabled = true;


checkwinn();
    
    })

})


const showWinner = (winner) =>{

    msg.innerText = `Congratulations, winner is ${winner}`;
    msg_container.classList.remove("hide");

disable();
}


const checkwinn = () => {

    for (let pattern of winpatters) {

        let pos1val = boxes[pattern[0]].innerText ;
        let pos2val = boxes[pattern[1]].innerText ;
        let pos3val = boxes[pattern[2]].innerText ;

   

    if (pos1val!="" && pos2val != "" && pos3val != ""){
        if (pos1val===pos2val && pos2val=== pos3val) {
            showWinner (pos1val)
        }

    }

}
}


new_btn . addEventListener ("click",reset_game);
reset_btn . addEventListener ("click",reset_game);

