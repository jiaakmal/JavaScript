const inputbox=document.querySelector(".inputtask");
const list=document.querySelector(".list-containor");
function addtask(){
    if(inputbox.value===''){
    alert("you must enter something!");
}
    else{
        let li=document.createElement("li")
        li.innerText=inputbox.value;
        list.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputbox.value="";
    savedata();
}
list.addEventListener('click', (e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata()
    }
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);
function savedata(){
    localStorage.setItem("data", list.innerHTML);
}
function showtask(){
    list.innerHTML=localStorage.getItem("data")
}

showtask();