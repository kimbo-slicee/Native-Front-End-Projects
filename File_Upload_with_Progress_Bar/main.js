const form =document.querySelector("form");
let  fileInput=form.querySelector(".file-input");
 progressArea=document.querySelector(".progress-area");
 uploadedArea=document.querySelector(".uploaded-area");

 console.log(form)
 form.addEventListener("click",(e)=>{
     console.log(e)
     fileInput.click();
 })

fileInput.onchange=({target})=>{
     let file=target.files[0];
     if(file){
         let fileName=file.name;
         console.log(fileName);
             uploadFile(fileName);
     }
}
function uploadFile(fileName) {
let xhr=new XMLHttpRequest("POST","PHP/upload.php");
xhr.upload.addEventListener("progress",e=>{
    console.log(e)
})
    let formData=new FormData(form)
    xhr.send(formData)
}
