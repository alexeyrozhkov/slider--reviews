const buttonRight = document.querySelector('.right');
const buttonLeft = document.querySelector('.left');

const reviewlist = document.querySelector('.reviews-list');
const reviews = reviewlist.querySelectorAll('.review');

const iconList = document.querySelector('.icons-list');
const icons = iconList.querySelectorAll('.icon');


const REVIEW_TOTAL = reviews.length;
const REVIEW_COUNT = 1;

const reviewWidth = 500;

const iconWidth = 40;
const iconMarginRight = 52;

let currentIndex = 2;

function undisabledLeftButton() {
    buttonLeft.removeAttribute("disabled", "disabled");
    buttonLeft.classList.remove('disabled');
}
function undisabledRightButton() {
    buttonRight.removeAttribute("disabled", "disabled");
    buttonRight.classList.remove('disabled');
}

function disableRightButton() {
    buttonRight.setAttribute("disabled", "disabled"); 
    buttonRight.classList.add('disabled');
}

function disableLeftButton() {
    buttonLeft.setAttribute("disabled", "disabled"); 
    buttonLeft.classList.add('disabled');
}

function shouldDisableLeftButton() {
    return currentIndex === 0;
}

function shouldDisableRightButton() {
    return currentIndex === REVIEW_TOTAL - 1;
}

function setScale(index) {
    
    const current = iconList.querySelector('.current');
    const next = iconList.querySelector('.next');
    const previous = iconList.querySelector('.previous');
    
    if(current) {
        current.classList.remove("current");
    }
    if(next) {
        next.classList.remove('next');
    }
    if(previous) {
        previous.classList.remove('previous');
    }
    icons[index].classList.add("current");
    icons[index + 1].classList.add('next');
    icons[index-1].classList.add('previous');
    
}

function moveIconsRight() {
    const currentMarginLeft = parseInt( iconList.style.marginLeft);
    iconList.style.marginLeft = currentMarginLeft - iconWidth - iconMarginRight + 'px';
}
function moveIconsLeft() {
    const currentMarginLeft = parseInt( iconList.style.marginLeft);
    iconList.style.marginLeft = currentMarginLeft + iconWidth + iconMarginRight + 'px';
}

function moveReviewRight() {
    const currentMarginLeft = parseInt(reviewlist.style.marginLeft);
    reviewlist.style.marginLeft = currentMarginLeft - reviewWidth + 'px';
}

function moveReviewLeft() {
    const currentMarginLeft = parseInt(reviewlist.style.marginLeft);
    reviewlist.style.marginLeft = currentMarginLeft + reviewWidth + 'px';
}


setScale(currentIndex);




buttonRight.onclick = function() {
    currentIndex++;
    moveReviewRight();
    moveIconsRight();
    undisabledLeftButton();
    if (shouldDisableRightButton()) {
        disableRightButton();
    }
    setScale(currentIndex);
}

buttonLeft.onclick = function() {
    currentIndex--;
    moveReviewLeft();
    moveIconsLeft();
    undisabledRightButton();
    if (shouldDisableLeftButton()) {
        disableLeftButton();
    }
    setScale(currentIndex);
}




