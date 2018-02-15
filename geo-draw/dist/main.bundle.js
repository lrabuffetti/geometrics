webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_draw_area_draw_area_component__ = __webpack_require__("../../../../../src/app/components/draw-area/draw-area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about_me_about_me_component__ = __webpack_require__("../../../../../src/app/components/about-me/about-me.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__components_draw_area_draw_area_component__["a" /* DrawAreaComponent */] },
    { path: 'about-me', component: __WEBPACK_IMPORTED_MODULE_3__components_about_me_about_me_component__["a" /* AboutMeComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" routerLink=\"/home\" skipLocationChange>Parallelogram Test</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"/home\" skipLocationChange>Home</a></li>\n        <li><a routerLink=\"/about-me\" skipLocationChange>About Me</a></li>\n      </ul>\n    </div>\n  </nav>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Geometrics App';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_draw_area_draw_area_component__ = __webpack_require__("../../../../../src/app/components/draw-area/draw-area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_point_point_component__ = __webpack_require__("../../../../../src/app/components/point/point.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_line_line_component__ = __webpack_require__("../../../../../src/app/components/line/line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_parallelogram_parallelogram_component__ = __webpack_require__("../../../../../src/app/components/parallelogram/parallelogram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_circle_circle_component__ = __webpack_require__("../../../../../src/app/components/circle/circle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_about_me_about_me_component__ = __webpack_require__("../../../../../src/app/components/about-me/about-me.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_draggable__ = __webpack_require__("../../../../angular2-draggable/angular2-draggable.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_draggable_directive__ = __webpack_require__("../../../../../src/app/directives/draggable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_drop_target_directive__ = __webpack_require__("../../../../../src/app/directives/drop-target.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_drag_service__ = __webpack_require__("../../../../../src/app/directives/drag.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_draw_area_draw_area_component__["a" /* DrawAreaComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_point_point_component__["a" /* PointComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_line_line_component__["a" /* LineComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_parallelogram_parallelogram_component__["a" /* ParallelogramComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_circle_circle_component__["a" /* CircleComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_about_me_about_me_component__["a" /* AboutMeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__directives_draggable_directive__["a" /* DraggableDirective */],
                __WEBPACK_IMPORTED_MODULE_13__directives_drop_target_directive__["a" /* DropTargetDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_draggable__["a" /* AngularDraggableModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__directives_drag_service__["a" /* DragService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/classes/parallelogram.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parallelogram; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__("../../../../../src/app/classes/point.ts");

var Parallelogram = (function () {
    function Parallelogram(points, lines, massCenter, width, height, parallelogramCanvas, circleCanvas, draggedPoints) {
        if (points === void 0) { points = []; }
        if (lines === void 0) { lines = []; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (parallelogramCanvas === void 0) { parallelogramCanvas = {}; }
        if (circleCanvas === void 0) { circleCanvas = {}; }
        if (draggedPoints === void 0) { draggedPoints = []; }
        this.points = points;
        this.lines = lines;
        this.massCenter = massCenter;
        this.width = width;
        this.height = height;
        this.parallelogramCanvas = parallelogramCanvas;
        this.circleCanvas = circleCanvas;
        this.draggedPoints = draggedPoints;
    }
    Parallelogram.prototype.setParallelogram = function (parallelogram) { this.parallelogramCanvas = parallelogram; };
    Parallelogram.prototype.setCircle = function (circle) { this.circleCanvas = circle; };
    /**
     * Add a point into the points collections
     * @param  point [point object an X and an Y number]
     */
    Parallelogram.prototype.setPoint = function (point) {
        this.points.push(point);
    };
    ;
    /**
     * I think that the name of the method said everything
     * @param  width [numberrrrrrr]
     */
    Parallelogram.prototype.setWidth = function (width) {
        this.width = width;
    };
    ;
    /**
     * same as above
     * @return [description]
     */
    Parallelogram.prototype.getWidth = function () {
        return this.width;
    };
    ;
    /**
     * againnnn the name said everything
     * @param  height [numberrrrrrr]
     */
    Parallelogram.prototype.setHeight = function (height) {
        this.height = height;
    };
    ;
    /**
     * same as above above above ...
     * @return [description]
     */
    Parallelogram.prototype.getHeight = function () {
        return this.height;
    };
    ;
    /**
     * This is the most cruel of all the functions
     */
    Parallelogram.prototype.deletePoints = function () {
        this.lines = [];
        this.points = [];
        this.draggedPoints = [];
        this.massCenter = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](0, 0);
    };
    ;
    /**
     * lenght method
     * @return [number]
     */
    Parallelogram.prototype.length = function () {
        return this.points.length;
    };
    /**
     * This function calculates the lastPoint of the parallelogram based on the another 3 points
     */
    Parallelogram.prototype.lastPoint = function () {
        /**
         * We need to find the 4th point to close the parallellogram
         * so, we need to find that 4th coordinate and here is a simple
         * formula of how to do it, let's translate it to JS
         *
         * A(−2;4) , B(1;−2) and C(3;3) and D(x;y)
         * Since AD → = BD → AD → = BD →, you'll have
         * (Dx − Ax , Dy − Ay) = (Cx − Bx, Cy − By)
         * (Dx − Ax , Dy − Ay) = (Cx − Bx, Cy − By)
         * ⇒ (x − ( −2 ), y − 4) = (3 − 1, 3 − ( −2 ))
         * ⇒ (x − ( −2 ) , y − 4) = (3 − 1, 3 − ( −2 ))
         * ⇒ x − ( −2 ) = 3 − 1 and y − 4 = 3 − (−2) ⇒ S(0,9).
         */
        var A = this.points[0];
        var B = this.points[1];
        var C = this.points[2];
        var x = (C.x + A.x) - B.x;
        var y = (C.y + A.y) - B.y;
        var D = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](x, y);
        this.points.push(D);
        this.clonePoints();
    };
    ;
    /**
     * Print the lines between each point the browser
     * @param  {any}    pointA [pair of points]
     * @param  {any}    pointB [pair of points]
     * @return {[lines]}       [updated array with the lines to be written]
     */
    Parallelogram.prototype.drawLine = function (pointA, pointB) {
        var x1 = pointA.getX();
        var y1 = pointA.getY();
        var x2 = pointB.getX();
        var y2 = pointB.getY();
        var m = (y1 - y2) / (x1 - x2); //slope of the segment;
        var angle = (Math.atan(m)) * 180 / (Math.PI); //angle of the line
        var d = Math.sqrt(((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2))); //length of the segment
        var transform;
        // the (css) transform angle depends on the direction of movement of the line
        if (x1 >= x2) {
            transform = (360 + angle) % 360;
        }
        else {
            transform = 180 + angle;
        }
        // id for the line
        var id = 'line-' + new Date().getTime();
        // css styles to draw the line with HTML
        var styles = {
            'left': x2 + 'px',
            'top': y2 + 'px',
            'width': d + 'px',
            'transform': 'rotate(' + transform + 'deg)',
            'transform-origin': '0px 0px',
            '-ms-transform': 'rotate(' + transform + 'deg)',
            '-ms-transform-origin': '0px 0px',
            '-moz-transform': 'rotate(' + transform + 'deg)',
            '-moz-transform-origin': '0px 0px',
            '-webkit-transform': 'rotate(' + transform + 'deg)',
            '-webkit-transform-origin': '0px 0px',
            '-o-transform': 'rotate(' + transform + 'deg)',
            '-o-transform-origin': '0px 0px',
            'height': '1px',
            'background-color': '#000',
        };
        // set the line object
        var line = {
            'id': id,
            'styles': styles,
            'slope': m,
            'angle': angle,
            'distance': d,
            'transform': transform,
        };
        this.lines.push(line);
        return line;
    };
    /**
     * Here we calculate the mass of center to position the circunference in the middle of the parallelogram
     * @return [description]
     */
    Parallelogram.prototype.setCenterOfMass = function () {
        if (this.points.length < 4) {
            return 'you need 4 points of the parallelogram';
        }
        else {
            /**
              this is the formula to calculate the mass center of a parallelogram
              of course, we first need the 4 points, so, if you don't have all of them
              an error message will appear, just for control
              (A+C, B+D)
              ----, ----
                2    2
              (Ax,Ay + Cx,Cy)/2 , (Bx,By + Dx,Dy)/2
              (Ax+Cx + Ay+Cy)/2 , (Bx+Dx + By+Dy)/2
            */
            var A = this.points[0];
            var B = this.points[1];
            var C = this.points[2];
            var D = this.points[3];
            var firstPoint = (A.getX() + B.getX() + C.getX() + D.getX()) / 4;
            var secondPoint = (A.getY() + B.getY() + C.getY() + D.getY()) / 4;
            this.massCenter = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](firstPoint, secondPoint);
        }
    };
    ;
    /**
     * This function if to set the circunference radius
     * @return [description]
     */
    Parallelogram.prototype.getShortestLine = function () {
        var shortestLine = 0;
        for (var i = 0; i < this.lines.length; i++) {
            if (i === 0) {
                shortestLine = this.lines[i].distance;
            }
            else if (shortestLine > this.lines[i].distance) {
                shortestLine = this.lines[i].distance;
            }
        }
        return shortestLine;
    };
    /**
     * All said in the name
     * @return [point]
     */
    Parallelogram.prototype.getCenterOfMass = function () {
        this.setCenterOfMass();
        return this.massCenter;
    };
    /**
     * Return all the points in the parallelogram
     * @return [array of points]
     */
    Parallelogram.prototype.getPoints = function () {
        return this.points;
    };
    /**
     * Return all the lines in the parallelogram
     * @return [array of lines]
     */
    Parallelogram.prototype.getLines = function () {
        return this.lines;
    };
    /**
     * Return an especific line
     * @return [single line object]
     */
    Parallelogram.prototype.getLine = function (position) {
        return this.lines[position];
    };
    /**
     * Return the start point
     * @return [first point]
     */
    Parallelogram.prototype.getInitialPosition = function () {
        return this.points[0];
    };
    Parallelogram.prototype.polygonPosition = function () {
        var lines = this.getLines();
        var position = this.getInitialPosition();
        var points = this.getPoints();
        return {
            'position': 'absolute',
            'background-color': '#ccc',
            'top': position.y + 'px',
            'left': position.x + 'px',
            'width': this.getWidth() + 'px',
            'height': this.getHeight() + 'px',
            'transform': 'rotate(' + lines[0].transform + 'deg) ' + 'skew(5deg)'
        };
    };
    Parallelogram.prototype.clonePoints = function () {
        return this.draggedPoints = this.points;
    };
    Parallelogram.prototype.getDraggedPoints = function () {
        return this.draggedPoints;
    };
    Parallelogram.prototype.updatePointPosition = function (point, index) {
        this.draggedPoints[index] = point;
    };
    return Parallelogram;
}());



/***/ }),

/***/ "../../../../../src/app/classes/point.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.setX = function (point) {
        this.x = point;
    };
    Point.prototype.setY = function (point) {
        this.y = point;
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    return Point;
}());



/***/ }),

/***/ "../../../../../src/app/components/about-me/about-me.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"col-md-8\">\n    <h4>Resume of me</h4>\n    <p>\n      Hello, my name is <strong>Lucas</strong>, I am from Argentina, I born in a small Town called Paraná, it's on Entre Ríos Providence. A beautiful place on the river side where I grown up.\n    </p>\n    <p>\n      I like to do a lot of things, I play basquetball as a point guard, also I play guitar, I love the blues, jazz and music from Argentina. But also I love Radiohead, Pink Floyd and another international artists.\n    </p>\n    <p>\n      I use to spend most of my time with my friends doing the things I like, and having good times =), I really like to joke and being funny it's the best way to past the time, so, you once you know, you will know that I can take thing really seriously but\n      also, with fun and kindness.\n    </p>\n    <h4>Professional Career</h4>\n    <p>\n      I studied system engeneering and I am a developer, at the begining, I start working on <strong>C</strong> and <strong>C++</strong> then with the necessities of the company I start to work with <strong>PHP</strong> and with that, the frontend appears.\n      Now there are more than 7 years that I am working with <strong>HTML/CSS/JS</strong>, but also I do <strong>DevOps</strong> too, because I like to know what we have \"under the hood\".\n    </p>\n    <p>\n      Currently I am working on <strong>McAfee</strong> as a Sr frontend and DevOps =) and I have several tasks on both sides, one of the technologies I love the most is <strong>Angular</strong>, since the first version that I am using the framework and\n      I found it really cool. So my contribution as a Frontend, I am making global components to uso along all the applications. And, as a DevOps I am in charge of all the cloud configurations, team city agents, environment and deployments.\n    </p>\n  </div>\n  <div class=\"col-md-4\">\n    <img class=\"img-responsive img-thumbnail\" src=\"../../assets/profile.jpg\" alt=\"profile picture\">\n  </div>\n  <div class=\"col-md-6\">\n    <h4>Resume of Project</h4>\n    <p>\n      First of all, I want to thank you for the time and the patience, during this month thing get complicated on my job and I did not have much time to complete the task the way I want.\n    </p>\n    <p>\n      You can see and follow the code in this <a href=\"https://github.com/lrabuffetti/geometrics\" target=\"_blank\">Github Repo</a>, and you will find that I build the APP with <strong>ANGULAR</strong>, using TypeScript, and you may ask: <i>\"why he didn't use a simple library to save time and get things faster?\"</i>.\n    </p>\n    <p>\n      Ok, here is the explanation, I just want to show that I can programm with different approaches, using a framework to manage the MVC pattern and the best practices of it, and also, using TypeScript gives me the best abstraction at the moment of resolve\n      algorithims and math solutions to this task. Also, there is a Canvas approach so you can see that I can manage that too.\n    </p>\n    <p>\n      You will find classes, controllers, routing, dependencies injections, third party libraries, and <strong>funny comments along the code</strong> , because, coding needs to be fun. Otherwise you will get bored and the monotony on the job is something\n      that no one wants.\n    </p>\n    <p>\n      Hope everything goes well and see you soon there to work together, share the best of us and grow as a persons and professionals.\n    </p>\n  </div>\n  <div class=\"col-md-6\">\n    <h4>Job Experience</h4>\n    <ul>\n      <li *ngFor=\"let job of jobs; let i = index\">\n        <div class=\"\">\n          <span>Job title:</span> <strong>{{job.title}}</strong>\n        </div>\n        <div class=\"\">\n          <span>Job position:</span> <strong>{{job.position}}</strong>\n        </div>\n        <div class=\"\">\n          <span>Projects:</span> <strong>{{job.project}}</strong>\n        </div>\n        <div class=\"\">\n          <span>Start/End:</span> <strong>{{job.start}} {{job.end}}</strong>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/about-me/about-me.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about-me/about-me.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutMeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutMeComponent = (function () {
    function AboutMeComponent() {
        this.jobs = [];
    }
    AboutMeComponent.prototype.ngOnInit = function () {
        this.jobs = [
            {
                title: 'Droptek',
                position: 'Sr Frontend Developer',
                project: 'iMactics',
                start: 'Dec 2015',
                end: 'Feb 2017'
            },
            {
                title: 'Globant',
                position: 'Sr Frontend Developer',
                project: 'Disney World, South west Airlines',
                start: 'Feb 2013',
                end: 'Dec 2015'
            },
            {
                title: 'Clarika',
                position: 'SSr Frontend Developer',
                project: 'Lekons, Delfos, Lectus, CTD Communications',
                start: 'July 2012',
                end: 'Feb 2013'
            },
            {
                title: 'Clarika',
                position: 'SSr Frontend Developer',
                project: 'Lekons, Delfos, Lectus, CTD Communications',
                start: 'July 2012',
                end: 'Feb 2013'
            },
            {
                title: 'Excedesoft',
                position: 'C, C++, PHP, Js Developer',
                project: 'Heard About, Kaiser Quotes',
                start: 'Apr 2009',
                end: 'July 2012'
            }
        ];
    };
    AboutMeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-me',
            template: __webpack_require__("../../../../../src/app/components/about-me/about-me.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about-me/about-me.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/circle/circle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"rounded-circle\" [ngStyle]=\"pointStyles\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/components/circle/circle.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/circle/circle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_parallelogram__ = __webpack_require__("../../../../../src/app/classes/parallelogram.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CircleComponent = (function () {
    function CircleComponent() {
        this.pointStyles = {};
    }
    CircleComponent.prototype.ngOnInit = function () {
        this.pointStyles = {
            'width': this.points.getShortestLine() + 'px',
            'height': this.points.getShortestLine() + 'px',
            'background-color': '#FECC00',
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__classes_parallelogram__["a" /* Parallelogram */])
    ], CircleComponent.prototype, "points", void 0);
    CircleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-circle',
            template: __webpack_require__("../../../../../src/app/components/circle/circle.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/circle/circle.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CircleComponent);
    return CircleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/draw-area/draw-area.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"clearfix\">\n  <h1 class=\"pull-left\">Draw Board</h1>\n  <button type=\"button\" class=\"btn btn-primary pull-right mt-25\" (click)=\"resetPoints($event)\" name=\"button\">Reset</button>\n</div>\n<div\n  id=\"draw-board\"\n  class=\"draw-area\"\n  (click)=\"getPosition($event)\"\n  myDropTarget>\n  <app-point\n    [ngDraggable]=\"draggable\"\n    [preventDefaultEvent]=\"preventDefaultEvent\"\n    (stopped)=\"onStop($event, i)\"\n    id=\"point-{{i}}\"\n    class=\"some-point\"\n    *ngFor=\"let item of coordinates.getPoints(); let i = index; trackBy: trackByFn\"\n    [ngStyle]=\"pointPosition(item)\"\n    [coordinates]=\"coordinates\"\n    [indexPoint]=\"i\"\n    (update)=\"newCoordinate($event)\">\n  </app-point>\n</div>\n<canvas #parallelogram id=\"canvas\" class=\"mt-3\" width=\"{{cWidht}}\" height=\"{{cHeight}}\" (click)=\"preventClick($event)\"></canvas>\n<canvas #circle *ngIf=\"coordinates.length() === -1\" id=\"canvas2\" class=\"mt-3\" width=\"{{cWidht}}\" height=\"{{cHeight}}\" style=\"border: 1px solid black; border-radius: 5px\" (click)=\"preventClick($event)\"></canvas>\n"

/***/ }),

/***/ "../../../../../src/app/components/draw-area/draw-area.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mt-25 {\n  margin-top: 25px; }\n\n.mt-3 {\n  border: 1px solid black;\n  border-radius: 5px;\n  margin-top: 20px; }\n\n.draw-area {\n  width: 100%;\n  min-height: 800px;\n  border: 1px solid black; }\n  .draw-area .some-point {\n    position: absolute;\n    display: block;\n    -webkit-transform: none;\n            transform: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/draw-area/draw-area.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_parallelogram__ = __webpack_require__("../../../../../src/app/classes/parallelogram.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_point__ = __webpack_require__("../../../../../src/app/classes/point.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrawAreaComponent = (function () {
    function DrawAreaComponent(cdr) {
        this.cdr = cdr;
        //variable to store the coordinates points on the plain
        this.coordinates = new __WEBPACK_IMPORTED_MODULE_1__classes_parallelogram__["a" /* Parallelogram */]([], []);
        // this will be a variable to controll that the user can not put more than
        // just 3 points
        this.showMaxItems = false;
        // just to be safe that we don't overide our primary array on the calculation
        // of the last point in the child component.
        // otherwise, space/time continous could be compromissed.
        this.newCoordinates = new __WEBPACK_IMPORTED_MODULE_1__classes_parallelogram__["a" /* Parallelogram */]([], []);
        this.cWidht = 0;
        this.cHeight = 0;
        this.preventDefaultEvent = false;
        this.draggable = true;
    }
    /**
     * This is the genesis of the main function, it capture the clicks and set
     * the positions of them in an array to be printed on the draw area
     * (I like to do funny comments)
     * @param  {event}    e [it's the event captured]
     * @return {[array]}   [we don't return anything, we just fill an array]
     */
    DrawAreaComponent.prototype.getPosition = function (e) {
        var cursorX; // x point
        var cursorY; // y point
        var that = this; // we don't won't to change or interfeer with our scope
        // stop at 3th click
        if (this.coordinates.length() < 3) {
            document.onclick = function (e) {
                var point = new __WEBPACK_IMPORTED_MODULE_2__classes_point__["a" /* Point */](e.pageX, e.pageY);
                that.coordinates.setPoint(point);
                that.setCanvasPoint(e);
            };
        }
        else {
            e.stopPropagation();
            this.showMaxItems = true;
        }
    };
    /**
     * ALL TO 0, it's like an atomic bomb, except that you don't have to clean
     * the mess
     * @param  {event}    e [event of the action]
     * @return {[type]}   [description]
     */
    DrawAreaComponent.prototype.resetPoints = function (e) {
        this.coordinates.deletePoints();
        e.stopPropagation(); // it's a button action, without this, point of caos will be executed
        this.showMaxItems = false;
        this.ctx.clearRect(0, 0, 1000, 1000);
        this.circle.clearRect(0, 0, 1000, 1000);
    };
    DrawAreaComponent.prototype.preventClick = function (e) {
        e.stopPropagation(); // it's a button action, without this, point of caos will be executed
    };
    /**
     * Here we set the position of each point in the plain
     * the meaning of the universe as we know it
     * it just print the styles on the HTML
     * @param  {[object]} item [a point object with x and y values]
     * @return {[object]}      [return styles for the points position]
     */
    DrawAreaComponent.prototype.pointPosition = function (item) {
        return {
            'top': item.y + 'px',
            'left': item.x + 'px',
        };
    };
    /**
     * This is the function we use to position the circle in the middle of the parallelogram
     * some may ask why is not in the circle class/component, I think that the elements and their
     * positions belogs to the draw-area.
     * @param  {[object]} item [description]
     * @return {[object]}      [description]
     */
    DrawAreaComponent.prototype.circlePosition = function (item) {
        var style = {
            'top': item.y + 'px',
            'left': item.x + 'px',
            'margin-top': -(this.coordinates.getShortestLine() / 2) + 'px',
            'margin-left': -(this.coordinates.getShortestLine() / 2) + 'px',
        };
        return style;
    };
    /**
     * this is the most interesting function, why?
     * because it takes a value calculated on the children to perform
     * data binding and also, the math on the child method is reaaaaaally awesome!
     * you will see it!
     * @param  {[array]} event [angular call event to the object returned]
     * @return {[array]}       [add last point to the array to finish the parallellogram]
     */
    DrawAreaComponent.prototype.newCoordinate = function (event) {
        this.newCoordinates = event;
        this.coordinates = this.newCoordinates;
    };
    /**
     * simple function to demostrate that every ngFor needs to be track in order
     * of performance and organization and ... nothing else, just that.
     */
    DrawAreaComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    /**
     * This function makes the translation of the point
     * @param  event [dom element to transform]
     * @param  index [number of point to be transform]
     * @return       [We return a DOM transform based on the drag and drop]
     */
    DrawAreaComponent.prototype.onStop = function (event, index) {
        var movedPoint = document.getElementById('point-' + index), dragPosition = movedPoint.getBoundingClientRect(), newPoint = new __WEBPACK_IMPORTED_MODULE_2__classes_point__["a" /* Point */](dragPosition.left, dragPosition.top);
        this.ctx.clearRect(0, 0, 1000, 1000);
        this.circle.clearRect(0, 0, 1000, 1000);
        document.getElementById('point-' + index).removeAttribute('style');
        this.coordinates.updatePointPosition(newPoint, index);
    };
    /**
     * Print the canvas point
     * @param  e [dom properties of the element]
     * @return   [points on the canvas]
     */
    DrawAreaComponent.prototype.setCanvasPoint = function (e) {
        this.ctx.beginPath();
        this.ctx.arc((e.pageX - this.canvas.nativeElement.offsetLeft), e.pageY, 5, 0, 2 * Math.PI);
        this.circle.fillStyle = '#FF0000';
        this.circle.fill();
        this.ctx.stroke();
    };
    /**
     * Based on the 3 points, we calculate the last canvas point
     * @return [description]
     */
    DrawAreaComponent.prototype.setLastCanvasPoint = function () {
        var points = this.coordinates.getDraggedPoints();
        this.ctx.beginPath();
        this.ctx.arc((points[3].x - this.canvas.nativeElement.offsetLeft), points[3].y, 5, 0, 2 * Math.PI);
        this.circle.fillStyle = '#FF0000';
        this.circle.fill();
        this.ctx.stroke();
    };
    /**
     * This function prints the lines to create the parallelogram
     * @return [A canvas parallelogram on the main board]
     */
    DrawAreaComponent.prototype.drawCanvasLines = function () {
        var points = this.coordinates.getPoints();
        // initialice the canvas draw
        this.ctx.beginPath();
        // we move through the canvas making the lines
        this.ctx.moveTo((points[0].x - this.canvas.nativeElement.offsetLeft), points[0].y);
        this.ctx.lineTo((points[1].x - this.canvas.nativeElement.offsetLeft), points[1].y);
        this.ctx.lineTo((points[2].x - this.canvas.nativeElement.offsetLeft), points[2].y);
        this.ctx.lineTo((points[3].x - this.canvas.nativeElement.offsetLeft), points[3].y);
        this.ctx.lineTo((points[0].x - this.canvas.nativeElement.offsetLeft), points[0].y);
        // we close the lines and we colour the figure
        this.ctx.closePath();
        this.ctx.fillStyle = '#006AA7';
        this.ctx.fill();
        this.ctx.stroke();
    };
    /**
     * This function prints the circle inside the canvas parallelogram
     * @return [a circle inside the parallelogram]
     */
    DrawAreaComponent.prototype.drawCircleCanvas = function () {
        var center = this.coordinates.getCenterOfMass();
        var width = this.coordinates.getShortestLine();
        this.circle.beginPath();
        this.circle.arc((center.getX() - this.canvas.nativeElement.offsetLeft), center.getY(), (width / 2), 0, 2 * Math.PI);
        this.circle.closePath();
        this.circle.fillStyle = '#FECC00';
        this.circle.fill();
        this.circle.stroke();
    };
    /**
     * Here we initialice the variables we need before the DOM is rendered
     */
    DrawAreaComponent.prototype.ngOnInit = function () {
        var canvasEl = this.canvas.nativeElement;
        this.ctx = canvasEl.getContext('2d');
        this.circle = canvasEl.getContext('2d');
        this.cWidht = document.getElementById('draw-board').offsetWidth;
        this.cHeight = document.getElementById('draw-board').offsetHeight;
    };
    /**
     * This a simple observable of DOM changes in order to perform actions after move elements.
     * @return [description]
     */
    DrawAreaComponent.prototype.ngAfterViewChecked = function () {
        this.cdr.detectChanges(); // we need to update content after methods executions
        if (this.coordinates.length() === 4) {
            this.setLastCanvasPoint();
            this.drawCanvasLines();
            this.drawCircleCanvas();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('parallelogram'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DrawAreaComponent.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('circle'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DrawAreaComponent.prototype, "canvas2", void 0);
    DrawAreaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-draw-area',
            template: __webpack_require__("../../../../../src/app/components/draw-area/draw-area.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/draw-area/draw-area.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], DrawAreaComponent);
    return DrawAreaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/line/line.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  line works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/line/line.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/line/line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LineComponent = (function () {
    function LineComponent() {
    }
    LineComponent.prototype.ngOnInit = function () {
    };
    LineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-line',
            template: __webpack_require__("../../../../../src/app/components/line/line.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/line/line.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LineComponent);
    return LineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/parallelogram/parallelogram.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "../../../../../src/app/components/parallelogram/parallelogram.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/parallelogram/parallelogram.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallelogramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_parallelogram__ = __webpack_require__("../../../../../src/app/classes/parallelogram.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParallelogramComponent = (function () {
    function ParallelogramComponent() {
        this.cWidth = 100;
        this.cHeight = 100;
    }
    ParallelogramComponent.prototype.ngOnInit = function () {
        console.log(this.parallelogram, this.parallelogram.getWidth(), this.parallelogram.getHeight());
        this.cWidth = this.parallelogram.getWidth();
        this.cHeight = this.parallelogram.getHeight();
        console.log(this.cWidth, this.cHeight);
        this.initPosition = this.parallelogram.getInitialPosition();
        this.pSides = this.parallelogram.getPoints();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__classes_parallelogram__["a" /* Parallelogram */])
    ], ParallelogramComponent.prototype, "parallelogram", void 0);
    ParallelogramComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-parallelogram',
            template: __webpack_require__("../../../../../src/app/components/parallelogram/parallelogram.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/parallelogram/parallelogram.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ParallelogramComponent);
    return ParallelogramComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/point/point.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"point rounded-circle\">\n  <div class=\"point-number\">\n    {{indexPoint + 1}}\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/point/point.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".point {\n  border: 1px solid;\n  width: 11px;\n  height: 11px;\n  background-color: #FF0000;\n  position: relative;\n  border-radius: 50%; }\n\n.line:nth-child(2)[data-index='3'],\n.line:nth-child(4) {\n  display: none; }\n\n.point-number {\n  position: absolute;\n  top: 15px;\n  left: -40px;\n  bottom: 0;\n  right: 0;\n  font-weight: 600;\n  font-size: 20px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 1px solid lightgray;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/point/point.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_parallelogram__ = __webpack_require__("../../../../../src/app/classes/parallelogram.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PointComponent = (function () {
    function PointComponent(cdr) {
        this.cdr = cdr;
        this.newCoordinate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    PointComponent.prototype.ngOnInit = function () {
        //delete repeated lines
        this.lines = __WEBPACK_IMPORTED_MODULE_1_lodash__["uniqBy"](this.lines, function (e) { return e.id; });
        if (this.coordinates.length() >= 1 || this.coordinates.length() < 3) {
            var points = this.coordinates.getPoints();
            for (var i = 0; i < points.length; i++) {
                if (i >= 1) {
                    //create the lines based on the points selected by the user
                    this.lines.push(this.coordinates.drawLine(points[i - 1], points[i]));
                }
            }
        }
        if (this.coordinates.length() === 3) {
            var points = this.coordinates.getPoints();
            this.coordinates.lastPoint();
            this.coordinates.setWidth(this.coordinates.getLine(0).distance);
            this.coordinates.setHeight(this.coordinates.getLine(2).distance);
            this.newCoordinate.emit(this.coordinates);
            this.lines.push(this.coordinates.drawLine(points[2], points[3]));
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PointComponent.prototype, "lines", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__classes_parallelogram__["a" /* Parallelogram */])
    ], PointComponent.prototype, "coordinates", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('update'),
        __metadata("design:type", Object)
    ], PointComponent.prototype, "newCoordinate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PointComponent.prototype, "indexPoint", void 0);
    PointComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-point',
            template: __webpack_require__("../../../../../src/app/components/point/point.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/point/point.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], PointComponent);
    return PointComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directives/drag.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DragService = (function () {
    function DragService() {
    }
    DragService.prototype.startDrag = function (zone) {
        this.zone = zone;
    };
    DragService.prototype.accepts = function (zone) {
        return zone == this.zone;
    };
    DragService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], DragService);
    return DragService;
}());



/***/ }),

/***/ "../../../../../src/app/directives/draggable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drag_service__ = __webpack_require__("../../../../../src/app/directives/drag.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DraggableDirective = (function () {
    function DraggableDirective(dragService) {
        this.dragService = dragService;
        this.options = {};
    }
    Object.defineProperty(DraggableDirective.prototype, "draggable", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableDirective.prototype, "myDraggable", {
        set: function (options) {
            if (options) {
                this.options = options;
            }
        },
        enumerable: true,
        configurable: true
    });
    DraggableDirective.prototype.onDragStart = function (event) {
        var _a = this.options, _b = _a.zone, zone = _b === void 0 ? 'zone' : _b, _c = _a.data, data = _c === void 0 ? {} : _c;
        this.dragService.startDrag(zone);
        event.dataTransfer.setData('Text', JSON.stringify(data));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('draggable'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], DraggableDirective.prototype, "draggable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DraggableDirective.prototype, "myDraggable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('dragstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onDragStart", null);
    DraggableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[myDraggable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__drag_service__["a" /* DragService */]])
    ], DraggableDirective);
    return DraggableDirective;
}());



/***/ }),

/***/ "../../../../../src/app/directives/drop-target.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropTargetDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drag_service__ = __webpack_require__("../../../../../src/app/directives/drag.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropTargetDirective = (function () {
    function DropTargetDirective(dragService) {
        this.dragService = dragService;
        this.drop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.options = {};
    }
    Object.defineProperty(DropTargetDirective.prototype, "myDropTarget", {
        set: function (options) {
            if (options) {
                this.options = options;
            }
        },
        enumerable: true,
        configurable: true
    });
    DropTargetDirective.prototype.onDragOver = function (event) {
        var _a = this.options.zone, zone = _a === void 0 ? 'zone' : _a;
        if (this.dragService.accepts(zone)) {
            event.preventDefault();
        }
    };
    DropTargetDirective.prototype.onDrop = function (event) {
        var data = JSON.parse(event.dataTransfer.getData('Text'));
        this.drop.next(data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DropTargetDirective.prototype, "myDropTarget", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('myDrop'),
        __metadata("design:type", Object)
    ], DropTargetDirective.prototype, "drop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('dragenter', ['$event']),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropTargetDirective.prototype, "onDragOver", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropTargetDirective.prototype, "onDrop", null);
    DropTargetDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[myDropTarget]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__drag_service__["a" /* DragService */]])
    ], DropTargetDirective);
    return DropTargetDirective;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map