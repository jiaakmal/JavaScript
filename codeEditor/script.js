let output=document.querySelector("#output")
output.contentDocument.body.innerHTML="<h1>my content</h1>"

let alloutput=document.querySelectorAll(".left-part textarea")
let htmlcode, csscode,jscode='';

alloutput.forEach((el,index)=>{
    el.addEventListener("keyup", ()=>{
        if(index===0){
            htmlcode=el.value
        }
        else if(index===1){
            csscode=el.value
        }
        else{
            jscode=el.value
        }
        output.contentDocument.body.innerHTML=htmlcode+"<style>"+csscode+"</style>"
        output.contentWindow.eval(jscode)
    })
})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    