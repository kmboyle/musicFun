(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _music_music_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music/music.service */ "./src/app/music/music.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_music_music_service__WEBPACK_IMPORTED_MODULE_1__["MusicService"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: firebaseConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_init_caps_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/init-caps.pipe */ "./src/app/shared/init-caps.pipe.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _music_music_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./music/music.component */ "./src/app/music/music.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _music_music_performance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./music/music-performance.component */ "./src/app/music/music-performance.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _music_file_mgmt_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./music/file-mgmt.component */ "./src/app/music/file-mgmt.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/esm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var firebaseConfig = {
    apiKey: 'AIzaSyB6p3dOXyEWZDIwMSUOTEej-6cSaPlE8LI',
    authDomain: 'awesomeness-a47d9.firebaseapp.com',
    databaseURL: 'https://awesomeness-a47d9.firebaseio.com',
    projectId: 'awesomeness-a47d9',
    storageBucket: 'awesomeness-a47d9.appspot.com',
    messagingSenderId: '154832084236'
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_12__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"],
                [ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_16__["Ng4LoadingSpinnerModule"].forRoot()],
                angularfire2__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(firebaseConfig),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([{ path: 'home', component: _music_music_component__WEBPACK_IMPORTED_MODULE_10__["MusicComponent"] },
                    { path: 'music/:id', component: _music_music_performance_component__WEBPACK_IMPORTED_MODULE_13__["MusicPerformanceComponent"] },
                    { path: 'newSong', component: _music_file_mgmt_component__WEBPACK_IMPORTED_MODULE_17__["FileMgmtComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'home', pathMatch: 'full' }]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _shared_init_caps_pipe__WEBPACK_IMPORTED_MODULE_8__["InitCapsPipe"],
                _music_music_component__WEBPACK_IMPORTED_MODULE_10__["MusicComponent"],
                _music_music_performance_component__WEBPACK_IMPORTED_MODULE_13__["MusicPerformanceComponent"],
                _music_file_mgmt_component__WEBPACK_IMPORTED_MODULE_17__["FileMgmtComponent"]
            ],
            exports: [_material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/music/file-mgmt.component.css":
/*!***********************************************!*\
  !*** ./src/app/music/file-mgmt.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bandImg{\r\n    padding-bottom: 2rem;\r\n    padding-top: 2rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/music/file-mgmt.component.html":
/*!************************************************!*\
  !*** ./src/app/music/file-mgmt.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <form [formGroup]='songForm'>\r\n    <div class='uploadElement'>\r\n      <img class= 'bandImg' src='../../assets/band.jpeg'/>\r\n      <!-- \r\n      <label>Source</label>\r\n      <input type=\"text\" class=\"form-control\" formControlName=\"src\"/>\r\n      <label>Date</label>\r\n      <input type=\"text\" class=\"form-control\" formControlName=\"date\"/> -->\r\n      <div class=\"form-group col-md-6\">\r\n          <label>Song Title</label>\r\n          <input type=\"text\" [ngClass]=\"{'is-invalid': errorMessage}\" class=\"form-control mb-3\" formControlName=\"title\"/>\r\n          <label for=\"file\">Choose File</label>\r\n          <input [ngClass]=\"{'is-invalid': errorMessage}\" type=\"file\"\r\n              id=\"file\"\r\n              (change)=\"handleFileInput($event.target.files)\"/>\r\n          <button class=\"btn btn-primary\" (click)=\"back()\">Back</button>\r\n          <button class=\"btn btn-primary\" (click)=\"uploadFileToActivity()\">Upload</button>\r\n          <div *ngIf ='errorMessage' class='invalid-feedback help-block'>{{ errorMessage }}</div>\r\n          <div *ngIf ='success' class='text-success'>{{ success }}</div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/music/file-mgmt.component.ts":
/*!**********************************************!*\
  !*** ./src/app/music/file-mgmt.component.ts ***!
  \**********************************************/
/*! exports provided: FileMgmtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileMgmtComponent", function() { return FileMgmtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _services_file_mgmt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/file-mgmt.service */ "./src/app/services/file-mgmt.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FileMgmtComponent = /** @class */ (function () {
    function FileMgmtComponent(fileUploadService, _router, fb, http) {
        this.fileUploadService = fileUploadService;
        this._router = _router;
        this.fb = fb;
        this.http = http;
        this.errorMessage = '';
        this.success = '';
        this.fileToUpload = null;
        this.createForm();
    }
    FileMgmtComponent.prototype.createForm = function () {
        this.songForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    FileMgmtComponent.prototype.ngOnInit = function () {
    };
    FileMgmtComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    FileMgmtComponent.prototype.addSong = function () {
        console.log(this.songForm.controls);
        return false;
    };
    FileMgmtComponent.prototype.uploadFileToActivity = function () {
        console.log(this.songForm.controls['title'].value);
        if (this.songForm.invalid || !this.fileToUpload) {
            return this.errorMessage = 'Please include a song name and a song file.';
        }
        console.log(this.fileToUpload);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'contentType': 'multipart/form-data'
        });
        this.http.post('/api/songs', { name: this.songForm.controls['title'].value, song: this.fileToUpload }, { headers: headers }).subscribe(function (data) {
            console.log(data);
        });
        // this.fileUploadService.postFile(, this.fileToUpload).subscribe(data => {
        //   // do something, if upload success
        //   // this.success = 'Upload Success!';
        //   if (data.Error) {
        //       this.errorMessage = 'Sorry, Upload Failed.';
        //   } else {
        //     this.success = 'Upload Success!';
        //   }
        //   console.log(data);
        //   }, error => {
        //     console.log(error);
        //   });
    };
    FileMgmtComponent.prototype.back = function () {
        this._router.navigate(['/home']);
    };
    FileMgmtComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./file-mgmt.component.html */ "./src/app/music/file-mgmt.component.html"),
            styles: [__webpack_require__(/*! ./file-mgmt.component.css */ "./src/app/music/file-mgmt.component.css")],
            providers: [_services_file_mgmt_service__WEBPACK_IMPORTED_MODULE_3__["FileService"]]
        }),
        __metadata("design:paramtypes", [_services_file_mgmt_service__WEBPACK_IMPORTED_MODULE_3__["FileService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FileMgmtComponent);
    return FileMgmtComponent;
}());



/***/ }),

/***/ "./src/app/music/music-performance.component.ts":
/*!******************************************************!*\
  !*** ./src/app/music/music-performance.component.ts ***!
  \******************************************************/
/*! exports provided: MusicPerformanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPerformanceComponent", function() { return MusicPerformanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _music_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music.service */ "./src/app/music/music.service.ts");
/* harmony import */ var _services_file_mgmt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/file-mgmt.service */ "./src/app/services/file-mgmt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MusicPerformanceComponent = /** @class */ (function () {
    function MusicPerformanceComponent(_route, _router, _musicService, fileService) {
        this._route = _route;
        this._router = _router;
        this._musicService = _musicService;
        this.fileService = fileService;
        this.pageTitle = '';
    }
    MusicPerformanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        // because the param is a string, add a + to convert the param string to a numeric id
        this.id = +this._route.snapshot.paramMap.get('id');
        this._musicService.getPerformances()
            .subscribe(function (performance) {
            _this.performance = performance.filter(function (pfm) { return pfm.id === _this.id; });
            console.log(_this.performance);
            _this.pageTitle = _this.performance[0].title + " " + _this.performance[0].date;
        }, function (error) { return _this.errorMessage = error; });
    };
    MusicPerformanceComponent.prototype.getDownload = function (song) {
        var _this = this;
        console.log(song.src.split('/')[song.src.split('/').length - 1]);
        var songFileName = song.src.split('/')[song.src.split('/').length - 1];
        this.fileService.downloadFile(songFileName).subscribe(function (url) {
            _this.linkSrc = url;
        });
    };
    // to route with code, import the router and use it's navigate method
    MusicPerformanceComponent.prototype.onBack = function () {
        this._router.navigate(['/home']);
    };
    MusicPerformanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "<h1>{{ this.pageTitle }}</h1>\n  <table>\n  <tr *ngFor='let set of performance'>\n\n            <td>{{ set.title }}</td>\n            <td><audio controls>\n                            <source [src]='set.src' type='audio/mp3'>\n                            </audio>\n            </td>\n            <button (click)='getDownload(set)'>Download</button>\n        </tr>\n  </table>\n\n  <img *ngIf=\"linkSrc\" src=\"{{linkSrc}}\" id=\"myimg\">\n  <button (click)='onBack()'>Take me home</button>",
            styleUrls: [],
            providers: [_services_file_mgmt_service__WEBPACK_IMPORTED_MODULE_3__["FileService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _music_service__WEBPACK_IMPORTED_MODULE_2__["MusicService"],
            _services_file_mgmt_service__WEBPACK_IMPORTED_MODULE_3__["FileService"]])
    ], MusicPerformanceComponent);
    return MusicPerformanceComponent;
}());



/***/ }),

/***/ "./src/app/music/music.component.css":
/*!*******************************************!*\
  !*** ./src/app/music/music.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".songName {\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n}\r\n.title{\r\n    text-align:center;\r\n}\r\n.title:hover{\r\n    background-color: black;\r\n    color:red;\r\n    text-align:center;\r\n}\r\ntr:hover{\r\n    background-color: black;\r\n    color:red;\r\n}\r\n/* Navbar container */\r\n.navbar {\r\n    overflow: hidden;\r\n    background-color: black;\r\n    font-family: Arial;\r\n}\r\n/* Links inside the navbar */\r\n.navbar a {\r\n    float: left;\r\n    font-size: 16px;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n/* The dropdown container */\r\n.dropdown {\r\n    float: left;\r\n    overflow: hidden;\r\n}\r\n/* Dropdown button */\r\n.dropdown .dropbtn {\r\n    font-size: 16px;\r\n    border: none;\r\n    outline: none;\r\n    color: white;\r\n    padding: 14px 16px;\r\n    background-color: inherit;\r\n}\r\n/* Add a red background color to navbar links on hover */\r\n.navbar a:hover,\r\n.navbar .addSongBtn:hover,\r\n.dropdown-item:hover,\r\n.dropdown:hover .dropbtn {\r\n    background-color: red;\r\n}\r\n.navbar .addSongBtn {\r\n    height: 4rem;\r\n}\r\n/* Dropdown content (hidden by default) */\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n    z-index: 1;\r\n}\r\n/* Links inside the dropdown */\r\n.dropdown-content a {\r\n    float: none;\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    text-align: left;\r\n}\r\n/* Add a grey background color to dropdown links on hover */\r\n.dropdown-content a:hover {\r\n    background-color: #ddd;\r\n}\r\n/* Show the dropdown menu on hover */\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n    cursor: pointer;\r\n}\r\n/* .searchBar {\r\n    float: right;\r\n} */"

/***/ }),

/***/ "./src/app/music/music.component.html":
/*!********************************************!*\
  !*** ./src/app/music/music.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng4-loading-spinner></ng4-loading-spinner>\r\n\r\n<!--The content below is only a placeholder and can be replaced.-->\r\n<div class='container'>\r\n    <div class=\"title\">\r\n        <h1>\r\n            Music Forever Reigns\r\n        </h1>\r\n    </div>\r\n    <div class=\"navbar\">\r\n        <div class=\"dropdown\">\r\n            <button mat-button [matMenuTriggerFor]=\"select\" [ngStyle]=\"{'color':'white'}\" class=\"btn dropbtn dropdown-toggle\">Select Folder\r\n            \r\n        </button>\r\n            <mat-menu #select=\"matMenu\" class=\"dropdown-content\">\r\n                    <a mat-menu-item class=\"dropdown-item\" (click)='filterShow(\"ALL\")'>Show All</a>\r\n                    <a mat-menu-item class=\"dropdown-item\" (click)='filterShow(\"12.09.2017\")'>Dec. 9, 2017</a>\r\n                    <a mat-menu-item class=\"dropdown-item\" (click)='filterShow(\"12.23.2017\")'>Dec. 23, 2017</a>\r\n            </mat-menu>\r\n            </div>\r\n        <div class=\"dropdown\">\r\n            <button mat-button [ngStyle]=\"{'color':'white'}\" class=\"addSongBtn btn btn-lg\" (click)='addSong()'>Add Song \r\n                <!-- <i class=\"fa fa-caret-down\"></i> -->\r\n              </button>\r\n            <!-- <div class=\"dropdown-content\">\r\n                <mat-menu #add=\"matMenu\" class=\"dropdown-content\">\r\n                        <a  mat-menu-item class=\"dropdown-item\" (click)='addSong()'>Add a Song</a>\r\n                </mat-menu>\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class='col-md-9'>\r\n            <h2>Song List</h2>\r\n        </div>\r\n        <div class=\"col-md-3 searchBar\">\r\n            <i class=\"material-icons\">search</i>\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Search\" (keyup)=\"searchFilter($event)\">\r\n            </mat-form-field>\r\n        </div>\r\n    </div>\r\n    <div *ngIf='errorMessage' [ngStyle]=\"{'color':'red'}\">{{errorMessage}}</div>\r\n        <table class='table' *ngIf='filteredSongs'>\r\n            <tbody>\r\n                <tr *ngFor='let performance of filteredSongs let i = index' (click)=\"routeToSongPage($event)\">\r\n                    <td class=\"songName {{performance.id}}\">{{i+1}}</td>\r\n                    <td class=\"songName {{performance.title}}\">{{performance.title}}</td>\r\n                    <td>{{performance.date}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    <!-- <div *ngFor='let item of items'>{{item}}</div> -->\r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Modal title</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"trigger(c)\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <p>One fine body&hellip;</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"trigger(c)\">Close</button>\r\n        </div>\r\n    </ng-template>\r\n</div>"

/***/ }),

/***/ "./src/app/music/music.component.ts":
/*!******************************************!*\
  !*** ./src/app/music/music.component.ts ***!
  \******************************************/
/*! exports provided: MusicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicComponent", function() { return MusicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _music_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music.service */ "./src/app/music/music.service.ts");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MusicComponent = /** @class */ (function () {
    function MusicComponent(_route, _musicService, spinnerService, modalService) {
        this._route = _route;
        this._musicService = _musicService;
        this.spinnerService = spinnerService;
        this.modalService = modalService;
        // db.firestore.settings({timestampsInSnapshots:true});
        // this.items = db.collection('items').valueChanges();
        // console.log(this.items);
    }
    MusicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._musicService.getPerformances()
            .subscribe(function (performances) {
            _this.filteredSongs = performances;
            _this.filteredSongs.forEach(function (performance) {
                _this.keys = Object.keys(performance);
            });
        }, function (error) { return _this.errorMessage = error; });
    };
    // resovling ng-template error [Angular] Member function is not callable
    MusicComponent.prototype.trigger = function (callback) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return callback.apply(void 0, args);
    };
    MusicComponent.prototype.open = function (content) {
        this.modalService.open(content);
    };
    MusicComponent.prototype.myTimer = function () {
        var _this = this;
        if (this.filteredSongs['length'] === 0) {
            this.spinnerService.show();
            setTimeout(function () {
                _this.spinnerService.hide();
                _this.errorMessage = 'Sorry, no results found';
            }, 3000);
        }
    };
    MusicComponent.prototype.searchFilter = function (event) {
        var _this = this;
        this.errorMessage = '';
        this._musicService.getPerformances().subscribe(function (songs) {
            _this.songs = songs.filter(function (song) { return song.title.toLowerCase().includes(event.target.value.toLowerCase()); });
            _this.filteredSongs = _this.songs;
            _this.myTimer();
        });
    };
    MusicComponent.prototype.filterShow = function (id) {
        var _this = this;
        this._musicService.getPerformances().subscribe(function (songs) {
            if (id === 'ALL') {
                return _this.filteredSongs = songs;
            }
            else {
                _this.songs = songs.filter(function (song) { return song.date === id; });
                _this.filteredSongs = _this.songs;
            }
        });
    };
    MusicComponent.prototype.routeToSongPage = function (event) {
        this.songName = this.filteredSongs.filter(function (song) { return song.title === event.target.innerHTML; });
        this._route.navigate(['music/', this.songName[0].id]);
    };
    MusicComponent.prototype.addSong = function () {
        this._route.navigate(['newSong']);
    };
    MusicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-music',
            template: __webpack_require__(/*! ./music.component.html */ "./src/app/music/music.component.html"),
            styles: [__webpack_require__(/*! ./music.component.css */ "./src/app/music/music.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _music_service__WEBPACK_IMPORTED_MODULE_2__["MusicService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], MusicComponent);
    return MusicComponent;
}());



/***/ }),

/***/ "./src/app/music/music.service.ts":
/*!****************************************!*\
  !*** ./src/app/music/music.service.ts ***!
  \****************************************/
/*! exports provided: MusicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicService", function() { return MusicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs/_esm5/add/operator/filter.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MusicService = /** @class */ (function () {
    function MusicService(_http) {
        this._http = _http;
        this._url = '/api/songs';
    }
    MusicService.prototype.getPerformances = function () {
        return this._http.get(this._url)
            .do(function (data) { })
            .catch(this.handleError);
    };
    MusicService.prototype.getPerformance = function (id) {
    };
    MusicService.prototype.handleError = function (err) {
        console.log(err.message);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.error.message);
    };
    MusicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MusicService);
    return MusicService;
}());



/***/ }),

/***/ "./src/app/services/file-mgmt.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/file-mgmt.service.ts ***!
  \***********************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/index.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FileService = /** @class */ (function () {
    function FileService(http, firebaseApp) {
        this.http = http;
        this.firebaseApp = firebaseApp;
        this.test = true;
        // this.storageRef = firebaseApp.storage().ref();
    }
    // postFile(songName: String, fileToUpload: File): Observable<any> {
    //     const headers = new HttpHeaders({
    //             'contentType': 'multipart/form-data'
    //         });
    //     const body = {
    //         name: songName,
    //         song: fileToUpload
    //     };
    //     console.log(body);
    //     this.http.post('/api/songs', {name: songName, song: fileToUpload}).catch(err => Observable.of({
    //         'Error': err
    //     }));
    // }
    FileService.prototype.downloadFile = function (fileToDownload) {
        console.log(fileToDownload);
        var urlFile;
        this.storageRef.child("Songs/" + fileToDownload).getDownloadURL().then(function (url) {
            // // This can be downloaded directly:
            // const xhr = new XMLHttpRequest();
            // xhr.responseType = 'blob';
            // xhr.onload = (event) => {
            //   const blob = xhr.response;
            // };
            // xhr.open('GET', url);
            // xhr.send();
            // // Or inserted into an <img> element:
            // const img = document.getElementById('myimg');
            // img.src = url;
            urlFile = url;
            console.log(urlFile);
        }).catch(function (error) {
            // Handle any errors
            console.log(error);
        });
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].of(urlFile);
    };
    FileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], angularfire2__WEBPACK_IMPORTED_MODULE_5__["FirebaseApp"]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/shared/init-caps.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/shared/init-caps.pipe.ts ***!
  \******************************************/
/*! exports provided: InitCapsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitCapsPipe", function() { return InitCapsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InitCapsPipe = /** @class */ (function () {
    function InitCapsPipe() {
    }
    InitCapsPipe.prototype.transform = function (value, args) {
        return null;
    };
    InitCapsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'initCaps'
        })
    ], InitCapsPipe);
    return InitCapsPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kevinb\Documents\angular-play\musicFun\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map