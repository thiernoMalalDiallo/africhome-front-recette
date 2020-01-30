(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-authentication-authentication-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/authentication/authentication.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/authentication/authentication.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"container\">\r\n\r\n    <div class=\"content-page\">\r\n\r\n        <!-- Header de la page -->\r\n        <div class=\"header\">\r\n            <ion-grid>\r\n                <ion-row class=\"title\">\r\n                    <span>{{ 'PAGES.AUTHENTICATION.TITLE' | translate }}</span>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </div>\r\n\r\n        <ion-grid class=\"formulaire\">\r\n\r\n        <!-- Champ d'identification -->\r\n            <ion-row>\r\n\r\n                <ion-col size=\"12\">\r\n\r\n                    <ion-grid>\r\n                        <ion-col size=\"12\">\r\n                            <ion-grid>\r\n\r\n                            </ion-grid>\r\n                            <ion-label color='primary' position=\"stacked\">\r\n                                {{ 'PAGES.AUTHENTICATION.LABELS.ID' | translate }}\r\n                            </ion-label>\r\n                        </ion-col>\r\n\r\n                        <ion-col size=\"12\">\r\n                            <div>\r\n                                <ion-input clearInput [(ngModel)]=\"login\" type='text'>\r\n                                </ion-input>\r\n                            </div>\r\n                        </ion-col>\r\n                    </ion-grid>\r\n                </ion-col>\r\n\r\n            </ion-row>\r\n\r\n            <!-- Champ de mot de passe -->\r\n            <ion-row>\r\n\r\n                <ion-col size=\"12\">\r\n                    <ion-grid>\r\n                        <ion-col size=\"12\">\r\n                            <ion-label color='primary' position=\"stacked\">\r\n                                {{ 'PAGES.AUTHENTICATION.LABELS.PASSWORD' | translate }}\r\n                            </ion-label>\r\n                        </ion-col>\r\n\r\n                        <ion-col size=\"12\">\r\n                            <div>\r\n                                <ion-input clearInput [(ngModel)]=\"password\" type='password'>\r\n                                </ion-input>\r\n                            </div>\r\n                        </ion-col>\r\n                    </ion-grid>\r\n                </ion-col>\r\n\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n\r\n                <ion-col size=\"12\">\r\n\r\n                    <div class=\"forgot-password\" (click)=\"forgotPassword()\">\r\n                        \r\n                        {{'PAGES.AUTHENTICATION.FORGOT_PASSWORD' | translate }} ?\r\n\r\n                    </div>\r\n\r\n                    <!-- Bouton de confirmation -->\r\n                    <africhome-button [theme]=\"'blue'\" [title]=\"'CONNEXION'\"\r\n                                      (clickButton)=\"sendAuthent()\">\r\n                    </africhome-button>\r\n\r\n                    <div class=\"separate\"></div>\r\n                    \r\n                    <!-- Bouton d'inscription -->\r\n                    <africhome-button [theme]=\"'orange'\" [title]=\"'INSCRIPTION'\"\r\n                                      (clickButton)=\"goRegistration()\">\r\n                    </africhome-button>\r\n\r\n                </ion-col>\r\n\r\n            </ion-row>\r\n\r\n        </ion-grid>\r\n\r\n        <!-- Gestion des erreurs -->\r\n        <div text-center>\r\n            <ion-spinner [hidden]='hideSpinner'></ion-spinner>\r\n        </div>\r\n        <africhome-info-bulle *ngIf='errorMsg' [type]=\"'error'\" \r\n                               [message]=\"errorMsg\">\r\n\r\n        </africhome-info-bulle>\r\n        \r\n    </div>\r\n      \r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/authentication/authentication.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/authentication/authentication.module.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationPageModule", function() { return AuthenticationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _authentication_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication.page */ "./src/app/pages/authentication/authentication.page.ts");









const routes = [
    {
        path: '',
        component: _authentication_page__WEBPACK_IMPORTED_MODULE_8__["AuthenticationPage"]
    }
];
let AuthenticationPageModule = class AuthenticationPageModule {
};
AuthenticationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild()
        ],
        declarations: [_authentication_page__WEBPACK_IMPORTED_MODULE_8__["AuthenticationPage"]]
    })
], AuthenticationPageModule);



/***/ }),

/***/ "./src/app/pages/authentication/authentication.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/authentication/authentication.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .content-page {\n  background-color: var(--ion-color-gris);\n  height: 100vh;\n  padding-bottom: 35rem;\n}\n.container .content-page .header {\n  margin-top: 10vh;\n  margin-bottom: -3rem;\n}\n.container .content-page .header span {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-bottom: 2rem;\n}\n.container .content-page .header .title span {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 2rem;\n}\n.container .content-page .formulaire {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 0rem;\n  margin-bottom: 10vh;\n}\n.container .content-page .formulaire ion-label {\n  font-size: 1rem;\n  margin-bottom: 1rem;\n  color: var(--ion-color-text-purple-darke);\n}\n.container .content-page .formulaire ion-input {\n  max-width: 20rem;\n  width: 70vw;\n  height: 2.6rem;\n  border-radius: 0.5rem;\n  box-shadow: 9px 8px 20px rgba(0, 0, 0, 0.2);\n  color: var(--ion-color-grey);\n  --padding-start: 1rem;\n  margin-top: 0.5rem;\n}\n.container .content-page .formulaire ion-input span {\n  margin-left: 1rem;\n}\n.container .content-page .formulaire .forgot-password {\n  color: var(--ion-color-primary);\n  margin-bottom: 1rem;\n  font-size: 1rem;\n  text-align: center;\n  cursor: pointer;\n}\n.container .content-page .formulaire .separate {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aGVudGljYXRpb24vQzpcXFVzZXJzXFx0bWRpYWxsb1xcRG9jdW1lbnRzXFxQcm9qZXQgQWZyaXF1ZVxcQWZyaWNIb21lXFxhZnJpY2hvbWUtY29kZVxcYWZyaWNob21lLWlvbmljL3NyY1xcYXBwXFxwYWdlc1xcYXV0aGVudGljYXRpb25cXGF1dGhlbnRpY2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUksdUNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUNEUjtBREdRO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtBQ0RaO0FER1k7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNEaEI7QURLZ0I7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNIcEI7QURRUTtFQUVJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDUFo7QURTWTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FDUGhCO0FEVVk7RUFFSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ1RoQjtBRFdnQjtFQUNJLGlCQUFBO0FDVHBCO0FEYVk7RUFFSSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1poQjtBRGVZO0VBQ0ksZ0JBQUE7QUNiaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIC5jb250ZW50LXBhZ2V7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmlzKTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzNXJlbTtcclxuXHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0zcmVtO1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9ybXVsYWlyZSB7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xyXG5cclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRleHQtcHVycGxlLWRhcmtlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMHJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjZyZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA5cHggOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmV5KTtcclxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydCA6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmZvcmdvdC1wYXNzd29yZCB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZXBhcmF0ZXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuY29udGFpbmVyIC5jb250ZW50LXBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3Jpcyk7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmctYm90dG9tOiAzNXJlbTtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMTB2aDtcbiAgbWFyZ2luLWJvdHRvbTogLTNyZW07XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLmhlYWRlciBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC5oZWFkZXIgLnRpdGxlIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC5mb3JtdWxhaXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTB2aDtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuZm9ybXVsYWlyZSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGV4dC1wdXJwbGUtZGFya2UpO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC5mb3JtdWxhaXJlIGlvbi1pbnB1dCB7XG4gIG1heC13aWR0aDogMjByZW07XG4gIHdpZHRoOiA3MHZ3O1xuICBoZWlnaHQ6IDIuNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3gtc2hhZG93OiA5cHggOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDFyZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuZm9ybXVsYWlyZSBpb24taW5wdXQgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC5mb3JtdWxhaXJlIC5mb3Jnb3QtcGFzc3dvcmQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC5mb3JtdWxhaXJlIC5zZXBhcmF0ZSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/authentication/authentication.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/authentication/authentication.page.ts ***!
  \*************************************************************/
/*! exports provided: AuthenticationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationPage", function() { return AuthenticationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_africhome_control_fields_africhome_control_authentication_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/africhome-control-fields/africhome-control-authentication.provider */ "./src/providers/africhome-control-fields/africhome-control-authentication.provider.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");





let AuthenticationPage = 
/**
 * Page d'authentification iOS via SECmobile
 */
class AuthenticationPage {
    /**
     * Constructeur de la page
     * @param navCtrl
     * @param secMobilService
     */
    constructor(navCtrl, controlField, translateService) {
        this.navCtrl = navCtrl;
        this.controlField = controlField;
        this.translateService = translateService;
        /**
         * Etat du spinner de chargement
         */
        this.hideSpinner = true;
    }
    /**
     * Initialisation de la page
     */
    ngOnInit() {
    }
    /**
     * Lance l'authentification
     */
    sendAuthent() {
        // Test si les champs sont existants
        if (this.login && this.password) {
            // Test si aucun champ n'est vide
            if (!this.controlField.emptyFieldExist(this.login, this.password)) {
                // test si l'adresse mail est valide
                if (this.controlField.controlEmail(this.login)) {
                    // test si le mot de passe est valide
                    if (this.controlField.controlPassword(this.password)) {
                        console.log('Faire la rêquete vers la BD');
                        this.hideSpinner = false;
                        this.errorMsg = null;
                    }
                    else {
                        this.getMessage('INFO_BULLE.AUTHENTICATION.ERROR.PASSWORD');
                    }
                }
                else {
                    this.getMessage('INFO_BULLE.AUTHENTICATION.ERROR.EMAIL');
                }
            }
            else {
                this.getMessage('INFO_BULLE.EMPTY_FIELD');
            }
        }
        else {
            this.getMessage('INFO_BULLE.EMPTY_FIELD');
        }
    }
    /**
     * Renvoie le bon message
     * @param message message à afficher
     */
    getMessage(message) {
        this.translateService.get(message).subscribe((res) => {
            this.errorMsg = res;
        });
    }
    /**
     * Permet de créer une session pour l'utilisateur
     */
    setSession() {
    }
    /**
     * Rédirige vers l'inscription
     */
    goRegistration() {
        this.navCtrl.navigateForward('registration');
    }
    /**
     * Rédirige vers la récuperation du mot de passe
     */
    forgotPassword() {
    }
};
AuthenticationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_providers_africhome_control_fields_africhome_control_authentication_provider__WEBPACK_IMPORTED_MODULE_3__["AfrichomeControlAuthenticationProvider"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
AuthenticationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-authentication',
        template: __webpack_require__(/*! raw-loader!./authentication.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/authentication/authentication.page.html"),
        styles: [__webpack_require__(/*! ./authentication.page.scss */ "./src/app/pages/authentication/authentication.page.scss")]
    })
    /**
     * Page d'authentification iOS via SECmobile
     */
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_providers_africhome_control_fields_africhome_control_authentication_provider__WEBPACK_IMPORTED_MODULE_3__["AfrichomeControlAuthenticationProvider"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
], AuthenticationPage);



/***/ })

}]);
//# sourceMappingURL=pages-authentication-authentication-module-es2015.js.map