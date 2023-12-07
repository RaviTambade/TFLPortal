export class task{
    constructor(public id:number,
        public title:string,
        public description:string,
        public assignDate:string,
        public startDate:string,
        public dueDate:string,
        public assignedTo:number,
        public assignedBy:number,
        public projectId:number,
        public status:string){

    }
}