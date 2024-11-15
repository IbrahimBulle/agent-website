const toggle=document.querySelector(".toggle")
const navigation=document.querySelector(".navigation")
const social=document.querySelector(".social-bar")
toggle.addEventListener("click",()=>{
    toggle.classList.toggle("active")
    navigation.classList.toggle("active")
})
