(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-informations-informations-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/informations/informations.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/informations/informations.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content class=\"container\">\n\n    <div class=\"content-page\">\n      \n      <!--  -->\n      <africhome-informations></africhome-informations>\n\n    </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/informations/informations.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/informations/informations.module.ts ***!
  \***********************************************************/
/*! exports provided: InformationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationsPageModule", function() { return InformationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _informations_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./informations.page */ "./src/app/pages/informations/informations.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _informations_page__WEBPACK_IMPORTED_MODULE_5__["InformationsPage"]
    }
];
var InformationsPageModule = /** @class */ (function () {
    function InformationsPageModule() {
    }
    InformationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
            ],
            declarations: [_informations_page__WEBPACK_IMPORTED_MODULE_5__["InformationsPage"]]
        })
    ], InformationsPageModule);
    return InformationsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/informations/informations.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/informations/informations.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .content-page {\n  background-color: var(--ion-color-gris);\n  height: 100vh;\n  padding-bottom: 35rem;\n  margin-top: 12vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5mb3JtYXRpb25zL0M6XFxVc2Vyc1xcdG1kaWFsbG9cXERvY3VtZW50c1xcUHJvamV0IEFmcmlxdWVcXEFmcmljSG9tZVxcYWZyaWNob21lLWNvZGVcXGFmcmljaG9tZS1pb25pYy9zcmNcXGFwcFxccGFnZXNcXGluZm9ybWF0aW9uc1xcaW5mb3JtYXRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW5mb3JtYXRpb25zL2luZm9ybWF0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmZvcm1hdGlvbnMvaW5mb3JtYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcblxyXG4gICAgLmNvbnRlbnQtcGFnZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3Jpcyk7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzVyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJ2aDtcclxuICAgIH1cclxuXHJcbn0iLCIuY29udGFpbmVyIC5jb250ZW50LXBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3Jpcyk7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmctYm90dG9tOiAzNXJlbTtcbiAgbWFyZ2luLXRvcDogMTJ2aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/informations/informations.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/informations/informations.page.ts ***!
  \*********************************************************/
/*! exports provided: InformationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationsPage", function() { return InformationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InformationsPage = /** @class */ (function () {
    function InformationsPage() {
    }
    InformationsPage.prototype.ngOnInit = function () {
    };
    InformationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-informations',
            template: __webpack_require__(/*! raw-loader!./informations.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/informations/informations.page.html"),
            styles: [__webpack_require__(/*! ./informations.page.scss */ "./src/app/pages/informations/informations.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InformationsPage);
    return InformationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-informations-informations-module-es5.js.map