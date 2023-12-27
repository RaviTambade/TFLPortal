import { Timesheet } from "./timesheet";
import { TimeSheetDetailView } from "./timesheet-detail-view";


export class TimesheetView extends Timesheet{
    public employeeName:string=''
    public timeSheetDetails:TimeSheetDetailView[]=[]

}