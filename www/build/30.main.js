webpackJsonp([30],{

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_question_title__ = __webpack_require__(386);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuestionTitleModule", function() { return CreateQuestionTitleModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateQuestionTitleModule = (function () {
    function CreateQuestionTitleModule() {
    }
    return CreateQuestionTitleModule;
}());
CreateQuestionTitleModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_question_title__["a" /* CreateQuestionTitle */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_question_title__["a" /* CreateQuestionTitle */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__create_question_title__["a" /* CreateQuestionTitle */]
        ]
    })
], CreateQuestionTitleModule);

//# sourceMappingURL=create-question-title.module.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(244);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateQuestionTitle; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CreateQuestionTitle page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CreateQuestionTitle = (function () {
    function CreateQuestionTitle(http, navCtrl, navParams, UserService) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UserService = UserService;
        this.title = '';
        this.text = '';
    }
    CreateQuestionTitle.prototype.send = function () {
        if (this.title.length && this.text.length) {
            this.postdata();
        }
        else {
            this.UserService.showAlert("请输入完整...");
        }
    };
    CreateQuestionTitle.prototype.postdata = function () {
        var _this = this;
        this.UserService.presentLoadingDefault();
        var url = "http://www.devonhello.com/chihu/send_question";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "uid=" + this.UserService._user._id + "&name=" + this.UserService._user.name + "&userimg=" + this.UserService._user.userimg + "&title=" + this.title + "&text=" + this.text, {
            headers: headers
        })
            .subscribe(function (res) {
            if (res.json()['result']['ok'] == '1') {
                _this.UserService.presentLoadingDismiss();
                _this.navCtrl.pop();
            }
        });
    };
    return CreateQuestionTitle;
}());
CreateQuestionTitle = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-create-question-title',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/create-question-title/create-question-title.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>提问</ion-title>\n        <ion-buttons end (click)="send();">\n            <ion-title>提交</ion-title>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n\n        <ion-item>\n            <ion-input [(ngModel)]="title" type="text" placeholder="请输入标题"></ion-input>\n        </ion-item>\n        <br/>\n        <ion-textarea [(ngModel)]="text" placeholder="添加内容的补充说明..."></ion-textarea>\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/create-question-title/create-question-title.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]])
], CreateQuestionTitle);

//# sourceMappingURL=create-question-title.js.map

/***/ })

});
//# sourceMappingURL=30.main.js.map