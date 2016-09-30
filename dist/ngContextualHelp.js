/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ngContextualHelp = __webpack_require__(1);

	var _ngContextualHelp2 = _interopRequireDefault(_ngContextualHelp);

	var _ngContextualHelp3 = __webpack_require__(2);

	var _ngContextualHelp4 = _interopRequireDefault(_ngContextualHelp3);

	var _ngContextualHelp5 = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	angular.module('ngContextualHelp', []).directive('contextualHelp', _ngContextualHelp2.default).service('ContextualHelpService', _ngContextualHelp4.default).component('ngContextualHelp', _ngContextualHelp5.componentRegistry);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ContextualHelpController = function ContextualHelpController(ContextualHelpService) {
	    _classCallCheck(this, ContextualHelpController);

	    this.ContextualHelpService = ContextualHelpService;
	};

	var ContextualHelp = function () {
	    function ContextualHelp() {
	        _classCallCheck(this, ContextualHelp);

	        this.controller = ContextualHelpController;
	        this.restrict = 'A';
	    }

	    _createClass(ContextualHelp, [{
	        key: 'link',
	        value: function link(scope, element, attr, ctr) {
	            element.bind('mouseenter', function (event) {
	                if (ctr.ContextualHelpService.showHelp) {
	                    var helpText = ctr.ContextualHelpService.getValue(attr.contextualHelp);
	                    var helpElement = angular.element('<div id="contextual-help-display" class="contextual-help-display">' + helpText + '</div>');

	                    helpElement.css({ top: event.pageY, left: event.pageX });
	                    element.append(helpElement);
	                }
	            });

	            element.bind('mouseleave', function () {
	                angular.element(document.querySelector('#contextual-help-display')).remove();
	            });
	        }
	    }], [{
	        key: 'directiveFactory',
	        value: function directiveFactory() {
	            return new ContextualHelp();
	        }
	    }]);

	    return ContextualHelp;
	}();

	exports.default = ContextualHelp.directiveFactory;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ContextualHelpService = function () {
	    function ContextualHelpService() {
	        _classCallCheck(this, ContextualHelpService);

	        this.showHelp = false;
	    }

	    _createClass(ContextualHelpService, [{
	        key: "getValue",
	        value: function getValue(key) {
	            return this.helpMap[key];
	        }
	    }, {
	        key: "setHelpMap",
	        value: function setHelpMap(helpMap) {
	            this.helpMap = helpMap;
	        }
	    }, {
	        key: "toggleHelp",
	        value: function toggleHelp() {
	            this.showHelp = !this.showHelp;
	        }
	    }]);

	    return ContextualHelpService;
	}();

	exports.default = ContextualHelpService;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ContextualHelpController = function () {
	    function ContextualHelpController(ContextualHelpService) {
	        _classCallCheck(this, ContextualHelpController);

	        this.ContextualHelpService = ContextualHelpService;

	        this.documentBody = angular.element(document.querySelector('body'));
	        this.showHelp = false;
	    }

	    _createClass(ContextualHelpController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.ContextualHelpService.setHelpMap(this.helpMap);
	        }
	    }, {
	        key: 'toggleHelp',
	        value: function toggleHelp() {
	            this.ContextualHelpService.toggleHelp();
	            this.showHelp = this.ContextualHelpService.showHelp;

	            if (this.showHelp) {
	                this.documentBody.css('cursor', 'help');
	            } else {
	                this.documentBody.css('cursor', 'default');
	            }
	        }
	    }]);

	    return ContextualHelpController;
	}();

	var componentRegistry = {
	    bindings: {
	        helpMap: '<'
	    },
	    controller: ContextualHelpController,
	    template: '\n        <button ng-click="$ctrl.toggleHelp()" ng-class="$ctrl.showHelp ? \'active\' : \'inactive\'">?</button>\n    '
	};

	exports.componentRegistry = componentRegistry;
	exports.ContextualHelpController = ContextualHelpController;

/***/ }
/******/ ]);