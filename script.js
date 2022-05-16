//CHIEDO ALL'UTENTE D SCEGLIERE UNA DIFFICOLTA'
//E DI FAR INIZIARE IL GIOCO
let userLevel = document.getElementById('level');
const startButton = document.getElementById('start');
const gameGrid = document.getElementById('grid');

//INIZIO A CREARE LA TABELLA DI GIOCO
//USO UN EVENTO PER SELEZIONARE LE VARIE CELLE
startButton.addEventListener ('click', startGameFunc);

//USO UNA FUNZIONE CHE CREI GLI ELEMENTI CORRISPONDENTI ALLE CELLE DELLA GRIGLIA
function startGameFunc () {

    const userChoseLevel = parseInt(userLevel.value);

    const createCell = () => {
        const node = document.createElement('div');
        node.className = 'cell';
        return node;
    };

    gameGrid.innerHTML = '';

    //USO UNA SERIE DI CICLI PER CREARE UAN GRIGLIA
    //A SECONDA DELLA DIFFICOLTA SCELTA DALL'UTENTE
    if (userChoseLevel === 2) {
        for (let i = 0; i < 49; i ++) {
            cicleFunc();
        };
        gameGrid.className = 'small-grid';

    } else if (userChoseLevel === 1) {

        for (let i = 0; i < 81 ; i ++) {
            cicleFunc();
        };
        gameGrid.className = 'medium-grid';

    } else {

        for (let i = 0; i < 100 ; i ++) {
            cicleFunc();
        };
        gameGrid.className = 'big-grid';

    };

    //CREO UNA FUNZIONE PER OTTIMIZZARE I CICLI 
    function cicleFunc () {
        let gridCell = createCell();
        gameGrid.append(gridCell);
        gridCell.addEventListener ('click', () => gridCell.classList.add('free-cell'));
        return;
    };

};

