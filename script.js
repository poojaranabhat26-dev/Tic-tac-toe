let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-button");
let newBtn = document.querySelector(".new-btn");
let resetButton = document.querySelector("#reset-button");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let inputField = document.querySelector(".inputField");
let player1 = document.getElementById("name1");
let player2 = document.getElementById("name2");


let turn0 = true;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
    boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "X";
            turn0 = false;
        } else {
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const resetBtn = ()=>{
    turn0=true;
    msgContainer.classList.add("hide");
    enableButton();
    inputField.classList.remove("hide");

};
const disableButton = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableButton = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML="";
    }
            player1.value = "";
    player2.value = "";

    }

const showWinner = (winner) => {
    if(winner === "X"){
        msg.innerText = `Congratulation winner is ${player1.value}`;
    }else{
        msg.innerText = `Congratulation winner is ${player2.value}`;
    }
    msgContainer.classList.remove("hide");
    inputField.classList.add("hide");
    disableButton();
}
const checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !=""  && pos2Val !=""  && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);

            }
        };
    };

};

resetButton.addEventListener("click", resetBtn);
newBtn.addEventListener("click", resetBtn);
