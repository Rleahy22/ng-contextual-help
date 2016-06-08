class ContextualHelp {
    constructor () {
        this.bindToController = true;
        this.controller       = ContextualHelpController;
        this.controllerAs     = 'ctrl';
        this.restrict         = 'A';
        this.scope            = {};
    }
}

class ContextualHelpController {
    constructor () {
        console.log('HERE');
    }
}

ContextualHelp.$inject = [];
