let str=""
let input= document.getElementById('input');
input.value=str;
        
const buttonList= document.getElementsByTagName("button");
console.log(buttonList)
Array.from(buttonList).forEach((element)=>{
    element.addEventListener('click',()=>{
        if(element.innerHTML=== "="){
            console.log(str)
            input.value=eval(input.value);
        }
        else if(element.innerHTML==="c"){
            input.value="";
        }
        else{
        input.value=input.value+ element.innerHTML;
        }
    })
})



