import { Time } from "@angular/common";

export class TimesheetInfo {
    constructor(
        public timesheetId: number,
        public taskId: number,
        public projectId: number,
        public employeeId: number,
        public date: string,
        public fromtime: Time,
        public totime: Time
    ) { }
}