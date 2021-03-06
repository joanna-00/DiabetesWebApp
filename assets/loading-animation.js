const loadScreen = document.getElementById('load-screen')

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    loadScreen.classList.add('hidden');
    setTimeout(checkLocalStorage, 0)
});

function checkLocalStorage() {
    console.log(localStorage.getItem('pageLoadedBefore'))
    // get pageLoadedBefore from locaStorage
    // if it doesnt exist, perform tutorial
    if(localStorage.getItem('pageLoadedBefore') === null) {
        runTutorial()
        localStorage.setItem('pageLoadedBefore', 'true')
    }
}

//tutorial tooltips
function runTutorial() {
    let tutorialWrap = document.getElementById('tutorial-wrap')
    let darkOverlay = document.getElementById('dark-overlay')
    let tutorialSlide1 = document.getElementById('intro1')
    let tutorialSlide2 = document.getElementById('intro2')
    let tutorialSlide3 = document.getElementById('intro3')
    let tutorialCross1 = document.getElementById('tutorial-cross1')
    let tutorialCross2 = document.getElementById('tutorial-cross2')
    let tutorialCross3 = document.getElementById('tutorial-cross3')

    // go through each slide
    // once one slide is closed, play the next one
    tutorialWrap.classList.remove('wrap-hidden')
    darkOverlay.classList.remove('wrap-hidden')
    tutorialSlide1.classList.remove('wrap-hidden')
    tutorialCross1.addEventListener('click', () => {
        console.log('click')
        tutorialSlide1.classList.add('wrap-hidden');
        tutorialSlide2.classList.remove('wrap-hidden')
    })
    tutorialCross2.addEventListener('click', () => {
        tutorialSlide2.classList.add('wrap-hidden');
        tutorialSlide3.classList.remove('wrap-hidden')
    })
    tutorialCross3.addEventListener('click', () => {
        tutorialSlide3.classList.add('wrap-hidden');
        tutorialWrap.classList.add('wrap-hidden')
    })

    
}
