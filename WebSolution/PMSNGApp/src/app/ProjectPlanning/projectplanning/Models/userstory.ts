export class userstory{
    constructor(public id:number,
                public title:string,
                public  description:string,
                public projectId:number,
                public  assignedBy:number,
                public assignedTo:number,
                public createdDate:string,
                public status:string){

    }
}