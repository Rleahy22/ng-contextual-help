import contextualHelp        from './ngContextualHelp.directive';
import ContextualHelpService from './ngContextualHelp.service';
import { componentRegistry as ContextualHelpComponent } from './ngContextualHelp.component';

angular.module('ngContextualHelp', [])
    .directive('contextualHelp', contextualHelp)
    .service('ContextualHelpService', ContextualHelpService)
    .component('ngContextualHelp', ContextualHelpComponent);
