var exampleApp = angular.module('exampleApp', [
    'ngContextualHelp'
]);

class exampleCtrl {
    constructor () {
        this.textPairs = {
            intro: 'This is the intro',
            bear: 'A bear a bear all covered in hair'
        };
    }
}

exampleApp.controller('exampleCtrl', exampleCtrl);
