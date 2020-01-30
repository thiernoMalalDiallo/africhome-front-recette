(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"home-page\">\r\n\r\n    <!-- Div principale  contenant les éléments de la page Home -->\r\n    <div class=\"content-page\">\r\n\r\n        <div class=\"content-page-bis\">\r\n        \r\n                     <!-- Bouton principale -->\r\n                    <africhome-button [theme]=\"'orange'\" [title]=\"'POST_AD_ESTATE'\"\r\n                                      (clickButton)=\"goToPage('publish-ad')\">\r\n\r\n                    </africhome-button>\r\n\r\n                    <!-- Selection un pays -->\r\n                    <div class=\"select\"> \r\n                                <select #countrySelect >\r\n                                    <option value=\"choose a country\" selected >\r\n                                        {{ 'PAGES.HOME.SELECT_A_COUNTRY' | translate }}\r\n                                    </option>\r\n                                    <option *ngFor=\"let country of countries\" [value]=\"country\">                   \r\n                                        {{ country }}\r\n                                    </option>\r\n                                </select>\r\n                    </div>\r\n\r\n                    <!-- Description de l'application -->\r\n                    <div class=\"description\"> \r\n                                {{ 'PAGES.HOME.DESCRIPTION' | translate }}\r\n                    </div>\r\n        </div>\r\n\r\n    </div>\r\n    \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-page .content-page {\n  background-color: var(--ion-color-gris);\n  height: 100vh;\n  padding-bottom: 35rem;\n}\n.home-page .content-page .content-page-bis {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-top: 10rem;\n}\n.home-page .content-page .content-page-bis .description {\n  margin-top: 6rem;\n  text-align: center;\n  font-weight: bold;\n}\n.home-page .content-page .content-page-bis select {\n  width: 20rem;\n  height: 3rem;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXHRtZGlhbGxvXFxEb2N1bWVudHNcXFByb2pldCBBZnJpcXVlXFxBZnJpY0hvbWVcXGFmcmljaG9tZS1jb2RlXFxhZnJpY2hvbWUtaW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FDRFI7QURHUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQ0RaO0FESWdCO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRnBCO0FETWdCO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0pwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1wYWdle1xyXG4gICBcclxuICAgIC5jb250ZW50LXBhZ2V7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyaXMpO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDM1cmVtO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5jb250ZW50LXBhZ2UtYmlze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTByZW07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3R5bGUgZGUgbGEgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTdHlsZSBkdSBzZWxlY3RcclxuICAgICAgICAgICAgICAgIHNlbGVjdHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi5ob21lLXBhZ2UgLmNvbnRlbnQtcGFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmlzKTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy1ib3R0b206IDM1cmVtO1xufVxuLmhvbWUtcGFnZSAuY29udGVudC1wYWdlIC5jb250ZW50LXBhZ2UtYmlzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcmVtO1xufVxuLmhvbWUtcGFnZSAuY29udGVudC1wYWdlIC5jb250ZW50LXBhZ2UtYmlzIC5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50LXBhZ2UgLmNvbnRlbnQtcGFnZS1iaXMgc2VsZWN0IHtcbiAgd2lkdGg6IDIwcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_africhome_data_africhome_data_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/africhome-data/africhome-data.provider */ "./src/providers/africhome-data/africhome-data.provider.ts");




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, dataProvider) {
        this.navCtrl = navCtrl;
        this.dataProvider = dataProvider;
    }
    HomePage.prototype.ngOnInit = function () {
        this.countries = this.dataProvider.getCountries();
    };
    /**
     * Permet d'être redirigé sur la page de la fonctionnalité sélectionnée
     * @param page : string
     */
    HomePage.prototype.goToPage = function (page) {
        this.navCtrl.navigateForward('/' + page);
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_providers_africhome_data_africhome_data_provider__WEBPACK_IMPORTED_MODULE_3__["AfrichomeDataProvider"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_providers_africhome_data_africhome_data_provider__WEBPACK_IMPORTED_MODULE_3__["AfrichomeDataProvider"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map