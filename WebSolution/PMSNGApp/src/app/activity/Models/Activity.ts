export class Activity{
     constructor(public id:number,
        public  title:string,
        public  description:string,
        public  activityType:string,
        public  projectId:number,
        public  assignedBy:number,
        public  assignedTo:number,
        public  assignDate:string,
        public  startDate:string,
        public  dueDate:string,
        public  status:string){}

}