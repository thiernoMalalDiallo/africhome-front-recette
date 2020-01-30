(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-publishAd-publishAd-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/publishAd/publishAd.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/publishAd/publishAd.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content class=\"container\">\n\n    <div class=\"content-page\">\n      \n      <!--  -->\n      <africhome-publish-ad></africhome-publish-ad>\n\n    </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/publishAd/publishAd.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/publishAd/publishAd.module.ts ***!
  \*****************************************************/
/*! exports provided: PublishAdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishAdPageModule", function() { return PublishAdPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _publishAd_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publishAd.page */ "./src/app/pages/publishAd/publishAd.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








const routes = [
    {
        path: '',
        component: _publishAd_page__WEBPACK_IMPORTED_MODULE_5__["PublishAdPage"]
    }
];
let PublishAdPageModule = class PublishAdPageModule {
};
PublishAdPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)
        ],
        declarations: [_publishAd_page__WEBPACK_IMPORTED_MODULE_5__["PublishAdPage"]]
    })
], PublishAdPageModule);



/***/ }),

/***/ "./src/app/pages/publishAd/publishAd.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/publishAd/publishAd.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .content-page {\n  background-color: var(--ion-color-gris);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVibGlzaEFkL0M6XFxVc2Vyc1xcdG1kaWFsbG9cXERvY3VtZW50c1xcUHJvamV0IEFmcmlxdWVcXEFmcmljSG9tZVxcYWZyaWNob21lLWNvZGVcXGFmcmljaG9tZS1pb25pYy9zcmNcXGFwcFxccGFnZXNcXHB1Ymxpc2hBZFxccHVibGlzaEFkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHVibGlzaEFkL3B1Ymxpc2hBZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSx1Q0FBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHVibGlzaEFkL3B1Ymxpc2hBZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG5cclxuICAgIC5jb250ZW50LXBhZ2V7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyaXMpO1xyXG4gICAgfVxyXG59IiwiLmNvbnRhaW5lciAuY29udGVudC1wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyaXMpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/publishAd/publishAd.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/publishAd/publishAd.page.ts ***!
  \***************************************************/
/*! exports provided: PublishAdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishAdPage", function() { return PublishAdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PublishAdPage = class PublishAdPage {
    constructor() { }
    ngOnInit() {
    }
};
PublishAdPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publish-add',
        template: __webpack_require__(/*! raw-loader!./publishAd.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/publishAd/publishAd.page.html"),
        styles: [__webpack_require__(/*! ./publishAd.page.scss */ "./src/app/pages/publishAd/publishAd.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PublishAdPage);



/***/ })

}]);
//# sourceMappingURL=pages-publishAd-publishAd-module-es2015.js.map