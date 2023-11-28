export class TimeSheetEntry{
    constructor(public id:number,
        public description:string,
        public fromTime:string,
        public toTime:string,
        public durationInMinutes:number,
        public durationInHours:string,
        ){
    }
        
 
}