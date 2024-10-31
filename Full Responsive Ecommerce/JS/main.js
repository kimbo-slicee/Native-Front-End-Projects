const bar=document.querySelector('#bar')
const ul=document.getElementsByTagName('ul')[0]
const x_mark=document.getElementById('x-mark');
x_mark.style.display='none'

bar.addEventListener("click",()=>{
    ul.classList.add('active');

})
x_mark.addEventListener("click",()=>{
    ul.style.marginRight="-300px"
    x_mark.style.display='none'

})
