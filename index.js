console.log("1. Вёрстка валидная +10\n2. Вёрстка семантическая +20\n3. Вёрстка соответствует макету +48\n4. Требования к css + 12\n5. Интерактивность реализуемая через css +20\n Общий балл - 100/100.");

//Burger handler
    const burgerMenu = document.querySelector('.menu-btn');
    const menu = document.querySelector('.navigation-mobile');
    const menuCloser = document.querySelector('.cross-div');
    const closerLink = document.querySelectorAll('.nav-link-mobile');
    const blockerMobile = document.querySelector('.blocker-mobile');
    burgerMenu.addEventListener('click', () => {
        menu.classList.add('navigation-mobile-active');
        blockerMobile.style.display = 'flex';
        blockerMobile.addEventListener('click', e => {
            blockerMobile.style.display = 'none';
            menu.classList.remove('navigation-mobile-active');
        });

    });
    menuCloser.addEventListener('click', () => {
        menu.classList.remove('navigation-mobile-active');
        blockerMobile.style.display = 'none';
    });
    closerLink.forEach(element => {
        element.addEventListener('click', e => {
            menu.classList.remove('navigation-mobile-active');
            blockerMobile.style.display = 'none';
        });
    });


/////////////////////////////////////////////// SLIDER SCRIPT DESKTOP ///////////////////////////////////////////////

const rightButton = document.querySelector(".btn-right");
const leftButton = document.querySelector(".btn-left");
const sliderTrack = document.querySelector('.slider-container');
const slides = Array.from(sliderTrack.children);
const dotsTrack = document.querySelector('.dots-container');
const dots = Array.from(dotsTrack.children);
let counter = 1;

 //Get slide width
 const slideWidth = slides[1].getBoundingClientRect().width;
 const paddingText = window.getComputedStyle(slides[1]).marginLeft;
 const padding = parseInt(paddingText);
 amountToMove = slideWidth + padding * 2;

//Go right
const goRight = function() {
    if (counter === 1) {    
        sliderTrack.style.transform = 'translateX(-'  + amountToMove + 'px' + ')';
    counter = 2} else {
        sliderTrack.style.transform = 'translateX(0px)';
        counter = 1;
    }
    dots[counter].classList.add('dot-active');
    dots[counter-1].classList.remove('dot-active');
    dots[counter+1].classList.remove('dot-active');
};
//Go left
const goLeft = function() {
    if (counter === 1) {    
        sliderTrack.style.transform = 'translateX('  + amountToMove + 'px' + ')';
    counter = 0} else {
        sliderTrack.style.transform = 'translateX(0px)';
        counter = 1;
    }
    dots[counter].classList.add('dot-active');
    dots[counter+1].classList.remove('dot-active');
    dots[counter-1].classList.remove('dot-active');
};



//What happens when I click on the right image?
rightButton.addEventListener('click', e => {
        goRight();
       
});

//What happens when I click on the left image?
leftButton.addEventListener('click', e => {
    goLeft();
});

//Dots Handler

dots[0].addEventListener('click', e => {
    if(counter === 0) {return} else if (counter === 1) {goLeft()} else {goLeft(); goLeft()}
});
dots[2].addEventListener('click', e => {
    if(counter === 2) {return} else if (counter === 1) {goRight()} else {goRight();goRight()}
});
dots[1].addEventListener('click', e => {
    if (counter === 2) {goLeft()} else if (counter === 0) {goRight()} else {return};
})

/////////////////////////////////////////////// SLIDER SCRIPT DESKTOP END ///////////////////////////////////////////////



/////////////////////////////////////////////// SLIDER SCRIPT MOBILE ///////////////////////////////////////////////

const rightArrow = document.querySelector('.right-arrow-div');
const leftArrow = document.querySelector('.left-arrow-div');
mobileSlides = Array.from(document.querySelector('.slider-container-mobi').children);
let counterMobile = 0;
let currentMobileSlide = mobileSlides[counterMobile];
const dotsTrackMobile = document.querySelector('.dots-container-mobi');
const dotsMobile = Array.from(dotsTrackMobile.children);

//Go right

const goRightMobile = function(){
    counterMobile++;
    if (counterMobile <= 2) {
        mobileSlides[counterMobile].classList.add("slide-mobi-active");
        mobileSlides[counterMobile-1].classList.remove("slide-mobi-active");
        dotsMobile[counterMobile].classList.add('dot-mobi-active');
        dotsMobile[counterMobile-1].classList.remove('dot-mobi-active');
    } else if (counterMobile === 3) {
        mobileSlides[counterMobile-1].classList.remove("slide-mobi-active");
        dotsMobile[counterMobile-1].classList.remove('dot-mobi-active');
        counterMobile = 0;
        mobileSlides[counterMobile].classList.add("slide-mobi-active");
        dotsMobile[counterMobile].classList.add('dot-mobi-active');
    }
};
//Go left
const goLeftMobile = function(){
    counterMobile--;
    if (counterMobile === -1) {
        mobileSlides[counterMobile+1].classList.remove("slide-mobi-active");
        dotsMobile[counterMobile+1].classList.remove('dot-mobi-active');
        counterMobile = 2;
        mobileSlides[counterMobile].classList.add("slide-mobi-active"); 
        dotsMobile[counterMobile].classList.add('dot-mobi-active');
    } else if (counterMobile >=0) {
        mobileSlides[counterMobile].classList.add("slide-mobi-active");
        mobileSlides[counterMobile+1].classList.remove("slide-mobi-active");
        dotsMobile[counterMobile].classList.add('dot-mobi-active');
        dotsMobile[counterMobile+1].classList.remove('dot-mobi-active');
    }

};

//What happens when I click on the right arrow?

rightArrow.addEventListener('click', e => goRightMobile());

//What happens when I click on the left arrow?

leftArrow.addEventListener('click', e => goLeftMobile());



/////////////////////////////////////////////// SLIDER SCRIPT MOBILE END ///////////////////////////////////////////////



/////////////////////////////////////////////// POP-UP MENU SCRIPT START ///////////////////////////////////////////////

const popup = document.querySelector('.login-pop-up');
const blocker = document.querySelector('.blocker');
const loginBtn = document.querySelector('.login-btn');
const accountBtn = document.querySelector('.account-btn');

blocker.addEventListener('click', e => {
    popup.style.display="none";
});

loginBtn.addEventListener('click', e=> {
    popup.style.display="flex";
})

accountBtn.addEventListener('click', e=> {
    popup.style.display="flex";
})

/////////////////////////////////////////////// POP-UP MENU SCRIPT END ///////////////////////////////////////////////

/////////////////////////////////////////////// FORM SCRIPT START ///////////////////////////////////////////////

const email = document.querySelector('.email-input');
const password = document.querySelector('.password-input');
const signInBtn = document.querySelector('.sign-in-btn');

signInBtn.addEventListener('click', e => {
const userEmail = email.value;
const userPassword = password.value;
alert(userEmail + '\n' + userPassword);
});


/////////////////////////////////////////////// FORM SCRIPT END ///////////////////////////////////////////////

const registerButton = document.querySelector('.register-text');
const createAccountHeading = document.querySelector('.log-in-to-account');
const fbButton = document.querySelector('.facebook-btn');
const googleButton = document.querySelector('.google-btn');
const halfLine = document.querySelector('.line-div');
const passwordHint = document.querySelector('.password-hint-div');
const noAccountYet = document.querySelector('.no-account-yet');
const popUpWindow = document.querySelector('.pop-up-content');

registerButton.addEventListener('click', e => {
    createAccountHeading.textContent = 'Create account';
    fbButton.style.display = "none";
    googleButton.style.display = "none";
    halfLine.style.display = "none";
    signInBtn.textContent = "Sign Up";
    passwordHint.style.display = "none";
    noAccountYet.innerHTML =  "<p class='no-account-yet'>Already have an account? <span class='register-text'>Log in</span></p>"
    popUpWindow.style.height = "436px";
})