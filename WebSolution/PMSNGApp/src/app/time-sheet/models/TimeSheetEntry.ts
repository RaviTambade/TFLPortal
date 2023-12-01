import { Activity } from "src/app/activity/Models/Activity";

export class TimeSheetEntry{
    constructor(
        public id:number,
        public activityId:number,
        public fromTime:string,
        public toTime:string,
        public timeSheetId:number,

        public durationInMinutes:number,
        public durationInHours:string,
        ){
    }

    public activity:Activity|undefined;


        
 
}