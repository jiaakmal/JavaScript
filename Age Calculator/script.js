let inputdate=document.getElementById("date")
let output=document.getElementById("result")
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
            m3=m2-m1
        }
        else {
            m3=12+m2-m1;
            y3--;
        }
        if(d2>=d1){
            d3=d2-d1
        }
        else {
            m3--;
            d3=getDaysInMonths(y1,m1)+d2-d1
        }
        if(m3<0){
           m3=11
           y3--;
        }
        output.innerHTML=`You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`

        
    }


        function getDaysInMonths(year, month) {
        return new Date(year, month, 0).getDate();
    }