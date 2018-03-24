/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/Game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/Game.js":
/*!************************!*\
  !*** ./app/js/Game.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Team */ \"./app/js/Team.js\");\n\r\n\r\nlet teamsJson = [\r\n    {\r\n        \"name\": \"Manchester United\", \"color\": \"red\", \"players\": [\r\n            {name: \"Irhad\", position: \"att\", ratings: [\"10\", \"80\", \"45\", \"95\"]},\r\n            {name: \"Melka\", position: \"mid\", ratings: [\"12\", \"80\", \"45\", \"95\"]}\r\n        ]\r\n    },\r\n    {\r\n        \"name\": \"Real Madrid\", \"color\": \"blue\", \"players\": [\r\n            {name: \"Irhad\", position: \"att\", ratings: [\"10\", \"80\", \"45\", \"95\"]},\r\n            {name: \"Melka\", position: \"mid\", ratings: [\"12\", \"80\", \"45\", \"95\"]}\r\n        ]\r\n    }\r\n];\r\n\r\nclass Game {\r\n    constructor(teamsData) {\r\n        this.data = teamsData;\r\n        this.teams = [];\r\n    }\r\n\r\n    createTeams() {\r\n        if (typeof(this.data) === \"object\") {\r\n            this.data.forEach( (e, i,) => {\r\n                console.log(e, i);\r\n                this.teams.push(new _Team__WEBPACK_IMPORTED_MODULE_0__[\"Team\"]({\"name\": e.name, \"color\": e.color}, e.players));\r\n            });\r\n        }\r\n    }\r\n    initStart(){\r\n        let startBtn = document.querySelectorAll(\".startBtn\");\r\n        startBtn.addEventListener(\"click\",this.startGame());\r\n    }\r\n    startGame(){\r\n\r\n    }\r\n}\r\n\r\n\r\n// let manUtd = new Team({\"name\": \"Manchester United\", \"color\": \"red\"}, [\r\n//     {name: \"Irhad\", position: \"att\", ratings: [\"10\", \"80\", \"45\", \"95\"]},\r\n//     {name: \"Melka\", position: \"mid\", ratings: [\"12\", \"80\", \"45\", \"95\"]}\r\n// ]);\r\n// let real = new Team({\"name\": \"Real Madrid\", \"color\": \"blue\"}, [\r\n//     {name: \"Ronaldo\", position: \"att\", ratings: [\"10\", \"80\", \"45\", \"95\"]},\r\n//     {name: \"Bale\", position: \"mid\", ratings: [\"12\", \"80\", \"45\", \"95\"]}\r\n// ]);\r\n\r\n\r\nwindow.game = new Game(teamsJson);\r\ngame.createTeams();\r\n\r\n\n\n//# sourceURL=webpack:///./app/js/Game.js?");

/***/ }),

/***/ "./app/js/Player.js":
/*!**************************!*\
  !*** ./app/js/Player.js ***!
  \**************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\nclass PlayerInfo{\r\n    constructor(name,position,ratings){\r\n        this._name=name;\r\n        this._position=position;\r\n        this._ratings=this.orderRatings(ratings);\r\n    }\r\n    orderRatings(ratings){\r\n        let all={};\r\n        ratings.map((elem,index) =>{\r\n\r\n            switch (index){\r\n                case 0:\r\n                    all[\"gk\"]=PlayerInfo.asignRating(elem);\r\n                    break;\r\n                case 1:\r\n                    all[\"def\"]=PlayerInfo.asignRating(elem);\r\n                    break;\r\n\r\n                case 2:\r\n                    all[\"mid\"]=PlayerInfo.asignRating(elem);\r\n                    break;\r\n\r\n                case 3:\r\n                    all[\"att\"]=PlayerInfo.asignRating(elem);\r\n                    break;\r\n            }\r\n\r\n\r\n        });\r\n        return all;\r\n\r\n    }\r\n    static asignRating(rating){\r\n        if(rating){\r\n            return rating;\r\n        }else{\r\n            return \"0\"\r\n        }\r\n\r\n    }\r\n\r\n}\r\nclass Player extends PlayerInfo{\r\n\r\n    constructor(name,position,ratings){\r\n        super(name,position,ratings);\r\n        this.getOverall();\r\n    }\r\n    changePosition(position){\r\n        this._position = position;\r\n        this.getOverall();\r\n    }\r\n    calculateRatings(){\r\n        if(typeof(this._ratings)== \"object\"){\r\n            return this._ratings;\r\n        }\r\n    }\r\n    getOverall(){\r\n        let allRatings = this.calculateRatings();\r\n        this._overall =allRatings[this._position];\r\n        return allRatings[this._position];\r\n    }\r\n}\n\n//# sourceURL=webpack:///./app/js/Player.js?");

/***/ }),

/***/ "./app/js/Team.js":
/*!************************!*\
  !*** ./app/js/Team.js ***!
  \************************/
/*! exports provided: Team */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Team\", function() { return Team; });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./app/js/Player.js\");\n\r\n\r\nclass Team {\r\n    constructor(info, players) {\r\n        this.info = info;\r\n        this.players = Team.createPlayers(players);\r\n        this.showPlayersInHtml();\r\n        this.overall = 0;\r\n    }\r\n\r\n    static createPlayers(elem) {\r\n        let players = [];\r\n        for (const p of elem) {\r\n            let o = null;\r\n            o = new _Player__WEBPACK_IMPORTED_MODULE_0__[\"Player\"](p.name, p.position, p.ratings);\r\n            players.push(o);\r\n        }\r\n        return players;\r\n    }\r\n\r\n    set Players(elem) {\r\n        this.players = Team.createPlayers(elem);\r\n    }\r\n\r\n    get Players() {\r\n        return this.showPlayers();\r\n    }\r\n    getOverall(){\r\n        for (let play of this.players) {\r\n            this.overall += parseInt(play._overall);\r\n        }\r\n        console.log(this.overall, \"ido\");\r\n       return this.overall /= this.players.length\r\n    }\r\n\r\n\r\n    showPlayers() {\r\n        if (typeof(this.players) == \"object\") {\r\n            return this.players;\r\n        }\r\n\r\n    }\r\n\r\n    showPlayersInHtml() {\r\n        if (typeof(this.players) == \"object\") {\r\n            let elemDiv = document.createElement(\"div\");\r\n            let playersHtml = `<div style='width: 100%;background-color: ${this.info.color};color: white;padding: 20px;margin: 20px'><div class='row'><div class='col-12'><h2 class=\"text-center\">${this.info.name}</h2></div></div>`;\r\n            for (let play of this.players) {\r\n                playersHtml += `<div class=\"row\"><div class=\"col-xl\"><b>player name:</b></div><div class=\"col-xl\"> ${play._name} (${play._overall})</div> </div>`;\r\n            }\r\n            playersHtml += `</div>`;\r\n            elemDiv.innerHTML = playersHtml;\r\n\r\n            document.body.appendChild(elemDiv);\r\n        }\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack:///./app/js/Team.js?");

/***/ })

/******/ });