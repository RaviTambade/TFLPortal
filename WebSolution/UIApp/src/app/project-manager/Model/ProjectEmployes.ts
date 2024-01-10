export class ProjectEmployees{
    constructor(
       public   fullName:string,
       public   projectRole:string,
       public  projectAssignDate:Date,
       public employeeId:number,
       public projectId:number
    ){

    }
}