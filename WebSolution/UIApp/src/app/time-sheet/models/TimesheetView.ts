import { TimeSheetDetailView } from "./timesheet-detail-view";
import { TimesheetDuration } from "./timesheetduratiom";


export class TimesheetView extends TimesheetDuration{
    public employeeName:string=''
    public timeSheetDetails:TimeSheetDetailView[]=[]

}