import { TimeSheetDetails } from "./TimeSheetDetails";

export class TimeSheet{
    constructor(public id:number,
                public status:string,
                public timeSheetDate:string,
                public statusChangedDate:string,
                public employeeId:number){}
                
    public timeSheetDetails:TimeSheetDetails[]=[]
}