"use strict";
exports.__esModule = true;
exports.Addtask = void 0;
var Addtask = /** @class */ (function () {
    function Addtask(title, date, fromTime, toTime, status, description, projectId) {
        this.title = title;
        this.date = date;
        this.fromTime = fromTime;
        this.toTime = toTime;
        this.status = status;
        this.description = description;
        this.projectId = projectId;
    }
    return Addtask;
}());
exports.Addtask = Addtask;
