const containers = document.querySelectorAll('.container');
let draggedTile = null;
let shiftX, shiftY;
    
containers.forEach(container => {
    container.querySelectorAll('.tile').forEach(tile => {
        tile.addEventListener('mousedown', onMouseDown);
    });
})

function onMouseDown(event) {
    draggedTile = event.target;
    const rect = draggedTile.getBoundingClientRect();

    shiftX = event.clientX - rect.left;
    shiftY = event.clientY - rect.top;

    draggedTile.classList.add('dragging');
    document.body.appendChild(draggedTile);

    moveAt(event.pageX, event.pageY);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
}

    function moveAt(pageX, pageY) {
    draggedTile.style.left = pageX - shiftX + 'px';
    draggedTile.style.top = pageY - shiftY + 'px';
}

function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
}

function onMouseUp(event) {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    draggedTile.classList.remove('dragging');
    draggedTile.style.left = '';
    draggedTile.style.top = '';

    let dropped = false;
    containers.forEach(container => {
        const rect = container.getBoundingClientRect();
        if (
            event.clientX > rect.left &&
            event.clientX < rect.right &&
            event.clientY > rect.top &&
            event.clientY < rect.bottom
        ) {
            const afterElement = getDragAfterElement(container, event.clientX);
            if (afterElement == null) {
                container.appendChild(draggedTile);
            } else {
                container.insertBefore(draggedTile, afterElement);
            }
            dropped = true;
        }
    });

    if (!dropped) {
        containers[0].appendChild(draggedTile);
    }

    draggedTile = null;
}

function getDragAfterElement(container, x) {
    const tiles = [...container.querySelectorAll('.tile:not(.dragging)')];

    return tiles.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = x - (box.left + box.width / 2);
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}