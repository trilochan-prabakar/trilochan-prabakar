const menuButton=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
if(menuButton&&nav){
  const closeMenu=()=>{nav.classList.remove("open");menuButton.setAttribute("aria-expanded","false");};
  menuButton.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));});
  nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",closeMenu));
  document.addEventListener("keydown",event=>{if(event.key==="Escape"&&nav.classList.contains("open")){closeMenu();menuButton.focus();}});
  document.addEventListener("click",event=>{if(nav.classList.contains("open")&&!nav.contains(event.target)&&!menuButton.contains(event.target))closeMenu();});
}
const revealItems=document.querySelectorAll(".reveal");
if("IntersectionObserver"in window){
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}});},{threshold:.12});
  revealItems.forEach(item=>observer.observe(item));
}else{revealItems.forEach(item=>item.classList.add("visible"));}
