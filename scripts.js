const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 1000
});


//Scroll to top
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', ()=>{
    if(window.scrollY > window.innerHeight * 0.8){
        scrollBtn.classList.add('show');
    }
    else{
        scrollBtn.classList.remove('show');
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});