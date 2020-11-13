const buttonRight = document.querySelector('.right');
const buttonLeft = document.querySelector('.left');
const reviewlist = document.querySelector('.reviews-list');
const reviews = reviewlist.querySelectorAll('.review');

const REVIEW_TOTAL = reviews.length;
const REVIEW_COUNT = 1;
const reviewWidth = 500;
let currentIndex = 0;

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

disableLeftButton();



buttonRight.onclick = function() {
    currentIndex++;
    const currentMarginLeft = parseInt(reviewlist.style.marginLeft);
    reviewlist.style.marginLeft = currentMarginLeft - reviewWidth + 'px';
    undisabledLeftButton();
    if (shouldDisableRightButton()) {
        disableRightButton();
    }
}

buttonLeft.onclick = function() {
    currentIndex--;
    const currentMarginLeft = parseInt(reviewlist.style.marginLeft);
    reviewlist.style.marginLeft = currentMarginLeft + reviewWidth + 'px';
    undisabledRightButton();
    if (shouldDisableLeftButton()) {
        disableLeftButton();
    }
}

