const card = document.getElementById('draggable-card');
let offsetX, offsetY;

window.addEventListener('load', () => {
    const savedLeft = localStorage.getItem('cardLeft');
    const savedTop = localStorage.getItem('cardTop');

    if (savedLeft && savedTop) {
        card.style.left = `${savedLeft}px`;
        card.style.top = `${savedTop}px`;
    }
});

card.addEventListener('mousedown', (e) => {
    const rect = card.getBoundingClientRect();
    offsetX = e.pageX - card.offsetLeft;
    offsetY = e.pageY - card.offsetTop;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
    const newLeft = e.pageX - offsetX;
    const newTop = e.pageY - offsetY;

    card.style.left = `${newLeft}px`;
    card.style.top = `${newTop}px`;

    localStorage.setItem('cardLeft', newLeft);
    localStorage.setItem('cardTop', newTop);
}

function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}