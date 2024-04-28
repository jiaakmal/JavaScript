const questions=[
    {
        'que':'which of the following is a markup language?',
        'a':'html',
        'b':'css',
        'c':'javascript',
        'd':'all of the above',
        'correct':'a',
        },
        {
            'que':'what year was javascript lanched?',
            'a':'1995',
            'b':'1996',
            'c':'1997',
            'd':'1998',
            'correct':'a',
        },
        {
            'que':'which of the following is a programming language?',
            'a':'html',
            'b':'css',
            'c':'javascript',
            'd':'none of the above',
            'correct':'d',

        },
        {
        'que':'which of the following is scripting language?',
        'a':'html',
        'b':'css',
        'c':'javascript',
        'd':'none of the above',
        'correct':'c',

        },

]

let index=0
let quebox=document.getElementById("question")
let choice=document.querySelectorAll('.option')
const loadQuestion=() =>{
    let data=questions[index]
quebox.innerHTML=`${index+1}) ${data.que}`;
choice[0].nextElementSibling.innerHTML=data.a
choice[1].nextElementSibling.innerHTML=data.b
choice[2].nextElementSibling.innerHTML=data.c
choice[3].nextElementSibling.innerHTML=data.d
}
const  submitquiz=()=>{
   getanswer();
}

loadQuestion();
const getanswer=()=>{
    let answer
    for(let i=0;i<choice.length;i++){
        if(choice[i].checked){
            answer=choice[i].value
            console.log(answer)
        }
    }
    }
    const checkanswer=()=>{
        choice.forEach(()=>{
            if(.checked){
                console.log("yes")        
             }else{
                console.log("no")
             }

        })

    }