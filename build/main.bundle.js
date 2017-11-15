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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Player_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Map_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Controls_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Camera_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_GameLoop_js__ = __webpack_require__(6);






const CIRCLE = Math.PI * 2;
/* harmony export (immutable) */ __webpack_exports__["CIRCLE"] = CIRCLE;

const MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
/* harmony export (immutable) */ __webpack_exports__["MOBILE"] = MOBILE;


let display = document.getElementById('display');
let player = new __WEBPACK_IMPORTED_MODULE_0__components_Player_js__["a" /* Player */](15.3, -1.2, Math.PI * 0.3);
let map = new __WEBPACK_IMPORTED_MODULE_1__components_Map_js__["a" /* Map */](32);
let controls = new __WEBPACK_IMPORTED_MODULE_2__components_Controls_js__["a" /* Controls */](player);
let camera = new __WEBPACK_IMPORTED_MODULE_3__components_Camera_js__["a" /* Camera */](display, MOBILE ? 160 : 320, 0.8);
let loop = new __WEBPACK_IMPORTED_MODULE_4__components_GameLoop_js__["a" /* GameLoop */]();

map.randomize();

loop.start(function frame(seconds) {
    map.update(seconds);
    player.update(controls.states, map, seconds);
    camera.render(player, map);
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Bitmap {
    constructor(src, width, height) {
        this.image = new Image();
        this.image.src = src;
        this.width = width;
        this.height = height;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Bitmap;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Bitmap_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_js__ = __webpack_require__(0);



class Player {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.weapon = new __WEBPACK_IMPORTED_MODULE_0__Bitmap_js__["a" /* Bitmap */]('img/knife_hand.png', 319, 320);
        this.paces = 0;
    }

    rotate(angle) {
        this.direction = (this.direction + angle + __WEBPACK_IMPORTED_MODULE_1__main_js__["CIRCLE"]) % __WEBPACK_IMPORTED_MODULE_1__main_js__["CIRCLE"];
    }

    walk(distance, map, direction) {
        let dx = Math.cos(direction) * distance;
        let dy = Math.sin(direction) * distance;
        if (map.get(this.x + dx, this.y) <= 0) this.x += dx;
        if (map.get(this.x, this.y + dy) <= 0) this.y += dy;
        this.paces += distance;
    }

    update(controls, map, seconds) {
        if (controls.left) this.rotate(-Math.PI * seconds);
        if (controls.right) this.rotate(Math.PI * seconds);
        if (controls.forward) this.walk(3 * seconds, map, this.direction);
        if (controls.backward) this.walk(-3 * seconds, map, this.direction);
        if (controls.sideLeft) this.walk(3 * seconds, map, this.direction - Math.PI / 2);
        if (controls.sideRight) this.walk(-3 * seconds, map, this.direction - Math.PI / 2);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Player;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Bitmap_js__ = __webpack_require__(1);


class Map {
    constructor(size) {
        this.size = size;
        this.wallGrid = new Uint8Array(size * size);
        this.skybox = new __WEBPACK_IMPORTED_MODULE_0__Bitmap_js__["a" /* Bitmap */]('img/deathvalley_panorama.jpg', 2000, 750);
        this.wallTexture = new __WEBPACK_IMPORTED_MODULE_0__Bitmap_js__["a" /* Bitmap */]('img/wall_texture.jpg', 1024, 1024);
        this.light = 0;
    }

    get(x, y) {
        x = Math.floor(x);
        y = Math.floor(y);
        if (x < 0 || x > this.size - 1 || y < 0 || y > this.size - 1) return -1;
        return this.wallGrid[y * this.size + x];
    }

    randomize() {
        for (let i = 0; i < this.size * this.size; i++) {
            this.wallGrid[i] = Math.random() < 0.3 ? 1 : 0;
        };
    }

    cast(point, angle, range) {
        let self = this;
        let sin = Math.sin(angle);
        let cos = Math.cos(angle);
        let noWall = { length2: Infinity };

        return ray({ x: point.x, y: point.y, height: 0, distance: 0 });

        function ray(origin) {
            let stepX = step(sin, cos, origin.x, origin.y);
            let stepY = step(cos, sin, origin.y, origin.x, true);
            let nextStep = stepX.length2 < stepY.length2 ? inspect(stepX, 1, 0, origin.distance, stepX.y) : inspect(stepY, 0, 1, origin.distance, stepY.x);
            if (nextStep.distance > range) return [origin];
            return [origin].concat(ray(nextStep));
        };

        function step(rise, run, x, y, inverted) {
            if (run === 0) return noWall;
            let dx = run > 0 ? Math.floor(x + 1) - x : Math.ceil(x - 1) - x;
            let dy = dx * (rise / run);
            return {
                x: inverted ? y + dy : x + dx,
                y: inverted ? x + dx : y + dy,
                length2: dx * dx + dy * dy
            };
        };

        function inspect(step, shiftX, shiftY, distance, offset) {
            let dx = cos < 0 ? shiftX : 0;
            let dy = sin < 0 ? shiftY : 0;
            step.height = self.get(step.x - dx, step.y - dy);
            step.distance = distance + Math.sqrt(step.length2);
            if (shiftX) step.shading = cos < 0 ? 2 : 0;else step.shading = sin < 0 ? 2 : 1;
            step.offset = offset - Math.floor(offset);
            return step;
        };
    }

    update(seconds) {
        if (this.light > 0) this.light = Math.max(this.light - 10 * seconds, 0);else if (Math.random() * 5 < seconds) this.light = 2;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Map;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Controls {
    constructor(player) {
        this.player = player;
        this.codes = { 37: 'left', 39: 'right', 38: 'forward', 40: 'backward',
            65: 'sideLeft', 68: 'sideRight', 87: 'forward', 83: 'backward' };
        this.states = { 'left': false, 'right': false, 'forward': false, 'backward': false };
        document.addEventListener('keydown', this.onKey.bind(this, true), false);
        document.addEventListener('keyup', this.onKey.bind(this, false), false);
        document.addEventListener('touchstart', this.onTouch.bind(this), false);
        document.addEventListener('touchmove', this.onTouch.bind(this), false);
        document.addEventListener('touchend', this.onTouchEnd.bind(this), false);
        document.addEventListener('mousemove', this.onMouseMovement.bind(this), false);
        document.body.onclick = document.body.requestPointerLock || document.body.mozRequestPointerLock || document.body.webkitRequestPointerLock;
    }

    onTouch(e) {
        let t = e.touches[0];
        this.onTouchEnd(e);
        if (t.pageY < window.innerHeight * 0.5) this.onKey(true, { keyCode: 38 });else if (t.pageX < window.innerWidth * 0.5) this.onKey(true, { keyCode: 37 });else if (t.pageY > window.innerWidth * 0.5) this.onKey(true, { keyCode: 39 });
    }

    onTouchEnd(e) {
        this.states = { 'left': false, 'right': false, 'forward': false, 'backward': false, 'sideLeft': false, 'sideRight': false };
        e.preventDefault();
        e.stopPropagation();
    }

    onKey(val, e) {
        let state = this.codes[e.keyCode];
        if (typeof state === 'undefined') return;
        this.states[state] = val;
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();
    }

    onMouseMovement(e) {
        let x = e.movementX || e.mozMovementX || e.webkitMovementX || 0;
        if (x > 0) this.player.rotate(Math.PI / 40);
        if (x < 0) this.player.rotate(-Math.PI / 40);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Controls;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_js__ = __webpack_require__(0);



class Camera {
    constructor(canvas, resolution, focalLength) {
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width = window.innerWidth * 0.5;
        this.height = canvas.height = window.innerHeight * 0.5;
        this.resolution = resolution;
        this.spacing = this.width / resolution;
        this.focalLength = focalLength || 0.8;
        this.range = __WEBPACK_IMPORTED_MODULE_0__main_js__["MOBILE"] ? 8 : 14;
        this.lightRange = 5;
        this.scale = (this.width + this.height) / 1200;
    }

    render(player, map) {
        this.drawSky(player.direction, map.skybox, map.light);
        this.drawColumns(player, map);
        this.drawWeapon(player.weapon, player.paces);
    }

    drawSky(direction, sky, ambient) {
        let width = sky.width * (this.height / sky.height) * 2;
        let left = direction / __WEBPACK_IMPORTED_MODULE_0__main_js__["CIRCLE"] * -width;

        this.ctx.save();
        this.ctx.drawImage(sky.image, left, 0, width, this.height);
        if (left < width - this.width) {
            this.ctx.drawImage(sky.image, left + width, 0, width, this.height);
        }
        if (ambient > 0) {
            this.ctx.fillStyle = '#ffffff';
            this.ctx.globalAlpha = ambient * 0.1;
            this.ctx.fillRect(0, this.height * 0.5, this.width, this.height * 0.5);
        }
        this.ctx.restore();
    }

    drawColumn(column, ray, angle, map) {
        let ctx = this.ctx;
        let texture = map.wallTexture;
        let left = Math.floor(column * this.spacing);
        let width = Math.ceil(this.spacing);
        let hit = -1;

        while (++hit < ray.length && ray[hit].height <= 0);

        for (let s = ray.length - 1; s >= 0; s--) {
            let step = ray[s];
            let rainDrops = Math.pow(Math.random(), 3) * s;
            let rain = rainDrops > 0 && this.project(0.1, angle, step.distance);

            if (s === hit) {
                let textureX = Math.floor(texture.width * step.offset);
                let wall = this.project(step.height, angle, step.distance);

                ctx.globalAlpha = 1;
                ctx.drawImage(texture.image, textureX, 0, 1, texture.height, left, wall.top, width, wall.height);

                ctx.fillStyle = '#000000';
                ctx.globalAlpha = Math.max((step.distance + step.shading) / this.lightRange - map.light, 0);
                ctx.fillRect(left, wall.top, width, wall.height);
            };

            ctx.fillStyle = '#ffffff';
            ctx.globalAlpha = 0.15;
            while (--rainDrops > 0) ctx.fillRect(left, Math.random() * rain.top, 1, rain.height);
        };
    }

    drawColumns(player, map) {
        this.ctx.save();
        for (let column = 0; column < this.resolution; column++) {
            let x = column / this.resolution - 0.5;
            let angle = Math.atan2(x, this.focalLength);
            let ray = map.cast(player, player.direction + angle, this.range);
            this.drawColumn(column, ray, angle, map);
        };
        this.ctx.restore();
    }

    drawWeapon(weapon, paces) {
        let bobX = Math.cos(paces * 2) * this.scale * 6;
        let bobY = Math.sin(paces * 4) * this.scale * 6;
        let left = this.width * 0.66 + bobX;
        let top = this.height * 0.6 + bobY;
        this.ctx.drawImage(weapon.image, left, top, weapon.width * this.scale, weapon.height * this.scale);
    }

    project(height, angle, distance) {
        let z = distance * Math.cos(angle);
        let wallHeight = this.height * height / z;
        let bottom = this.height / 2 * (1 + 1 / z);
        return {
            top: bottom - wallHeight,
            height: wallHeight
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Camera;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class GameLoop {
    constructor() {
        this.frame = this.frame.bind(this);
        this.lastTime = 0;
        this.callback = function () {};
    }

    start(callback) {
        this.callback = callback;
        requestAnimationFrame(this.frame);
    }

    frame(time) {
        let seconds = (time - this.lastTime) / 1000;
        this.lastTime = time;
        if (seconds < 0.2) this.callback(seconds);
        requestAnimationFrame(this.frame);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameLoop;


/***/ })
/******/ ]);