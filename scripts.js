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

const itemsContainer = document.getElementById('items')
window.addEventListener('load', () => {
    fetch('http://restaurantapi.somee.com/api/item/Get-All-Items', {method: 'GET'})
    .then(response => response.json())
    .then(data => {
        let itemsHTML = '';
        data.forEach(item => {
            itemsHTML += `
            <div class="menu-item">
              <div class="image-wrapper"><img src="${item.imageUrl}" alt=""></div>
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>${item.price} $</p>
                </div>`;
            });
            itemsContainer.innerHTML = itemsHTML;
        })
    });
