"use strict";
exports.__esModule = true;
exports.Projecttask = void 0;
var Projecttask = /** @class */ (function () {
    function Projecttask(taskId, title, teamMemberUserId, status, employeeName, assignedTaskDate) {
        this.taskId = taskId;
        this.title = title;
        this.teamMemberUserId = teamMemberUserId;
        this.status = status;
        this.employeeName = employeeName;
        this.assignedTaskDate = assignedTaskDate;
    }
    return Projecttask;
}());
exports.Projecttask = Projecttask;
