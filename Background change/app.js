const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = randomColor();
    h1.innerText = `${randomColor()}`;
})

const randomColor = () => {
    let red = Math.floor(Math.random()*255+1);
    let green = Math.floor(Math.random()*255+1);
    let blue = Math.floor(Math.random()*255+1);
    if (red < 150 && green < 150 && blue < 150){
        h1.style.color = 'white'
    } else {
        h1.style.color = 'black'
    }
    return `rgb(${red},${green},${blue})`;
}