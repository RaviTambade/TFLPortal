import { TimeSheetEntry } from "./TimeSheetEntry";

export class TimeSheet{
    constructor(public id:number,
        public date:string,
        public status:string,
        public employeeId:number){
        }
        public timeSheetEntries:TimeSheetEntry[]=[]
}