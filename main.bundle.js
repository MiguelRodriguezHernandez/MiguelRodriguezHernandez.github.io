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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-formulario></app-formulario>\n</div>\n\n"

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
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formulario_formulario_component__ = __webpack_require__("./src/app/formulario/formulario.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__formulario_formulario_component__["a" /* FormularioComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/formulario/formulario.component.css":
/***/ (function(module, exports) {

module.exports = "form{\r\n    margin-top: 60px;\r\n}"

/***/ }),

/***/ "./src/app/formulario/formulario.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"xForm\">\n  <div class=\"form-group\">\n    <label for=\"Nombres\">Nombre(s)</label>\n    <input formControlName=\"nombres\" type=\"text\" class=\"form-control\" id=\"nombres\" aria-describedby=\"nombresHelp\" placeholder=\"Nombre(s)\">\n    <small id=\"nombresHelp\" class=\"form-text text-muted\">Ingresa tu nombre(s).</small>\n    <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"!xForm.controls['nombres'].valid && xForm.controls['nombres'].touched\">\n      Sólo letras con acentos.\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"ApellidoP\">Apellido Paterno</label>\n    <input formControlName=\"apellidoP\" type=\"text\" class=\"form-control\" id=\"apellidoP\" aria-describedby=\"apellidoPHelp\" placeholder=\"Apellido Paterno\">\n    <small id=\"apellidoPHelp\" class=\"form-text text-muted\">Ingresa apellido paterno.</small>\n    <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"!xForm.controls['apellidoP'].valid && xForm.controls['apellidoP'].touched\">\n      Sólo letras con acentos.\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"ApellidoM\">Apellido Materno</label>\n    <input formControlName=\"apellidoM\" type=\"text\" class=\"form-control\" id=\"apellidoM\" aria-describedby=\"apellidoMHelp\" placeholder=\"Apellido Materno\">\n    <small id=\"apellidoMHelp\" class=\"form-text text-muted\">Ingresa apellido materno.</small>\n    <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"!xForm.controls['apellidoM'].valid && xForm.controls['apellidoM'].touched\">\n      Sólo letras con acentos.\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input formControlName=\"email\" type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">Ingresa tu correo electronico.</small>\n    <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"!xForm.controls['email'].valid && xForm.controls['email'].touched\">\n      Formato de correo invalido.\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input formControlName=\"password\" type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n    <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"!xForm.controls['password'].valid && xForm.controls['password'].touched\">\n      Tamaño minimo 6 caracteres.\n    </div>\n  </div>\n  <!-- <div class=\"form-check\">\n    <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n    <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n  </div> -->\n  <div class=\"form-group\">\n    <label for=\"edad\">Edad</label>\n    <input formControlName=\"edad\" type=\"number\" class=\"form-control\" id=\"edad\" placeholder=\"Edad\">\n    <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"!xForm.controls['edad'].valid && xForm.controls['edad'].touched\">\n     La edad debe ser mayor a 18 y menor a 70\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"genero\">Genero</label>\n    <!-- <select multiple class=\"form-control\" id=\"exampleFormControlSelect2\"> -->\n    <select formControlName=\"genero\"  class=\"form-control\" id=\"genero\">\n      <option value=\"null\">Selecciona Genero</option>\n      <option value=\"MASCULINO\">MASCULINO</option>\n      <option value=\"FEMENINO\">FEMENINO</option>\n    </select>\n    <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"!xForm.controls['genero'].valid && xForm.controls['genero'].touched\"> \n      Se requiere seleccionar genero\n    </div>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"Enviar(xForm.value)\" [disabled]=\"!xForm.valid\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/formulario/formulario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormularioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormularioComponent = /** @class */ (function () {
    function FormularioComponent(form) {
        this.form = form;
    }
    FormularioComponent.prototype.ngOnInit = function () {
        this.xForm = this.form.group({
            'nombres': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern("[a-zA-ZñÑáéíóúÁÉÍÓÚ_ ]+")])],
            'apellidoP': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern("[a-zA-ZñÑáéíóúÁÉÍÓÚ_ ]+")])],
            'apellidoM': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern("[a-zA-ZñÑáéíóúÁÉÍÓÚ_ ]+")])],
            'edad': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern("[0-9]*"), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(18), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].max(70)])],
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(6)])],
            'genero': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    };
    FormularioComponent.prototype.Enviar = function (Data) {
        console.log(Data);
    };
    FormularioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-formulario',
            template: __webpack_require__("./src/app/formulario/formulario.component.html"),
            styles: [__webpack_require__("./src/app/formulario/formulario.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], FormularioComponent);
    return FormularioComponent;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map