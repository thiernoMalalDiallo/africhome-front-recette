(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs class=\"footer-page\">\r\n\r\n        <!-- Bottom menu de l'application  (affiché sur toutes les pages) -->\r\n        <ion-tab-bar class=\"content-page\" slot=\"bottom\">\r\n      \r\n          <ion-tab-button (click)=\"contactUs()\">\r\n            <ion-label class=\"link\">{{ 'FOOTER.CONTACT_US' | translate }}</ion-label>\r\n          </ion-tab-button>\r\n      \r\n          <ion-tab-button (click)=\"conditionsUse()\">\r\n            <ion-label class=\"link\">{{ 'FOOTER.CONDITIONS_USE' | translate }}</ion-label>\r\n          </ion-tab-button>\r\n      \r\n          <ion-tab-button>\r\n            <ion-label class=\"africhome\">{{ 'FOOTER.AFRICHOME' | translate }}</ion-label>\r\n          </ion-tab-button>\r\n          \r\n      \r\n        </ion-tab-bar>\r\n      \r\n      </ion-tabs>"

/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-page .content-page {\n  background-color: var(--ion-color-footer);\n}\n.footer-page .content-page .link {\n  color: var(--ion-color-white);\n  cursor: pointer;\n}\n.footer-page .content-page .africhome {\n  color: var(--ion-color-white);\n}\n.footer-page .content-page ion-tab-button {\n  background-color: var(--ion-color-footer);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxcVXNlcnNcXHRtZGlhbGxvXFxEb2N1bWVudHNcXFByb2pldCBBZnJpcXVlXFxBZnJpY0hvbWVcXGFmcmljaG9tZS1jb2RlXFxhZnJpY2hvbWUtaW9uaWMvc3JjXFxhcHBcXHRhYnNcXHRhYnMucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0kseUNBQUE7QUNEUjtBREdRO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0FDRFo7QURJUTtFQUNJLDZCQUFBO0FDRlo7QURLUTtFQUNJLHlDQUFBO0FDSFoiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1wYWdle1xyXG4gICAgXHJcbiAgICAuY29udGVudC1wYWdle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1mb290ZXIpO1xyXG5cclxuICAgICAgICAubGlua3tcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hZnJpY2hvbWV7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLXRhYi1idXR0b257XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1mb290ZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIFxyXG59IiwiLmZvb3Rlci1wYWdlIC5jb250ZW50LXBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZm9vdGVyKTtcbn1cbi5mb290ZXItcGFnZSAuY29udGVudC1wYWdlIC5saW5rIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb290ZXItcGFnZSAuY29udGVudC1wYWdlIC5hZnJpY2hvbWUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbn1cbi5mb290ZXItcGFnZSAuY29udGVudC1wYWdlIGlvbi10YWItYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWZvb3Rlcik7XG59Il19 */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage.prototype.contactUs = function () {
        console.log('CONTACT US');
    };
    TabsPage.prototype.conditionsUse = function () {
        console.log('CONDITIONS USE');
    };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




// Url des différentes pages de l'application
var authentication = '../pages/authentication/authentication.module#AuthenticationPageModule';
var home = '../pages/home/home.module#HomePageModule';
var registration = '../pages/registration/registration.module#RegistrationPageModule';
var information = '../pages/informations/informations.module#InformationsPageModule';
var publishAd = '../pages/publishAd/publishAd.module#PublishAdPageModule';
var myAds = '../pages/myAds/myAds.module#MyAdsPageModule';
var routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: '',
                loadChildren: home
            },
            {
                path: 'authentication',
                loadChildren: authentication
            },
            {
                path: 'registration',
                loadChildren: registration
            },
            {
                path: 'informations',
                loadChildren: information
            },
            {
                path: 'publish-ad',
                loadChildren: publishAd
            },
            {
                path: 'my-ads',
                loadChildren: myAds
            }
        ]
    }
    // {
    //   path: '',
    //   children: [
    //     {
    //       path: '',
    //       children: [
    //         {
    //           path: '',
    //           loadChildren: home
    //         }
    //       ]
    //     },
    //     {
    //       path: 'home',
    //       children: [
    //         {
    //           path: '',
    //           loadChildren: home
    //         }
    //       ]
    //     },
    //     {
    //       path: 'authentication',
    //       children: [
    //         {
    //           path: '',
    //           loadChildren: authentication
    //         }
    //       ]
    //     }
    //   ]
    // }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map