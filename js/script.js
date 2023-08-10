let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.header .navbar');
let formBtn=document.querySelector('#login-btn');
let loginForm=document.querySelector('.login-form-container');
let formClose=document.querySelector('#form-close');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

menu.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

formBtn.addEventListener('click',()=>{
    loginForm.style.top=0;
});
formClose.addEventListener('click',()=>{
  loginForm.style.top='-120%';
});

var swiper = new Swiper(".home-slider", {
    loop:true,
  navigation: {
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
});

var swiper=new Swiper(".reviews-slider",{
    loop:true,
    spaceBetween:20,
    autoHeight:true,
    grabCursor:true,
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      768:{
        slidesPerView:2,
      },
      1020:{
        slidesPerView:3,
      },
    }
});

let loadbtn=document.querySelector('.packages .load-more .btn');
let currentItem=3;

loadbtn.onclick=()=>{
  let boxes=[...document.querySelectorAll('.packages .box-container .box')];
  for(var i=currentItem;i<currentItem+3;i++)
  {
    boxes[i].style.display='inline-block';
  };
  currentItem+=3;
  if(currentItem>=boxes.length)
  {
    loadbtn.style.display='inline-block';
  }
}
