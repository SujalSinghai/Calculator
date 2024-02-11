let input=document.getElementById('inputbox');
let buttons=document.querySelectorAll('button');
let string="";
let arr= Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e)=>{
        button.classList.add('playing')
        if(e.target.innerHTML == "="){
            string = eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML=="AC"){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=="DEL"){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
       else{
        string+=e.target.innerHTML;
        input.value=string;
       }
    })
})
const keys=document.querySelectorAll('button')
// console.log(keys);
keys.forEach(function(e){
    e.addEventListener('transitionend',function(i){
       if(i.propertyName !== "transform") return;
        this.classList.remove('playing');
    })
})

