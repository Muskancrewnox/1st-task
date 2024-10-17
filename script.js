function showNav(){
const button= document.querySelector(".shownav");
const nav =document.querySelector(".navs");

nav.classList.toggle("active");
}
  
  document.querySelectorAll('.panel').forEach(panel=>{
    panel.addEventListener('click',()=>{
      const content =panel.nextElementSibling;
      content.classList.toggle('running');
    })
       
})

