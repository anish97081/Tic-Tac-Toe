let boxes=document.querySelectorAll(".box");
let resetbtn =document.querySelector("#reset-btn");
let newGameBtn= document.querySelector("#new-btn");
let msgcontainer =document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let turn0= true;   // playerX ,playerO
let count=0;


const winpatterns=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

const resetGame =()=>{
    turn0 =true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
         
            box.style.color="blue";
            turn0=false;
        }else{
            box.innerText="X";
            box.style.color="red";
            turn0=true;
        }
       
       box.disabled= true;
       count++;
       console.log(count);
        checkwinner();
        gameDraw();
    });
});
 
const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled =true;
    }
};

const enableBoxes = ()=>{
    for(let box of boxes){
    box.disabled= false;
    box.innerText="";
    }
};


const gameDraw =()=>{
    if (count===9){
    msg.innerText=" Game is Drow no one is winner";
    msgcontainer.classList.remove("hide");
    disableBoxes();
    }
};



const showWinner = (Winner)=>{
 msg.innerText= `congratulation, Winner is ${Winner}`;
 msgcontainer.classList.remove("hide");
 disableBoxes();
};

const checkwinner = () => {
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val !=""  &&  pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);