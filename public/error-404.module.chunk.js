webpackJsonp(["error-404.module"],{

/***/ "../../../../../src/app/pages/error/error-404.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content_scene_cat\">\r\n\t<div class=\"jumbotron text-center\">\r\n\t\t<h1>404</h1>\r\n\t\t<p class=\"lead\">Trang không tìm thấy.</p>\r\n\t\t<a [routerLink]=\"['/']\" class=\"btn btn-default\">Trở về trang chủ</a>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/error/error-404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error404Component = (function () {
    function Error404Component() {
    }
    Error404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'error-404',
            template: __webpack_require__("../../../../../src/app/pages/error/error-404.component.html")
        }), 
        __metadata('design:paramtypes', [])
    ], Error404Component);
    return Error404Component;
}());
//# sourceMappingURL=D:/Project/nambienviet/angular4/src/error-404.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/error/error-404.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Module", function() { return Error404Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_404_component__ = __webpack_require__("../../../../../src/app/pages/error/error-404.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//Định nghĩa router riêng cho module này
var routing = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__error_404_component__["a" /* Error404Component */]
    }
];
//forChild -> Vì router này sẽ được load như một router con
//cho nên chúng ta định nghĩa forChild cho router này
var Routing = __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routing);
var Error404Module = (function () {
    function Error404Module() {
    }
    Error404Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__error_404_component__["a" /* Error404Component */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], Routing
            ],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], Error404Module);
    return Error404Module;
}());
//# sourceMappingURL=D:/Project/nambienviet/angular4/src/error-404.module.js.map

/***/ })

});
//# sourceMappingURL=error-404.module.chunk.js.map