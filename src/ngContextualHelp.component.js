class ContextualHelpController {
    constructor (ContextualHelpService) {
        this.ContextualHelpService = ContextualHelpService;

        this.documentBody = angular.element(document.querySelector('body'));
        this.showHelp     = false;
    }

    $onInit () {
        this.ContextualHelpService.setHelpMap(this.helpMap);
    }

    toggleHelp () {
        this.ContextualHelpService.toggleHelp();
        this.showHelp = this.ContextualHelpService.showHelp;

        if (this.showHelp) {
            this.documentBody.css('cursor', 'help');
        } else {
            this.documentBody.css('cursor', 'default');
        }
    }
}

const componentRegistry = {
    bindings: {
        helpMap: '<'
    },
    controller: ContextualHelpController,
    template: `
        <button ng-click="$ctrl.toggleHelp()" ng-class="$ctrl.showHelp ? 'active' : 'inactive'">?</button>
    `
};

export { componentRegistry, ContextualHelpController };
