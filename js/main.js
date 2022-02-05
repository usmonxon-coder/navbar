let btn=document.querySelector(".img1")
let link=document.querySelector(".link")
let ochir=document.querySelector(".ochir")

btn.addEventListener("click", ()=>{
    link.style.display="block"
    console.log("salom");
})


ochir.addEventListener("click" ,()=>{
    console.log("xayr");
    link.style.display="none"
})