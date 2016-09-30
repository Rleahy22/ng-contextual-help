class ContextualHelpController {
    constructor (ContextualHelpService) {
        this.ContextualHelpService = ContextualHelpService;
    }
}

class ContextualHelp {
    constructor () {
        this.controller = ContextualHelpController;
        this.restrict   = 'A';
    }

    link (scope, element, attr, ctr) {
        element.bind('mouseenter', () => {
            if (ctr.ContextualHelpService.showHelp) {
                const helpText = ctr.ContextualHelpService.getValue(attr.contextualHelp);
                element.append('<div id="contextual-help-display">' + helpText + '</div>');
            }
        });

        element.bind('mouseleave', () => {
            angular.element(document.querySelector('#contextual-help-display')).remove();
        });
    }

    static directiveFactory () {
        return new ContextualHelp();
    }
}

export default ContextualHelp.directiveFactory;
