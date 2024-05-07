const notesbox=document.querySelector(".note-containor")
const btn=document.querySelector(".button")
const notes=document.querySelectorAll(".inputbox")

btn.addEventListener("click",(e)=>{
    let inputbox=document.createElement("p")
    let img=document.createElement("img")
    inputbox.className="inputbox"
    inputbox.setAttribute("contenteditable", "true")
    
    img.src="images/delete.png"
    notesbox.appendChild(inputbox).appendChild(img)
    savedata();
})
notesbox.addEventListener('click', (e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        savedata();
    }
    else if(e.target.tagName==="P"){
        let note=document.querySelectorAll(".inputbox")
        note.forEach(nt => {
            nt.onkeyup=()=>{savedata();}

            
        });

    }
})

function savedata(){
    localStorage.setItem("data", notesbox.innerHTML);
}
function showdata(){
    notesbox.innerHTML=localStorage.getItem("data")
}
showdata();