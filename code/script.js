let tagName = document.getElementById('tagName');
let text = document.getElementById('text');
let text2 = document.getElementById('text2');
let leaf = document.getElementById('leaf');
let background = document.getElementById('background');
let plant = document.getElementById('plant');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    text.style.marginTop = value * 1.9 + 'px';
    text2.style.marginTop = value * 1.5 + 'px';
    background.style.Top = value * -1 + 'px';
    leaf.style.left = value * 0.3 + 'px';
    plant.style.top = value * 0.3 + 'px';
    tagName.style.marginTop = value * 2.3 + 'px';
   
});


