"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavMenuComponent = void 0;
var core_1 = require("@angular/core");
var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent(router, userService, authService) {
        this.router = router;
        this.userService = userService;
        this.authService = authService;
        this.isExpanded = false;
        this.roles = [];
        this.role = '';
    }
    NavMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        var contactNumber = this.authService.getContactNumberFromToken();
        if (contactNumber != null) {
            this.userService.getUserByContact(contactNumber).subscribe(function (response) {
                console.log(response);
                _this.name = response.name;
            });
            var userId = localStorage.getItem('userId');
            if (userId !== null) {
                this.userService.getUserRole(Number(userId)).subscribe(function (res) {
                    _this.roles = res;
                    _this.role = _this.roles[0];
                });
            }
        }
    };
    NavMenuComponent.prototype.collapse = function () {
        this.isExpanded = false;
    };
    NavMenuComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    NavMenuComponent.prototype.isLoggedIn = function () {
        var jwt = localStorage.getItem("jwt");
        return jwt != null;
    };
    NavMenuComponent.prototype.getUserName = function () {
        var _this = this;
        var contactNumber = this.authService.getContactNumberFromToken();
        if (contactNumber != null) {
            this.userService.getUserByContact(contactNumber).subscribe(function (response) {
                console.log(response);
                _this.name = response.name;
            });
        }
    };
    NavMenuComponent.prototype.loggedOut = function () {
        var result = window.confirm('Are you sure you want to log out?');
        if (result) {
            this.router.navigate(['login']);
            localStorage.clear();
        }
        else {
            console.log('logout canceled');
        }
    };
    NavMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-nav-menu',
            templateUrl: './nav-menu.component.html',
            styleUrls: ['./nav-menu.component.css']
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());
exports.NavMenuComponent = NavMenuComponent;
