let inputdate=document.getElementById("date")
inputdate.max=new Date().toISOString().split("T")[0]; 
function calculate()
    {
        let birthdate=new Date(inputdate.value);

        let d1=birthdate.getDate();
        let m1=birthdate.getMonth()+1;
        let y1=birthdate.getFullYear();

        let today=new Date();
          let d2=today.getDate()
          let m2=today.getMonth()+1;
          let y2=today.getFullYear();

        let m3, d3, y3;
        y3=y2-y1;
        
        if(m2>=m1){
            m3=m2-m
        }
        else 

        
    }