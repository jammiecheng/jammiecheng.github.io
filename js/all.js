const slides1 = document.querySelectorAll('#image1>.slide') //輪播圖
const slides2 = document.querySelectorAll('#image2>.slide') //輪播圖
const leftBtn1 = document.getElementById('left1')
const rightBtn1 = document.getElementById('right1')
const leftBtn2 = document.getElementById('left2')
const rightBtn2 = document.getElementById('right2')

let activeSlide1 = 0
let activeSlide2 = 0
//預設圖片從第0張開始，可以改成其他數字，會變成不同的背景圖片

// 右箭頭
rightBtn1.addEventListener('click', () => {
    activeSlide1++

    if (activeSlide1 > slides1.length - 1) {
        activeSlide1 = 0  //若到最後一張圖時，按下一張會回到開頭的圖片
    }

    setActiveSlide1()
})

// 左箭頭
leftBtn1.addEventListener('click', () => {
    activeSlide1--

    if (activeSlide1 < 0) {
        activeSlide1 = slides1.length - 1 //若在第一張圖時，按上一張會回到最後的圖片
    }

    setActiveSlide1()
})
// 右箭頭
rightBtn2.addEventListener('click', () => {
    activeSlide2++

    if (activeSlide2 > slides2.length - 1) {
        activeSlide2 = 0  //若到最後一張圖時，按下一張會回到開頭的圖片
    }

    setActiveSlide2()
})

// 左箭頭
leftBtn2.addEventListener('click', () => {
    activeSlide2--

    if (activeSlide2 < 0) {
        activeSlide2 = slides2.length - 1 //若在第一張圖時，按上一張會回到最後的圖片
    }

    setActiveSlide2()
})

function setActiveSlide1() {
    slides1.forEach((slide1) => slide1.classList.remove('active'))
    slides1[activeSlide1].classList.add('active')
}
function setActiveSlide2() {
    slides2.forEach((slide2) => slide2.classList.remove('active'))
    slides2[activeSlide2].classList.add('active')
}