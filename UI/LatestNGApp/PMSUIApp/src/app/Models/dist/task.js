"use strict";
exports.__esModule = true;
exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task(id, title, projectId, description, status, date, fromTime, toTime, projectTitle) {
        this.id = id;
        this.title = title;
        this.projectId = projectId;
        this.description = description;
        this.status = status;
        this.date = date;
        this.fromTime = fromTime;
        this.toTime = toTime;
        this.projectTitle = projectTitle;
    }
    return Task;
}());
exports.Task = Task;
