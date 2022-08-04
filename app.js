// function displayVal(){

// }


function getValue(v){
    var screen = document.getElementById("screen"); 
    
    if(v === "clear all"){
             screen.innerText = null;
        // screen.innerText = null
    }
    else if(v === "="){
        // alert(screen.innerText)
        screen.innerText = eval(screen.innerText);
        
    }
    else if(v === "back"){
        // alert(screen.innerText)
         screen.innerText = screen.innerText.substring(0,screen.innerText.length-1);

    }
    else{
            screen.innerText += v;
       console.log(screen.innerText)
        

   }
}