const showMenuMobile = () => {
    const btnMobile = document.querySelector('.btn-menu-mobile');

    const toggleMenu = () => {
        const nav = document.querySelector('nav');
        nav.classList.toggle('active');
    }
    
    btnMobile.addEventListener('click', toggleMenu);
}

showMenuMobile();

const item = document.querySelectorAll("[data-anime]");

const animeScroll = (element) => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    item.forEach((element) => {
        if(windowTop > element.offsetTop){
            element.classList.add("animate");
        }else{
            element.classList.remove("animate");
        }
    });
}

window.addEventListener('scroll', () => {
    animeScroll();
});

const tabsNavigation = () => {
    const html = {
        links: [...document.querySelector('.tab-links').children],
        contents: [...document.querySelector('.tab-content').children],
        openTab: document.querySelector('[data-open'),
    }
    
    const hideAllTabContent = () => {
        html.contents.forEach(section => {
            section.style.display = "none";
        })
    };
    
    const removeAllActiveClass = () => {
        html.links.forEach(tab => {
            tab.classList.remove("active"); 
            tab.classList.add("disabled");
        })
    }
    
    const showCurrentTab = (id) => {
        const tabContent = document.querySelector(`#${id}`);
        tabContent.style.display = "block";
    }
    
    const selectTab = (event) => {
        hideAllTabContent();
        removeAllActiveClass();

        const target = event.currentTarget;
        showCurrentTab(target.dataset.id);

        target.classList.add("active");
        target.classList.remove("disabled");
    }

    const listenForChanges = () => {
        html.links.forEach(tab => {
            tab.addEventListener('click', selectTab)
        });
    }
    
    const init = () => {
        hideAllTabContent();
        listenForChanges();

        html.openTab.click();
    }
    
    init();
}

window.addEventListener('load', () => {
    const tabNavigation = tabsNavigation();
    tabNavigation.init();
})

// ANIMAÇÃO DE DARK MODE

const changeThemeBtn = document.querySelector('[data-theme]');

function changeBackgroundTheme(){
    document.body.classList.toggle("light");
};

changeThemeBtn.addEventListener('click', () => {
    changeBackgroundTheme();
});

// ANIMAÇÃO CARROSEL