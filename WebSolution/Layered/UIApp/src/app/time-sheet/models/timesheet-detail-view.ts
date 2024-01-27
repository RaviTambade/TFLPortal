import { TimeSheetDetails } from "./timesheetdetails";

export class TimeSheetDetailView extends TimeSheetDetails{
    constructor(public override id:number,
                public override employeeWorkId:number,
                public override fromTime:string,
                public override toTime:string,
                public override timesheetId:number,
                public workTitle:string,
                public sprintName:string,
                public sprintId:number,
                public workType:string,
                public projectId:number,
                public projectName:string,
                public durationInMinutes:number,
                public durationInHours:string){
        super(id,employeeWorkId,fromTime,toTime,timesheetId);
    }
}