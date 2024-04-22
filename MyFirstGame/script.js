console.log("MY TIC TAC TOE")
let boxes=document.querySelectorAll('.box')
let resetBtn=document.querySelector('.resetBtn')
let newgame=document.querySelector('.newgame')
let msgContainer=document.querySelector('.msg-container')
let msg=document.querySelector('.msg')



const disableBoxes= ()=>{
    for(let box of boxes)
    {
        box.disabled=true
    }
}
const enableBoxes= ()=>{
    for(let box of boxes)
    {
        box.disabled=false
        box.innerHTML=""
    }
}
const resetGame=()=>{
    turnX=true
    enableBoxes();
    msgContainer.classList.add("hide")
}


const showwinner =(winner)=>{

msg.innerHTML=`congragulation. winner is ${winner}`
msgContainer.classList.remove("hide")
disableBoxes();
}


 
let turnX=true;
 let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
 ]


 boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
if(turnX){
    box.innerHTML="O"
    turnX=false
}else{
    box.innerHTML="X"
    turnX=true
}

box.disabled=true
checkwinner();
    });
 });

 const checkwinner=  ()=> {
    for(let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerHTML
        let pos2=boxes[pattern[1]].innerHTML
        let pos3=boxes[pattern[2]].innerHTML
        if(pos1!=""&& pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
            showwinner(pos1);
            }
        }
    }

 }

 newgame.addEventListener('click',resetGame)
 resetBtn.addEventListener('click',resetGame)