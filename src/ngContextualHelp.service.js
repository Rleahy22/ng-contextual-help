class ContextualHelpService {
    constructor () {
        this.showHelp  = false;
    }

    getValue (key) {
        return this.helpMap[key];
    }

    setHelpMap (helpMap) {
        this.helpMap = helpMap;
    }

    toggleHelp () {
        this.showHelp = !this.showHelp;
    }
}

export default ContextualHelpService;
