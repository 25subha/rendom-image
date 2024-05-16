const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const image = document.querySelectorAll(".image");

let slidenumber = 1;
const length = image.length;

const nextslide =() => {
    slider.style.transform = `translateX(-${slidenumber*800}px)`;
    slidenumber++;
};
const previousslide =() => {
    slider.style.transform = `translateX(-${(slidenumber-2)*800}px)`;
    slidenumber--;
};

    const getfirstslide = () => {
        slider.style.transform = `translateX(0px)`;
        slidenumber =1;
    };
    const getlastslide = () => {
        slider.style.transform = `translateX(-${(length-1)*800}px)`;
        slidenumber =length;
    };

right.addEventListener("click", () => {
   slidenumber < length ? nextslide() : getfirstslide()

});
        
left.addEventListener("click", () => {
    slidenumber > 1 ? previousslide() : getlastslide()
 
 });
