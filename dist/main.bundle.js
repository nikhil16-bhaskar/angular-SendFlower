webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sent_flowers_sent_flowers_component__ = __webpack_require__("./src/app/sent-flowers/sent-flowers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { TrainingComponent } from './training/training.component';
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'sent-flowers', component: __WEBPACK_IMPORTED_MODULE_5__sent_flowers_sent_flowers_component__["a" /* SentFlowersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container , mat-sidenav-content , mat-sidenav {\n    height: 100%;\n}\n\nmat-sidenav{\n    width: 60%;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-sidenav-container>\n  <mat-sidenav #sidenav role = \"navigation\">\n     <app-sidenav-list (closeSidenav) = \"sidenav.close()\"></app-sidenav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <app-header (sidenavToggle) = \"sidenav.toggle()\"></app-header>\n      <main>\n          <router-outlet></router-outlet> <!-- to render our routes -->\n      </main>  \n        \n       \n  </mat-sidenav-content>    \n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.openSidenav = false;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__welcome_welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sent_flowers_sent_flowers_component__ = __webpack_require__("./src/app/sent-flowers/sent-flowers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navigation_header_header_component__ = __webpack_require__("./src/app/navigation/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navigation_sidenav_list_sidenav_list_component__ = __webpack_require__("./src/app/navigation/sidenav-list/sidenav-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sent_flowers_new_bookings_new_bookings_component__ = __webpack_require__("./src/app/sent-flowers/new-bookings/new-bookings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sent_flowers_old_bookings_old_bookings_component__ = __webpack_require__("./src/app/sent-flowers/old-bookings/old-bookings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sent_flowers_start_booking_start_booking_component__ = __webpack_require__("./src/app/sent-flowers/start-booking/start-booking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sent_flowers_start_booking_stop_booking_stop_booking_component__ = __webpack_require__("./src/app/sent-flowers/start-booking/stop-booking/stop-booking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__sent_flowers_sent_flower_service__ = __webpack_require__("./src/app/sent-flowers/sent-flower.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__sent_flowers_sent_flowers_component__["a" /* SentFlowersComponent */],
                __WEBPACK_IMPORTED_MODULE_12__navigation_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__navigation_sidenav_list_sidenav_list_component__["a" /* SidenavListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__sent_flowers_new_bookings_new_bookings_component__["a" /* NewBookingsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__sent_flowers_old_bookings_old_bookings_component__["a" /* OldBookingsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__sent_flowers_start_booking_start_booking_component__["a" /* StartBookingComponent */],
                __WEBPACK_IMPORTED_MODULE_17__sent_flowers_start_booking_stop_booking_stop_booking_component__["a" /* StopBookingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19__sent_flowers_sent_flower_service__["a" /* SentflowerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_17__sent_flowers_start_booking_stop_booking_stop_booking_component__["a" /* StopBookingComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isAuth()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.authChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    AuthService.prototype.registerUser = function (data) {
        var _this = this;
        this.user = data;
        console.log(this.user);
        this.http.post('http://localhost:3000/api/addClient', data, { observe: 'response' })
            .subscribe(function (response) {
            var status = response.status;
            console.log("Body " + response.body);
            if (response.body == null) {
                // alert("User Already exists");
                swal("User Already Exists", "", "error");
            }
            else {
                console.log(response.body);
                _this.id = response.body;
                _this.authChange.next(true);
                _this.router.navigate(['/sent-flowers']);
            }
        }, function (error) {
            alert("Error asds is there " + error.error.message);
            _this.user = null;
        });
    };
    AuthService.prototype.login = function (authData) {
        this.user = {
            email: authData.email,
            password: authData.password
        };
        this.authChange.next(true);
        this.router.navigate(['/sent-flowers']);
    };
    AuthService.prototype.registerId = function (clientId) {
        this.id = clientId;
        console.log(clientId);
    };
    AuthService.prototype.getId = function () {
        return this.id;
    };
    AuthService.prototype.logout = function () {
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['']);
    };
    AuthService.prototype.getUser = function () {
        return __assign({}, this.user);
    };
    AuthService.prototype.isAuth = function () {
        return this.user != null;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "mat-form-field{\n    width: 300px;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login-form\">\n  <form fxLayout = \"column\" fxLayoutAlign = \"center center\" fxLayoutGap = \"10px\" #loginForm = \"ngForm\" (ngSubmit) = \"onSubmit(loginForm)\">\n    <mat-form-field >\n      <input \n        type = \"email\"\n        matInput\n        placeholder = \"Login Email\"\n        ngModel \n        name = \"email\" \n        email\n        required\n        #loginMail = \"ngModel\">\n        <mat-error *ngIf = \"loginMail.hasError('required')\">Field must not be empty.</mat-error>\n        <mat-error *ngIf=\"!loginMail.hasError('required')\">Email is not valid.</mat-error>\n        \n    </mat-form-field>\n    <mat-form-field hintLabel = \"Should be 6 characters long.\">\n      <input \n        type = \"password\"\n        matInput\n        placeholder = \"Your Password\" \n        ngModel \n        name = \"password\" \n        required\n        minlength = \"6\"\n        #pw = \"ngModel\">\n      <mat-hint align = \"end\">{{pw.value?.length}}/6 </mat-hint>\n      <mat-error>Has to be 6 characters long</mat-error>    \n    </mat-form-field>\n    <button type = \"submit\"  mat-raised-button color=\"primary\" [disabled] = \"loginForm.invalid\">Submit </button>\n  </form>\n</section>    \n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', {
                validators: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
            }),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', {
                validators: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
            })
        });
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var data = {
            "email": form.value.email,
            "password": form.value.password
        };
        this.http.post('http://localhost:3000/api/checkLogin', data, { observe: 'response' })
            .subscribe(function (response) {
            if (response.body != null) {
                console.log(response.body);
                _this.authService.login({
                    email: _this.loginForm.value.email,
                    password: _this.loginForm.value.password
                });
                _this.authService.registerId(response.body);
            }
            else {
                swal("SignUp First", "", "error");
                // alert("Sign up first");
            }
            console.log(response);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatPaginatorModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatPaginatorModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/navigation/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "a {\n    text-decoration: none;  /* for no underlining */ \n    color: white;\n}\n\na:hover,\na:active{\n   color : lightslategray; \n}\n\n.navigation-items{\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.nav-caption{\n    display: inline-block;\n    padding-left: 6px;\n}"

/***/ }),

/***/ "./src/app/navigation/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color = \"primary\">\n  <div fxHide.gt-xs>\n    <button mat-icon-button (click) = \"onToggleSidenav()\">\n       <mat-icon>menu</mat-icon>\n    </button>\n  </div> \n<div><a routerLink = '/'>Ferns & Petals</a></div>\n<div fxFlex fxLayout fxLayoutAlign = \"flex-end\" fxHide.xs>\n   <ul fxLayout fxLayoutGap = \"10px\" class = \"navigation-items\"> \n      <li *ngIf = \"!isAuth\"><a routerLink = \"/login\">Login</a></li>\n      <li *ngIf = \"!isAuth\"><a routerLink = \"/signup\">Signup</a></li>\n      <li *ngIf = \"isAuth\"><a routerLink = \"/sent-flowers\">SentFlowers</a></li>\n      <li *ngIf = \"isAuth\"><a style = \"cursor:pointer\" (click) = \"onLogout()\">Logout</a></li>\n   </ul> \n</div>  \n</mat-toolbar> "

/***/ }),

/***/ "./src/app/navigation/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
        this.sidenavToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isAuth = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authSubscription = this.authService.authChange.subscribe(function (authStatus) {
            _this.isAuth = authStatus;
        });
    };
    HeaderComponent.prototype.onToggleSidenav = function () {
        this.sidenavToggle.emit();
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.authSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "sidenavToggle", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/navigation/header/header.component.html"),
            styles: [__webpack_require__("./src/app/navigation/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.css":
/***/ (function(module, exports) {

module.exports = "a {\n    text-decoration: none;  /* for no underlining */ \n    color: white;\n}\n\na:hover,\na:active{\n   color : lightslategray; \n}\n\n"

/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n  <a mat-list-item routerLink = \"/signup\" (click) = \"onClose()\" *ngIf = \"!isAuth\">\n    <mat-icon>face</mat-icon>\n    <span class = \"nav-caption\">Signup</span>\n  </a>\n  <a mat-list-item routerLink = \"/login\" (click) = \"onClose()\"  *ngIf = \"!isAuth\">\n   <mat-icon>input</mat-icon>\n   <span class = \"nav-caption\">Login</span>\n  </a>\n  <a mat-list-item routerLink = \"/sent-flowers\" (click) = \"onClose()\"  *ngIf = \"isAuth\">\n      <mat-icon>local_florist</mat-icon>\n      <span class = \"nav-caption\">sent-flowers</span>\n  </a>\n  <mat-list-item>\n      <button mat-icon-button (click) = \"onLogout()\"  *ngIf = \"isAuth\">\n          <mat-icon>eject</mat-icon>\n          <span class = \"nav-caption\">Logout</span>\n      </button>    \n  </mat-list-item>\n</mat-nav-list>"

/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidenavListComponent = /** @class */ (function () {
    function SidenavListComponent(authService) {
        this.authService = authService;
        this.closeSidenav = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isAuth = false;
    }
    SidenavListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authSubscription = this.authService.authChange.subscribe(function (authStatus) {
            _this.isAuth = authStatus;
        });
    };
    SidenavListComponent.prototype.onClose = function () {
        this.closeSidenav.emit();
    };
    SidenavListComponent.prototype.onLogout = function () {
        this.onClose();
        this.authService.logout();
    };
    SidenavListComponent.prototype.ngOnDestroy = function () {
        this.authSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], SidenavListComponent.prototype, "closeSidenav", void 0);
    SidenavListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidenav-list',
            template: __webpack_require__("./src/app/navigation/sidenav-list/sidenav-list.component.html"),
            styles: [__webpack_require__("./src/app/navigation/sidenav-list/sidenav-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], SidenavListComponent);
    return SidenavListComponent;
}());



/***/ }),

/***/ "./src/app/sent-flowers/new-bookings/new-bookings.component.css":
/***/ (function(module, exports) {

module.exports = ".new-bookings{\n    padding: 30px;\n}"

/***/ }),

/***/ "./src/app/sent-flowers/new-bookings/new-bookings.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"new-bookings\" fxlayout fxLayoutAlign=\"center\">\n  <form (ngSubmit)=\"onBooking(book)\" #book=\"ngForm\">\n    <mat-card fxFlex.xs=\"100%\" fxFlex=\"400px\">\n      <mat-card-title fxLayoutAlign=\"center\">Book A Bouquet</mat-card-title>\n      <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <mat-form-field>\n          <mat-select placeholder=\"Choose Flowers\" ngModel name=\"booking\" required>\n            <mat-option *ngFor=\"let order of orders\" [value]=\"order.id\">\n              {{ order.name }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <!-- <mat-card-content fxLayoutAlign = \"center\"> -->\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder=\"Address\" ngModel name=\"address\" required>\n          <!-- <mat-error *ngIf = \"address.hasError('required')\">Field must not be empty.</mat-error> -->\n          <!-- <mat-error *ngIf=\"!loginMail.hasError('required')\">Email is not valid.</mat-error> -->\n\n        </mat-form-field>\n        <mat-form-field>\n          <input type=\"number\" matInput placeholder=\"Quantity of flowers\" ngModel name=\"quantity\" required>\n        </mat-form-field>\n      </mat-card-content>\n\n      <mat-card-actions fxLayoutAlign=\"center\">\n        <button type=\"submit\" mat-button [disabled]=\"book.invalid\">Book</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</section>"

/***/ }),

/***/ "./src/app/sent-flowers/new-bookings/new-bookings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewBookingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sent_flower_service__ = __webpack_require__("./src/app/sent-flowers/sent-flower.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewBookingsComponent = /** @class */ (function () {
    function NewBookingsComponent(sentflowerService, autser, http, router) {
        this.sentflowerService = sentflowerService;
        this.autser = autser;
        this.http = http;
        this.router = router;
        // @Output() newBooking = new EventEmitter<void>();
        this.orders = [];
        this.today = new Date();
        this.dd = this.today.getDate();
        this.mm = this.today.getMonth() + 1; //January is 0!
        this.yyyy = this.today.getFullYear();
    }
    NewBookingsComponent.prototype.ngOnInit = function () {
        this.orders = this.sentflowerService.getAvailableBookings();
    };
    NewBookingsComponent.prototype.onBooking = function (form) {
        this.today = this.mm + '/' + this.dd + '/' + this.yyyy;
        console.log(form.value.address + " " + form.value.quantity + " " + form.value.booking + " " + this.today);
        var id = this.autser.getId();
        console.log(id);
        var data = {
            'name': form.value.booking,
            'address': form.value.address,
            'quantity': form.value.quantity,
            'date': this.today,
            'id': id
        };
        this.sentflowerService.startBooking(data);
    };
    NewBookingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-bookings',
            template: __webpack_require__("./src/app/sent-flowers/new-bookings/new-bookings.component.html"),
            styles: [__webpack_require__("./src/app/sent-flowers/new-bookings/new-bookings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sent_flower_service__["a" /* SentflowerService */], __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], NewBookingsComponent);
    return NewBookingsComponent;
}());



/***/ }),

/***/ "./src/app/sent-flowers/old-bookings/old-bookings.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sent-flowers/old-bookings/old-bookings.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <button mat-button (click)=\"showData()\" >Show record</button>\n</div> \n<div fxLayoutAlign = \"center center\">\n  <mat-form-field fxFlex = \"40%\">\n    <input matInput type = \"text\" (keyup) = \"doFilter($event.target.value)\" placeholder = \"Filter\">\n  </mat-form-field>\n</div>\n<mat-table [dataSource] = \"dataSource\" matSort>\n  <ng-container matColumnDef = \"date\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n    <mat-cell *matCellDef = \"let element\">{{ element.date | date }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef = \"name\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\n    <mat-cell *matCellDef = \"let element\">{{ element.name }}</mat-cell>\n  </ng-container>\n  \n  <ng-container matColumnDef = \"quantity\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Quantity</mat-header-cell>\n    <mat-cell *matCellDef = \"let element\">{{ element.quantity | number }}</mat-cell>\n  </ng-container>\n  \n  <ng-container matColumnDef = \"address\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Address</mat-header-cell>\n    <mat-cell *matCellDef = \"let element\">{{ element.address }}</mat-cell>\n  </ng-container>    \n\n  <mat-header-row *matHeaderRowDef = \"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef = \"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n\n<mat-paginator [pageSize] = \"1\" [pageSizeOptions] = \"[5,10,20]\" >\n\n</mat-paginator> "

/***/ }),

/***/ "./src/app/sent-flowers/old-bookings/old-bookings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OldBookingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sent_flower_service__ = __webpack_require__("./src/app/sent-flowers/sent-flower.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

var OldBookingsComponent = /** @class */ (function () {
    function OldBookingsComponent(sentflowerService, http, autser) {
        this.sentflowerService = sentflowerService;
        this.http = http;
        this.autser = autser;
        this.displayedColumns = ['date', 'name', 'quantity', 'address'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatTableDataSource */]();
        this.id = this.autser.getId();
    }
    OldBookingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:3000/api/searchFlowers/?id=' + this.id)
            .subscribe(function (response) {
            _this.t = response;
            _this.dataSource.data = _this.t;
            console.log(response);
        }, function (error) {
            alert("some error");
        });
    };
    OldBookingsComponent.prototype.ngOnChanges = function () {
    };
    OldBookingsComponent.prototype.showData = function () {
        var _this = this;
        console.log("showdata");
        this.http.get('http://localhost:3000/api/searchFlowers/?id=' + this.id)
            .subscribe(function (response) {
            _this.t = response;
            _this.dataSource.data = _this.t;
            console.log(response);
        }, function (error) {
            alert("some error");
        });
    };
    OldBookingsComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    OldBookingsComponent.prototype.doFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSort */])
    ], OldBookingsComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatPaginator */])
    ], OldBookingsComponent.prototype, "paginator", void 0);
    OldBookingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-old-bookings',
            template: __webpack_require__("./src/app/sent-flowers/old-bookings/old-bookings.component.html"),
            styles: [__webpack_require__("./src/app/sent-flowers/old-bookings/old-bookings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__sent_flower_service__["a" /* SentflowerService */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]])
    ], OldBookingsComponent);
    return OldBookingsComponent;
}());



/***/ }),

/***/ "./src/app/sent-flowers/sent-flower.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SentflowerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import * as sweetalert from 'sweetalert';
// import { SweetAlert } from 'sweetalert/typings/core';
// import swal from 'sweetalert';
var SentflowerService = /** @class */ (function () {
    function SentflowerService(http, dialog) {
        this.http = http;
        this.dialog = dialog;
        this.bookingChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.availableBookings = [
            { id: 'roses', name: 'roses', quantity: 50 },
            { id: 'tulips', name: 'tulips', quantity: 40 },
            { id: 'lilies', name: 'lilies', quantity: 100 },
            { id: 'orchids', name: 'orchids', quantity: 56 }
        ];
        this.bookings = [];
    }
    SentflowerService.prototype.getAvailableBookings = function () {
        return this.availableBookings.slice();
    };
    SentflowerService.prototype.startBooking = function (data) {
        var _this = this;
        if (data.quantity < 1) {
            swal({
                title: "Invalid Quantity",
                text: "Quantity should be greater than 0",
                icon: "warning",
                dangerMode: true
            });
            return false;
        }
        // this.currentBooking = this.availableBookings.find(book => book.id === selectedId);
        // this.bookingChanged.next({ ...this.currentBooking });
        console.log(data);
        swal({
            title: "Confirmation!",
            text: "Are you sure you want to book?",
            icon: "warning",
            buttons: ['cancel', 'confirm'],
            dangerMode: true,
        })
            .then(function (confirmedYes) {
            if (confirmedYes) {
                _this.http.post('http://localhost:3000/api/insertData', data, { observe: 'response' })
                    .subscribe(function (response) {
                    console.log(response.body);
                    _this.userRecord = response.body;
                });
                swal({
                    title: "Booked Successfully",
                    icon: "success",
                });
            }
            else {
                swal({
                    title: "Booking cancelled",
                    icon: "success",
                });
            }
        });
    };
    SentflowerService.prototype.getBookedData = function (id) {
        var _this = this;
        this.http.get('http://localhost:3000/api/searchFlowers/?id=' + id)
            .subscribe(function (response) {
            _this.userRecord = response;
        }, function (error) {
            alert("some error");
        });
    };
    SentflowerService.prototype.getUserToRefreshDB = function () {
        console.log(this.userRecord);
        return this.userRecord;
    };
    SentflowerService.prototype.completeBooking = function () {
        this.bookings.push(__assign({}, this.currentBooking, { date: new Date() }));
        this.currentBooking = null;
        this.bookingChanged.next(null);
    };
    ;
    SentflowerService.prototype.cancelBooking = function (progress) {
        this.bookings.push(__assign({}, this.currentBooking, { quantity: Math.round(this.currentBooking.quantity * (progress / 100)), date: new Date() }));
        this.currentBooking = null;
        this.bookingChanged.next(null);
    };
    ;
    SentflowerService.prototype.getCurrentBooking = function () {
        return __assign({}, this.currentBooking);
    };
    SentflowerService.prototype.getCompletedOrCancelledBookings = function () {
        return this.bookings.slice();
    };
    SentflowerService.prototype.setBookedData = function (data) {
        this.bookedData = data;
    };
    SentflowerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDialog */]])
    ], SentflowerService);
    return SentflowerService;
}());



/***/ }),

/***/ "./src/app/sent-flowers/sent-flowers.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sent-flowers/sent-flowers.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group *ngIf = \"!onBooking\">\n  <mat-tab label = \"New Bookings\">\n    <app-new-bookings></app-new-bookings>\n  </mat-tab>\n  <mat-tab label = \"Old Bookings\">\n    <app-old-bookings></app-old-bookings>\n  </mat-tab>\n</mat-tab-group>\n<app-start-booking *ngIf = \"onBooking\"></app-start-booking>"

/***/ }),

/***/ "./src/app/sent-flowers/sent-flowers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SentFlowersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sent_flower_service__ = __webpack_require__("./src/app/sent-flowers/sent-flower.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SentFlowersComponent = /** @class */ (function () {
    function SentFlowersComponent(sentflowerService) {
        this.sentflowerService = sentflowerService;
        this.onBooking = false;
    }
    SentFlowersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookingSubscription = this.sentflowerService.bookingChanged.subscribe(function (booking) {
            if (booking) {
                _this.onBooking = true;
            }
            else {
                _this.onBooking = false;
            }
        });
    };
    SentFlowersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sent-flowers',
            template: __webpack_require__("./src/app/sent-flowers/sent-flowers.component.html"),
            styles: [__webpack_require__("./src/app/sent-flowers/sent-flowers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sent_flower_service__["a" /* SentflowerService */]])
    ], SentFlowersComponent);
    return SentFlowersComponent;
}());



/***/ }),

/***/ "./src/app/sent-flowers/start-booking/start-booking.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sent-flowers/start-booking/start-booking.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"start-booking\" fxLayout = \"column\" fxLayoutAlign = \"center center\">\n  <mat-progress-spinner mode = \"determinate\" [value] = \"progress\"></mat-progress-spinner>\n  <h1>{{ progress }}%</h1>\n  <p>You can do it</p>\n  <button mat-raised-button color = \"primary\" (click) = \"onStop()\">STOP</button> \n</section>"

/***/ }),

/***/ "./src/app/sent-flowers/start-booking/start-booking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartBookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stop_booking_stop_booking_component__ = __webpack_require__("./src/app/sent-flowers/start-booking/stop-booking/stop-booking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sent_flower_service__ = __webpack_require__("./src/app/sent-flowers/sent-flower.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StartBookingComponent = /** @class */ (function () {
    function StartBookingComponent(dialog, sentflowerService) {
        this.dialog = dialog;
        this.sentflowerService = sentflowerService;
        // @Output() bookingExit = new  EventEmitter(); 
        this.progress = 0;
    }
    StartBookingComponent.prototype.ngOnInit = function () {
        this.StartOrResumeTimer();
    };
    StartBookingComponent.prototype.StartOrResumeTimer = function () {
        var _this = this;
        var step = this.sentflowerService.getCurrentBooking().quantity / 100 * 1000;
        this.timer = setInterval(function () {
            _this.progress = _this.progress + 1;
            if (_this.progress >= 100) {
                _this.sentflowerService.completeBooking();
                clearInterval(_this.timer);
            }
        }, step);
    };
    StartBookingComponent.prototype.onStop = function () {
        var _this = this;
        clearInterval(this.timer);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__stop_booking_stop_booking_component__["a" /* StopBookingComponent */], { data: { progress: this.progress } });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log(result);
                _this.sentflowerService.cancelBooking(_this.progress);
            }
            else {
                console.log(result);
                _this.StartOrResumeTimer();
            }
        });
    };
    StartBookingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-start-booking',
            template: __webpack_require__("./src/app/sent-flowers/start-booking/start-booking.component.html"),
            styles: [__webpack_require__("./src/app/sent-flowers/start-booking/start-booking.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__sent_flower_service__["a" /* SentflowerService */]])
    ], StartBookingComponent);
    return StartBookingComponent;
}());



/***/ }),

/***/ "./src/app/sent-flowers/start-booking/stop-booking/stop-booking.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sent-flowers/start-booking/stop-booking/stop-booking.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>ARE YOU SURE?</h1>\n<p>You already got {{ passedData.progress }}%</p>\n<mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"true\">Yes</button>\n  <button mat-button [mat-dialog-close]=\"false\">no</button> \n\n</mat-dialog-actions>\n\n"

/***/ }),

/***/ "./src/app/sent-flowers/start-booking/stop-booking/stop-booking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StopBookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var StopBookingComponent = /** @class */ (function () {
    function StopBookingComponent(passedData) {
        this.passedData = passedData;
    }
    StopBookingComponent.prototype.ngOnInit = function () {
    };
    StopBookingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stop-booking',
            template: __webpack_require__("./src/app/sent-flowers/start-booking/stop-booking/stop-booking.component.html"),
            styles: [__webpack_require__("./src/app/sent-flowers/start-booking/stop-booking/stop-booking.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], StopBookingComponent);
    return StopBookingComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = "mat-form-field{\n    width: 300px;\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"signup-form\">\n  <form fxLayout = \"column\" fxLayoutAlign = \"center center\" fxLayoutGap = \"10px\" #signupForm = \"ngForm\" (ngSubmit) = \"onSubmit(signupForm)\">\n    <mat-form-field >\n      <input \n        type = \"email\"\n        matInput\n        placeholder = \"Your Email\"\n        ngModel \n        name = \"email\" \n        email\n        required\n        #mail = \"ngModel\">\n        <mat-error *ngIf = \"mail.hasError('required')\">Field must not be empty.</mat-error>\n        <mat-error *ngIf=\"!mail.hasError('required')\">Email is not valid.</mat-error>\n        \n    </mat-form-field>\n    <mat-form-field hintLabel = \"Should be 6 characters long.\">\n      <input \n        type = \"password\"\n        matInput\n        placeholder = \"Your Password\" \n        ngModel \n        name = \"password\" \n        required\n        minlength = \"6\"\n        #pwInput = \"ngModel\">\n      <mat-hint align = \"end\">{{pwInput.value?.length}}/6 </mat-hint>\n      <mat-error>Has to be 6 characters long</mat-error>    \n    </mat-form-field>\n      <mat-checkbox  name = \"agree\" required color = \"primary\" ngModel>Agree to terms and Conditions</mat-checkbox>\n    \n    <button type = \"submit\"  mat-raised-button color=\"primary\" [disabled] = \"signupForm.invalid\">Submit </button>\n  </form>\n</section> \n\n\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    SignupComponent.prototype.ngOnInit = function () {
        // this.maxDate = new Date();
        // this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    };
    SignupComponent.prototype.onSubmit = function (form) {
        var data = {
            'email': form.value.email,
            'password': form.value.password
        };
        console.log(data);
        this.authService.registerUser(data);
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/***/ (function(module, exports) {

module.exports = ".welcome{\n    text-align: center;\n}\n.example-card {\n    max-width: 400px;\n  }\n.example-header-image {\n    /* background-image: url('assets/images/images4.jpg'); */\n    background-size: cover;\n  }\n.flower-container{\n    margin: 20px;\n}  "

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"flower-container\" fxLayoutGap=\"20px\" fxLayout=\"column\">\n    <div fxLayout fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n    <mat-card class=\"example-card\">\n            <mat-card-header>\n            <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\n            <mat-card-title>Pink Roses Bouquet</mat-card-title>\n        <mat-card-subtitle>Flower category</mat-card-subtitle> \n          </mat-card-header>\n          <img mat-card-image src=\"assets/images/img2.jpg\" alt=\"Photo of pink roses\">\n    <mat-card-content>\n        <p>The collection of fresh and beautiful pink roses for your special ones.These roses are combined into a bouquet very efficiently , perfect for making ur special day even more special.</p>\n        </mat-card-content> \n    </mat-card> \n\n\n    <mat-card class=\"example-card\">\n          <mat-card-header>\n            <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\n            <mat-card-title>Tulips bouquet</mat-card-title>\n            <mat-card-subtitle>Flower category</mat-card-subtitle>\n          </mat-card-header> \n          <img mat-card-image src=\"assets/images/img3.jpg\" alt=\"Photo of pink tulips\">\n    <mat-card-content>\n        <p>The collection of fresh and beautiful pink tulips for your special ones.These tulips are combined into a bouquet very efficiently , perfect for making ur special day even more special.</p>\n        </mat-card-content> \n    </mat-card>\n    \n    <mat-card class=\"example-card\">\n            <mat-card-header>\n                    <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\n                    <mat-card-title>Red Tulips Bouquet</mat-card-title>\n                    <mat-card-subtitle>Flower Category</mat-card-subtitle>\n                  </mat-card-header>  \n                  <img mat-card-image src=\"assets/images/images1.jpg\" alt=\"Photo of red tulips\"> \n      <mat-card-content>\n          <p>The collection of fresh and beautiful red tulips for your special ones.These tulips are combined into a bouquet very efficiently , perfect for making ur special day even more special.</p>\n          </mat-card-content> \n      </mat-card> \n    \n      <mat-card class=\"example-card\"> \n            <mat-card-header>\n                    <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\n                    <mat-card-title>Mixed Tulips Bouquet</mat-card-title>\n                    <mat-card-subtitle>Flower Category</mat-card-subtitle>\n                  </mat-card-header>  \n                   <img mat-card-image src=\"assets/images/images.jpg\" alt=\"Photo of mixed tulips\">\n      <mat-card-content>\n         \n              <p>The collection of fresh and beautiful mixed tulips for your special ones.These tulipss are combined into a bouquet very efficiently, perfect for making ur special day even more special.</p>\n          </mat-card-content> \n      </mat-card> \n    </div>\n    <div fxLayout fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n        <mat-card class=\"example-card\">\n                <mat-card-header>\n                        <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\n                        <mat-card-title>Mixed Liles and Roses Bouquet</mat-card-title>\n                        <mat-card-subtitle>Flower Category</mat-card-subtitle>\n                      </mat-card-header>\n                      <img mat-card-image src=\"assets/images/images12.jpg\" alt=\"Photo of lilies and roses\">\n        <mat-card-content>\n            <p>The collection of fresh and beautiful lilies and roses for your special ones.These lilies and roses are combined into a bouquet very efficiently , perfect for making ur special day even more special.</p>\n            </mat-card-content> \n        </mat-card> \n    \n    \n        <mat-card class=\"example-card\"> \n                <mat-card-header>\n                        <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\n                        <mat-card-title>Yellow Roses Bouquet</mat-card-title>\n                        <mat-card-subtitle>Flower Category</mat-card-subtitle>\n                      </mat-card-header>\n                      <img mat-card-image src=\"assets/images/image13.jpg\" alt=\"Photo of yellow roses\">\n        <mat-card-content>\n                <p>The collection of fresh and beautiful yellow roses for your special ones.These yellow roses are combined into a bouquet very efficiently , perfect for making ur special day even more special.</p>\n            </mat-card-content>\n            \n          \n        </mat-card> \n        <mat-card class=\"example-card\">\n                <mat-card-header>\n                        <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\n                        <mat-card-title>Mixed roses and Tulips Bouquet</mat-card-title>\n                        <mat-card-subtitle>Flower Category</mat-card-subtitle>\n                      </mat-card-header>\n                      <img mat-card-image src=\"assets/images/images17.jpg\" alt=\"Photo of roses and tulips\">\n          <mat-card-content>\n                  <p>The collection of fresh and beautiful roses and tulips for your special ones.These roses and tulips are combined into a bouquet very efficiently, perfect for making ur special day even more special.</p>\n              </mat-card-content> \n          </mat-card> \n    \n          <mat-card class=\"example-card\"> \n                <mat-card-header>\n                        <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\n                        <mat-card-title>Blue Orchids</mat-card-title>\n                        <mat-card-subtitle>Flower Category</mat-card-subtitle>\n                      </mat-card-header>\n                      <img mat-card-image src=\"assets/images/image16.jpg\" alt=\"Photo of orchids\">\n          <mat-card-content>\n              <p>The collection of fresh and beautiful orchids for your special ones.These orchids are combined into a bouquet very efficiently, perfect for making ur special day even more special.</p>\n              </mat-card-content>\n              \n            \n          </mat-card> \n        </div>\n        \n    \n    </div>     \n    \n    "

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map