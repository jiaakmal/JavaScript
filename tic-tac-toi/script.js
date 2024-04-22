console.log("welcome to tic tac toe")


let turn="X";
let isgameover=false

// function to change changeTurn
const changeTurn = ()=>{
    return turn === "X" ? "0" : "X"
}


// function to check win
const checkWin = ()=>{
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7], 
        [2,5,8], 
        [0,4,8],
        [2,4,6],
    ]

    wins.forEach(e=>{
        boxtext=document.getElementsByClassName('boxtext')
        let a=e[0];
        let b=e[1];
        let c=e[2];
        if(boxtext[a].innerText===turn && boxtext[b].innerText===turn && boxtext[c].innerText===turn){
            
            document.getElementsByClassName("info")[0].innerText = "won"+turn
            isgameover=true

        }
    })

}

//game logic
 let boxes= document.getElementsByClassName("box")
 Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
      if(boxtext.innerText===""){
        boxtext.innerHTML=turn;
        turn=changeTurn();
        checkWin();
        if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for" +turn

        }



      }  
})

 })
  
 //addEventListener onclick to reset

 reset.addEventListener('click', ()=>{
    let boxes=document.querySelectorAll('.boxtext')
    Array.from(boxes).forEach(element=>{
        element.innerHTML="";
    });
    turn="X"
    isgameover=false
    document.getElementsByClassName("info")[0].innerText = "Turn for" +turn
    
 })
