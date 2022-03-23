const selectElement = (e) => {
  let element = document.querySelector(e);
  if(!element){
    throw new Error('Element doesn\'t exit.')
  }
  return element;
}

window.addEventListener('DOMContentLoaded', (event) => {

  window.addEventListener('scroll', ()=>{
    let nav = selectElement('.navbar');
    if(window.scrollY > 0){
      nav.style.background = '#4D4DFF';
    }else{
      nav.style.background = 'transparent';
    }
  });

  let faqs = document.querySelectorAll('.faq');
  faqs.forEach((faq) => {
    let answer = faq.querySelector('.answer');
    let sign = faq.querySelector('.sign i');

    answer.style.display = 'none';
    faq.addEventListener('click',() => {
      console.log('first time');
      if(answer.style.display != 'none'){
        answer.style.display = 'none';
        sign.className = 'uil uil-plus';
        
      }else{
        answer.style.display = 'block';
        sign.className = 'uil uil-minus';
      }
    });
  });
  

  let openMenu = selectElement('#open-nav-menu');
  let closeMenu = selectElement('#close-nav-menu');
  let navMenu = selectElement('.nav__menu');
  let navLinks = document.querySelectorAll('.nav__link');
  openMenu.onclick = () =>{
    navMenu.classList.toggle('show-menu');
    openMenu.classList.toggle('show');
    closeMenu.classList.toggle('show');
  }

  closeMenu.onclick = () =>{
    navMenu.classList.toggle('show-menu');
    openMenu.classList.toggle('show');
    closeMenu.classList.toggle('show');
  }
});
