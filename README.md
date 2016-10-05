# ng-contextual-help
Angular component for providing contextual help within an application

[See it in action](https://rleahy22.github.io/ng-contextual-help/)

## Setup

Install ng-contextual-help

`npm install ng-contextual-help --save`

Add ng-contextual-help to your project

```html
<script src="node_modules/ng-contextual-help/dist/ngContextualHelp.js"></script>
```
```javascript
angular.module('exampleApp', [
    'ngContextualHelp'
]);
```

Include ng-contextual-help in your markup with a set of key value pairs for provided help text.

```html
<ng-contextual-help help-map="example.textPairs"></ng-contextual-help>
```

`help-map` expects a javascript object which you can provide via an angular constant or a REST call (implementation is up to you). For example.

```javascript
class ExampleCtrl {
    constructor () {
        this.textPairs = {
            intro: 'This is the intro'
        };
    }
}
```

Any element for which you want to provide help text is given an `contextual-help` tag with the key for the associated text in the already created `help-map`

```html
<span contextual-help="intro">Welcome to the app.</span>
```

[See it in action](https://rleahy22.github.io/ng-contextual-help/)
