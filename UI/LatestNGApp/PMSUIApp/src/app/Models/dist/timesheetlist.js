"use strict";
exports.__esModule = true;
exports.Timesheetlist = void 0;
var Timesheetlist = /** @class */ (function () {
    function Timesheetlist(taskId, projectId, taskTitle, employeeUserId, timeSheetDate, timeSheetId, employeeName) {
        this.taskId = taskId;
        this.projectId = projectId;
        this.taskTitle = taskTitle;
        this.employeeUserId = employeeUserId;
        this.timeSheetDate = timeSheetDate;
        this.timeSheetId = timeSheetId;
        this.employeeName = employeeName;
    }
    return Timesheetlist;
}());
exports.Timesheetlist = Timesheetlist;
