let field = [];

let currentShape = 'cross';

function fillShape(id) {
    if (currentShape == 'cross') {
        currentShape = 'circle';
    } else {
        currentShape = 'cross';
    }

    field[id] = 'cross';
}