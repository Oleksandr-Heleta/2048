class SummaryModel extends BaseModel {
    constructor(){
        super();
        this.attributes = {
            totalScore: 0,
            bestScore: 0,
        }
        if (!SummaryModel.instance) {
            SummaryModel.instance = this
          };
          
        return SummaryModel.instance;
    }
   
    startNewGame() {
        this.attributes.totalScore = 10;
        this.publish('changeData');
    }
};