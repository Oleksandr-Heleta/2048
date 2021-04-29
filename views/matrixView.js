class MatrixView extends BaseView {
    constructor (){
        super ();
        this.matrixModel = new MatrixModel();
        this.controller = new Controller();
        this.template = document.getElementById('matrixTemplate').innerHTML;
        this.className = 'table';
        // BaseView.call(this);    На что влияет???
    }


    beforeRender() {
        this.matrixModel.subscribe('changeData', this.reRender, this);
    }

    render() {
    var i,
        j,
        attributes = this.matrixModel.attributes,
        str = '';

    for(i = 0; i < attributes.size.width; i += 1) {
        str += '<div class="row">';
        for(j = 0; j < attributes.size.height; j += 1) {
            str += `<div class="cell appear-${attributes.grid[i][j]}">${attributes.grid[i][j]}</div>`;
        }
        str += '</div>';
    }

    return this.template.replace('{{matrix}}', str);
    }

    afterRender() {
        window.onkeydown = this.controller.onKeyPress.bind(this.controller);
        var newGameBtn = document.getElementById('newGameBtn');
        newGameBtn.addEventListener('click', this.controller.onClickNewGame.bind(this.controller));
    }
};
