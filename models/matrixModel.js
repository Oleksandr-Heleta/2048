class MatrixModel extends BaseModel {
    constructor() {
        super();
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
        this.attributes.grid = [
                            ['', '', '', ''],
                            ['', '', '', ''],
                            ['', '', '', ''],
                            ['', '', '', ''],
                        ]
        randomGrid(this.attributes.grid, this.attributes.size.height,  this.attributes.size.width);
        randomGrid(this.attributes.grid, this.attributes.size.height,  this.attributes.size.width);
        this.publish('changeData');
    }

    makeActionByKey(key) {
        if (key === 'left' || key === 'right') {
            this.attributes.grid = moveHorizont(this.attributes.grid, key);
        } else {

        }
        randomGrid(this.attributes.grid, this.attributes.size.height,  this.attributes.size.width);
        this.publish('changeData');
    }
};
