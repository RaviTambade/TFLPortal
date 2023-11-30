export class Activity{
    constructor(public id:number,
                public title:string,
                public  activityType:string,
                public  description:string,
                public projectid:number,
                public  assignedby:number,
                public assignedto:number,
                public createddate:string,
                public assigndate:string,
                public startdate:string,
                public duedate:string,
                public status:string){

    }
}