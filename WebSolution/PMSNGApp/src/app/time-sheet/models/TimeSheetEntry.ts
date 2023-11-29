export class TimeSheetEntry{
    constructor(
        public id:number,
        public title:string,
        public activityType:string,
        public description:string,
        public fromTime:string,
        public toTime:string,
        public durationInMinutes:number,
        public durationInHours:string,
        ){
    }
        
 
}