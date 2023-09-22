"use strict";
exports.__esModule = true;
exports.Project = void 0;
var Project = /** @class */ (function () {
    function Project(id, title, startDate, endDate, description, status, teamManagerUserId) {
        this.id = id;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.status = status;
        this.teamManagerUserId = teamManagerUserId;
    }
    return Project;
}());
exports.Project = Project;
