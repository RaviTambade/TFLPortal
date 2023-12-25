import { TimeSheetDetails } from "./timesheetdetails";


export class Timesheet{
    constructor(public id:number,
                public status:string,
                public timesheetDate:string,
                public statusChangedDate:string,
                public employeeId:number){}
                
    public timeSheetDetails:TimeSheetDetails[]=[]
}
