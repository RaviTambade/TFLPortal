"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var biservice_service_1 = require("../Models/Enums/biservice.service");
describe('BIserviceService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(biservice_service_1.BIserviceService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
