class AppView {
    constructor() {
        this.matrixView = new MatrixView(); // как сделать приватным и рабочим?
        this.summaryView = new SummaryView();
    }
    
    render(selector) {
        var element = document.getElementById(selector);
        this.summaryView.show(element);
        this.matrixView.show(element);
    }
}

var appView = new AppView();
appView.render('root');
