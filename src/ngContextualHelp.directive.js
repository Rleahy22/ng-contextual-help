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
        element.bind('mouseenter', (event) => {
            if (ctr.ContextualHelpService.showHelp) {
                const helpText  = ctr.ContextualHelpService.getValue(attr.contextualHelp);
                let helpElement = angular.element('<div id="contextual-help-display" class="contextual-help-display">' + helpText + '</div>');

                helpElement.css({ top: event.pageY, left: event.pageX });
                element.append(helpElement);
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
