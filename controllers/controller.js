class Controller {
    constructor(){
        this.matrixModel = new MatrixModel();
        this.summaryModel = new SummaryModel();
    }

    onKeyPress(event) {
        var key;
    switch (event.code) {
        case 'ArrowUp':
            key = 'up';
            break;
        case 'ArrowDown':
            key = 'down';
            break;
        case 'ArrowLeft':
            key = 'left';
            break;
        case 'ArrowRight':
            key = 'right';
            break;
        default:
            return;
        }
        this.matrixModel.makeActionByKey(key);
    }

    onClickNewGame() {
        this.matrixModel.startNewGame();
        this.summaryModel.startNewGame();
    }
};