let str="";
const buttonList= document.getElementsByTagName("button");
console.log(buttonList)
Array.from(buttonList).forEach((element)=>{
    element.addEventListener('click',()=>{
        if(element.innerHTML== "="){
            console.log(str)
            input.value=eval(str);
        }
        else{
        str= str+ element.innerHTML;
        let input= document.getElementById('input');
input.value= str;
        }
    })
})



