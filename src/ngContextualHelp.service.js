class ContextualHelpService {
    constructor () {
        this.showHelp  = false;
        this.textPairs = {
            intro: 'This is the intro'
        };
    }

    getValue (key) {
        return this.textPairs[key];
    }

    toggleHelp () {
        this.showHelp = !this.showHelp;
    }
}

export default ContextualHelpService;
