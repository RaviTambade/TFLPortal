export class TimeSheetEntry{
    constructor(public id:number,
        public description:string,
        public fromTime:string,
        public toTime:string,
        public duration:string){
    }
        
    // public getDuration() {
    //         let startTime = this.fromTime;
    //         let endTime = this.toTime;
    //         if (startTime != '' && endTime != ''   ) {
    //           const startDate = new Date(`1970-01-01T${startTime}`);
    //           const endDate = new Date(`1970-01-01T${endTime}`);
        
    //           const durationMilliseconds = endDate.getTime() - startDate.getTime();
    //           const hours = Math.floor(durationMilliseconds / (60 * 60 * 1000));
    //           const minutes = Math.floor(
    //             (durationMilliseconds % (60 * 60 * 1000)) / (60 * 1000)
    //           );
        
    //           let duration = `${hours} hours, ${minutes} minutes`;
    //           return duration;
    //         }
    // }
}