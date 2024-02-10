
export class TimesheetEntryModel {

    constructor(
        public id: number,
        public taskId: number,
        public fromTime: string,
        public toTime: string,
        public timesheetId: number,
        public hours: number,

        public taskTitle:string,
        public taskType:string,
        public Description:string,
        public projectId:number,
        public sprintId:number,
        public sprintTitle:string,
        public projectTitle:string,
    ){}
}