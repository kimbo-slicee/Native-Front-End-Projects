let input=document.getElementById('calc');
let buttons=document.getElementsByTagName('button');


input.addEventListener('keyup',(e)=>{
    
})

function calculate(value){
    if(value!==undefined) input.value+=value
}
const result=()=>{
try{
input.value=eval(input.value)

}catch{
    alert("entre une valide Value")

}

}
const clare=()=>{
    input.value=""
}
const del=()=>{
    input.value.slice(0,-1)
}