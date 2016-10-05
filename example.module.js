var exampleApp = angular.module('exampleApp', [
    'ngContextualHelp',
    'ngMaterial'
]);

class exampleCtrl {
    constructor () {
        this.textPairs = {
            firstNav: 'Takes you to page 1 (but not really in this dummy page)',
            secondNav: 'Takes you to page 2 (If this page were real)',
            thirdNav: 'Takes you to page 3 (Seriously these links are fake)',
            checkbox: 'This checkbox allows you to pick things',
            image: 'Yeah, this is a bear'
        };
    }
}

exampleApp.controller('exampleCtrl', exampleCtrl);
