class SummaryModel extends BaseModel {
    constructor(){
        super();
        this.attributes = {
            totalScore: 0,
            bestScore: JSON.parse(localStorage.getItem('bestScore')) || 0,
        }
        if (!SummaryModel.instance) {
            SummaryModel.instance = this
          };
          
        return SummaryModel.instance;
    }
   
    startNewGame() {
        this.attributes.totalScore = 0;
        this.publish('changeData');
    }

    makeActionByKey(){
        this.attributes.totalScore +=1; // Conect to matrixModel
        if (this.attributes.totalScore > this.attributes.bestScore){
            this.attributes.bestScore = this.attributes.totalScore;
            localStorage.setItem('bestScore', JSON.stringify(this.attributes.bestScore));
        }
        this.publish('changeData');
    }
};