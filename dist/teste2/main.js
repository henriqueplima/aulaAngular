(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_UserList_UserList_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/UserList/UserList.page */ "./src/app/pages/UserList/UserList.page.ts");
/* harmony import */ var _pages_User_User_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/User/User.page */ "./src/app/pages/User/User.page.ts");





var routes = [
    { path: '', component: _pages_UserList_UserList_page__WEBPACK_IMPORTED_MODULE_3__["UserListPage"] },
    { path: 'user', component: _pages_User_User_page__WEBPACK_IMPORTED_MODULE_4__["UserPage"] },
    { path: 'user/:id', component: _pages_User_User_page__WEBPACK_IMPORTED_MODULE_4__["UserPage"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'teste2';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_Header_Header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Header/Header.component */ "./src/app/components/Header/Header.component.ts");
/* harmony import */ var _components_Loading_Loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Loading/Loading.component */ "./src/app/components/Loading/Loading.component.ts");
/* harmony import */ var _pages_UserList_UserList_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/UserList/UserList.page */ "./src/app/pages/UserList/UserList.page.ts");
/* harmony import */ var _pages_User_User_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/User/User.page */ "./src/app/pages/User/User.page.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_Header_Header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _pages_UserList_UserList_page__WEBPACK_IMPORTED_MODULE_12__["UserListPage"],
                _pages_User_User_page__WEBPACK_IMPORTED_MODULE_13__["UserPage"],
                _components_Loading_Loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"]
            ],
            imports: [
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/Header/Header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/Header/Header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/Header/Header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/Header/Header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  Oi\n</header>\n\n\n<!-- https://purecss.io/\nhttps://ng-bootstrap.github.io/\nhttps://material.angular.io/\nhttps://github.com/vladotesanovic/ngSemantic\nhttps://getmdl.io/components/index.html -->\n\n"

/***/ }),

/***/ "./src/app/components/Header/Header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/Header/Header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header-component',
            template: __webpack_require__(/*! ./Header.component.html */ "./src/app/components/Header/Header.component.html"),
            styles: [__webpack_require__(/*! ./Header.component.css */ "./src/app/components/Header/Header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/Loading/Loading.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/Loading/Loading.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"show\">\n    Loading...\n</div>"

/***/ }),

/***/ "./src/app/components/Loading/Loading.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/Loading/Loading.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
        this.show = false;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], LoadingComponent.prototype, "show", void 0);
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'loading-component',
            template: __webpack_require__(/*! ./Loading.component.html */ "./src/app/components/Loading/Loading.component.html")
        })
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/pages/User/User.page.css":
/*!******************************************!*\
  !*** ./src/app/pages/User/User.page.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL1VzZXIvVXNlci5wYWdlLmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/User/User.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/User/User.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <!-- <loading-component *ngIf=\"loading\">Loading...</loading-component> OUTRA OPCAO -->\n  <loading-component [show]=\"loading\"></loading-component>\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n    <input\n      type=\"text\"\n      name=\"name\"\n      formControlName=\"name\"\n    />\n\n    <input\n      type=\"email\"\n      name=\"email\"\n      formControlName=\"email\"\n    />\n\n    <input\n      type=\"number\"\n      name=\"age\"\n      formControlName=\"age\"\n    />\n\n    <input\n      type=\"number\"\n      name=\"phone\"\n      formControlName=\"phone\"\n    />\n\n    <div *ngIf=\"userForm.controls.name.invalid && userForm.controls.name.touched\">\n      O campo nome é obrigatório\n    </div>\n\n    <button type=\"submit\" [disabled]=\"!userForm.valid\">\n      <span *ngIf=\"!userId\"> Criar </span>\n      <span *ngIf=\"userId\"> Atualizar </span>\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/User/User.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/User/User.page.ts ***!
  \*****************************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Users.service */ "./src/app/services/Users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var UserPage = /** @class */ (function () {
    function UserPage(route, router, usersService) {
        this.route = route;
        this.router = router;
        this.usersService = usersService;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
        this.loading = false;
        this.userId = '';
        this.docId = "";
    }
    UserPage.prototype.ngOnInit = function () {
        this.userId = this.route.snapshot.paramMap.get('id');
        if (this.userId)
            this.getUser(this.userId);
    };
    UserPage.prototype.getUser = function (id) {
        var _this = this;
        this.loading = true;
        this.usersService.getById(id)
            .subscribe(function (data) {
            var result = data[0].payload.doc.data();
            _this.docId = data[0].payload.doc.id;
            console.log('id: ' + _this.docId);
            Object.keys(result).filter(function (item) { return item !== 'id'; }).forEach(function (item) {
                _this.userForm.controls[item].setValue(result[item]);
                _this.loading = false;
            });
        });
    };
    UserPage.prototype.onSubmit = function () {
        this.loading = true;
        if (this.userId) {
            this.updateUser();
        }
        else {
            this.createUser();
        }
    };
    UserPage.prototype.createUser = function () {
        var _this = this;
        console.log('criar novo');
        this.loading = true;
        this.usersService.create(this.userForm.value)
            .then(function () {
            _this.loading = false;
            _this.router.navigate(["/"]);
        })
            .catch(function (error) {
            _this.loading = false;
        });
    };
    UserPage.prototype.updateUser = function () {
        var _this = this;
        this.loading = true;
        var user = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: this.userId }, this.userForm.value);
        this.usersService.update(this.docId, user).then(function () {
            _this.loading = false;
            _this.router.navigate(["/"]);
        }).catch(function (error) {
            _this.loading = false;
        });
    };
    UserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./User.page.html */ "./src/app/pages/User/User.page.html"),
            styles: [__webpack_require__(/*! ./User.page.css */ "./src/app/pages/User/User.page.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_Users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], UserPage);
    return UserPage;
}());



/***/ }),

/***/ "./src/app/pages/UserList/UserList.page.css":
/*!**************************************************!*\
  !*** ./src/app/pages/UserList/UserList.page.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL1VzZXJMaXN0L1VzZXJMaXN0LnBhZ2UuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/UserList/UserList.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/UserList/UserList.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul>\n    <li *ngFor=\"let item of usersList\"> <a [routerLink]=\"['/user',item.id]\"> {{ item.name}} </a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/UserList/UserList.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/UserList/UserList.page.ts ***!
  \*************************************************/
/*! exports provided: UserListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListPage", function() { return UserListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Users.service */ "./src/app/services/Users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserListPage = /** @class */ (function () {
    function UserListPage(route, router, usersService) {
        this.route = route;
        this.router = router;
        this.usersService = usersService;
        this.usersList = new Array();
        this.filterBy = '';
    }
    UserListPage.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserListPage.prototype.getUsers = function () {
        var _this = this;
        this.usersService.getAllUsers().subscribe(function (response) {
            if (response) {
                for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                    var data = response_1[_i];
                    var user = data.payload.doc.data();
                    _this.usersList.push(user);
                }
                console.log(_this.usersList);
            }
        });
    };
    UserListPage.prototype.setFilterBy = function (event) {
        this.filterBy = event.target.value;
    };
    UserListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./UserList.page.html */ "./src/app/pages/UserList/UserList.page.html"),
            styles: [__webpack_require__(/*! ./UserList.page.css */ "./src/app/pages/UserList/UserList.page.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_Users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], UserListPage);
    return UserListPage;
}());



/***/ }),

/***/ "./src/app/services/Users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/Users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);





var UsersService = /** @class */ (function () {
    function UsersService(http, db) {
        this.http = http;
        this.db = db;
    }
    UsersService.prototype.getById = function (id) {
        return this.db.collection('users', function (ref) { return ref.where('id', '==', id); }).snapshotChanges();
    };
    UsersService.prototype.getAllUsers = function () {
        return this.db.collection('users').snapshotChanges();
    };
    UsersService.prototype.create = function (data) {
        console.log(data);
        console.log(this.db);
        return this.db.collection('users').add(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: uuid__WEBPACK_IMPORTED_MODULE_4___default()() }, data));
    };
    UsersService.prototype.update = function (id, data) {
        return this.db.collection('users').doc(id).set(data);
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCCyNtqMj74isItq8e9okl1ui_QQoMwDik",
        authDomain: "angularproject-b646b.firebaseapp.com",
        databaseURL: "https://angularproject-b646b.firebaseio.com",
        projectId: "angularproject-b646b",
        storageBucket: "angularproject-b646b.appspot.com",
        messagingSenderId: "956713631273",
        appId: "1:956713631273:web:a492e2c9441c6c00"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\logonrmlocal\Desktop\aulaAngular-master\aulaAngular-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map