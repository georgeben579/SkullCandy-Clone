const productSlide = document.querySelector('.productSlide');
const productImages = document.querySelectorAll('.productSlide img');

const nextBtn = document.querySelector('#nextBtn');

let counter = 0;
const size = 1590;
// !!!! size is found using "productImages[0].clientwidth". !!!!

// productSlide.style.transform = `translateX(-${size*counter}px)`;

nextBtn.addEventListener('click',()=>{
  productSlide.style.transition = "transform 0.5s ease-in-out";
  counter++;
  productSlide.style.transform = `translateX(-${size*counter}px)`;
})

productSlide.addEventListener('transitionend',()=> {
  if(productImages[counter].id === 'firstClone'){
    productSlide.style.transition = 'none';
    counter = productImages.length-productImages.length;
    productSlide.style.transform = `translateX(-${size*counter}px)`;
    
  }
})
