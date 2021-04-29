class BaseModel extends PubSub {
    constructor () {
        super ();
        // new PubSub.call(this);
    }

    clear() {
        throw new Error('Need to override clear method');
    }
};
