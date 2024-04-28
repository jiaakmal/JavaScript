const getColor=() =>{
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
      document.body.style.backgroundColor=color;
      document.getElementsByTagName('h2').item(0).innerHTML=color
      navigator.clipboard.writeText(color)


    }
  };

  document.getElementById('button').addEventListener('click',getColor);
  //setInterval(getColor,2000);
  getColor();
  
  