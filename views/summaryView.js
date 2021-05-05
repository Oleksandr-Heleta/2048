class SummaryView extends BaseView {
    constructor() {
        super();
        this.summaryModel = new SummaryModel();
        this.template = document.getElementById('summaryTemplate').innerHTML;

    }


    beforeRender() {
        this.summaryModel.subscribe('changeData', this.reRender, this);
    }

    render() {
        return templateStr(this.template, this.summaryModel.attributes);
    }

    afterRender() {

    }

    afterUpdate() {
        if (this.summaryModel.attributes.addScore > 0) {
            const score = document.querySelector('.score');
            let addScore = document.createElement('div');
            addScore.innerText = `+${this.summaryModel.attributes.addScore}`;
            addScore.className = 'scoreAddition';
            score.appendChild(addScore);
        }
    }
}
