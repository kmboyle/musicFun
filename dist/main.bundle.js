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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Navbar container */\r\n\r\n.navbar {\r\n    overflow: hidden;\r\n    background-color: #333;\r\n    font-family: Arial;\r\n}\r\n\r\n\r\n/* Links inside the navbar */\r\n\r\n.navbar a {\r\n    float: left;\r\n    font-size: 16px;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n/* The dropdown container */\r\n\r\n.dropdown {\r\n    float: left;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n/* Dropdown button */\r\n\r\n.dropdown .dropbtn {\r\n    font-size: 16px;\r\n    border: none;\r\n    outline: none;\r\n    color: white;\r\n    padding: 14px 16px;\r\n    background-color: inherit;\r\n}\r\n\r\n\r\n/* Add a red background color to navbar links on hover */\r\n\r\n.navbar a:hover,\r\n.dropdown:hover .dropbtn {\r\n    background-color: red;\r\n}\r\n\r\n\r\n/* Dropdown content (hidden by default) */\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n    z-index: 1;\r\n}\r\n\r\n\r\n/* Links inside the dropdown */\r\n\r\n.dropdown-content a {\r\n    float: none;\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    text-align: left;\r\n}\r\n\r\n\r\n/* Add a grey background color to dropdown links on hover */\r\n\r\n.dropdown-content a:hover {\r\n    background-color: #ddd;\r\n}\r\n\r\n\r\n/* Show the dropdown menu on hover */\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n    <h1>\r\n        Kevin Bizzoyle Welcome to {{ title }}!\r\n    </h1>\r\n</div>\r\n<div class=\"navbar\">\r\n    <div class=\"dropdown\">\r\n        <button class=\"dropbtn\">Select Folder \r\n            <i class=\"fa fa-caret-down\"></i>\r\n          </button>\r\n        <div class=\"dropdown-content\">\r\n            <a [routerLink]=\"['music/12.09.2017']\">Dec. 9, 2017</a>\r\n            <a [routerLink]=\"['music/12.23.2017']\">Dec. 23, 2017</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__music_music_service__ = __webpack_require__("../../../../../src/app/music/music.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__music_music_service__["a" /* MusicService */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_init_caps_pipe__ = __webpack_require__("../../../../../src/app/shared/init-caps.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__music_music_component__ = __webpack_require__("../../../../../src/app/music/music.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__music_music_performance_component__ = __webpack_require__("../../../../../src/app/music/music-performance.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot([
                    { path: "home", component: __WEBPACK_IMPORTED_MODULE_5__music_music_component__["a" /* MusicComponent */] },
                    { path: "music/:id", component: __WEBPACK_IMPORTED_MODULE_8__music_music_performance_component__["a" /* MusicPerformanceComponent */] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'home', pathMatch: 'full' }
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__shared_init_caps_pipe__["a" /* InitCapsPipe */],
                __WEBPACK_IMPORTED_MODULE_5__music_music_component__["a" /* MusicComponent */],
                __WEBPACK_IMPORTED_MODULE_8__music_music_performance_component__["a" /* MusicPerformanceComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/music/music-performance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicPerformanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_service__ = __webpack_require__("../../../../../src/app/music/music.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MusicPerformanceComponent = (function () {
    function MusicPerformanceComponent(_route, _router, _musicService) {
        this._route = _route;
        this._router = _router;
        this._musicService = _musicService;
        this.pageTitle = '';
        // console.log(this._route.snapshot.paramMap.get('id'));
        if (!this.performance) {
            this.performance = [];
        }
    }
    MusicPerformanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        //because the param is a string, add a + to convert the param string to a numeric id
        var id = this._route.snapshot.paramMap.get('id');
        this._musicService.getPerformances()
            .subscribe(function (performance) { return _this.performance = performance; }, function (error) { return _this.errorMessage = error; });
        this.pageTitle = "" + id;
    };
    //to route with code, import the router and use it's navigate method
    MusicPerformanceComponent.prototype.onBack = function () {
        this._router.navigate(['/home']);
    };
    MusicPerformanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "<h1>{{this.pageTitle}}</h1>\n  <table>\n  <tr *ngFor='let set of performance.performanceSongs'>\n\n            <td *ngIf='set.performanceId == this.pageTitle'>{{set.title}}</td>\n            <td *ngIf='set.performanceId == this.pageTitle'><audio controls>\n                            <source [src]='set.src' type='audio/mp3'>\n                            </audio>\n            </td>\n\n        </tr>\n  </table>\n  <button (click)='onBack()'>Take me home</button>",
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__music_service__["a" /* MusicService */]])
    ], MusicPerformanceComponent);
    return MusicPerformanceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/music/music.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{date}}</h1>\r\n\r\n<table class='table' *ngIf='performances.performanceSongs && performances.performanceSongs.length'>\r\n    <thead>\r\n        <tr>\r\n            <th>\r\n                Song Name\r\n            </th>\r\n            <th>\r\n                Song Data\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor='let performance of performances.performanceSongs'>\r\n\r\n            <td>{{performance.title}}</td>\r\n            <td><audio controls>\r\n                            <source [src]='performance.src' type='audio/mp3'>\r\n                            </audio>\r\n            </td>\r\n\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n\r\n<!-- <div class='row'>\r\n    <div class='col-md-6'>\r\n        <h2>Green Jam</h2>\r\n        <h3><i>12.09.17</i></h3>\r\n        <audio controls>\r\n        <source src='../assets/Floyds_Jam/Green_Jam.mp3' type='audio/mp3'>\r\n      </audio>\r\n    </div>\r\n</div>\r\n\r\n<div class='row'>\r\n    <div class='col-md-6'>\r\n        <h2>Marx Jam</h2>\r\n        <h3><i>12.09.17</i></h3>\r\n        <audio controls>\r\n        <source src='../assets/Floyds_Jam/Marx_Jam.mp3' type='audio/mp3'>\r\n      </audio>\r\n    </div>\r\n</div>\r\n\r\n<div class='row'>\r\n    <div class='col-md-6'>\r\n        <h2>Pawn Jam</h2>\r\n        <h3><i>12.09.17</i></h3>\r\n        <audio controls>\r\n        <source src='../assets/Floyds_Jam/Pawn_Shop_Jam.mp3' type='audio/mp3'>\r\n      </audio>\r\n    </div>\r\n</div>\r\n\r\n<div class='row'>\r\n    <div class='col-md-6'>\r\n        <h2>Piece Of Mind Jam</h2>\r\n        <h3><i>12.09.17</i></h3>\r\n        <audio controls>\r\n        <source src='../assets/Floyds_Jam/Piece_Of_Mind_Jam.mp3' type='audio/mp3'>\r\n      </audio>\r\n    </div>\r\n</div>\r\n\r\n<div class='row'>\r\n    <div class='col-md-6'>\r\n        <h2>Say It Ain't So Jam</h2>\r\n        <h3><i>12.09.17</i></h3>\r\n        <audio controls>\r\n        <source src='../assets/Floyds_Jam/Say_It_Aint_Jam.mp3' type='audio/mp3'>\r\n      </audio>\r\n    </div>\r\n</div>\r\n\r\n<div class='row'>\r\n    <div class='col-md-6'>\r\n        <h2>Simple Man Jam</h2>\r\n        <h3><i>12.09.17</i></h3>\r\n        <audio controls>\r\n        <source src='../assets/Floyds_Jam/Simple_Jam.mp3' type='audio/mp3'>\r\n      </audio>\r\n    </div>\r\n</div>\r\n\r\n<div class='row'>\r\n    <div class='col-md-6'>\r\n        <h2>Wanna Fall Jam</h2>\r\n        <h3><i>12.09.17</i></h3>\r\n        <audio controls>\r\n        <source src='../assets/Floyds_Jam/Wanna_Fall_Jam.mp3' type='audio/mp3'>\r\n      </audio>\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/music/music.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_service__ = __webpack_require__("../../../../../src/app/music/music.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MusicComponent = (function () {
    function MusicComponent(_route, _musicService) {
        this._route = _route;
        this._musicService = _musicService;
        this.date = "Date number";
        if (!this.performances) {
            this.performances = [];
            this.performanceSongs = '';
        }
    }
    MusicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._musicService.getPerformances()
            .subscribe(function (performances) {
            _this.performances = performances;
        }, function (error) { return _this.errorMessage = error; });
    };
    MusicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-music',
            template: __webpack_require__("../../../../../src/app/music/music.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__music_service__["a" /* MusicService */]])
    ], MusicComponent);
    return MusicComponent;
}());



/***/ }),

/***/ "../../../../../src/app/music/music.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MusicService = (function () {
    function MusicService(_http) {
        this._http = _http;
        this._url = 'api/performances/music.json';
    }
    MusicService.prototype.getPerformances = function () {
        return this._http.get(this._url)
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    MusicService.prototype.handleError = function (err) {
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.error.message);
    };
    MusicService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MusicService);
    return MusicService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/init-caps.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitCapsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InitCapsPipe = (function () {
    function InitCapsPipe() {
    }
    InitCapsPipe.prototype.transform = function (value, args) {
        return null;
    };
    InitCapsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'initCaps'
        })
    ], InitCapsPipe);
    return InitCapsPipe;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
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