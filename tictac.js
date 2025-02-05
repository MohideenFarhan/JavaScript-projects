let boxes=document.querySelectorAll(".box");
let restbtn=document.querySelector("#reset-game");
let newGameBtn=document.querySelector("#new-game");
let msgconatiner=document.querySelector(".msg-container");
let msg=document.querySelector('#msg');


let turnO =true;

const winningPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame=()=>{
    turnO=true;
    EnableBoxes();
    msgconatiner.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText="O";
            box.style.color="green";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const EnableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}




const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgconatiner.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winningPattern){
        
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!=="" && pos2val!="" && pos3val!="")
        {
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }

    }
}


newGameBtn.addEventListener("click",resetgame);
restbtn.addEventListener("click",resetgame);
