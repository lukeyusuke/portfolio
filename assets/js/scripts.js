const showMenuMobile = () => {
    const btnMobile = document.querySelector('.btn-menu-mobile');

    const toggleMenu = () => {
        const nav = document.querySelector('nav');
        nav.classList.toggle('active');
    }
    
    btnMobile.addEventListener('click', toggleMenu);
}

showMenuMobile();