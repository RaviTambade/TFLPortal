export class ProjectEmployees{
    constructor(
       public   fullName:string,
       public   title:string,
       public   assignedOn:Date,
       public   employeeId:number,
       public   projectId:number
    ){

    }
}