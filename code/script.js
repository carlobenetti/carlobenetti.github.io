let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let background = document.getElementById('background');
let plant = document.getElementById('plant');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    text.style.marginTop = value * 2.5 + 'px';
    background.style.Top = value * -1 + 'px';
    tree.style.left = value * -2.5 + 'px';
    leaf.style.left = value * 0.3 + 'px';
    plant.style.top = value * 0.3 + 'px';


});