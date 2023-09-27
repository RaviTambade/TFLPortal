"use strict";
exports.__esModule = true;
exports.Mytasklist = void 0;
var Mytasklist = /** @class */ (function () {
    function Mytasklist(taskId, assignedOn, projectId, title, projectName, status) {
        this.taskId = taskId;
        this.assignedOn = assignedOn;
        this.projectId = projectId;
        this.title = title;
        this.projectName = projectName;
        this.status = status;
    }
    return Mytasklist;
}());
exports.Mytasklist = Mytasklist;
