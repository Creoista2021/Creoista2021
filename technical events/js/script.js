var navLinks = document.getElementById("navLinks");
function showMenu()
{
    navLinks.style.right = "0";
}
function hideMenu()
{
    navLinks.style.right = "-200px";
}

window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 400)
})

function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
}
window.addEventListener('display',function(){
    var display=document.querySelector('.container'); 
    display.classList.toggle("active",window.scrollY>0);
})
const links = document.querySelectorAll(".scroll-to");
links.forEach((item)=>{
    item.addEventListener("click",()=>{
        const el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth", block:"start"})
    })
})