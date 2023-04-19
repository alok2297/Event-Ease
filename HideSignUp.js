const inputField=document.getElementById("email-phone-field");
const content1=document.getElementById("hide1");
const content2=document.getElementById("hide2");
const content3=document.getElementById("hide3");

inputField.addEventListener("keyup",function(){
    if(inputField.value!==""){
        content1.style.display="none";
        content2.style.display="none";
        content3.style.display="none";
    }
    else{
        content1.style.display="block";
        content2.style.display="block";
        content3.style.display="block";
    }
});
