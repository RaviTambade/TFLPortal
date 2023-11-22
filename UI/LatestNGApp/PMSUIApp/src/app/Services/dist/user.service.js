"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = void 0;
var core_1 = require("@angular/core");
var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
        this.roles = [];
        this.loadUserRole();
    }
    UserService.prototype.getUserByContact = function (contactNumber) {
        var url = 'http://localhost:5102/api/users/username/' + contactNumber;
        return this.httpClient.get(url);
    };
    UserService.prototype.getUserRole = function (userId) {
        var url = 'http://localhost:5031/api/userroles/roles/' + userId;
        return this.httpClient.get(url);
    };
    UserService.prototype.getUserNamesWithId = function (userId) {
        var url = 'http://localhost:5102/api/users/name/' + userId;
        return this.httpClient.get(url);
    };
    UserService.prototype.getUser = function (id) {
        var url = 'http://localhost:5102/api/users/' + id;
        return this.httpClient.get(url);
    };
    UserService.prototype.loadUserRole = function () {
        var _this = this;
        var userId = this.authservice.getClaimFromToken(TokenClaims.userId);
        if (userId !== null) {
            this.getUserRole(userId).subscribe(function (res) {
                _this.roles = res;
            });
        }
    };
    UserService.prototype.isUserHaveRequiredRole = function (role) {
        var userRole = this.roles[0];
        return userRole === role;
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
