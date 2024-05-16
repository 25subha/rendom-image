
const img = document.querySelector("img")
const btn = document.querySelector(".btn")
const hone = document.querySelector(".hone")
const images = ["peakpx.jpg","peakpx(1).jpg","peakpx(2).jpg","peakpx(3).jpg","peakpx(4).jpg","peakpx(5).jpg","peakpx(6).jpg","peakpx(7).jpg","peakpx(8).jpg","peakpx(9).jpg"];


function random(max, min) {
        let stpone = max - min + min;
        let stptwo = Math.random()*stpone;
        let result = Math.floor(stptwo)+ 1;
        return result
    }
 btn.addEventListener("click",() => {
    let index = random(images.length - 1, 0)
    img.src = images[index]
    hone.innerHTML = images[index]
})


