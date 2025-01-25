import * as css from "./style.css" assert { type: "css" };
import * as html from "./html.html" assert { type: "html" };

document.adoptedStyleSheets = [css.default];

let div = document.createElement('div');
div.classList.add('strajkblock');
div.title = 'Podrška studentima!';
div.style.display = 'none';
div.innerHTML = html.default;
document.body.appendChild(div);


setInterval(() => {
  let now = new Date();


  let strajkBlock = document.querySelector('.strajkblock');
  let strajkCounter = document.body.querySelector('.strajkcounter');

  if (strajkBlock == null || strajkCounter == null) {
    return;
  }


  let dFrom = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 52);
  let dTo = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 7);

  if (now > dFrom && now < dTo) {
    document.body.classList.add('strajk');
    strajkBlock.classList.add('visible');
    let rem = (dTo.getTime() - now.getTime()) / 1000;
    let min = Math.floor(rem / 60);
    let sec = Math.floor(rem - min * 60);
    strajkCounter.textContent = min.toString() + ':' + sec.toString().padStart(2, '0');
  } else {
    document.body.classList.remove('strajk');
    strajkBlock.classList.remove('visible');
  }
}, 1000);