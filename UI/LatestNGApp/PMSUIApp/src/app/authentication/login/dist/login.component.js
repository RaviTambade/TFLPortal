"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var local_storage_keys_1 = require("src/app/Models/Enums/local-storage-keys");
var role_1 = require("src/app/Models/Enums/role");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService, userService) {
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.credential = {
            contactNumber: '',
            password: ''
        };
        this.roles = [];
    }
    LoginComponent.prototype.onSignIn = function () {
        var _this = this;
        console.log('Validating user');
        this.authService.validate(this.credential).subscribe(function (response) {
            if (response != null) {
                localStorage.setItem('jwt', response.token);
                var contactNumber = _this.authService.getContactNumberFromToken();
                if (contactNumber !== null) {
                    _this.userService
                        .getUserByContact(contactNumber)
                        .subscribe(function (response) {
                        var userId = response.id;
                        localStorage.setItem(local_storage_keys_1.LocalStorageKeys.userId, userId.toString());
                        console.log(userId);
                        _this.userService.getUserRole(userId).subscribe(function (response) {
                            _this.roles = response;
                            console.log(_this.roles);
                            var role = _this.roles[0];
                            _this.navigateByRole(role);
                        });
                    });
                }
            }
        });
    };
    LoginComponent.prototype.navigateByRole = function (role) {
        switch (role) {
            case role_1.Role.director:
                this.router.navigate(['director/dashboard']);
                this.authService.reloadSubject.next();
                break;
            case role_1.Role.HRManager:
                this.router.navigate(['hrmanager/dashboard']);
                this.authService.reloadSubject.next();
                break;
            case role_1.Role.TeamManager:
                this.router.navigate(['teammanager/dashboard']);
                this.authService.reloadSubject.next();
                break;
            case role_1.Role.TeamMember:
                this.router.navigate(['teammember/projects']);
                this.authService.reloadSubject.next();
                break;
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login-component',
            templateUrl: './login.component.html'
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
