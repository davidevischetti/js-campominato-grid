//CHIEDO ALL'UTENTE D SCEGLIERE UNA DIFFICOLTA'
//E DI FAR INIZIARE IL GIOCO
let userLevel = document.getElementById('level').value;
const startButton = document.getElementById('start');
const gameGrid = document.getElementById('grid');

//INIZIO A CREARE LA TABELLA DI GIOCO
startButton.addEventListener ('click', startGameFunc);


//USO UN EVENTO PER SELEZIONARE LE VARIE CELLE

//USO UNA FUNZIONE CHE CREI GLI ELEMENTI CORRISPONDENTI ALLE CELLE DELLA GRIGLIA
function startGameFunc () {
    const createCell = () => {
        const node = document.createElement('div');
        node.className = 'cell';
        return node;
    };

    //USO UNA SERIE DI CICLI PER CREARE UAN GRIGLIA
    //A SECONDA DELLA DIFFICOLTA SCELTA DALL'UTENTE

    if (userLevel == 'easy') {
        for (let i = 0; i < 49; i ++) {

            const gridCell = createCell();
            gameGrid.append(gridCell);
            startButton.disabled = true;
            gridCell.addEventListener ('click', () => gridCell.classList.add('free-cell'));
        };
        gameGrid.className = 'small-grid';

    } else if (userLevel == 'medium') {

        for (let i = 0; i < 81 ; i ++) {
            const gridCell = createCell();
            gameGrid.append(gridCell);
            startButton.disabled = true;
            gridCell.addEventListener ('click', () => gridCell.classList.add('free-cell'));

        };
        gameGrid.className = 'medium-grid';

    } else {

        for (let i = 0; i < 100 ; i ++) {
            const gridCell = createCell();
            gameGrid.append(gridCell);
            startButton.disabled = true;
            gridCell.addEventListener ('click', () => gridCell.classList.add('free-cell'));
        };
        gameGrid.className = 'big-grid';

    };

};