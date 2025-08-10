function getKnightMoves([x, y]) {
    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2] ];

    return moves
        .map(([dx, dy]) => [x+ dx, y+dy])
        .filter(isValidPosition);
}

function knightTravails (start, end) {

    let queue = [[start]];
    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        const path = queue.shift();
        const current = path[path.length - 1];

        if (current.toString() === end.toString()) {
            console.log(`Path found: ${path}`);
            console.log(`Number of moves: ${path.length - 1}`);
            return path;
        }

        for (const move of getKnightMoves(current)) {
            if (!visited.has(move.toString())) {
                visited.add(move.toString());
                queue.push([...path, move]);
            }
        }
    }
}

//Check if the move is within the board
function isValidPosition(array){
    if ((array[0] >= 0 && array[0] <= 7) &&
    (array[1] >= 0 && array[1] <= 7)) {
        return true;
    }
    return false;
}

knightTravails([0, 0], [4, 7]); // Example usage
