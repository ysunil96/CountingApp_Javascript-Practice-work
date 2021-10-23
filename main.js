
const dec = document.querySelector(".dec");
const res = document.querySelector(".reset");
const inc = document.querySelector(".inc");

const value = document.querySelector("#count");
const c = document.querySelector("#head")
var counter = 0;




dec.addEventListener("click",function(){
    counter--;
    value.textContent = counter;
   if(counter < 0){
       value.style.color = "red";
       c.style.color = "red";
   }
    
})


res.addEventListener("click",function(){
    counter = 0;
    if(counter===0){
    value.textContent = counter;
    value.style.color = "white";
    c.style.color = "Pink";
    }
})


inc.addEventListener("click",function(){
    counter++;
    value.textContent = counter;
    if(counter > 0){
        value.style.color = "yellowgreen";
        c.style.color = "yellowgreen";
    }
})
