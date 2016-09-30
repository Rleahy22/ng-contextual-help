class ContextualHelpController {
    constructor (ContextualHelpService) {
        this.ContextualHelpService = ContextualHelpService;
    }

    toggleHelp () {
        this.ContextualHelpService.toggleHelp();
        if (this.ContextualHelpService.showHelp) {
            angular.element(document.querySelector('body')).css('cursor', 'help');
        } else {
            angular.element(document.querySelector('body')).css('cursor', 'default');
        }
    }
}

const componentRegistry = {
    controller: ContextualHelpController,
    template: `
        <i ng-click="$ctrl.toggleHelp()">?</i>
    `
};

export { componentRegistry, ContextualHelpController };
