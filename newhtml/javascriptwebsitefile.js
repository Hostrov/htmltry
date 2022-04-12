const navSlide = () => {
    const mobile = document.querySelector('.mobile');
    const nav = document.querySelector('.nav-link');
    const navlink = document.querySelectorAll('.nav-link li');


    mobile.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();