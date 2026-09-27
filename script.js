function next(id){document.getElementById(id).scrollIntoView({behavior:"smooth"});}
function openMessage(btn){
 btn.style.display="none";
 document.getElementById("letter").classList.add("show");
 document.getElementById("continueBtn").classList.add("show");
 setTimeout(()=>document.getElementById("letter").scrollIntoView({behavior:"smooth",block:"start"}),80);
}
window.addEventListener("scroll",()=>{
 const max=document.documentElement.scrollHeight-innerHeight;
 document.querySelector(".progress i").style.width=(scrollY/max*100)+"%";
});
