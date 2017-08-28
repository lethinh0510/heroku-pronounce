webpackJsonp(["information.module"],{

/***/ "../../../../../src/app/pages/information/information.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"center_column\" class=\"center_column col-xs-12 col-sm-9\">\r\n\t<!-- Breadcrumb -->\r\n\t<div class=\"breadcrumb clearfix\">\r\n\t\t<a class=\"home\" [routerLink]=\"['/']\" title=\"Return to Home\">\r\n\t\t\t<i class=\"fa fa-home\"></i>\r\n\t\t</a>\r\n\t\t<span class=\"navigation-pipe\">&gt;</span> {{type}}\r\n\t</div>\r\n\r\n\t<!-- /Breadcrumb -->\r\n\t<div id=\"slider_row\">\r\n\t\t<div id=\"top_column\" class=\"center_column \"></div>\r\n\t</div>\r\n\t<div *ngIf=\"informations\">\r\n\r\n\t\t<div *ngIf=\"type === 'delivery'\">\r\n\t\t\t<span [innerHTML]=\"informations.delivery\"></span>\r\n\t\t</div>\r\n\r\n\t\t<div *ngIf=\"type === 'About us'\">\r\n\t\t\t<span [innerHTML]=\"informations.aboutUs\"></span>\r\n\t\t</div>\r\n\r\n\t\t<div *ngIf=\"type === 'terms'\">\r\n\t\t\t<span [innerHTML]=\"informations.terms\"></span>\r\n\t\t</div>\r\n\r\n\t\t<div *ngIf=\"type === 'note'\">\r\n\t\t\t<span [innerHTML]=\"informations.aboutUs\"></span>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/information/information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_information_service__ = __webpack_require__("../../../../../src/app/services/information.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InformationComponent = (function () {
    function InformationComponent(informationService, route) {
        this.informationService = informationService;
        this.route = route;
    }
    InformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.type = params['type'];
            _this.informationService.getInformation().subscribe(function (informations) {
                _this.informations = informations;
                console.log(_this.informations);
            });
        });
    };
    InformationComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    InformationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'information',
            template: __webpack_require__("../../../../../src/app/pages/information/information.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_information_service__["a" /* InformationService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_information_service__["a" /* InformationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_information_service__["a" /* InformationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], InformationComponent);
    return InformationComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Project/nambienviet/angular4/src/information.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/information/information.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationModule", function() { return InformationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__information_component__ = __webpack_require__("../../../../../src/app/pages/information/information.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routing = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__information_component__["a" /* InformationComponent */]
    }
];
var Routing = __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routing);
var InformationModule = (function () {
    function InformationModule() {
    }
    InformationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], Routing
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__information_component__["a" /* InformationComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__information_component__["a" /* InformationComponent */],
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], InformationModule);
    return InformationModule;
}());
//# sourceMappingURL=D:/Project/nambienviet/angular4/src/information.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/information.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_client__ = __webpack_require__("../../../../../src/app/services/http-client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InformationService = (function () {
    function InformationService(httpClient) {
        this.httpClient = httpClient;
    }
    InformationService.prototype.getInformation = function () {
        return this.httpClient.get('/api/information');
    };
    InformationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_client__["a" /* HttpClient */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__http_client__["a" /* HttpClient */]) === 'function' && _a) || Object])
    ], InformationService);
    return InformationService;
    var _a;
}());
//# sourceMappingURL=D:/Project/nambienviet/angular4/src/information.service.js.map

/***/ })

});
//# sourceMappingURL=information.module.chunk.js.map