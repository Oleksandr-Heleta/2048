class SummaryView extends BaseView {
    constructor(){
        super ();
        this.summaryModel = new SummaryModel();
        this.template = document.getElementById('summaryTemplate').innerHTML;
        // BaseView.call(this);
    }


    beforeRender() {
        this.summaryModel.subscribe('changeData', this.reRender, this);
    }

    render() {
        return templateStr(this.template, this.summaryModel.attributes);
    }

    afterRender() {

    }
};
