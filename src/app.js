import contextualHelp        from './ngContextualHelp.directive';
import ContextualHelpService from './ngContextualHelp.service';

angular.module('ngContextualHelp', [])
    .directive('contextualHelp', contextualHelp)
    .service('ContextualHelpService', ContextualHelpService);
