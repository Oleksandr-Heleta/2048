class Controller {
    constructor() {
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
        let addCount = this.matrixModel.makeActionByKey(key);
        this.summaryModel.makeActionByKey(addCount)
    }

    onClickNewGame() {
        this.matrixModel.startNewGame();
        this.summaryModel.startNewGame();
    }
};