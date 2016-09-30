class ContextualHelpService {
    constructor () {
        this.textPairs = {
            intro: 'This is the intro'
        };
    }

    getValue (key) {
        return this.textPairs[key];
    }
}

export default ContextualHelpService;
