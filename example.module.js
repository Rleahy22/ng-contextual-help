var exampleApp = angular.module('exampleApp', [
    'ngContextualHelp',
    'ngMaterial'
]);

class exampleCtrl {
    constructor () {
        this.textPairs = {
            intro: 'This is the intro'
        };
    }
}

exampleApp.controller('exampleCtrl', exampleCtrl);
