const bx1 = document.getElementsByClassName("bx")[0];
const left = document.getElementById('left');
const right = document.getElementById('right');

left.addEventListener('click', () =>{
    bx1.scrollLeft += 105;
});
right.addEventListener('click', () =>{
    bx1.scrollLeft -= 105;
});



const scroll_watch = document.getElementsByClassName("scroll_watch");
const span_number = document.getElementById("span_number");
const main_watch = document.getElementsByClassName("main_watch")[0];
const svgtext = document.getElementById("svgstroke");
const h6 = document.getElementsByTagName("h6")[0];
const img = document.getElementsByClassName("img")[0];



scroll_watch[0].addEventListener('click',()=>{
    main_watch.src = "watch.png";
    span_number.innerText = 1;
    svgtext.innerHTML = `<text x="0%" y="90%">Gen 5</text>`;
    h6.innerText = "$359.00";
    setTimeout(() => {
        img.style.bottom = "-100px"
    }, 500);
    setTimeout(() => {
        img.style.bottom = "-230px"
    }, 1000);
    setTimeout(() => {
        img.src = "img1.png";
    }, 1900);
    setTimeout(() => {
        img.style.bottom = "0px"
    }, 2300);
});
scroll_watch[1].addEventListener('click',()=>{
    main_watch.src = "watch2.png";
    span_number.innerText = 2;
    svgtext.innerHTML = `<text x="0%" y="90%">Gen 6</text>`;
    h6.innerText = "$469.00";
    setTimeout(() => {
        img.style.bottom = "-100px"
    }, 500);
    setTimeout(() => {
        img.style.bottom = "-230px"
    }, 1000);
    setTimeout(() => {
        img.src = "img2.png";
    }, 1900);
    setTimeout(() => {
        img.style.bottom = "0px"
    }, 2300);
});
scroll_watch[2].addEventListener('click',()=>{
    main_watch.src = "watch3.png";
    span_number.innerText = 3;
    svgtext.innerHTML = `<text x="0%" y="90%">Gen 8</text>`;
    h6.innerText = "$649.00";
    setTimeout(() => {
        img.style.bottom = "-100px"
    }, 500);
    setTimeout(() => {
        img.style.bottom = "-230px"
    }, 1000);
    setTimeout(() => {
        img.src = "img3.png";
    }, 1900);
    setTimeout(() => {
        img.style.bottom = "0px"
    }, 2300);
});

const add_to_cart = document.getElementById("add_to_cart");
const cart = document.getElementById("cart");

var  a  = 0;
cart.innerText = a;
add_to_cart.addEventListener('click', () => {
    a += 1;
    cart.innerText = a ;
});