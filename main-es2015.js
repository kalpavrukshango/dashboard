(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Kwz":
/*!*******************************************************************************!*\
  !*** ./src/app/components/cards/card-line-chart/card-line-chart.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CardLineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardLineChartComponent", function() { return CardLineChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_line_chart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-line-chart.component.html */ "lLla");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);




let CardLineChartComponent = class CardLineChartComponent {
    constructor() { }
    ngOnInit() { }
    ngAfterViewInit() {
        var config = {
            type: "line",
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: "#4c51bf",
                        borderColor: "#4c51bf",
                        data: [65, 78, 66, 44, 56, 67, 75],
                        fill: false,
                    },
                    {
                        label: new Date().getFullYear() - 1,
                        fill: false,
                        backgroundColor: "#fff",
                        borderColor: "#fff",
                        data: [40, 68, 86, 74, 56, 60, 87],
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: "Sales Charts",
                    fontColor: "white",
                },
                legend: {
                    labels: {
                        fontColor: "white",
                    },
                    align: "end",
                    position: "bottom",
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                },
                hover: {
                    mode: "nearest",
                    intersect: true,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontColor: "rgba(255,255,255,.7)",
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Month",
                                fontColor: "white",
                            },
                            gridLines: {
                                display: false,
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.3)",
                                zeroLineColor: "rgba(0, 0, 0, 0)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontColor: "rgba(255,255,255,.7)",
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Value",
                                fontColor: "white",
                            },
                            gridLines: {
                                borderDash: [3],
                                borderDashOffset: [3],
                                drawBorder: false,
                                color: "rgba(255, 255, 255, 0.15)",
                                zeroLineColor: "rgba(33, 37, 41, 0)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        let ctx = document.getElementById("line-chart");
        ctx = ctx.getContext("2d");
        new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(ctx, config);
    }
};
CardLineChartComponent.ctorParameters = () => [];
CardLineChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-line-chart",
        template: _raw_loader_card_line_chart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardLineChartComponent);



/***/ }),

/***/ "/GnJ":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-bar-chart/card-bar-chart.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\n>\n  <div class=\"rounded-t mb-0 px-4 py-3 bg-transparent\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"relative w-full max-w-full flex-grow flex-1\">\n        <h6 class=\"uppercase text-blueGray-400 mb-1 text-xs font-semibold\">\n          Performance\n        </h6>\n        <h2 class=\"text-blueGray-700 text-xl font-semibold\">Total orders</h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"p-4 flex-auto\">\n    <!-- Chart -->\n    <div class=\"relative\" style=\"height: 350px\">\n      <canvas id=\"bar-chart\"></canvas>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "/kjZ":
/*!*****************************************************!*\
  !*** ./src/app/views/auth/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "LUN3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() { }
};
LoginComponent.ctorParameters = () => [];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-login",
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], LoginComponent);



/***/ }),

/***/ "/ztn":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-sidebar></app-sidebar>\n  <div class=\"relative md:ml-64 bg-blueGray-100\">\n    <app-admin-navbar></app-admin-navbar>\n    <app-header-stats></app-header-stats>\n    <div class=\"px-4 md:px-10 mx-auto w-full -m-24\">\n      <router-outlet></router-outlet>\n      <app-footer-admin></app-footer-admin>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\MY-WORK\NGOAppNew\src\main.ts */"zUnb");


/***/ }),

/***/ "0slC":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dropdowns/user-dropdown/user-dropdown.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDropdownComponent", function() { return UserDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-dropdown.component.html */ "H3xT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ "EjV/");




let UserDropdownComponent = class UserDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngAfterViewInit() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
        }
    }
};
UserDropdownComponent.propDecorators = {
    btnDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["btnDropdownRef", { static: false },] }],
    popoverDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["popoverDropdownRef", { static: false },] }]
};
UserDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-user-dropdown",
        template: _raw_loader_user_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserDropdownComponent);



/***/ }),

/***/ "165v":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/maps/maps.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex flex-wrap\">\n  <div class=\"w-full px-4\">\n    <div\n      class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\n    >\n      <app-map-example></app-map-example>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "1DoU":
/*!***************************************************************!*\
  !*** ./src/app/components/footers/footer/footer.component.ts ***!
  \***************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "CzbP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let FooterComponent = class FooterComponent {
    constructor() {
        this.date = new Date().getFullYear();
    }
    ngOnInit() { }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-footer",
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], FooterComponent);



/***/ }),

/***/ "3IhM":
/*!*********************************************************************************!*\
  !*** ./src/app/components/cards/card-page-visits/card-page-visits.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CardPageVisitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageVisitsComponent", function() { return CardPageVisitsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_page_visits_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-page-visits.component.html */ "L/HX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardPageVisitsComponent = class CardPageVisitsComponent {
    constructor() { }
    ngOnInit() { }
};
CardPageVisitsComponent.ctorParameters = () => [];
CardPageVisitsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-page-visits",
        template: _raw_loader_card_page_visits_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardPageVisitsComponent);



/***/ }),

/***/ "4b2p":
/*!***************************************************************************!*\
  !*** ./src/app/components/navbars/index-navbar/index-navbar.component.ts ***!
  \***************************************************************************/
/*! exports provided: IndexNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexNavbarComponent", function() { return IndexNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index-navbar.component.html */ "RORk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/message */ "oqF8");




let IndexNavbarComponent = class IndexNavbarComponent {
    constructor() {
        this.navbarOpen = false;
        this.title = '';
    }
    ngOnInit() {
        this.title = src_app_message__WEBPACK_IMPORTED_MODULE_3__["message"].title;
    }
    setNavbarOpen() {
        this.navbarOpen = !this.navbarOpen;
    }
    scrollToSection(str = "") {
        const element = document.getElementById(str);
        console.log("555555scrolling to contact", element);
        element.scrollIntoView({ behavior: "smooth" });
    }
};
IndexNavbarComponent.ctorParameters = () => [];
IndexNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-index-navbar",
        template: _raw_loader_index_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], IndexNavbarComponent);



/***/ }),

/***/ "8GP7":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/profile/profile.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-auth-navbar></app-auth-navbar>\n<main class=\"profile-page\">\n  <section class=\"relative block h-500-px\">\n    <div\n      class=\"absolute top-0 w-full h-full bg-center bg-cover\"\n      style=\"\n        background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80');\n      \"\n    >\n      <span\n        id=\"blackOverlay\"\n        class=\"w-full h-full absolute opacity-50 bg-black\"\n      ></span>\n    </div>\n    <div\n      class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\"\n      style=\"transform: translateZ(0)\"\n    >\n      <svg\n        class=\"absolute bottom-0 overflow-hidden\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        viewBox=\"0 0 2560 100\"\n        x=\"0\"\n        y=\"0\"\n      >\n        <polygon\n          class=\"text-blueGray-200 fill-current\"\n          points=\"2560 0 2560 100 0 100\"\n        ></polygon>\n      </svg>\n    </div>\n  </section>\n  <section class=\"relative py-16 bg-blueGray-200\">\n    <div class=\"container mx-auto px-4\">\n      <div\n        class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64\"\n      >\n        <div class=\"px-6\">\n          <div class=\"flex flex-wrap justify-center\">\n            <div class=\"w-full lg:w-3/12 px-4 lg:order-2 flex justify-center\">\n              <div class=\"relative\">\n                <img\n                  alt=\"...\"\n                  src=\"assets/img/team-2-800x800.jpg\"\n                  class=\"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px\"\n                />\n              </div>\n            </div>\n            <div\n              class=\"w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center\"\n            >\n              <div class=\"py-6 px-3 mt-32 sm:mt-0\">\n                <button\n                  class=\"bg-red-600 active:bg-red-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150\"\n                  type=\"button\"\n                >\n                  Connect\n                </button>\n              </div>\n            </div>\n            <div class=\"w-full lg:w-4/12 px-4 lg:order-1\">\n              <div class=\"flex justify-center py-4 lg:pt-4 pt-8\">\n                <div class=\"mr-4 p-3 text-center\">\n                  <span\n                    class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\n                  >\n                    22\n                  </span>\n                  <span class=\"text-sm text-blueGray-400\">Friends</span>\n                </div>\n                <div class=\"mr-4 p-3 text-center\">\n                  <span\n                    class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\n                  >\n                    10\n                  </span>\n                  <span class=\"text-sm text-blueGray-400\">Photos</span>\n                </div>\n                <div class=\"lg:mr-4 p-3 text-center\">\n                  <span\n                    class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\n                  >\n                    89\n                  </span>\n                  <span class=\"text-sm text-blueGray-400\">Comments</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"text-center mt-12\">\n            <h3\n              class=\"text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2\"\n            >\n              Jenna Stones\n            </h3>\n            <div\n              class=\"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase\"\n            >\n              <i\n                class=\"fas fa-map-marker-alt mr-2 text-lg text-blueGray-400\"\n              ></i>\n              Los Angeles, California\n            </div>\n            <div class=\"mb-2 text-blueGray-600 mt-10\">\n              <i class=\"fas fa-briefcase mr-2 text-lg text-blueGray-400\"></i>\n              Solution Manager - Creative Tim Officer\n            </div>\n            <div class=\"mb-2 text-blueGray-600\">\n              <i class=\"fas fa-university mr-2 text-lg text-blueGray-400\"></i>\n              University of Computer Science\n            </div>\n          </div>\n          <div class=\"mt-10 py-10 border-t border-blueGray-200 text-center\">\n            <div class=\"flex flex-wrap justify-center\">\n              <div class=\"w-full lg:w-9/12 px-4\">\n                <p class=\"mb-4 text-lg leading-relaxed text-blueGray-700\">\n                  An artist of considerable range, Jenna the name taken by\n                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs\n                  and records all of his own music, giving it a warm, intimate\n                  feel with a solid groove structure. An artist of considerable\n                  range.\n                </p>\n                <a href=\"javascript:void(0)\" class=\"font-normal text-red-600\">\n                  Show more\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "90Li":
/*!************************************************************!*\
  !*** ./src/app/views/admin/settings/settings.component.ts ***!
  \************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.component.html */ "YV8C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let SettingsComponent = class SettingsComponent {
    constructor() { }
    ngOnInit() { }
};
SettingsComponent.ctorParameters = () => [];
SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-settings",
        template: _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], SettingsComponent);



/***/ }),

/***/ "AN84":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/landing/landing.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-auth-navbar></app-auth-navbar>\n<main>\n  <div\n    class=\"relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75\"\n  >\n    <div\n      class=\"absolute top-0 w-full h-full bg-center bg-cover\"\n      style=\"\n        background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');\n      \"\n    >\n      <span\n        id=\"blackOverlay\"\n        class=\"w-full h-full absolute opacity-75 bg-black\"\n      ></span>\n    </div>\n    <div class=\"container relative mx-auto\">\n      <div class=\"items-center flex flex-wrap\">\n        <div class=\"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center\">\n          <div class=\"pr-12\">\n            <h1 class=\"text-white font-semibold text-5xl\">\n              Your story starts with us.\n            </h1>\n            <p class=\"mt-4 text-lg text-blueGray-200\">\n              This is a simple example of a Landing Page you can build using\n              Notus Angular. It features multiple CSS components based on the\n              Tailwind CSS design system.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\"\n      style=\"transform: translateZ(0)\"\n    >\n      <svg\n        class=\"absolute bottom-0 overflow-hidden\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        viewBox=\"0 0 2560 100\"\n        x=\"0\"\n        y=\"0\"\n      >\n        <polygon\n          class=\"text-blueGray-200 fill-current\"\n          points=\"2560 0 2560 100 0 100\"\n        ></polygon>\n      </svg>\n    </div>\n  </div>\n\n  <section class=\"pb-20 bg-blueGray-200 -mt-24\">\n    <div class=\"container mx-auto px-4\">\n      <div class=\"flex flex-wrap\">\n        <div class=\"lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center\">\n          <div\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\"\n          >\n            <div class=\"px-4 py-5 flex-auto\">\n              <div\n                class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400\"\n              >\n                <i class=\"fas fa-award\"></i>\n              </div>\n              <h6 class=\"text-xl font-semibold\">Awarded Agency</h6>\n              <p class=\"mt-2 mb-4 text-blueGray-500\">\n                Divide details about your product or agency work into parts. A\n                paragraph describing a feature will be enough.\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"w-full md:w-4/12 px-4 text-center\">\n          <div\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\"\n          >\n            <div class=\"px-4 py-5 flex-auto\">\n              <div\n                class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400\"\n              >\n                <i class=\"fas fa-retweet\"></i>\n              </div>\n              <h6 class=\"text-xl font-semibold\">Free Revisions</h6>\n              <p class=\"mt-2 mb-4 text-blueGray-500\">\n                Keep you user engaged by providing meaningful information.\n                Remember that by this time, the user is curious.\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"pt-6 w-full md:w-4/12 px-4 text-center\">\n          <div\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\"\n          >\n            <div class=\"px-4 py-5 flex-auto\">\n              <div\n                class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400\"\n              >\n                <i class=\"fas fa-fingerprint\"></i>\n              </div>\n              <h6 class=\"text-xl font-semibold\">Verified Company</h6>\n              <p class=\"mt-2 mb-4 text-blueGray-500\">\n                Write a few lines about each one. A paragraph describing a\n                feature will be enough. Keep you user engaged!\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"flex flex-wrap items-center mt-32\">\n        <div class=\"w-full md:w-5/12 px-4 mr-auto ml-auto\">\n          <div\n            class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\"\n          >\n            <i class=\"fas fa-user-friends text-xl\"></i>\n          </div>\n          <h3 class=\"text-3xl mb-2 font-semibold leading-normal\">\n            Working with us is a pleasure\n          </h3>\n          <p\n            class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600\"\n          >\n            Don't let your uses guess by attaching tooltips and popoves to any\n            element. Just make sure you enable them first via JavaScript.\n          </p>\n          <p\n            class=\"text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600\"\n          >\n            The kit comes with three pre-built pages to help you get started\n            faster. You can change the text and images and you're good to go.\n            Just make sure you enable them first via JavaScript.\n          </p>\n          <a [routerLink]=\"['/']\" class=\"font-bold text-blueGray-700 mt-8\">\n            Kalpavruksha NGO\n          </a>\n        </div>\n\n        <div class=\"w-full md:w-4/12 px-4 mr-auto ml-auto\">\n          <div\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-600\"\n          >\n            <img\n              alt=\"...\"\n              src=\"assets/img/boy.jpg\"\n              class=\"w-full align-middle rounded-t-lg\"\n            />\n            <blockquote class=\"relative p-8 mb-4\">\n              <svg\n                preserveAspectRatio=\"none\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 583 95\"\n                class=\"absolute left-0 w-full block h-95-px -top-94-px\"\n              >\n                <polygon\n                  points=\"-30,95 583,95 583,65\"\n                  class=\"text-red-600 fill-current\"\n                ></polygon>\n              </svg>\n              <h4 class=\"text-xl font-bold text-white\">Top Notch Services</h4>\n              <p class=\"text-md font-light mt-2 text-white\">\n                The Arctic Ocean freezes every winter and much of the sea-ice\n                then thaws every summer, and that process will continue whatever\n                happens.\n              </p>\n            </blockquote>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"relative py-20\">\n    <div\n      class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\n      style=\"transform: translateZ(0)\"\n    >\n      <svg\n        class=\"absolute bottom-0 overflow-hidden\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        viewBox=\"0 0 2560 100\"\n        x=\"0\"\n        y=\"0\"\n      >\n        <polygon\n          class=\"text-white fill-current\"\n          points=\"2560 0 2560 100 0 100\"\n        ></polygon>\n      </svg>\n    </div>\n\n    <div class=\"container mx-auto px-4\">\n      <div class=\"items-center flex flex-wrap\">\n        <div class=\"w-full md:w-4/12 ml-auto mr-auto px-4\">\n          <img\n            alt=\"...\"\n            class=\"max-w-full rounded-lg shadow-lg\"\n            src=\"https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80\"\n          />\n        </div>\n        <div class=\"w-full md:w-5/12 ml-auto mr-auto px-4\">\n          <div class=\"md:pr-12\">\n            <div\n              class=\"text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-300\"\n            >\n              <i class=\"fas fa-rocket text-xl\"></i>\n            </div>\n            <h3 class=\"text-3xl font-semibold\">A growing company</h3>\n            <p class=\"mt-4 text-lg leading-relaxed text-blueGray-500\">\n              The extension comes with three pre-built pages to help you get\n              started faster. You can change the text and images and you're good\n              to go.\n            </p>\n            <ul class=\"list-none mt-6\">\n              <li class=\"py-2\">\n                <div class=\"flex items-center\">\n                  <div>\n                    <span\n                      class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3\"\n                    >\n                      <i class=\"fas fa-fingerprint\"></i>\n                    </span>\n                  </div>\n                  <div>\n                    <h4 class=\"text-blueGray-500\">\n                      Carefully crafted components\n                    </h4>\n                  </div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"flex items-center\">\n                  <div>\n                    <span\n                      class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3\"\n                    >\n                      <i class=\"fab fa-html5\"></i>\n                    </span>\n                  </div>\n                  <div>\n                    <h4 class=\"text-blueGray-500\">Amazing page examples</h4>\n                  </div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"flex items-center\">\n                  <div>\n                    <span\n                      class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3\"\n                    >\n                      <i class=\"far fa-paper-plane\"></i>\n                    </span>\n                  </div>\n                  <div>\n                    <h4 class=\"text-blueGray-500\">Dynamic components</h4>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"pt-20 pb-48\">\n    <div class=\"container mx-auto px-4\">\n      <div class=\"flex flex-wrap justify-center text-center mb-24\">\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <h2 class=\"text-4xl font-semibold\">Here are our heroes</h2>\n          <p class=\"text-lg leading-relaxed m-4 text-blueGray-500\">\n            According to the National Oceanic and Atmospheric Administration,\n            Ted, Scambos, NSIDClead scentist, puts the potentially record\n            maximum.\n          </p>\n        </div>\n      </div>\n      <div class=\"flex flex-wrap\">\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\n          <div class=\"px-6\">\n            <img\n              alt=\"...\"\n              src=\"assets/img/team-1-800x800.jpg\"\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\n            />\n            <div class=\"pt-6 text-center\">\n              <h5 class=\"text-xl font-bold\">Ryan Tompson</h5>\n              <p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\">\n                Web Developer\n              </p>\n              <div class=\"mt-6\">\n                <button\n                  class=\"bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-twitter\"></i>\n                </button>\n                <button\n                  class=\"bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-facebook-f\"></i>\n                </button>\n                <button\n                  class=\"bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-dribbble\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\n          <div class=\"px-6\">\n            <img\n              alt=\"...\"\n              src=\"assets/img/team-2-800x800.jpg\"\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\n            />\n            <div class=\"pt-6 text-center\">\n              <h5 class=\"text-xl font-bold\">Romina Hadid</h5>\n              <p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\">\n                Marketing Specialist\n              </p>\n              <div class=\"mt-6\">\n                <button\n                  class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-google\"></i>\n                </button>\n                <button\n                  class=\"bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-facebook-f\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\n          <div class=\"px-6\">\n            <img\n              alt=\"...\"\n              src=\"assets/img/team-3-800x800.jpg\"\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\n            />\n            <div class=\"pt-6 text-center\">\n              <h5 class=\"text-xl font-bold\">Alexa Smith</h5>\n              <p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\">\n                UI/UX Designer\n              </p>\n              <div class=\"mt-6\">\n                <button\n                  class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-google\"></i>\n                </button>\n                <button\n                  class=\"bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-twitter\"></i>\n                </button>\n                <button\n                  class=\"bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-instagram\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\n          <div class=\"px-6\">\n            <img\n              alt=\"...\"\n              src=\"assets/img/team-4-470x470.png\"\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\n            />\n            <div class=\"pt-6 text-center\">\n              <h5 class=\"text-xl font-bold\">Jenna Kardi</h5>\n              <p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\">\n                Founder and CEO\n              </p>\n              <div class=\"mt-6\">\n                <button\n                  class=\"bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-dribbble\"></i>\n                </button>\n                <button\n                  class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-google\"></i>\n                </button>\n                <button\n                  class=\"bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-twitter\"></i>\n                </button>\n                <button\n                  class=\"bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-instagram\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"pb-20 relative block bg-blueGray-800\">\n    <div\n      class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\n      style=\"transform: translateZ(0)\"\n    >\n      <svg\n        class=\"absolute bottom-0 overflow-hidden\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        viewBox=\"0 0 2560 100\"\n        x=\"0\"\n        y=\"0\"\n      >\n        <polygon\n          class=\"text-blueGray-800 fill-current\"\n          points=\"2560 0 2560 100 0 100\"\n        ></polygon>\n      </svg>\n    </div>\n\n    <div class=\"container mx-auto px-4 lg:pt-24 lg:pb-64\">\n      <div class=\"flex flex-wrap text-center justify-center\">\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <h2 class=\"text-4xl font-semibold text-white\">Build something</h2>\n          <p class=\"text-lg leading-relaxed mt-4 mb-4 text-blueGray-400\">\n            Put the potentially record low maximum sea ice extent tihs year down\n            to low ice. According to the National Oceanic and Atmospheric\n            Administration, Ted, Scambos.\n          </p>\n        </div>\n      </div>\n      <div class=\"flex flex-wrap mt-12 justify-center\">\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\n          <div\n            class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\n          >\n            <i class=\"fas fa-medal text-xl\"></i>\n          </div>\n          <h6 class=\"text-xl mt-5 font-semibold text-white\">\n            Excelent Services\n          </h6>\n          <p class=\"mt-2 mb-4 text-blueGray-400\">\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </p>\n        </div>\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\n          <div\n            class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\n          >\n            <i class=\"fas fa-poll text-xl\"></i>\n          </div>\n          <h5 class=\"text-xl mt-5 font-semibold text-white\">\n            Grow your market\n          </h5>\n          <p class=\"mt-2 mb-4 text-blueGray-400\">\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </p>\n        </div>\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\n          <div\n            class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\n          >\n            <i class=\"fas fa-lightbulb text-xl\"></i>\n          </div>\n          <h5 class=\"text-xl mt-5 font-semibold text-white\">Launch time</h5>\n          <p class=\"mt-2 mb-4 text-blueGray-400\">\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </p>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"relative block py-24 lg:pt-0 bg-blueGray-800\">\n    <div class=\"container mx-auto px-4\">\n      <div class=\"flex flex-wrap justify-center lg:-mt-64 -mt-48\">\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <div\n            class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200\"\n          >\n            <div class=\"flex-auto p-5 lg:p-10\">\n              <h4 class=\"text-2xl font-semibold\">Want to work with us?</h4>\n              <p class=\"leading-relaxed mt-1 mb-4 text-blueGray-500\">\n                Complete this form and we will get back to you in 24 hours.\n              </p>\n              <div class=\"relative w-full mb-3 mt-8\">\n                <label\n                  class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n                  htmlFor=\"full-name\"\n                >\n                  Full Name\n                </label>\n                <input\n                  type=\"text\"\n                  class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n                  placeholder=\"Full Name\"\n                />\n              </div>\n\n              <div class=\"relative w-full mb-3\">\n                <label\n                  class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n                  htmlFor=\"email\"\n                >\n                  Email\n                </label>\n                <input\n                  type=\"email\"\n                  class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n                  placeholder=\"Email\"\n                />\n              </div>\n\n              <div class=\"relative w-full mb-3\">\n                <label\n                  class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n                  htmlFor=\"message\"\n                >\n                  Message\n                </label>\n                <textarea\n                  rows=\"4\"\n                  cols=\"80\"\n                  class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full\"\n                  placeholder=\"Type a message...\"\n                ></textarea>\n              </div>\n              <div class=\"text-center mt-6\">\n                <button\n                  class=\"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                  type=\"button\"\n                >\n                  Send Message\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "AiJS":
/*!************************************************!*\
  !*** ./src/app/views/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index.component.html */ "W8yq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let IndexComponent = class IndexComponent {
    constructor() {
        this.title = "Welcome to NGO App";
        this.description = "This is the index page of the NGO App.";
        this.imagesObj = [
            {
                name: "Mundgod",
                src: "assets/img/mundgod/1.jpg",
            },
            {
                name: "Mundgod",
                src: "assets/img/mundgod/2.jpg",
            },
            {
                name: "Bagalkot",
                src: "assets/img/bgk/1.jpg",
            },
            {
                name: "Mundgod",
                src: "assets/img/mundgod/3.jpg",
            },
        ];
        this.imagesNewsObj = [
            {
                name: "Mundgod",
                src: "assets/img/group/news(1).jpg",
            },
            {
                name: "Mundgod",
                src: "assets/img/group/news(2).jpg",
            },
            {
                name: "Mundgod",
                src: "assets/img/group/news(3).jpg",
            },
            {
                name: "Mundgod",
                src: "assets/img/group/news(4).jpg",
            },
        ];
        this.imagesGroupObj = [
            {
                name: "Mundgod",
                src: "assets/img/group/mix(1).jpg",
            },
            {
                name: "Mundgod",
                src: "assets/img/group/mix(2).jpg",
            },
            {
                name: "Mundgod",
                src: "assets/img/group/mix(3).jpg",
            },
        ];
        this.imagesTreeObj = [
            {
                name: "Mundgod",
                src: "assets/img/group/tree (1).jpg",
            },
            {
                name: "Mundgod",
                src: "assets/img/group/tree (2).jpg",
            },
            {
                name: "Mundgod",
                src: "assets/img/group/tree (3).jpg",
            },
            {
                name: "Mundgod",
                src: "assets/img/group/tree (4).jpg",
            },
        ];
    }
    ngOnInit() { }
};
IndexComponent.ctorParameters = () => [];
IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-index",
        template: _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], IndexComponent);



/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
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

/***/ "CzbP":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer/footer.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"relative bg-blueGray-200 pt-8 pb-6\">\n  <div class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\n    style=\"transform: translateZ(0)\">\n    <svg class=\"absolute bottom-0 overflow-hidden\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"\n      version=\"1.1\" viewBox=\"0 0 2560 100\" x=\"0\" y=\"0\">\n      <polygon class=\"text-blueGray-200 fill-current\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n  <div class=\"container mx-auto px-4\">\n    <div class=\"flex flex-wrap text-center lg:text-left\">\n      <div class=\"w-full lg:w-6/12 px-4\">\n        <h4 class=\"text-3xl font-semibold\">Let's keep in touch!</h4>\n        <h5 class=\"text-lg mt-0 mb-2 text-blueGray-600\">\n          Find us on any of these platforms.\n        </h5>\n        <div class=\"mt-6 lg:mb-0 mb-6\">\n          <button\n            class=\"bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\n            type=\"button\">\n            <i class=\"fab fa-twitter\"></i>\n          </button>\n          <button\n            class=\"bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\n            type=\"button\">\n            <i class=\"fab fa-facebook-square\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n    <hr class=\"my-6 border-blueGray-300\" />\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\n      <div class=\"w-full md:w-4/12 px-4 mx-auto text-center\">\n        <div class=\"text-sm text-blueGray-500 font-semibold py-1\">\n          Copyright © {{ date }} by\n          <a href=\"https://www.creative-tim.com?ref=na-footer\" class=\"text-blueGray-500 hover:text-blueGray-800\">\n            Kalpavruksha NGO\n          </a>\n          .\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>");

/***/ }),

/***/ "DLfO":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer-small/footer-small.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer\n  class=\"pb-6\"\n  [ngClass]=\"absolute ? 'absolute w-full bottom-0 bg-blueGray-800' : 'relative'\"\n>\n  <div class=\"container mx-auto px-4\">\n    <hr class=\"mb-6 border-b-1 border-blueGray-600\" />\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\n      <div class=\"w-full md:w-4/12 px-4\">\n        <div\n          class=\"text-sm text-white font-semibold py-1 text-center md:text-left\"\n        >\n          Copyright © {{ date }}\n          <a\n            href=\"https://www.creative-tim.com?ref=na-footer-small\"\n            class=\"text-white hover:text-blueGray-300 text-sm font-semibold py-1\"\n          >\n            Creative Tim\n          </a>\n        </div>\n      </div>\n      <div class=\"w-full md:w-8/12 px-4\">\n        <ul class=\"flex flex-wrap list-none md:justify-end justify-center\">\n          <li>\n            <a\n              href=\"https://www.creative-tim.com?ref=na-footer-small\"\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\n            >\n              Creative Tim\n            </a>\n          </li>\n          <li>\n            <a\n              href=\"https://www.creative-tim.com/presentation?ref=na-footer-small\"\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\n            >\n              About Us\n            </a>\n          </li>\n          <li>\n            <a\n              href=\"http://blog.creative-tim.com?ref=na-footer-small\"\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\n            >\n              Blog\n            </a>\n          </li>\n          <li>\n            <a\n              href=\"https://github.com/creativetimofficial/notus-angular/blob/main/LICENSE.md?ref=creativetim\"\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\n            >\n              MIT License\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "EbUq":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer-admin/footer-admin.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"block py-4\">\n  <div class=\"container mx-auto px-4\">\n    <hr class=\"mb-4 border-b-1 border-blueGray-200\" />\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\n      <div class=\"w-full md:w-4/12 px-4\">\n        <div\n          class=\"text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left\"\n        >\n          Copyright © {{ date }}\n          <a\n            href=\"https://www.creative-tim.com?ref=na-footer-admin\"\n            class=\"text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1\"\n          >\n            Creative Tim\n          </a>\n        </div>\n      </div>\n      <div class=\"w-full md:w-8/12 px-4\">\n        <ul class=\"flex flex-wrap list-none md:justify-end justify-center\">\n          <li>\n            <a\n              href=\"https://www.creative-tim.com?ref=na-footer-admin\"\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\n            >\n              Creative Tim\n            </a>\n          </li>\n          <li>\n            <a\n              href=\"https://www.creative-tim.com/presentation?ref=na-footer-admin\"\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\n            >\n              About Us\n            </a>\n          </li>\n          <li>\n            <a\n              href=\"http://blog.creative-tim.com?ref=na-footer-admin\"\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\n            >\n              Blog\n            </a>\n          </li>\n          <li>\n            <a\n              href=\"https://github.com/creativetimofficial/notus-angular/blob/main/LICENSE.md?ref=creativetim\"\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\n            >\n              MIT License\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "H3xT":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/user-dropdown/user-dropdown.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\n  class=\"text-blueGray-500 block\"\n  href=\"#pablo\"\n  (click)=\"toggleDropdown($event)\"\n  #btnDropdownRef\n>\n  <div class=\"items-center flex\">\n    <span\n      class=\"w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full\"\n    >\n      <img\n        alt=\"...\"\n        class=\"w-full rounded-full align-middle border-none shadow-lg\"\n        src=\"assets/img/team-1-800x800.jpg\"\n      />\n    </span>\n  </div>\n</a>\n<div class=\"min-w-48 z-50\" #popoverDropdownRef>\n  <div\n    class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48\"\n    [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\n  >\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Action\n    </a>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Another action\n    </a>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Something else here\n    </a>\n    <div class=\"h-0 my-2 border border-solid border-blueGray-100\"></div>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Seprated link\n    </a>\n  </div>\n</div>\n");

/***/ }),

/***/ "HEly":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-stats/card-stats.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg\"\n>\n  <div class=\"flex-auto p-4\">\n    <div class=\"flex flex-wrap\">\n      <div class=\"relative w-full pr-4 max-w-full flex-grow flex-1\">\n        <h5 class=\"text-blueGray-400 uppercase font-bold text-xs\">\n          {{ statSubtitle }}\n        </h5>\n        <span class=\"font-semibold text-xl text-blueGray-700\">\n          {{ statTitle }}\n        </span>\n      </div>\n      <div class=\"relative w-auto pl-4 flex-initial\">\n        <div\n          class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full\"\n          [ngClass]=\"[statIconColor]\"\n        >\n          <i [ngClass]=\"statIconName\"></i>\n        </div>\n      </div>\n    </div>\n    <p class=\"text-sm text-blueGray-400 mt-4\">\n      <span class=\"mr-2\" [ngClass]=\"statPercentColor\">\n        <i\n          [ngClass]=\"\n            statArrow === 'up' ? 'fas fa-arrow-up' : 'fas fa-arrow-down'\n          \"\n        ></i>\n        {{ statPercent }}%\n      </span>\n      <span class=\"whitespace-nowrap\">{{ statDescripiron }}</span>\n    </p>\n  </div>\n</div>\n");

/***/ }),

/***/ "J87Q":
/*!*********************************************************************!*\
  !*** ./src/app/components/cards/card-stats/card-stats.component.ts ***!
  \*********************************************************************/
/*! exports provided: CardStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardStatsComponent", function() { return CardStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-stats.component.html */ "HEly");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardStatsComponent = class CardStatsComponent {
    constructor() {
        this._statSubtitle = "Traffic";
        this._statTitle = "350,897";
        this._statArrow = "up";
        this._statPercent = "3.48";
        this._statPercentColor = "text-emerald-500";
        this._statDescripiron = "Since last month";
        this._statIconName = "far fa-chart-bar";
        this._statIconColor = "bg-red-500";
    }
    get statSubtitle() {
        return this._statSubtitle;
    }
    set statSubtitle(statSubtitle) {
        this._statSubtitle = statSubtitle === undefined ? "Traffic" : statSubtitle;
    }
    get statTitle() {
        return this._statTitle;
    }
    set statTitle(statTitle) {
        this._statTitle = statTitle === undefined ? "350,897" : statTitle;
    }
    // The value must match one of up or down
    get statArrow() {
        return this._statArrow;
    }
    set statArrow(statArrow) {
        this._statArrow =
            statArrow !== "down" && statArrow !== "up" ? "up" : statArrow;
    }
    get statPercent() {
        return this._statPercent;
    }
    set statPercent(statPercent) {
        this._statPercent = statPercent === undefined ? "3.48" : statPercent;
    }
    // can be any of the text color utilities
    // from tailwindcss
    get statPercentColor() {
        return this._statPercentColor;
    }
    set statPercentColor(statPercentColor) {
        this._statPercentColor =
            statPercentColor === undefined ? "text-emerald-500" : statPercentColor;
    }
    get statDescripiron() {
        return this._statDescripiron;
    }
    set statDescripiron(statDescripiron) {
        this._statDescripiron =
            statDescripiron === undefined ? "Since last month" : statDescripiron;
    }
    get statIconName() {
        return this._statIconName;
    }
    set statIconName(statIconName) {
        this._statIconName =
            statIconName === undefined ? "far fa-chart-bar" : statIconName;
    }
    // can be any of the background color utilities
    // from tailwindcss
    get statIconColor() {
        return this._statIconColor;
    }
    set statIconColor(statIconColor) {
        this._statIconColor =
            statIconColor === undefined ? "bg-red-500" : statIconColor;
    }
    ngOnInit() { }
};
CardStatsComponent.ctorParameters = () => [];
CardStatsComponent.propDecorators = {
    statSubtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statPercent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statPercentColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statDescripiron: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statIconName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statIconColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
CardStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-stats",
        template: _raw_loader_card_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardStatsComponent);



/***/ }),

/***/ "J8Ne":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dropdowns/index-dropdown/index-dropdown.component.ts ***!
  \*********************************************************************************/
/*! exports provided: IndexDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexDropdownComponent", function() { return IndexDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index-dropdown.component.html */ "e8es");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ "EjV/");




let IndexDropdownComponent = class IndexDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngOnInit() { }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
            this.createPoppper();
        }
    }
    createPoppper() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
};
IndexDropdownComponent.propDecorators = {
    btnDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["btnDropdownRef", { static: false },] }],
    popoverDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["popoverDropdownRef", { static: false },] }]
};
IndexDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-index-dropdown",
        template: _raw_loader_index_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], IndexDropdownComponent);



/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6\"\n>\n  <div\n    class=\"md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto\"\n  >\n    <!-- Toggler -->\n    <button\n      class=\"cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent\"\n      type=\"button\"\n      (click)=\"toggleCollapseShow('bg-white m-2 py-3 px-6')\"\n    >\n      <i class=\"fas fa-bars\"></i>\n    </button>\n    <!-- Brand -->\n    <a\n      [routerLink]=\"['/']\"\n      class=\"md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0\"\n    >\n      <span class=\"block sm:hidden\"> Kalpavruksha NGO </span>\n      <span class=\"hidden sm:block\"> Kalpavruksha NGO </span>\n    </a>\n    <!-- User -->\n    <ul class=\"md:hidden items-center flex flex-wrap list-none\">\n      <li class=\"inline-block relative\">\n        <app-notification-dropdown class=\"block\"></app-notification-dropdown>\n      </li>\n      <li class=\"inline-block relative\">\n        <app-user-dropdown class=\"block\"></app-user-dropdown>\n      </li>\n    </ul>\n    <!-- Collapse -->\n    <div\n      class=\"md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded\"\n      [ngClass]=\"collapseShow\"\n    >\n      <!-- Collapse header -->\n      <div\n        class=\"md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200\"\n      >\n        <div class=\"flex flex-wrap\">\n          <div class=\"w-6/12\">\n            <a\n              [routerLink]=\"['/']\"\n              class=\"md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0\"\n            >\n              Notus Angular\n            </a>\n          </div>\n          <div class=\"w-6/12 flex justify-end\">\n            <button\n              type=\"button\"\n              class=\"cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent\"\n              (click)=\"toggleCollapseShow('hidden')\"\n            >\n              <i class=\"fas fa-times\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <!-- Form -->\n      <form class=\"mt-6 mb-4 md:hidden\">\n        <div class=\"mb-3 pt-0\">\n          <input\n            type=\"text\"\n            placeholder=\"Search\"\n            class=\"border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal\"\n          />\n        </div>\n      </form>\n\n      <!-- Divider -->\n      <hr class=\"my-4 md:min-w-full\" />\n      <!-- Heading -->\n      <h6\n        class=\"md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\n      >\n        Admin Layout Pages\n      </h6>\n      <!-- Navigation -->\n\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none\">\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/admin/dashboard']\"\n            class=\"text-xs uppercase py-3 font-bold block\"\n            routerLinkActive\n            #adminDashboard=\"routerLinkActive\"\n            [ngClass]=\"\n              adminDashboard.isActive\n                ? 'text-red-600 hover:text-red-700'\n                : 'text-blueGray-700 hover:text-blueGray-500'\n            \"\n          >\n            <i\n              class=\"fas fa-tv mr-2 text-sm\"\n              [ngClass]=\"\n                adminDashboard.isActive ? 'opacity-75' : 'text-blueGray-300'\n              \"\n            ></i>\n            Dashboard\n          </a>\n        </li>\n\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/admin/settings']\"\n            class=\"text-xs uppercase py-3 font-bold block\"\n            routerLinkActive\n            #adminSettings=\"routerLinkActive\"\n            [ngClass]=\"\n              adminSettings.isActive\n                ? 'text-red-600 hover:text-red-700'\n                : 'text-blueGray-700 hover:text-blueGray-500'\n            \"\n          >\n            <i\n              class=\"fas fa-tools mr-2 text-sm\"\n              [ngClass]=\"\n                adminSettings.isActive ? 'opacity-75' : 'text-blueGray-300'\n              \"\n            ></i>\n            Settings\n          </a>\n        </li>\n\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/admin/tables']\"\n            class=\"text-xs uppercase py-3 font-bold block\"\n            routerLinkActive\n            #adminTables=\"routerLinkActive\"\n            [ngClass]=\"\n              adminTables.isActive\n                ? 'text-red-600 hover:text-red-700'\n                : 'text-blueGray-700 hover:text-blueGray-500'\n            \"\n          >\n            <i\n              class=\"fas fa-table mr-2 text-sm\"\n              [ngClass]=\"\n                adminTables.isActive ? 'opacity-75' : 'text-blueGray-300'\n              \"\n            ></i>\n            Tables\n          </a>\n        </li>\n\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/admin/maps']\"\n            class=\"text-xs uppercase py-3 font-bold block\"\n            routerLinkActive\n            #adminMaps=\"routerLinkActive\"\n            [ngClass]=\"\n              adminMaps.isActive\n                ? 'text-red-600 hover:text-red-700'\n                : 'text-blueGray-700 hover:text-blueGray-500'\n            \"\n          >\n            <i\n              class=\"fas fa-map-marked mr-2 text-sm\"\n              [ngClass]=\"\n                adminMaps.isActive ? 'opacity-75' : 'text-blueGray-300'\n              \"\n            ></i>\n            Maps\n          </a>\n        </li>\n      </ul>\n\n      <!-- Divider -->\n      <hr class=\"my-4 md:min-w-full\" />\n      <!-- Heading -->\n      <h6\n        class=\"md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\n      >\n        Auth Layout Pages\n      </h6>\n      <!-- Navigation -->\n\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none md:mb-4\">\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/auth/login']\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block\"\n          >\n            <i class=\"fas fa-fingerprint text-blueGray-300 mr-2 text-sm\"></i>\n            Login\n          </a>\n        </li>\n\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/auth/register']\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block\"\n          >\n            <i class=\"fas fa-clipboard-list text-blueGray-300 mr-2 text-sm\"></i>\n            Register\n          </a>\n        </li>\n      </ul>\n\n      <!-- Divider -->\n      <hr class=\"my-4 md:min-w-full\" />\n      <!-- Heading -->\n      <h6\n        class=\"md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\n      >\n        No Layout Pages\n      </h6>\n      <!-- Navigation -->\n\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none md:mb-4\">\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/landing']\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block\"\n          >\n            <i class=\"fas fa-newspaper text-blueGray-300 mr-2 text-sm\"></i>\n            Landing Page\n          </a>\n        </li>\n\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/profile']\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block\"\n          >\n            <i class=\"fas fa-user-circle text-blueGray-300 mr-2 text-sm\"></i>\n            Profile Page\n          </a>\n        </li>\n      </ul>\n\n      <!-- Divider -->\n      <hr class=\"my-4 md:min-w-full\" />\n      <!-- Heading -->\n      <h6\n        class=\"md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\n      >\n        Documentation\n      </h6>\n      <!-- Navigation -->\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none md:mb-4\">\n        <li class=\"inline-flex\">\n          <a\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/colors/notus\"\n            target=\"_blank\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fas fa-paint-brush mr-2 text-blueGray-300 text-base\"></i>\n            Styles\n          </a>\n        </li>\n\n        <li class=\"inline-flex\">\n          <a\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus\"\n            target=\"_blank\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fab fa-css3-alt mr-2 text-blueGray-300 text-base\"></i>\n            CSS Components\n          </a>\n        </li>\n\n        <li class=\"inline-flex\">\n          <a\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus\"\n            target=\"_blank\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fab fa-angular mr-2 text-blueGray-300 text-base\"></i>\n            Angular\n          </a>\n        </li>\n\n        <li class=\"inline-flex\">\n          <a\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus\"\n            target=\"_blank\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fab fa-js-square mr-2 text-blueGray-300 text-base\"></i>\n            Javascript\n          </a>\n        </li>\n\n        <li class=\"inline-flex\">\n          <a\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus\"\n            target=\"_blank\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fab fa-react mr-2 text-blueGray-300 text-base\"></i>\n            NextJS\n          </a>\n        </li>\n\n        <li class=\"inline-flex\">\n          <a\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus\"\n            target=\"_blank\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fab fa-react mr-2 text-blueGray-300 text-base\"></i>\n            React\n          </a>\n        </li>\n\n        <li class=\"inline-flex\">\n          <a\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus\"\n            target=\"_blank\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fas fa-link mr-2 text-blueGray-300 text-base\"></i>\n            Svelte\n          </a>\n        </li>\n\n        <li class=\"inline-flex\">\n          <a\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus\"\n            target=\"_blank\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fab fa-vuejs mr-2 text-blueGray-300 text-base\"></i>\n            VueJS\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "KxJz":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/dashboard/dashboard.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex flex-wrap\">\n  <div class=\"w-full xl:w-8/12 mb-12 xl:mb-0 px-4\">\n    <app-card-line-chart></app-card-line-chart>\n  </div>\n  <div class=\"w-full xl:w-4/12 px-4\">\n    <app-card-bar-chart></app-card-bar-chart>\n  </div>\n</div>\n<div class=\"flex flex-wrap mt-4\">\n  <div class=\"w-full xl:w-8/12 mb-12 xl:mb-0 px-4\">\n    <app-card-page-visits></app-card-page-visits>\n  </div>\n  <div class=\"w-full xl:w-4/12 px-4\">\n    <app-card-social-traffic></app-card-social-traffic>\n  </div>\n</div>\n");

/***/ }),

/***/ "L/HX":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-page-visits/card-page-visits.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\n>\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\n        <h3 class=\"font-semibold text-base text-blueGray-700\">Page visits</h3>\n      </div>\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1 text-right\">\n        <button\n          class=\"bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"button\"\n        >\n          See all\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"block w-full overflow-x-auto\">\n    <!-- Projects table -->\n    <table class=\"items-center w-full bg-transparent border-collapse\">\n      <thead>\n        <tr>\n          <th\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n          >\n            Page name\n          </th>\n          <th\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n          >\n            Visitors\n          </th>\n          <th\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n          >\n            Unique users\n          </th>\n          <th\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n          >\n            Bounce rate\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            /argon/\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            4,569\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            340\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-arrow-up text-emerald-500 mr-4\"></i>\n            46,53%\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            /argon/index.html\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            3,985\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            319\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-arrow-down text-orange-500 mr-4\"></i>\n            46,53%\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            /argon/charts.html\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            3,513\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            294\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-arrow-down text-orange-500 mr-4\"></i>\n            36,49%\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            /argon/tables.html\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            2,050\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            147\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-arrow-up text-emerald-500 mr-4\"></i>\n            50,87%\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            /argon/profile.html\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            1,795\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            190\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-arrow-down text-red-500 mr-4\"></i>\n            46,53%\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "LN9C":
/*!***********************************************************!*\
  !*** ./src/app/views/auth/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "O/dV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let RegisterComponent = class RegisterComponent {
    constructor() { }
    ngOnInit() { }
};
RegisterComponent.ctorParameters = () => [];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-register",
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], RegisterComponent);



/***/ }),

/***/ "LUN3":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mx-auto px-4 h-full\">\n  <div class=\"flex content-center items-center justify-center h-full\">\n    <div class=\"w-full lg:w-4/12 px-4\">\n      <div\n        class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0\"\n      >\n        <div class=\"rounded-t mb-0 px-6 py-6\">\n          <div class=\"text-center mb-3\">\n            <h6 class=\"text-blueGray-500 text-sm font-bold\">Sign in with</h6>\n          </div>\n          <div class=\"btn-wrapper text-center\">\n            <button\n              class=\"bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150\"\n              type=\"button\"\n            >\n              <img alt=\"...\" class=\"w-5 mr-1\" src=\"assets/img/github.svg\" />\n              Github\n            </button>\n            <button\n              class=\"bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150\"\n              type=\"button\"\n            >\n              <img alt=\"...\" class=\"w-5 mr-1\" src=\"assets/img/google.svg\" />\n              Google\n            </button>\n          </div>\n          <hr class=\"mt-6 border-b-1 border-blueGray-300\" />\n        </div>\n        <div class=\"flex-auto px-4 lg:px-10 py-10 pt-0\">\n          <div class=\"text-blueGray-400 text-center mb-3 font-bold\">\n            <small>Or sign in with credentials</small>\n          </div>\n          <form>\n            <div class=\"relative w-full mb-3\">\n              <label\n                class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n                htmlFor=\"grid-password\"\n              >\n                Email\n              </label>\n              <input\n                type=\"email\"\n                class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n                placeholder=\"Email\"\n              />\n            </div>\n\n            <div class=\"relative w-full mb-3\">\n              <label\n                class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n                htmlFor=\"grid-password\"\n              >\n                Password\n              </label>\n              <input\n                type=\"password\"\n                class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n                placeholder=\"Password\"\n              />\n            </div>\n            <div>\n              <label class=\"inline-flex items-center cursor-pointer\">\n                <input\n                  id=\"customCheckLogin\"\n                  type=\"checkbox\"\n                  class=\"form-checkbox border-0 text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150 rounded\"\n                />\n                <span class=\"ml-2 text-sm font-semibold text-blueGray-600\">\n                  Remember me\n                </span>\n              </label>\n            </div>\n\n            <div class=\"text-center mt-6\">\n              <button\n                class=\"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150\"\n                type=\"button\"\n              >\n                Sign In\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"flex flex-wrap mt-6 relative\">\n        <div class=\"w-1/2\">\n          <a href=\"javascript:void(0)\" class=\"text-blueGray-200\">\n            <small>Forgot password?</small>\n          </a>\n        </div>\n        <div class=\"w-1/2 text-right\">\n          <a [routerLink]=\"['/auth/register']\" class=\"text-blueGray-200\">\n            <small>Create new account</small>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "O/dV":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mx-auto px-4 h-full\">\n  <div class=\"flex content-center items-center justify-center h-full\">\n    <div class=\"w-full lg:w-6/12 px-4\">\n      <div\n        class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0\"\n      >\n        <div class=\"rounded-t mb-0 px-6 py-6\">\n          <div class=\"text-center mb-3\">\n            <h6 class=\"text-blueGray-500 text-sm font-bold\">Sign up with</h6>\n          </div>\n          <div class=\"btn-wrapper text-center\">\n            <button\n              class=\"bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150\"\n              type=\"button\"\n            >\n              <img alt=\"...\" class=\"w-5 mr-1\" src=\"assets/img/github.svg\" />\n              Github\n            </button>\n            <button\n              class=\"bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150\"\n              type=\"button\"\n            >\n              <img alt=\"...\" class=\"w-5 mr-1\" src=\"assets/img/google.svg\" />\n              Google\n            </button>\n          </div>\n          <hr class=\"mt-6 border-b-1 border-blueGray-300\" />\n        </div>\n        <div class=\"flex-auto px-4 lg:px-10 py-10 pt-0\">\n          <div class=\"text-blueGray-400 text-center mb-3 font-bold\">\n            <small>Or sign up with credentials</small>\n          </div>\n          <form>\n            <div class=\"relative w-full mb-3\">\n              <label\n                class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n                htmlFor=\"grid-password\"\n              >\n                Name\n              </label>\n              <input\n                type=\"email\"\n                class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n                placeholder=\"Name\"\n              />\n            </div>\n\n            <div class=\"relative w-full mb-3\">\n              <label\n                class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n                htmlFor=\"grid-password\"\n              >\n                Email\n              </label>\n              <input\n                type=\"email\"\n                class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n                placeholder=\"Email\"\n              />\n            </div>\n\n            <div class=\"relative w-full mb-3\">\n              <label\n                class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n                htmlFor=\"grid-password\"\n              >\n                Password\n              </label>\n              <input\n                type=\"password\"\n                class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n                placeholder=\"Password\"\n              />\n            </div>\n\n            <div>\n              <label class=\"inline-flex items-center cursor-pointer\">\n                <input\n                  id=\"customCheckLogin\"\n                  type=\"checkbox\"\n                  class=\"form-checkbox border-0 text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150 rounded\"\n                />\n                <span class=\"ml-2 text-sm font-semibold text-blueGray-600\">\n                  I agree with the\n                  <a href=\"javascript:void(0)\" class=\"text-red-600\">\n                    Privacy Policy\n                  </a>\n                </span>\n              </label>\n            </div>\n\n            <div class=\"text-center mt-6\">\n              <button\n                class=\"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150\"\n                type=\"button\"\n              >\n                Create Account\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "Pibi":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/admin-navbar/admin-navbar.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Navbar -->\n<nav\n  class=\"absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4\"\n>\n  <div\n    class=\"w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4\"\n  >\n    <!-- Brand -->\n    <a\n      class=\"text-white text-sm uppercase hidden lg:inline-block font-semibold\"\n      href=\"#pablo\"\n      >Dashboard</a\n    >\n    <!-- Form -->\n    <form\n      class=\"md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3\"\n    >\n      <div class=\"relative flex w-full flex-wrap items-stretch\">\n        <span\n          class=\"z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3\"\n          ><i class=\"fas fa-search\"></i\n        ></span>\n        <input\n          type=\"text\"\n          placeholder=\"Search here...\"\n          class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10\"\n        />\n      </div>\n    </form>\n    <!-- User -->\n    <ul class=\"flex-col md:flex-row list-none items-center hidden md:flex\">\n      <app-user-dropdown class=\"block\"></app-user-dropdown>\n    </ul>\n  </div>\n</nav>\n");

/***/ }),

/***/ "R+tk":
/*!**************************************************!*\
  !*** ./src/app/layouts/admin/admin.component.ts ***!
  \**************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin.component.html */ "/ztn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() { }
};
AdminComponent.ctorParameters = () => [];
AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-admin",
        template: _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AdminComponent);



/***/ }),

/***/ "RLAj":
/*!***************************************************************************!*\
  !*** ./src/app/components/headers/header-stats/header-stats.component.ts ***!
  \***************************************************************************/
/*! exports provided: HeaderStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderStatsComponent", function() { return HeaderStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header-stats.component.html */ "UhXh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let HeaderStatsComponent = class HeaderStatsComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderStatsComponent.ctorParameters = () => [];
HeaderStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-header-stats",
        template: _raw_loader_header_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], HeaderStatsComponent);



/***/ }),

/***/ "RMzx":
/*!****************************************************!*\
  !*** ./src/app/views/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./landing.component.html */ "AN84");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let LandingComponent = class LandingComponent {
    constructor() { }
    ngOnInit() { }
};
LandingComponent.ctorParameters = () => [];
LandingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-landing",
        template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], LandingComponent);



/***/ }),

/***/ "RORk":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/index-navbar/index-navbar.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow\"\n>\n  <div\n    class=\"container px-4 mx-auto flex flex-wrap items-center justify-between\"\n  >\n    <div\n      class=\"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start\"\n    >\n      <a\n        [routerLink]=\"['/']\"\n        class=\"text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase\"\n        href=\"#pablo\"\n      >\n        {{title}}\n      </a>\n      <button\n        class=\"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none\"\n        type=\"button\"\n        (click)=\"setNavbarOpen()\"\n      >\n        <i class=\"fas fa-bars\"></i>\n      </button>\n    </div>\n    <div\n      class=\"lg:flex flex-grow items-center\"\n      [ngClass]=\"{ hidden: !navbarOpen, block: navbarOpen }\"\n      id=\"example-navbar-warning\"\n    >\n      <!-- <ul class=\"flex flex-col lg:flex-row list-none mr-auto\">\n        <li class=\"flex items-center\">\n          <a\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus?ref=na-index-navbar\"\n          >\n            <i\n              class=\"text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2\"\n            ></i>\n            Docs\n          </a>\n        </li>\n      </ul> -->\n      <ul class=\"flex flex-col lg:flex-row list-none lg:ml-auto\">\n        <!-- <li class=\"flex items-center\">\n          <app-index-dropdown class=\"block\"></app-index-dropdown>\n        </li> -->\n        <li class=\"flex items-center\">\n          <a\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\n            href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F\"\n            target=\"_blank\"\n          >\n            <i class=\"text-blueGray-400 fab fa-facebook text-lg leading-lg\"></i>\n            <span class=\"lg:hidden inline-block ml-2\">Share</span>\n          </a>\n        </li>\n\n        <li class=\"flex items-center\">\n          <a\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\n            href=\"https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20Angular%20UI%20Kit%20and%20Admin.%20Let%20Notus%20Angular%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.\"\n            target=\"_blank\"\n          >\n            <i class=\"text-blueGray-400 fab fa-twitter text-lg leading-lg\"></i>\n            <span class=\"lg:hidden inline-block ml-2\">Tweet</span>\n          </a>\n        </li>\n\n        <!-- <li class=\"flex items-center\">\n          <a\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\n            href=\"https://github.com/creativetimofficial/notus-angular?ref=na-index-navbar\"\n            target=\"_blank\"\n          >\n            <i class=\"text-blueGray-400 fab fa-github text-lg leading-lg\"></i>\n            <span class=\"lg:hidden inline-block ml-2\">Star</span>\n          </a>\n        </li> -->\n\n        <li class=\"flex items-center\">\n            <button\n            class=\"bg-red-600 text-white active:bg-red-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150\"\n            type=\"button\"\n            (click)=\"scrollToSection('contactus')\"\n            >\n            <i class=\"fas fa-arrow-alt-circle-down\"></i> Contact\n            </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-ps": "TJgH",
	"./ar-ps.js": "TJgH",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku-kmr": "dVgr",
	"./ku-kmr.js": "dVgr",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Skd6":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/dropdowns/notification-dropdown/notification-dropdown.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NotificationDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDropdownComponent", function() { return NotificationDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notification_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notification-dropdown.component.html */ "XqAX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ "EjV/");




let NotificationDropdownComponent = class NotificationDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngAfterViewInit() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
        }
    }
};
NotificationDropdownComponent.propDecorators = {
    btnDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["btnDropdownRef", { static: false },] }],
    popoverDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["popoverDropdownRef", { static: false },] }]
};
NotificationDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-notification-dropdown",
        template: _raw_loader_notification_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], NotificationDropdownComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AppComponent = class AppComponent {
    constructor() {
        this.title = "angular-dashboard-page";
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-root",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AppComponent);



/***/ }),

/***/ "TmC4":
/*!*****************************************************************************!*\
  !*** ./src/app/components/cards/card-bar-chart/card-bar-chart.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CardBarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBarChartComponent", function() { return CardBarChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_bar_chart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-bar-chart.component.html */ "/GnJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);




let CardBarChartComponent = class CardBarChartComponent {
    constructor() { }
    ngOnInit() { }
    ngAfterViewInit() {
        let config = {
            type: "bar",
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: "#ed64a6",
                        borderColor: "#ed64a6",
                        data: [30, 78, 56, 34, 100, 45, 13],
                        fill: false,
                        barThickness: 8,
                    },
                    {
                        label: new Date().getFullYear() - 1,
                        fill: false,
                        backgroundColor: "#4c51bf",
                        borderColor: "#4c51bf",
                        data: [27, 68, 86, 74, 10, 4, 87],
                        barThickness: 8,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: "Orders Chart",
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                },
                hover: {
                    mode: "nearest",
                    intersect: true,
                },
                legend: {
                    labels: {
                        fontColor: "rgba(0,0,0,.4)",
                    },
                    align: "end",
                    position: "bottom",
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                            scaleLabel: {
                                display: true,
                                labelString: "Month",
                            },
                            gridLines: {
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.3)",
                                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Value",
                            },
                            gridLines: {
                                borderDash: [2],
                                drawBorder: false,
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.2)",
                                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        let ctx = document.getElementById("bar-chart");
        ctx = ctx.getContext("2d");
        new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(ctx, config);
    }
};
CardBarChartComponent.ctorParameters = () => [];
CardBarChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-bar-chart",
        template: _raw_loader_card_bar_chart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardBarChartComponent);



/***/ }),

/***/ "UIMn":
/*!***************************************************************************!*\
  !*** ./src/app/components/footers/footer-admin/footer-admin.component.ts ***!
  \***************************************************************************/
/*! exports provided: FooterAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterAdminComponent", function() { return FooterAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer-admin.component.html */ "EbUq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let FooterAdminComponent = class FooterAdminComponent {
    constructor() {
        this.date = new Date().getFullYear();
    }
    ngOnInit() { }
};
FooterAdminComponent.ctorParameters = () => [];
FooterAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-footer-admin",
        template: _raw_loader_footer_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], FooterAdminComponent);



/***/ }),

/***/ "UY35":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dropdowns/table-dropdown/table-dropdown.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TableDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDropdownComponent", function() { return TableDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_table_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./table-dropdown.component.html */ "rOy2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ "EjV/");




let TableDropdownComponent = class TableDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngAfterViewInit() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
        }
    }
};
TableDropdownComponent.propDecorators = {
    btnDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["btnDropdownRef", { static: false },] }],
    popoverDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["popoverDropdownRef", { static: false },] }]
};
TableDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-table-dropdown",
        template: _raw_loader_table_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TableDropdownComponent);



/***/ }),

/***/ "UhXh":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/headers/header-stats/header-stats.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Header -->\n<div class=\"relative bg-red-600 md:pt-32 pb-32 pt-12\">\n  <div class=\"px-4 md:px-10 mx-auto w-full\">\n    <div>\n      <!-- Card stats -->\n      <div class=\"flex flex-wrap\">\n        <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\n          <app-card-stats\n            statSubtitle=\"TRAFFIC\"\n            statTitle=\"350,897\"\n            statArrow=\"up\"\n            statPercent=\"3.48\"\n            statPercentColor=\"text-emerald-500\"\n            statDescripiron=\"Since last month\"\n            statIconName=\"far fa-chart-bar\"\n            statIconColor=\"bg-red-500\"\n          ></app-card-stats>\n        </div>\n        <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\n          <app-card-stats\n            statSubtitle=\"NEW USERS\"\n            statTitle=\"2,356\"\n            statArrow=\"down\"\n            statPercent=\"3.48\"\n            statPercentColor=\"text-red-500\"\n            statDescripiron=\"Since last week\"\n            statIconName=\"fas fa-chart-pie\"\n            statIconColor=\"bg-orange-500\"\n          ></app-card-stats>\n        </div>\n        <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\n          <app-card-stats\n            statSubtitle=\"SALES\"\n            statTitle=\"924\"\n            statArrow=\"down\"\n            statPercent=\"1.10\"\n            statPercentColor=\"text-orange-500\"\n            statDescripiron=\"Since yesterday\"\n            statIconName=\"fas fa-users\"\n            statIconColor=\"bg-pink-500\"\n          ></app-card-stats>\n        </div>\n        <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\n          <app-card-stats\n            statSubtitle=\"PERFORMANCE\"\n            statTitle=\"49,65%\"\n            statArrow=\"up\"\n            statPercent=\"12\"\n            statPercentColor=\"text-emerald-500\"\n            statDescripiron=\"Since last month\"\n            statIconName=\"fas fa-percent\"\n            statIconColor=\"bg-emerald-500\"\n          ></app-card-stats>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "VTaN":
/*!********************************************************!*\
  !*** ./src/app/views/admin/tables/tables.component.ts ***!
  \********************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tables_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tables.component.html */ "a9TL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let TablesComponent = class TablesComponent {
    constructor() { }
    ngOnInit() { }
};
TablesComponent.ctorParameters = () => [];
TablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-tables",
        template: _raw_loader_tables_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TablesComponent);



/***/ }),

/***/ "Vbwu":
/*!************************************************!*\
  !*** ./src/app/layouts/auth/auth.component.ts ***!
  \************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth.component.html */ "dnvD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AuthComponent = class AuthComponent {
    constructor() { }
    ngOnInit() { }
};
AuthComponent.ctorParameters = () => [];
AuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-auth",
        template: _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AuthComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "W8yq":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/index/index.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-index-navbar></app-index-navbar>\n<section class=\"header relative pt-16 items-center flex h-screen max-h-860-px\">\n  <div class=\"container mx-auto items-center flex flex-wrap\">\n    <div class=\"w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4\">\n      <div class=\"pt-32 sm:pt-0\">\n        <h2 class=\"font-semibold text-4xl text-blueGray-600\">\n          Kalpavruksha NGO\n        </h2>\n        <h3 class=\"card-title py-4\">A Child without Education is like a Bird\n          without Wings. Join our Drive to make them Fly!</h3>\n        <div>\n          <h1 py-4>\n            Kalpavruksha is an <strong>NGO</strong> in India based in Mundgod(Karnataka). Established in 2022 we\n            have worked\n            extensively for more than years to reach out people from the underprivileged segment. Kalpavruksha\n            focusing on providing <strong>Rural development and Educational</strong> Rehabilitation to the\n            needy. We do this\n            through well-planned and comprehensive programs in education.\n          </h1>\n\n        </div>\n\n        <div class=\"mt-12\">\n          <a href=\"#contactus\"\n            class=\"get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-600 active:bg-red-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\">\n            Join Us\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <img class=\"absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px\"\n    src=\"assets/img/pic1.png\" alt=\"...\" />\n</section>\n\n<section class=\"mt-48 md:mt-40 pb-40 relative bg-blueGray-100\">\n  <div class=\"-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20\" style=\"transform: translateZ(0)\">\n    <svg class=\"absolute bottom-0 overflow-hidden\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"\n      version=\"1.1\" viewBox=\"0 0 2560 100\" x=\"0\" y=\"0\">\n      <polygon class=\"text-blueGray-100 fill-current\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n  <div class=\"container mx-auto\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32\">\n        <div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-600\">\n          <img alt=\"...\" src=\"assets/img/boy.jpg\" class=\"w-full align-middle rounded-t-lg\" />\n          <blockquote class=\"relative p-8 mb-4\">\n            <svg preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 583 95\"\n              class=\"absolute left-0 w-full block h-95-px -top-94-px\">\n              <polygon points=\"-30,95 583,95 583,65\" class=\"text-red-600 fill-current\"></polygon>\n            </svg>\n            <h4 class=\"text-xl font-bold text-white\">\n              Great for your skills\n            </h4>\n            <p class=\"text-md font-light mt-2 text-white\">\n              An NGO conducting training to support poor students in education is a noble endeavor. This type of\n              training program can help level the playing field for disadvantaged students by providing them with the\n              skills and knowledge they need to succeed in school. The training could cover a variety of subjects,\n              including study skills, financial literacy, and career planning. By offering these resources, the NGO can\n              help empower students to overcome their challenges and achieve their full potential\n            </p>\n          </blockquote>\n        </div>\n      </div>\n\n      <div class=\"w-full md:w-6/12 px-4\">\n        <div class=\"flex flex-wrap\">\n          <div class=\"w-full md:w-6/12 px-4\">\n            <div class=\"relative flex flex-col mt-4\">\n              <div class=\"px-4 py-5 flex-auto\">\n                <div\n                  class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\">\n                  <i class=\"fas fa-sitemap\"></i>\n                </div>\n                <h6 class=\"text-xl mb-1 font-semibold\">Computer skills</h6>\n                <p class=\"mb-4 text-blueGray-500\">\n                  Basic computer skills courses cover the most common usages of a computer\n                </p>\n              </div>\n            </div>\n            <div class=\"relative flex flex-col min-w-0\">\n              <div class=\"px-4 py-5 flex-auto\">\n                <div\n                  class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\">\n                  <i class=\"fas fa-drafting-compass\"></i>\n                </div>\n                <h6 class=\"text-xl mb-1 font-semibold\">\n                  Online Traning\n                </h6>\n                <p class=\"mb-4 text-blueGray-500\">\n                  Face the future with confidence—and with the skills and tools to thrive..\n                </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"w-full md:w-6/12 px-4\">\n            <div class=\"relative flex flex-col min-w-0 mt-4\">\n              <div class=\"px-4 py-5 flex-auto\">\n                <div\n                  class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\">\n                  <i class=\"fas fa-newspaper\"></i>\n                </div>\n                <h6 class=\"text-xl mb-1 font-semibold\">Job consultancy</h6>\n                <p class=\"mb-4 text-blueGray-500\">\n                  We provide talent acquisition services based on our domain knowledge..\n                </p>\n              </div>\n            </div>\n            <div class=\"relative flex flex-col min-w-0\">\n              <div class=\"px-4 py-5 flex-auto\">\n                <div\n                  class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\">\n                  <i class=\"fas fa-file-alt\"></i>\n                </div>\n                <h6 class=\"text-xl mb-1 font-semibold\">Documentation</h6>\n                <p class=\"mb-4 text-blueGray-500\">\n                  Documentation is any communicable material that is used to describe, explain or instruct regarding\n                  some attributes of an object, system or procedure, such as its parts, assembly, installation,\n                  maintenance and use.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- <div class=\"container mx-auto overflow-hidden pb-20\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48\">\n        <div\n          class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\">\n          <i class=\"fas fa-sitemap text-xl\"></i>\n        </div>\n        <h3 class=\"text-3xl mb-2 font-semibold leading-normal\">\n          CSS Components\n        </h3>\n        <p class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600\">\n          Every element that you need in a product comes built in as a\n          component. All components fit perfectly with each other and can have\n          different colours.\n        </p>\n        <div class=\"block pb-6\">\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            Buttons\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            Inputs\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            Labels\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            Menus\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            Navbars\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            Pagination\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            Progressbars\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            Typography\n          </span>\n        </div>\n        <a href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=na-index-page\"\n          target=\"_blank\"\n          class=\"font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150\">\n          View All\n          <i class=\"fa fa-angle-double-right ml-1 leading-relaxed\"></i>\n        </a>\n      </div>\n\n      <div class=\"w-full md:w-5/12 px-4 mr-auto ml-auto mt-32\">\n        <div class=\"relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0\">\n          <img alt=\"...\" src=\"assets/img/component-btn.png\"\n            class=\"w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3\" />\n          <img alt=\"...\" src=\"assets/img/component-profile-card.png\"\n            class=\"w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px\" />\n          <img alt=\"...\" src=\"assets/img/component-info-card.png\"\n            class=\"w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2\" />\n          <img alt=\"...\" src=\"assets/img/component-info-2.png\"\n            class=\"w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px\" />\n          <img alt=\"...\" src=\"assets/img/component-menu.png\"\n            class=\"w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px\" />\n          <img alt=\"...\" src=\"assets/img/component-btn-pink.png\"\n            class=\"w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px\" />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"flex flex-wrap items-center pt-32\">\n      <div class=\"w-full md:w-6/12 px-4 mr-auto ml-auto mt-32\">\n        <div class=\"justify-center flex flex-wrap relative\">\n          <div class=\"my-4 w-full lg:w-6/12 px-4\">\n            <a href=\"https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index\"\n              target=\"_blank\">\n              <div class=\"bg-red-600 shadow-lg rounded-lg text-center p-8\">\n                <img alt=\"...\" class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg\" />\n                <p class=\"text-lg text-white mt-4 font-semibold\">Svelte</p>\n              </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index\"\n              target=\"_blank\">\n              <div class=\"bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8\">\n                <img alt=\"...\" class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg\" />\n                <p class=\"text-lg text-white mt-4 font-semibold\">ReactJS</p>\n              </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index\"\n              target=\"_blank\">\n              <div class=\"bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8\">\n                <img alt=\"...\" class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg\" />\n                <p class=\"text-lg text-white mt-4 font-semibold\">NextJS</p>\n              </div>\n            </a>\n          </div>\n          <div class=\"my-4 w-full lg:w-6/12 px-4 lg:mt-16\">\n            <a href=\"https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index\" target=\"_blank\">\n              <div class=\"bg-yellow-500 shadow-lg rounded-lg text-center p-8\">\n                <img alt=\"...\" class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png\" />\n                <p class=\"text-lg text-white mt-4 font-semibold\">JavaScript</p>\n              </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index\"\n              target=\"_blank\">\n              <div class=\"bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8\">\n                <img alt=\"...\" class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg\" />\n                <p class=\"text-lg text-white mt-4 font-semibold\">Angular</p>\n              </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index\" target=\"_blank\">\n              <div class=\"bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8\">\n                <img alt=\"...\" class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg\" />\n                <p class=\"text-lg text-white mt-4 font-semibold\">Vue.js</p>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48\">\n        <div\n          class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\">\n          <i class=\"fas fa-drafting-compass text-xl\"></i>\n        </div>\n        <h3 class=\"text-3xl mb-2 font-semibold leading-normal\">\n          Javascript Components\n        </h3>\n        <p class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600\">\n          In order to create a great User Experience some components require\n          JavaScript. In this way you can manipulate the elements on the page\n          and give more options to your users.\n        </p>\n        <p class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600\">\n          We created a set of Components that are dynamic and come to help you.\n        </p>\n        <div class=\"block pb-6\">\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            Alerts\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            Dropdowns\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            Menus\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            Modals\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            Navbars\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            Popovers\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            Tabs\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            Tooltips\n          </span>\n        </div>\n        <a href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=na-index-page\"\n          target=\"_blank\"\n          class=\"font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150\">\n          View all\n          <i class=\"fa fa-angle-double-right ml-1 leading-relaxed\"></i>\n        </a>\n      </div>\n    </div>\n  </div> -->\n\n  <!-- <div class=\"container mx-auto px-4 pb-32 pt-48\">\n    <div class=\"items-center flex flex-wrap\">\n      <div class=\"w-full md:w-5/12 ml-auto px-12 md:px-4\">\n        <div class=\"md:pr-12\">\n          <div\n            class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\">\n            <i class=\"fas fa-file-alt text-xl\"></i>\n          </div>\n          <h3 class=\"text-3xl font-semibold\">Complex Documentation</h3>\n          <p class=\"mt-4 text-lg leading-relaxed text-blueGray-500\">\n            This extension comes a lot of fully coded examples that help you get\n            started faster. You can adjust the colors and also the programming\n            language. You can change the text and images and you're good to go.\n          </p>\n          <ul class=\"list-none mt-6\">\n            <li class=\"py-2\">\n              <div class=\"flex items-center\">\n                <div>\n                  <span\n                    class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3\">\n                    <i class=\"fas fa-fingerprint\"></i>\n                  </span>\n                </div>\n                <div>\n                  <h4 class=\"text-blueGray-500\">\n                    Built by Developers for Developers\n                  </h4>\n                </div>\n              </div>\n            </li>\n            <li class=\"py-2\">\n              <div class=\"flex items-center\">\n                <div>\n                  <span\n                    class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3\">\n                    <i class=\"fab fa-html5\"></i>\n                  </span>\n                </div>\n                <div>\n                  <h4 class=\"text-blueGray-500\">\n                    Carefully crafted code for Components\n                  </h4>\n                </div>\n              </div>\n            </li>\n            <li class=\"py-2\">\n              <div class=\"flex items-center\">\n                <div>\n                  <span\n                    class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3\">\n                    <i class=\"far fa-paper-plane\"></i>\n                  </span>\n                </div>\n                <div>\n                  <h4 class=\"text-blueGray-500\">\n                    Dynamic Javascript Components\n                  </h4>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0\">\n        <img alt=\"...\" class=\"max-w-full rounded-lg shadow-xl\" style=\"\n            transform: scale(1) perspective(1040px) rotateY(-11deg)\n              rotateX(2deg) rotate(2deg);\n          \" src=\"assets/img/documentation.png\" />\n      </div>\n    </div>\n  </div> -->\n\n  <div class=\"justify-center text-center flex flex-wrap mt-24\">\n    <div class=\"w-full md:w-6/12 px-12 md:px-4\">\n      <h2 class=\"font-semibold text-4xl\">Events gallery</h2>\n      <p class=\"text-lg leading-relaxed mt-4 mb-4 text-blueGray-500\">\n        The photo gallery will give you an idea of the variety of projects supported by the NGO, be it through the creative working methods used, themes and topics addressed or outcomes of activities.\n      </p>\n    </div>\n  </div>\n</section>\n\n<section class=\"block relative z-1 bg-blueGray-600\">\n  <div class=\"container mx-auto\">\n    <div class=\"justify-center flex flex-wrap\">\n      <div class=\"w-full lg:w-12/12 px-4 -mt-24\">\n        <div class=\"flex flex-wrap\">\n            <div *ngFor=\"let imageObj1 of imagesObj\" class=\"w-full lg:w-6/12 px-4\">\n            <h5 class=\"text-xl font-semibold pb-4 text-center\">{{imageObj1.name}}</h5>\n            <a href=\"{{imageObj1.src}}\">\n              <div\n              class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\">\n              <img alt=\"...\" class=\"align-middle border-none max-w-full h-auto rounded-lg\"\n                src=\"{{imageObj1.src}}\" />\n              </div>\n            </a>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"block relative z-1 bg-blueGray-600\">\n  <div class=\"container mx-auto\">\n    <div class=\"justify-center flex flex-wrap\">\n      <div class=\"w-full lg:w-12/12 px-4 -mt-24\">\n        <div class=\"flex flex-wrap\">\n            <div *ngFor=\"let imageObj1 of imagesNewsObj\" class=\"w-full lg:w-6/12 px-4\">\n            <h5 class=\"text-xl font-semibold pb-4 text-center\">{{imageObj1.name}}</h5>\n            <a href=\"{{imageObj1.src}}\">\n              <div\n              class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\">\n              <img alt=\"...\" class=\"align-middle border-none max-w-full h-auto rounded-lg\"\n                src=\"{{imageObj1.src}}\" />\n              </div>\n            </a>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"block relative z-1 bg-blueGray-600\">\n  <div class=\"container mx-auto\">\n    <div class=\"justify-center flex flex-wrap\">\n      <div class=\"w-full lg:w-12/12 px-4 -mt-24\">\n        <div class=\"flex flex-wrap\">\n            <div *ngFor=\"let imageObj1 of imagesGroupObj\" class=\"w-full lg:w-6/12 px-4\">\n            <h5 class=\"text-xl font-semibold pb-4 text-center\">{{imageObj1.name}}</h5>\n            <a href=\"{{imageObj1.src}}\">\n              <div\n              class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\">\n              <img alt=\"...\" class=\"align-middle border-none max-w-full h-auto rounded-lg\"\n                src=\"{{imageObj1.src}}\" />\n              </div>\n            </a>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"block relative z-1 bg-blueGray-600\">\n  <div class=\"container mx-auto\">\n    <div class=\"justify-center flex flex-wrap\">\n      <div class=\"w-full lg:w-12/12 px-4 -mt-24\">\n        <div class=\"flex flex-wrap\">\n            <div *ngFor=\"let imageObj1 of imagesTreeObj\" class=\"w-full lg:w-6/12 px-4\">\n            <h5 class=\"text-xl font-semibold pb-4 text-center\">{{imageObj1.name}}</h5>\n            <a href=\"{{imageObj1.src}}\">\n              <div\n              class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\">\n              <img alt=\"...\" class=\"align-middle border-none max-w-full h-auto rounded-lg\"\n                src=\"{{imageObj1.src}}\" />\n              </div>\n            </a>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"py-20 bg-blueGray-600 overflow-hidden\">\n  <!-- <div class=\"container mx-auto pb-64\">\n    <div class=\"flex flex-wrap justify-center\">\n      <div class=\"w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64\">\n        <div\n          class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\">\n          <i class=\"fas fa-code-branch text-xl\"></i>\n        </div>\n        <h3 class=\"text-3xl mb-2 font-semibold leading-normal text-white\">\n          Open Source\n        </h3>\n        <p class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400\">\n          Since\n          <a href=\"https://tailwindcss.com/?ref=creativetim\" class=\"text-blueGray-300\" target=\"_blank\">\n            Tailwind CSS\n          </a>\n          is an open source project we wanted to continue this movement too. You\n          can give this version a try to feel the design and also test the\n          quality of the code!\n        </p>\n        <p class=\"text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400\">\n          Get it free on Github and please help us spread the news with a Star!\n        </p>\n        <a href=\"https://github.com/creativetimofficial/notus-angular?ref=creativetim\" target=\"_blank\"\n          class=\"github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\">\n          Github Star\n        </a>\n      </div>\n\n      <div class=\"w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative\">\n        <i class=\"fab fa-github text-blueGray-700 text-55 absolute -top-150-px -right-100 left-auto opacity-80\"></i>\n      </div>\n    </div>\n  </div> -->\n</section>\n\n<section class=\"pb-16 bg-blueGray-200 relative pt-32\">\n  <div class=\"-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20\" style=\"transform: translateZ(0)\">\n    <svg class=\"absolute bottom-0 overflow-hidden\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"\n      version=\"1.1\" viewBox=\"0 0 2560 100\" x=\"0\" y=\"0\">\n      <polygon class=\"text-blueGray-200 fill-current\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n\n  <div class=\"container mx-auto\" id=\"contactus\">\n    <div class=\"flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10\">\n      <div class=\"w-full text-center lg:w-8/12\">\n        <p class=\"text-4xl text-center\">\n        </p>\n        <h3 class=\"font-semibold text-3xl mb-6\">Contact us...</h3>\n        <table style=\"width: 100%;\">\n          <tbody>\n            <tr>\n              <td class=\"text-2xl text-center\">Name</td>\n              <td class=\"text-2xl text-center\">Khajasab</td>\n          </tr>\n              <tr>\n                  <td class=\"text-2xl text-center\">Address</td>\n                  <td class=\"text-2xl text-center\"> Mundgod-581349</td>\n              </tr>\n              <tr>\n                  <td class=\"text-2xl text-center\">Phone</td>\n                  <td class=\"text-2xl text-center\">+919113024600</td>\n              </tr>\n              <tr>\n                  <td class=\"text-2xl text-center\">Email</td>\n                  <td class=\"text-2xl text-center\">kalpavruksha.rdes@gmail.com</td>\n              </tr>\n              <tr>\n                  <td class=\"text-2xl text-center\">Website</td>\n                  <td class=\"text-2xl text-center\">www.ai.com</td>\n              </tr>\n          </tbody>\n      </table>\n        <div class=\"text-center mt-16\"></div>\n      </div>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>");

/***/ }),

/***/ "Xodl":
/*!***************************************************************************!*\
  !*** ./src/app/components/navbars/admin-navbar/admin-navbar.component.ts ***!
  \***************************************************************************/
/*! exports provided: AdminNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNavbarComponent", function() { return AdminNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-navbar.component.html */ "Pibi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AdminNavbarComponent = class AdminNavbarComponent {
    constructor() { }
    ngOnInit() { }
};
AdminNavbarComponent.ctorParameters = () => [];
AdminNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-admin-navbar",
        template: _raw_loader_admin_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AdminNavbarComponent);



/***/ }),

/***/ "XqAX":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/notification-dropdown/notification-dropdown.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\n  class=\"text-blueGray-500 block py-1 px-3\"\n  href=\"#pablo\"\n  (click)=\"toggleDropdown($event)\"\n  #btnDropdownRef\n>\n  <i class=\"fas fa-bell\"></i>\n</a>\n<div class=\"min-w-48 z-50\" #popoverDropdownRef>\n  <div\n    class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48\"\n    [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\n  >\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Action\n    </a>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Another action\n    </a>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Something else here\n    </a>\n    <div class=\"h-0 my-2 border border-solid border-blueGray-100\"></div>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Seprated link\n    </a>\n  </div>\n</div>\n");

/***/ }),

/***/ "YV8C":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/settings/settings.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex flex-wrap\">\n  <div class=\"w-full lg:w-8/12 px-4\">\n    <app-card-settings></app-card-settings>\n  </div>\n  <div class=\"w-full lg:w-4/12 px-4\">\n    <app-card-profile></app-card-profile>\n  </div>\n</div>\n");

/***/ }),

/***/ "YpXG":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-social-traffic/card-social-traffic.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\n>\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\n        <h3 class=\"font-semibold text-base text-blueGray-700\">\n          Social traffic\n        </h3>\n      </div>\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1 text-right\">\n        <button\n          class=\"bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"button\"\n        >\n          See all\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"block w-full overflow-x-auto\">\n    <!-- Projects table -->\n    <table class=\"items-center w-full bg-transparent border-collapse\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n          >\n            Referral\n          </th>\n          <th\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n          >\n            Visitors\n          </th>\n          <th\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px\"\n          ></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            Facebook\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            1,480\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">60%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-red-200\"\n                >\n                  <div\n                    style=\"width: 60%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            Facebook\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            5,480\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">70%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-emerald-200\"\n                >\n                  <div\n                    style=\"width: 70%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            Google\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            4,807\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">80%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-purple-200\"\n                >\n                  <div\n                    style=\"width: 80%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            Instagram\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            3,678\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">75%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200\"\n                >\n                  <div\n                    style=\"width: 75%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            twitter\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            2,645\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">30%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-orange-200\"\n                >\n                  <div\n                    style=\"width: 30%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/admin/admin.component */ "R+tk");
/* harmony import */ var _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/auth/auth.component */ "Vbwu");
/* harmony import */ var _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/admin/dashboard/dashboard.component */ "zmeh");
/* harmony import */ var _views_admin_maps_maps_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/admin/maps/maps.component */ "rKqC");
/* harmony import */ var _views_admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/admin/settings/settings.component */ "90Li");
/* harmony import */ var _views_admin_tables_tables_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/admin/tables/tables.component */ "VTaN");
/* harmony import */ var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/auth/login/login.component */ "/kjZ");
/* harmony import */ var _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/auth/register/register.component */ "LN9C");
/* harmony import */ var _views_index_index_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/index/index.component */ "AiJS");
/* harmony import */ var _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/landing/landing.component */ "RMzx");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/profile/profile.component */ "wF9P");
/* harmony import */ var _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navbars/admin-navbar/admin-navbar.component */ "Xodl");
/* harmony import */ var _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/navbars/auth-navbar/auth-navbar.component */ "zslb");
/* harmony import */ var _components_cards_card_bar_chart_card_bar_chart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/cards/card-bar-chart/card-bar-chart.component */ "TmC4");
/* harmony import */ var _components_cards_card_line_chart_card_line_chart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/cards/card-line-chart/card-line-chart.component */ "+Kwz");
/* harmony import */ var _components_cards_card_page_visits_card_page_visits_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/cards/card-page-visits/card-page-visits.component */ "3IhM");
/* harmony import */ var _components_cards_card_profile_card_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/cards/card-profile/card-profile.component */ "diaN");
/* harmony import */ var _components_cards_card_settings_card_settings_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/cards/card-settings/card-settings.component */ "vwLF");
/* harmony import */ var _components_cards_card_social_traffic_card_social_traffic_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/cards/card-social-traffic/card-social-traffic.component */ "xud4");
/* harmony import */ var _components_cards_card_stats_card_stats_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/cards/card-stats/card-stats.component */ "J87Q");
/* harmony import */ var _components_cards_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/cards/card-table/card-table.component */ "uhhN");
/* harmony import */ var _components_footers_footer_admin_footer_admin_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/footers/footer-admin/footer-admin.component */ "UIMn");
/* harmony import */ var _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/footers/footer/footer.component */ "1DoU");
/* harmony import */ var _components_footers_footer_small_footer_small_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/footers/footer-small/footer-small.component */ "xlab");
/* harmony import */ var _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/headers/header-stats/header-stats.component */ "RLAj");
/* harmony import */ var _components_navbars_index_navbar_index_navbar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/navbars/index-navbar/index-navbar.component */ "4b2p");
/* harmony import */ var _components_maps_map_example_map_example_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/maps/map-example/map-example.component */ "u/sr");
/* harmony import */ var _components_dropdowns_index_dropdown_index_dropdown_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/dropdowns/index-dropdown/index-dropdown.component */ "J8Ne");
/* harmony import */ var _components_dropdowns_table_dropdown_table_dropdown_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/dropdowns/table-dropdown/table-dropdown.component */ "UY35");
/* harmony import */ var _components_dropdowns_pages_dropdown_pages_dropdown_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/dropdowns/pages-dropdown/pages-dropdown.component */ "wcq5");
/* harmony import */ var _components_dropdowns_notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/dropdowns/notification-dropdown/notification-dropdown.component */ "Skd6");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _components_dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/dropdowns/user-dropdown/user-dropdown.component */ "0slC");





// layouts


// admin views




// auth views


// no layouts views



// components for views and layouts






















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
            _components_cards_card_bar_chart_card_bar_chart_component__WEBPACK_IMPORTED_MODULE_18__["CardBarChartComponent"],
            _components_cards_card_line_chart_card_line_chart_component__WEBPACK_IMPORTED_MODULE_19__["CardLineChartComponent"],
            _components_dropdowns_index_dropdown_index_dropdown_component__WEBPACK_IMPORTED_MODULE_32__["IndexDropdownComponent"],
            _components_dropdowns_pages_dropdown_pages_dropdown_component__WEBPACK_IMPORTED_MODULE_34__["PagesDropdownComponent"],
            _components_dropdowns_table_dropdown_table_dropdown_component__WEBPACK_IMPORTED_MODULE_33__["TableDropdownComponent"],
            _components_dropdowns_notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_35__["NotificationDropdownComponent"],
            _components_dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_37__["UserDropdownComponent"],
            _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_36__["SidebarComponent"],
            _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"],
            _components_footers_footer_small_footer_small_component__WEBPACK_IMPORTED_MODULE_28__["FooterSmallComponent"],
            _components_footers_footer_admin_footer_admin_component__WEBPACK_IMPORTED_MODULE_26__["FooterAdminComponent"],
            _components_cards_card_page_visits_card_page_visits_component__WEBPACK_IMPORTED_MODULE_20__["CardPageVisitsComponent"],
            _components_cards_card_profile_card_profile_component__WEBPACK_IMPORTED_MODULE_21__["CardProfileComponent"],
            _components_cards_card_settings_card_settings_component__WEBPACK_IMPORTED_MODULE_22__["CardSettingsComponent"],
            _components_cards_card_social_traffic_card_social_traffic_component__WEBPACK_IMPORTED_MODULE_23__["CardSocialTrafficComponent"],
            _components_cards_card_stats_card_stats_component__WEBPACK_IMPORTED_MODULE_24__["CardStatsComponent"],
            _components_cards_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_25__["CardTableComponent"],
            _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_29__["HeaderStatsComponent"],
            _components_maps_map_example_map_example_component__WEBPACK_IMPORTED_MODULE_31__["MapExampleComponent"],
            _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_17__["AuthNavbarComponent"],
            _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_16__["AdminNavbarComponent"],
            _components_navbars_index_navbar_index_navbar_component__WEBPACK_IMPORTED_MODULE_30__["IndexNavbarComponent"],
            _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
            _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"],
            _views_admin_maps_maps_component__WEBPACK_IMPORTED_MODULE_8__["MapsComponent"],
            _views_admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"],
            _views_admin_tables_tables_component__WEBPACK_IMPORTED_MODULE_10__["TablesComponent"],
            _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
            _views_index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"],
            _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_14__["LandingComponent"],
            _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "a9TL":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/tables/tables.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex flex-wrap mt-4\">\n  <div class=\"w-full mb-12 px-4\">\n    <app-card-table></app-card-table>\n  </div>\n  <div class=\"w-full mb-12 px-4\">\n    <app-card-table color=\"dark\"></app-card-table>\n  </div>\n</div>\n");

/***/ }),

/***/ "c9Li":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-profile/card-profile.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16\"\n>\n  <div class=\"px-6\">\n    <div class=\"flex flex-wrap justify-center\">\n      <div class=\"w-full px-4 flex justify-center\">\n        <div class=\"relative\">\n          <img\n            alt=\"...\"\n            src=\"assets/img/team-2-800x800.jpg\"\n            class=\"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px\"\n          />\n        </div>\n      </div>\n      <div class=\"w-full px-4 text-center mt-20\">\n        <div class=\"flex justify-center py-4 lg:pt-4 pt-8\">\n          <div class=\"mr-4 p-3 text-center\">\n            <span\n              class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\n            >\n              22\n            </span>\n            <span class=\"text-sm text-blueGray-400\">Friends</span>\n          </div>\n          <div class=\"mr-4 p-3 text-center\">\n            <span\n              class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\n            >\n              10\n            </span>\n            <span class=\"text-sm text-blueGray-400\">Photos</span>\n          </div>\n          <div class=\"lg:mr-4 p-3 text-center\">\n            <span\n              class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\n            >\n              89\n            </span>\n            <span class=\"text-sm text-blueGray-400\">Comments</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"text-center mt-12\">\n      <h3\n        class=\"text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2\"\n      >\n        Jenna Stones\n      </h3>\n      <div\n        class=\"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase\"\n      >\n        <i class=\"fas fa-map-marker-alt mr-2 text-lg text-blueGray-400\"></i>\n        Los Angeles, California\n      </div>\n      <div class=\"mb-2 text-blueGray-600 mt-10\">\n        <i class=\"fas fa-briefcase mr-2 text-lg text-blueGray-400\"></i>\n        Solution Manager - Creative Tim Officer\n      </div>\n      <div class=\"mb-2 text-blueGray-600\">\n        <i class=\"fas fa-university mr-2 text-lg text-blueGray-400\"></i>\n        University of Computer Science\n      </div>\n    </div>\n    <div class=\"mt-10 py-10 border-t border-blueGray-200 text-center\">\n      <div class=\"flex flex-wrap justify-center\">\n        <div class=\"w-full lg:w-9/12 px-4\">\n          <p class=\"mb-4 text-lg leading-relaxed text-blueGray-700\">\n            An artist of considerable range, Jenna the name taken by\n            Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and\n            records all of his own music, giving it a warm, intimate feel with a\n            solid groove structure. An artist of considerable range.\n          </p>\n          <a href=\"javascript:void(0);\" class=\"font-normal text-red-600\">\n            Show more\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "diaN":
/*!*************************************************************************!*\
  !*** ./src/app/components/cards/card-profile/card-profile.component.ts ***!
  \*************************************************************************/
/*! exports provided: CardProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardProfileComponent", function() { return CardProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-profile.component.html */ "c9Li");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardProfileComponent = class CardProfileComponent {
    constructor() { }
    ngOnInit() { }
};
CardProfileComponent.ctorParameters = () => [];
CardProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-profile",
        template: _raw_loader_card_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardProfileComponent);



/***/ }),

/***/ "dnvD":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-auth-navbar></app-auth-navbar>\n  <main>\n    <section class=\"relative w-full h-full py-40 min-h-screen\">\n      <div\n        class=\"absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full\"\n        style=\"background-image: url('assets/img/register_bg_2.png')\"\n      ></div>\n      <router-outlet></router-outlet>\n      <app-footer-small [absolute]=\"true\"></app-footer-small>\n    </section>\n  </main>\n</div>\n");

/***/ }),

/***/ "e8es":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/index-dropdown/index-dropdown.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\n  class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\n  href=\"#pablo\"\n  (click)=\"toggleDropdown($event)\"\n  #btnDropdownRef\n>\n  Pages\n</a>\n<div\n  class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48\"\n  [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\n  #popoverDropdownRef\n>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\n  >\n    Admin Layout\n  </span>\n  <a\n    [routerLink]=\"['/admin/dashboard']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Dashboard\n  </a>\n  <a\n    [routerLink]=\"['/admin/settings']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Settings\n  </a>\n  <a\n    [routerLink]=\"['/admin/tables']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Tables\n  </a>\n  <a\n    [routerLink]=\"['/admin/maps']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Maps\n  </a>\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\n  >\n    Auth Layout\n  </span>\n  <a\n    [routerLink]=\"['/auth/login']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Login\n  </a>\n  <a\n    [routerLink]=\"['/auth/register']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Register\n  </a>\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\n  >\n    No Layout\n  </span>\n  <a\n    [routerLink]=\"['/landing']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Landing\n  </a>\n  <a\n    [routerLink]=\"['/profile']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Profile\n  </a>\n</div>\n");

/***/ }),

/***/ "e8ip":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/auth-navbar/auth-navbar.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg\"\n>\n  <div\n    class=\"container px-4 mx-auto flex flex-wrap items-center justify-between\"\n  >\n    <div\n      class=\"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start\"\n    >\n      <a\n        [routerLink]=\"['/']\"\n        class=\"text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase\"\n      >\n      Kalpavruksha NGO\n      </a>\n      <button\n        class=\"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none\"\n        type=\"button\"\n        (click)=\"setNavbarOpen()\"\n      >\n        <i class=\"text-white fas fa-bars\"></i>\n      </button>\n    </div>\n    <div\n      class=\"lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none\"\n      [ngClass]=\"{ hidden: !navbarOpen, 'block rounded shadow-lg': navbarOpen }\"\n      id=\"example-navbar-warning\"\n    >\n      <!-- <ul class=\"flex flex-col lg:flex-row list-none mr-auto\">\n        <li class=\"flex items-center\">\n          <a\n            class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus?ref=na-auth-navbar\"\n          >\n            <i\n              class=\"lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2\"\n            ></i>\n            Docs\n          </a>\n        </li>\n      </ul> -->\n      <ul class=\"flex flex-col lg:flex-row list-none lg:ml-auto\">\n        <li class=\"flex items-center\">\n          <app-pages-dropdown class=\"block\"></app-pages-dropdown>\n        </li>\n        <li class=\"flex items-center\">\n          <a\n            class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\n            href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F\"\n            target=\"_blank\"\n          >\n            <i\n              class=\"lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg\"\n            ></i>\n            <span class=\"lg:hidden inline-block ml-2\">Share</span>\n          </a>\n        </li>\n\n        <li class=\"flex items-center\">\n          <a\n            class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\n            href=\"https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20Angular%20UI%20Kit%20and%20Admin.%20Let%20Notus%20Angular%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.\"\n            target=\"_blank\"\n          >\n            <i\n              class=\"lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg\"\n            ></i>\n            <span class=\"lg:hidden inline-block ml-2\">Tweet</span>\n          </a>\n        </li>\n\n        <!-- <li class=\"flex items-center\">\n          <a\n            class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\n            href=\"https://github.com/creativetimofficial/notus-angular?ref=na-auth-navbar\"\n            target=\"_blank\"\n          >\n            <i\n              class=\"lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg\"\n            ></i>\n            <span class=\"lg:hidden inline-block ml-2\">Star</span>\n          </a>\n        </li> -->\n\n        <li class=\"flex items-center\">\n          <button href=\"#contactus\"\n            class=\"bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150\"\n            type=\"button\"\n          >\n            <i class=\"fas fa-arrow-alt-circle-down\"></i> Contact\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "eix7":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-settings/card-settings.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0\"\n>\n  <div class=\"rounded-t bg-white mb-0 px-6 py-6\">\n    <div class=\"text-center flex justify-between\">\n      <h6 class=\"text-blueGray-700 text-xl font-bold\">My account</h6>\n      <button\n        class=\"bg-red-600 text-white active:bg-red-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150\"\n        type=\"button\"\n      >\n        Settings\n      </button>\n    </div>\n  </div>\n  <div class=\"flex-auto px-4 lg:px-10 py-10 pt-0\">\n    <form>\n      <h6 class=\"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase\">\n        User Information\n      </h6>\n      <div class=\"flex flex-wrap\">\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              Username\n            </label>\n            <input\n              type=\"text\"\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n              value=\"lucky.jesse\"\n            />\n          </div>\n        </div>\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              Email address\n            </label>\n            <input\n              type=\"email\"\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n              value=\"jesse@example.com\"\n            />\n          </div>\n        </div>\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              First Name\n            </label>\n            <input\n              type=\"text\"\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n              value=\"Lucky\"\n            />\n          </div>\n        </div>\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              Last Name\n            </label>\n            <input\n              type=\"text\"\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n              value=\"Jesse\"\n            />\n          </div>\n        </div>\n      </div>\n\n      <hr class=\"mt-6 border-b-1 border-blueGray-300\" />\n\n      <h6 class=\"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase\">\n        Contact Information\n      </h6>\n      <div class=\"flex flex-wrap\">\n        <div class=\"w-full lg:w-12/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              Address\n            </label>\n            <input\n              type=\"text\"\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n              value=\"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09\"\n            />\n          </div>\n        </div>\n        <div class=\"w-full lg:w-4/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              City\n            </label>\n            <input\n              type=\"email\"\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n              value=\"New York\"\n            />\n          </div>\n        </div>\n        <div class=\"w-full lg:w-4/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              Country\n            </label>\n            <input\n              type=\"text\"\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n              value=\"United States\"\n            />\n          </div>\n        </div>\n        <div class=\"w-full lg:w-4/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              Postal Code\n            </label>\n            <input\n              type=\"text\"\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n              value=\"Postal Code\"\n            />\n          </div>\n        </div>\n      </div>\n\n      <hr class=\"mt-6 border-b-1 border-blueGray-300\" />\n\n      <h6 class=\"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase\">\n        About Me\n      </h6>\n      <div class=\"flex flex-wrap\">\n        <div class=\"w-full lg:w-12/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              About me\n            </label>\n            <textarea\n              type=\"text\"\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n              rows=\"4\"\n            >\n                  A beautiful UI Kit and Admin for Angular & Tailwind CSS. It is Free\n                  and Open Source.\n                </textarea\n            >\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "lLla":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-line-chart/card-line-chart.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700\"\n>\n  <div class=\"rounded-t mb-0 px-4 py-3 bg-transparent\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"relative w-full max-w-full flex-grow flex-1\">\n        <h6 class=\"uppercase text-blueGray-100 mb-1 text-xs font-semibold\">\n          Overview\n        </h6>\n        <h2 class=\"text-white text-xl font-semibold\">Sales value</h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"p-4 flex-auto\">\n    <!-- Chart -->\n    <div class=\"relative\" style=\"height: 350px\">\n      <canvas id=\"line-chart\"></canvas>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "oqF8":
/*!****************************!*\
  !*** ./src/app/message.ts ***!
  \****************************/
/*! exports provided: message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "message", function() { return message; });
const message = {
    title: 'Kalpavruksha NGO'
};


/***/ }),

/***/ "owMO":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/pages-dropdown/pages-dropdown.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\n  class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\n  href=\"#pablo\"\n  (click)=\"toggleDropdown($event)\"\n  #btnDropdownRef\n>\n  Pages\n</a>\n<div\n  class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48\"\n  [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\n  #popoverDropdownRef\n>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\n  >\n    Admin Layout\n  </span>\n  <a\n    [routerLink]=\"['/admin/dashboard']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Dashboard\n  </a>\n  <a\n    [routerLink]=\"['/admin/settings']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Settings\n  </a>\n  <a\n    [routerLink]=\"['/admin/tables']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Tables\n  </a>\n  <a\n    [routerLink]=\"['/admin/maps']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Maps\n  </a>\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\n  >\n    Auth Layout\n  </span>\n  <a\n    [routerLink]=\"['/auth/login']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Login\n  </a>\n  <a\n    [routerLink]=\"['/auth/register']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Register\n  </a>\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\n  >\n    No Layout\n  </span>\n  <a\n    [routerLink]=\"['/landing']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Landing\n  </a>\n  <a\n    [routerLink]=\"['/profile']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Profile\n  </a>\n</div>\n");

/***/ }),

/***/ "rKqC":
/*!****************************************************!*\
  !*** ./src/app/views/admin/maps/maps.component.ts ***!
  \****************************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_maps_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./maps.component.html */ "165v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let MapsComponent = class MapsComponent {
    constructor() { }
    ngOnInit() { }
};
MapsComponent.ctorParameters = () => [];
MapsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-maps",
        template: _raw_loader_maps_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], MapsComponent);



/***/ }),

/***/ "rOy2":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/table-dropdown/table-dropdown.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\n  class=\"text-blueGray-500 block py-1 px-3\"\n  href=\"#pablo\"\n  (click)=\"toggleDropdown($event)\"\n  #btnDropdownRef\n>\n  <i class=\"fas fa-ellipsis-v\"></i>\n</a>\n<div class=\"min-w-48 z-50\" #popoverDropdownRef>\n  <div\n    class=\"bg-white text-base float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48\"\n    [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\n  >\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Action\n    </a>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Another action\n    </a>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Something else here\n    </a>\n    <div class=\"h-0 my-2 border border-solid border-blueGray-100\"></div>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Seprated link\n    </a>\n  </div>\n</div>\n");

/***/ }),

/***/ "u/sr":
/*!**********************************************************************!*\
  !*** ./src/app/components/maps/map-example/map-example.component.ts ***!
  \**********************************************************************/
/*! exports provided: MapExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapExampleComponent", function() { return MapExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_map_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./map-example.component.html */ "xkbx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let MapExampleComponent = class MapExampleComponent {
    constructor() { }
    ngOnInit() {
        let map = document.getElementById("map-canvas");
        let lat = map.getAttribute("data-lat");
        let lng = map.getAttribute("data-lng");
        const myLatlng = new google.maps.LatLng(lat, lng);
        const mapOptions = {
            zoom: 12,
            scrollwheel: false,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#444444" }],
                },
                {
                    featureType: "landscape",
                    elementType: "all",
                    stylers: [{ color: "#f2f2f2" }],
                },
                {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "road",
                    elementType: "all",
                    stylers: [{ saturation: -100 }, { lightness: 45 }],
                },
                {
                    featureType: "road.highway",
                    elementType: "all",
                    stylers: [{ visibility: "simplified" }],
                },
                {
                    featureType: "road.arterial",
                    elementType: "labels.icon",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "transit",
                    elementType: "all",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "water",
                    elementType: "all",
                    stylers: [{ color: "#feb2b2" }, { visibility: "on" }],
                },
            ],
        };
        map = new google.maps.Map(map, mapOptions);
        const marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Hello World!",
        });
        const contentString = '<div class="info-window-content"><h2>Notus Angular</h2>' +
            "<p>A beautiful UI Kit and Admin for Tailwind CSS. It is Free and Open Source.</p></div>";
        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });
        google.maps.event.addListener(marker, "click", function () {
            infowindow.open(map, marker);
        });
    }
};
MapExampleComponent.ctorParameters = () => [];
MapExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-map-example",
        template: _raw_loader_map_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], MapExampleComponent);



/***/ }),

/***/ "uhhN":
/*!*********************************************************************!*\
  !*** ./src/app/components/cards/card-table/card-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: CardTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTableComponent", function() { return CardTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-table.component.html */ "wMhV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardTableComponent = class CardTableComponent {
    constructor() {
        this._color = "light";
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== "light" && color !== "dark" ? "light" : color;
    }
    ngOnInit() { }
};
CardTableComponent.ctorParameters = () => [];
CardTableComponent.propDecorators = {
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
CardTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-table",
        template: _raw_loader_card_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardTableComponent);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/admin/admin.component */ "R+tk");
/* harmony import */ var _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/auth/auth.component */ "Vbwu");
/* harmony import */ var _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/admin/dashboard/dashboard.component */ "zmeh");
/* harmony import */ var _views_admin_maps_maps_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/admin/maps/maps.component */ "rKqC");
/* harmony import */ var _views_admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/admin/settings/settings.component */ "90Li");
/* harmony import */ var _views_admin_tables_tables_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/admin/tables/tables.component */ "VTaN");
/* harmony import */ var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/auth/login/login.component */ "/kjZ");
/* harmony import */ var _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/auth/register/register.component */ "LN9C");
/* harmony import */ var _views_index_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/index/index.component */ "AiJS");
/* harmony import */ var _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/landing/landing.component */ "RMzx");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/profile/profile.component */ "wF9P");



// layouts


// admin views




// auth views


// no layouts views



const routes = [
    // admin views
    {
        path: "admin",
        component: _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [
            { path: "dashboard", component: _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
            { path: "settings", component: _views_admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"] },
            { path: "tables", component: _views_admin_tables_tables_component__WEBPACK_IMPORTED_MODULE_8__["TablesComponent"] },
            { path: "maps", component: _views_admin_maps_maps_component__WEBPACK_IMPORTED_MODULE_6__["MapsComponent"] },
            { path: "", redirectTo: "dashboard", pathMatch: "full" },
        ],
    },
    // auth views
    {
        path: "auth",
        component: _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
        children: [
            { path: "login", component: _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
            { path: "register", component: _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
            { path: "", redirectTo: "login", pathMatch: "full" },
        ],
    },
    // no layout views
    { path: "profile", component: _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"] },
    { path: "landing", component: _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_12__["LandingComponent"] },
    { path: "", component: _views_index_index_component__WEBPACK_IMPORTED_MODULE_11__["IndexComponent"] },
    { path: "**", redirectTo: "", pathMatch: "full" },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "vwLF":
/*!***************************************************************************!*\
  !*** ./src/app/components/cards/card-settings/card-settings.component.ts ***!
  \***************************************************************************/
/*! exports provided: CardSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSettingsComponent", function() { return CardSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-settings.component.html */ "eix7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardSettingsComponent = class CardSettingsComponent {
    constructor() { }
    ngOnInit() { }
};
CardSettingsComponent.ctorParameters = () => [];
CardSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-settings",
        template: _raw_loader_card_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardSettingsComponent);



/***/ }),

/***/ "wF9P":
/*!****************************************************!*\
  !*** ./src/app/views/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "8GP7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() { }
};
ProfileComponent.ctorParameters = () => [];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-profile",
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ProfileComponent);



/***/ }),

/***/ "wMhV":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-table/card-table.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded\"\n  [ngClass]=\"color === 'light' ? 'bg-white' : 'bg-red-900 text-white'\"\n>\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\n        <h3\n          class=\"font-semibold text-lg\"\n          [ngClass]=\"color === 'light' ? 'text-blueGray-700' : 'text-white'\"\n        >\n          Card Tables\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"block w-full overflow-x-auto\">\n    <!-- Projects table -->\n    <table class=\"items-center w-full bg-transparent border-collapse\">\n      <thead>\n        <tr>\n          <th\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n            [ngClass]=\"\n              color === 'light'\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\n                : 'bg-red-800 text-red-300 border-red-700'\n            \"\n          >\n            Project\n          </th>\n          <th\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n            [ngClass]=\"\n              color === 'light'\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\n                : 'bg-red-800 text-red-300 border-red-700'\n            \"\n          >\n            Budget\n          </th>\n          <th\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n            [ngClass]=\"\n              color === 'light'\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\n                : 'bg-red-800 text-red-300 border-red-700'\n            \"\n          >\n            Status\n          </th>\n          <th\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n            [ngClass]=\"\n              color === 'light'\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\n                : 'bg-red-800 text-red-300 border-red-700'\n            \"\n          >\n            Users\n          </th>\n          <th\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n            [ngClass]=\"\n              color === 'light'\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\n                : 'bg-red-800 text-red-300 border-red-700'\n            \"\n          >\n            Completion\n          </th>\n          <th\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n            [ngClass]=\"\n              color === 'light'\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\n                : 'bg-red-800 text-red-300 border-red-700'\n            \"\n          ></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center\"\n          >\n            <img\n              src=\"assets/img/bootstrap.jpg\"\n              class=\"h-12 w-12 bg-white rounded-full border\"\n              alt=\"...\"\n            />\n            <span\n              class=\"ml-3 font-bold\"\n              [ngClass]=\"color === 'light' ? 'text-blueGray-600' : 'text-white'\"\n            >\n              Argon Design System\n            </span>\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            $2,500 USD\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-circle text-orange-500 mr-2\"></i> pending\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex\">\n              <img\n                src=\"assets/img/team-1-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow\"\n              />\n              <img\n                src=\"assets/img/team-2-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-3-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-4-470x470.png\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">60%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-red-200\"\n                >\n                  <div\n                    style=\"width: 60%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right\"\n          >\n            <app-table-dropdown></app-table-dropdown>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center\"\n          >\n            <img\n              src=\"assets/img/angular.jpg\"\n              class=\"h-12 w-12 bg-white rounded-full border\"\n              alt=\"...\"\n            />\n            <span\n              class=\"ml-3 font-bold\"\n              [ngClass]=\"color === 'light' ? 'text-blueGray-600' : 'text-white'\"\n            >\n              Angular Now UI Kit PRO\n            </span>\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            $1,800 USD\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-circle text-emerald-500 mr-2\"></i>\n            completed\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex\">\n              <img\n                src=\"assets/img/team-1-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow\"\n              />\n              <img\n                src=\"assets/img/team-2-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-3-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-4-470x470.png\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">100%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-emerald-200\"\n                >\n                  <div\n                    style=\"width: 100%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right\"\n          >\n            <app-table-dropdown></app-table-dropdown>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center\"\n          >\n            <img\n              src=\"assets/img/sketch.jpg\"\n              class=\"h-12 w-12 bg-white rounded-full border\"\n              alt=\"...\"\n            />\n            <span\n              class=\"ml-3 font-bold\"\n              [ngClass]=\"color === 'light' ? 'text-blueGray-600' : 'text-white'\"\n            >\n              Black Dashboard Sketch\n            </span>\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            $3,150 USD\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-circle text-red-500 mr-2\"></i> delayed\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex\">\n              <img\n                src=\"assets/img/team-1-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow\"\n              />\n              <img\n                src=\"assets/img/team-2-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-3-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-4-470x470.png\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">73%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-red-200\"\n                >\n                  <div\n                    style=\"width: 73%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right\"\n          >\n            <app-table-dropdown></app-table-dropdown>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center\"\n          >\n            <img\n              src=\"assets/img/react.jpg\"\n              class=\"h-12 w-12 bg-white rounded-full border\"\n              alt=\"...\"\n            />\n            <span\n              class=\"ml-3 font-bold\"\n              [ngClass]=\"color === 'light' ? 'text-blueGray-600' : 'text-white'\"\n            >\n              React Material Dashboard\n            </span>\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            $4,400 USD\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-circle text-teal-500 mr-2\"></i> on schedule\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex\">\n              <img\n                src=\"assets/img/team-1-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow\"\n              />\n              <img\n                src=\"assets/img/team-2-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-3-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-4-470x470.png\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">90%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-teal-200\"\n                >\n                  <div\n                    style=\"width: 90%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right\"\n          >\n            <app-table-dropdown></app-table-dropdown>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center\"\n          >\n            <img\n              src=\"assets/img/vue.jpg\"\n              class=\"h-12 w-12 bg-white rounded-full border\"\n              alt=\"...\"\n            />\n            <span\n              class=\"ml-3 font-bold\"\n              [ngClass]=\"color === 'light' ? 'text-blueGray-600' : 'text-white'\"\n            >\n              React Material Dashboard\n            </span>\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            $2,200 USD\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-circle text-emerald-500 mr-2\"></i>\n            completed\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex\">\n              <img\n                src=\"assets/img/team-1-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow\"\n              />\n              <img\n                src=\"assets/img/team-2-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-3-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-4-470x470.png\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\n              />\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">100%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-emerald-200\"\n                >\n                  <div\n                    style=\"width: 100%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right\"\n          >\n            <app-table-dropdown></app-table-dropdown>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "wcq5":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dropdowns/pages-dropdown/pages-dropdown.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PagesDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesDropdownComponent", function() { return PagesDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pages_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pages-dropdown.component.html */ "owMO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ "EjV/");




let PagesDropdownComponent = class PagesDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngOnInit() { }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
            this.createPoppper();
        }
    }
    createPoppper() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
};
PagesDropdownComponent.propDecorators = {
    btnDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["btnDropdownRef", { static: false },] }],
    popoverDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["popoverDropdownRef", { static: false },] }]
};
PagesDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-pages-dropdown",
        template: _raw_loader_pages_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], PagesDropdownComponent);



/***/ }),

/***/ "xkbx":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/maps/map-example/map-example.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  id=\"map-canvas\"\n  class=\"relative w-full rounded h-600-px\"\n  data-lat=\"40.748817\"\n  data-lng=\"-73.985428\"\n></div>\n");

/***/ }),

/***/ "xlab":
/*!***************************************************************************!*\
  !*** ./src/app/components/footers/footer-small/footer-small.component.ts ***!
  \***************************************************************************/
/*! exports provided: FooterSmallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterSmallComponent", function() { return FooterSmallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_small_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer-small.component.html */ "DLfO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let FooterSmallComponent = class FooterSmallComponent {
    constructor() {
        this.date = new Date().getFullYear();
        this._absolute = false;
    }
    get absolute() {
        return this._absolute;
    }
    set absolute(absolute) {
        this._absolute = absolute === undefined ? false : absolute;
    }
    ngOnInit() { }
};
FooterSmallComponent.ctorParameters = () => [];
FooterSmallComponent.propDecorators = {
    absolute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
FooterSmallComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-footer-small",
        template: _raw_loader_footer_small_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], FooterSmallComponent);



/***/ }),

/***/ "xud4":
/*!***************************************************************************************!*\
  !*** ./src/app/components/cards/card-social-traffic/card-social-traffic.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CardSocialTrafficComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSocialTrafficComponent", function() { return CardSocialTrafficComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_social_traffic_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-social-traffic.component.html */ "YpXG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardSocialTrafficComponent = class CardSocialTrafficComponent {
    constructor() { }
    ngOnInit() { }
};
CardSocialTrafficComponent.ctorParameters = () => [];
CardSocialTrafficComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-social-traffic",
        template: _raw_loader_card_social_traffic_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardSocialTrafficComponent);



/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let SidebarComponent = class SidebarComponent {
    constructor() {
        this.collapseShow = "hidden";
    }
    ngOnInit() { }
    toggleCollapseShow(classes) {
        this.collapseShow = classes;
    }
};
SidebarComponent.ctorParameters = () => [];
SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-sidebar",
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], SidebarComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zmeh":
/*!**************************************************************!*\
  !*** ./src/app/views/admin/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "KxJz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() { }
};
DashboardComponent.ctorParameters = () => [];
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DashboardComponent);



/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zslb":
/*!*************************************************************************!*\
  !*** ./src/app/components/navbars/auth-navbar/auth-navbar.component.ts ***!
  \*************************************************************************/
/*! exports provided: AuthNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthNavbarComponent", function() { return AuthNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth-navbar.component.html */ "e8ip");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AuthNavbarComponent = class AuthNavbarComponent {
    constructor() {
        this.navbarOpen = false;
    }
    ngOnInit() { }
    setNavbarOpen() {
        this.navbarOpen = !this.navbarOpen;
    }
};
AuthNavbarComponent.ctorParameters = () => [];
AuthNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-auth-navbar",
        template: _raw_loader_auth_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AuthNavbarComponent);



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map