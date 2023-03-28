const burgerIcon = document.querySelector('.burger__icon');
const burgerOpen = document.querySelector('.header__burger--open');
const menuLinks = document.querySelectorAll('.header__link');
if (burgerIcon){
    burgerIcon.addEventListener("click", function(e) {
        burgerIcon.classList.toggle('_active');
        burgerOpen.classList.toggle('_active');
    });
}

let popupHeader = document.querySelector('.header__popup--bg');
let popupContainer = document.querySelector('.header__popup-container');
let popupButtonLogin = document.querySelectorAll('.button__popup--login');
let eventsNone = document.querySelector('.events__none');
let eventsNoneBody = document.querySelector('body');
let popupLink = document.querySelectorAll('.popup__link');
let popupLinkLogIn = document.querySelectorAll('.popup__link--Login');

let popupTitleLogin = document.querySelector('.popup__title--login');
let headerPopupSignin = document.querySelector('.header__popup--signin'); 
let headerPopupLine = document.querySelector('.header__popup--line');  
let popupTitleSignup = document.querySelector('.popup__title--signup'); 
let headerButtonSignUp = document.querySelector('.header-button__signup'); 
let headerButtonSignIn = document.querySelector('.header-button__signin'); 
let headerFormForgot = document.querySelector('.header__form--forgot'); 
let headerRegisterContainer = document.querySelector('.header-register__container'); 
let headerLoginContainer = document.querySelector('.header-login__container'); 
let popupHeaderClose = document.querySelector('.header__popup--close');

popupButtonLogin.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupHeader.classList.add('_open');
        popupContainer.classList.add('_open');
        eventsNone.classList.add('_open');
        eventsNoneBody.classList.add('_open')
    })
});


document.addEventListener('mousedown', (e) => {
    if (! popupHeaderClose.contains(e.target)) {
        document.body.classList.remove('_open')
        popupHeader.classList.remove('_open');
        popupContainer.classList.remove('_open');
        eventsNone.classList.remove('_open');
        eventsNoneBody.classList.remove('_open')
        popupContainer.classList.remove('open__sign');
        popupTitleLogin.classList.remove('open__sign');
        headerPopupSignin.classList.remove('open__sign');
        headerPopupLine.classList.remove('open__sign');
        popupTitleSignup.classList.remove('open__sign')
        headerButtonSignUp.classList.remove('open__sign')
        headerButtonSignIn.classList.remove('open__sign')
        headerFormForgot.classList.remove('open__sign')
        headerRegisterContainer.classList.remove('open__sign')
        headerLoginContainer.classList.remove('open__sign')
    }
})



popupLink.forEach((a) => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        popupContainer.classList.add('open__sign');
        popupTitleLogin.classList.add('open__sign');
        headerPopupSignin.classList.add('open__sign');
        headerPopupLine.classList.add('open__sign');
        popupTitleSignup.classList.add('open__sign')
        headerButtonSignUp.classList.add('open__sign')
        headerButtonSignIn.classList.add('open__sign')
        headerFormForgot.classList.add('open__sign')
        headerRegisterContainer.classList.add('open__sign')
        headerLoginContainer.classList.add('open__sign')
    })
});

popupLinkLogIn.forEach((a) => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        popupContainer.classList.remove('open__sign');
        popupTitleLogin.classList.remove('open__sign');
        headerPopupSignin.classList.remove('open__sign');
        headerPopupLine.classList.remove('open__sign');
        popupTitleSignup.classList.remove('open__sign')
        headerButtonSignUp.classList.remove('open__sign')
        headerButtonSignIn.classList.remove('open__sign')
        headerFormForgot.classList.remove('open__sign')
        headerRegisterContainer.classList.remove('open__sign')
        headerLoginContainer.classList.remove('open__sign')
    })
});



function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide')

slides[activeSlide].classList.add('active')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClassens()

        slide.classList.add('active')
    })
}

function clearActiveClassens() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

}

slidesPlugin(1)