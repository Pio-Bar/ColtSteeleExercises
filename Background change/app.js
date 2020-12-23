const btn = document.querySelector('button');
const body = document.querySelector('body')
const h1 = document.querySelector('h1')

btn.addEventListener('click', () => {
    let red = Math.floor(Math.random()*255+1);
    let green = Math.floor(Math.random()*255+1);
    let blue = Math.floor(Math.random()*255+1);
    body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    h1.innerText = `RGB (${red},${green},${blue})`;
})