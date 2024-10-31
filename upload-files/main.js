const form =document.querySelector("form");
let  fileInput=form.querySelector(".file-input");
 progressArea=document.querySelector(".progress-area");
 uploadedArea=document.querySelector(".uploaded-area");

 console.log(form)
 form.addEventListener("click",(e)=>{
     fileInput.click();
 })

fileInput.onchange=({target})=>{
     let file=target.files[0];
     if(file){
         let fileName=file.name;
         if(fileName.lenght>=12){
            let splitName=fileName.split('.');
            fileName=splitName[0].substring(0,12)+"... ."+splitName[0]
         }
             uploadFile(fileName);
     }
}
function uploadFile(name) {
let xhr=new XMLHttpRequest();
xhr.open("POST","upload.php");

xhr.upload.addEventListener("progress",({loaded,total})=>{
    let fileLoaded=Math.floor((loaded/total)*100)
    let fileTotal=Math.floor(total/1000)//getting file size in KB  
     console.log(fileLoaded,fileTotal)
     let progressHTML=`
     <li class="row">
            <i class="fas fa-file-alt"></i>
            <div class="content">
                <div class="details">
                    <span class="name">${name} . Uploading </span>
                    <span class="percent">${fileLoaded}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress style="width:${fileLoaded};"></div>
                </div>
            </div>
        </li>
            `
        progressArea.innerHTML=progressHTML;    

        let uploadedHTML= ` 
        <li class="row">
         <i class="fas fa-file-alt"></i>
        <div class="content">
            <div class="details">
               <span class="name">${name}</span>
               <span class="percent">${fileTotal}KB</span>
            </div>
        </div>
            <iclass="fas fa-check"></i>
        </li> 
      `        
      uploadedArea.innerHTML=uploadedHTML;
      uploadedArea.insertAdjacentHTML("afterbegin",uploadedHTML)
})
    let formData=new FormData(form)
    xhr.send(formData)
}
