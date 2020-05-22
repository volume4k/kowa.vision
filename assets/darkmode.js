let DARKMODE = false
let BODY = document.querySelector('body')
// const BODY = document.getElementsByName('body')

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    DARKMODE = true;
} else {
    DARKMODE = false;
}

// const switchMode = () => {
//     DARKMODE = !DARKMODE;
//     setClassToBody();
// }

const setClassToBody = () => {
    if (DARKMODE) {
        BODY.classList.add('dark')
        BODY.classList.remove('light')
    } else {
        BODY.classList.add('light')
        BODY.classList.remove('dark')
    }
}

console.log(DARKMODE);
console.log(BODY)
setClassToBody()