class MatrixModel extends BaseModel {
    constructor() {
        super();
        // BaseModel.call(this);
        this.attributes = {
            size: {
                width: 4,
                height: 4,
            },
            grid: [
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
            ]
        }
        if (!MatrixModel.instance) {
            MatrixModel.instance = this
          };
          
        return MatrixModel.instance;
    
    }
    
    startNewGame() {
        randomGrid(this.attributes.grid, this.attributes.size.height,  this.attributes.size.width);
        randomGrid(this.attributes.grid, this.attributes.size.height,  this.attributes.size.width);
        this.publish('changeData');
    }

    makeActionByKey(key) {
        this.attributes.grid[1][2] = '4';
        this.attributes.grid[2][2] = '2';
        this.publish('changeData');
    }
};
