webpackJsonp(["posts.module"],{

/***/ "../../../../../src/app/pages/posts/post-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"center_column\" class=\"center_column col-xs-12 col-sm-9\" *ngIf=\"blog\">\r\n\t<div class=\"breadcrumb clearfix\">\r\n\t\t<a class=\"home\" [routerLink]=\"['/blogs']\"title=\"Return to Blogs\">\r\n\t\t\t<i class=\"fa fa-home\"></i>\r\n\t\t</a>\r\n\t\t<span class=\"navigation-pipe\">&gt;</span> Blogs\r\n\t</div>\r\n\t<img src=\"{{blog.image.secure_url}}\">\r\n\t<h1>{{blog.title}}</h1>\r\n\t<i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i><span> {{blog.publishedDate|date:'H:mm dd/MM/yyyy'}}</span>\r\n\t<br>\r\n\t<br>\r\n\t<span [innerHTML]=\"blog.content.extended\"></span>\r\n\t<hr>\r\n\t<!-- <comment-pagination [slug]=\"blog.slug\"></comment-pagination> -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/posts/post-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_post_comment_service__ = __webpack_require__("../../../../../src/app/services/post-comment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostItemComponent = (function () {
    function PostItemComponent(postService, route) {
        this.postService = postService;
        this.route = route;
    }
    PostItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var slug = params['slug'];
            console.log('key--------', slug);
            _this.postService.getBySlug(slug).subscribe(function (blog) {
                _this.blog = blog;
                console.log(_this.blog);
            });
        });
    };
    PostItemComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PostItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'post-item',
            template: __webpack_require__("../../../../../src/app/pages/posts/post-item.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__services_post_comment_service__["a" /* PostCommentService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], PostItemComponent);
    return PostItemComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Project/nambienviet/angular4/src/post-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/posts/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"center_column\" class=\"center_column col-xs-12 col-sm-9\" *ngIf=\"totalPosts\">\r\n\r\n\t<div id=\"slider_row\">\r\n\t\t<div id=\"top_column\" class=\"center_column \">\r\n\t\t\t<my-slide></my-slide>\r\n\t\t</div>\r\n\t</div>\r\n\t<ul class=\"product_list row list\">\r\n\t\t<li class=\"ajax_block_product first-in-line first-item-of-tablet-line first-item-of-mobile-line col-xs-12\"\r\n\t\t\t *ngFor=\"let post of posts\">\r\n\t\t\t<div class=\"product-container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"left-block col-xs-4 col-xs-5 col-md-4\">\r\n\t\t\t\t\t\t<div class=\"product-image-container\">\r\n\t\t\t\t\t\t\t<a class=\"product_img_link\" style=\"padding: 4px\">\r\n\t\t\t\t\t\t\t\t<img class=\"replace-2x img-responsive\"\r\n\t\t\t\t\t\t\t\t\t src=\"{{post.image.secure_url}}\"\r\n\t\t\t\t\t\t\t\t\t style=\"height: 160px\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"center-block col-xs-8 col-xs-7 col-md-8\">\r\n\t\t\t\t\t\t<a [routerLink]=\"['/posts',post.slug]\" class=\"product-name h3\">\r\n\t\t\t\t\t\t\t<h3 class=\"list-name\">{{post.title}}</h3>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<p class=\"product-desc\">\r\n\t\t\t\t\t\t\t<span class=\"list-desc\" [innerHTML]=\"post.content.brief\"></span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i><span> {{post.publishedDate|date:'dd/MM/yyyy'}}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<div class=\"bottom-pagination-content clearfix\" *ngIf=\"totalPosts.length > 3\">\r\n\t\t<div class=\"product-count\">\r\n\t\t\tHiện thị từ {{start}} đến {{end}} | Tổng cộng {{totalPosts.length}} bài viết\r\n\t\t</div>\r\n\t\t<div class=\"pagination clearfix\"\r\n\t\t\t style=\"cursor: pointer\">\r\n\r\n\t\t\t<ul class=\"pagination\">\r\n\t\t\t\t<li class=\"pagination_previous\">\r\n\t\t\t\t\t<a (click)=\"previousPage()\">\r\n\t\t\t\t\t\t<i class=\"fa fa-chevron-left\"></i>\r\n\t\t\t\t\t\t<b>Trước</b>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li *ngFor=\"let page of getPageSize()\" [ngClass]=\"{active:page==currentPage}\">\r\n\t\t\t\t\t<a (click)=\"setCurrentPage(page)\">\r\n\t\t\t\t\t\t<span>{{page}}</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"pagination_next\">\r\n\t\t\t\t\t<a (click)=\"nextPage()\">\r\n\t\t\t\t\t\t<b>Tiếp</b> <i class=\"fa fa-chevron-right\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/posts/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostComponent = (function () {
    function PostComponent(postService) {
        var _this = this;
        this.postService = postService;
        this.currentPage = 1;
        this.pageLimit = 3;
        this.start = 1;
        this.end = 1;
        this.pageCount = 1;
        this.setCurrentPage = function (page) {
            _this.currentPage = page;
            _this._initStartEnd();
        };
        this.previousPage = function () {
            if (_this.currentPage != 1) {
                _this.currentPage -= 1;
                _this._initStartEnd();
            }
        };
        this.nextPage = function () {
            if (_this.currentPage < _this.pageCount) {
                _this.currentPage += 1;
                _this._initStartEnd();
            }
        };
        this.postService.getAll().subscribe(function (posts) {
            _this.totalPosts = posts;
            _this._initStartEnd();
        });
    }
    PostComponent.prototype._initStartEnd = function () {
        var count = this.totalPosts.length;
        this.end = this.currentPage * this.pageLimit;
        this.start = this.end - this.pageLimit + 1;
        if (this.end > count) {
            this.end = count;
        }
        this.posts = this._range(this.totalPosts, this.start, this.end);
    };
    PostComponent.prototype._range = function (array, start, end) {
        start -= 1;
        var results = [];
        for (var x = start; x < end; x++) {
            var item = array[x];
            if (item) {
                results.push(item);
            }
        }
        return results;
    };
    PostComponent.prototype.getPageSize = function () {
        var input = [];
        this.pageCount = Math.ceil(this.totalPosts.length / this.pageLimit);
        for (var i = 1; i <= this.pageCount; i++) {
            input.push(i);
        }
        return input;
    };
    ;
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'my-post',
            template: __webpack_require__("../../../../../src/app/pages/posts/post.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === 'function' && _a) || Object])
    ], PostComponent);
    return PostComponent;
    var _a;
}());
//# sourceMappingURL=D:/Project/nambienviet/angular4/src/post.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/posts/posts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_component__ = __webpack_require__("../../../../../src/app/pages/posts/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_item_component__ = __webpack_require__("../../../../../src/app/pages/posts/post-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_slide_slide_module__ = __webpack_require__("../../../../../src/app/components/slide/slide.module.ts");
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
        component: __WEBPACK_IMPORTED_MODULE_3__post_component__["a" /* PostComponent */]
    },
    {
        path: ':slug',
        component: __WEBPACK_IMPORTED_MODULE_4__post_item_component__["a" /* PostItemComponent */]
    }
];
//forChild -> Vì router này sẽ được load như một router con
//cho nên chúng ta định nghĩa forChild cho router này
var Routing = __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routing);
var PostsModule = (function () {
    function PostsModule() {
    }
    PostsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__post_component__["a" /* PostComponent */], __WEBPACK_IMPORTED_MODULE_4__post_item_component__["a" /* PostItemComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], Routing, __WEBPACK_IMPORTED_MODULE_5__components_slide_slide_module__["a" /* SlideModule */]
            ],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], PostsModule);
    return PostsModule;
}());
//# sourceMappingURL=D:/Project/nambienviet/angular4/src/posts.module.js.map

/***/ })

});
//# sourceMappingURL=posts.module.chunk.js.map