const questions=[
    {
        'que':'which of the following is a markup language?',
        'a':'html',
        'b':'css',
        'c':'javascript',
        'd':'all of the above',
        'cor':"a"
        },
        {
            'que':'what year was javascript lanched?',
            'a':'1995',
            'b':'1996',
            'c':'1997',
            'd':'1998',
            'cor':"c"
        },
        {
            'que':'which of the following is a programming language?',
            'a':'html',
            'b':'css',
            'c':'javascript',
            'd':'none of the above',
            'cor':"d"

        },
        {
        'que':'which of the following is scripting language?',
        'a':'html',
        'b':'css',
        'c':'javascript',
        'd':'none of the above',
        'cor':"c"

        },

]

let index=0
let right=0,wrong=0,total=questions.length;
let quebox=document.getElementById("question")
let optionInputs=document.querySelectorAll('.option')
const loadQuestion=() =>{
    const data=questions[index]
    if(index===total){
        endQuiz();
    }
    
        reset();
    
quebox.innerHTML=`${index+1}) ${data.que}`; 
optionInputs[0].nextElementSibling.innerHTML=data.a 
optionInputs[1].nextElementSibling.innerHTML=data.b 
optionInputs[2].nextElementSibling.innerHTML=data.c 
optionInputs[3].nextElementSibling.innerHTML=data.d
}

const submitquiz=()=>{
    let answer=getanswer();
    if(answer===questions[index].cor){
        right++
    }
    else{
        wrong++
    }
    index++
    if(index<questions.length){
        loadQuestion()}
        return;
   
}

const getanswer=()=>{
    let answer
 optionInputs.forEach((input)=>{
        if(input.checked){
            console.log(input.value)
           answer= input.value
        }
            

    })
    return answer
}
const reset=()=>{
 optionInputs.forEach((input)=>{
        input.checked=false
    })
}
const endQuiz=()=>{
    document.getElementsByClassName(".box").innerHTML=
    `<h1>thank for playing </h1>
    <h3>${right} out of ${total} are correct.</h3>
    `



} 


//initial call
loadQuestion();

