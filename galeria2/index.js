
let mousePos = { x: undefined, y: undefined };
const mouseCont = document.createElement('div');
document.querySelector('body').appendChild(mouseCont);

window.addEventListener('mousemove', (event) => {
  mousePos = { x: event.clientX, y: event.clientY };
});

let interval;

const color = [
    'rgb(255, 255, 255)',
]

interval = setInterval(function() {
    if (mousePos.x != undefined && mousePos.y != undefined) {
        let div = document.createElement('div');
        mouseCont.appendChild(div);
        div.style.position = 'absolute'
        div.style.top = (mousePos.y) + 'px';
        div.style.left = (mousePos.x) + 'px';
        div.style.zIndex = 200;
        div.style.width = '10px';
        div.style.height = '10px';
        div.style.pointerEvents = 'none';
        div.style.backgroundColor = color[Math.floor(Math.random() * color.length)];

        div.animate([
            { transform: 'rotate(180deg) translateY(-10px) scale(0)' }
        ], {
            duration: 200,
        })

        setTimeout(() => {
            div.remove();
          }, 200);
    }
}, 60)