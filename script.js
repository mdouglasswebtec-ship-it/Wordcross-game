const grid = [
    ['C', 'A', 'T', 'H', 'S'],
    ['P', 'A', 'A', 'A', 'U'],
    ['D', 'O', 'G', 'T', 'N'],
    ['P', 'H', 'A', 'T', 'S'],
    ['P', 'A', 'N', 'C', 'E']
];
const words = ['CAT', 'DOG', 'SUN', 'HAT', 'PAN'];
let found = Array(words.length).fill(false);

function renderGrid() {
    const crossword = document.getElementById('crossword');
    crossword.innerHTML = '';
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = i;
            cell.dataset.col = j;
            if (grid[i][j] === '') {
                cell.textContent = '';
            } else {
                cell.textContent = grid[i][j];
            }
            crossword.appendChild(cell);
        }
    }
}

function checkWord(word) {
    word = word.toUpperCase();
    let correct = false;
    for (let i = 0; i < words.length; i++) {
        if (!found[i] && word === words[i]) {
            found[i] = true;
            correct = true;
        }
    }
    return correct;
}

function allWordsFound() {
    return found.every(f => f);
}

document.getElementById('submit-btn').addEventListener('click', () => {
    const input = document.getElementById('word-input');
    const message = document.getElementById('message');
    const guess = input.value.trim();
    if (guess.length === 0) {
        message.textContent = 'Please enter a word.';
        return;
    }
    if (checkWord(guess)) {
        message.textContent = `Correct! You found: ${guess.toUpperCase()}`;
        input.value = '';
        if (allWordsFound()) {
            message.textContent = 'Congratulations! You found all the words!';
        }
    } else {
        message.textContent = 'Incorrect or already found. Try again!';
    }
});

renderGrid();
