export class ProjectMembership{
    constructor(
      public Id: number,  
      public employeeId: number,
      public projectId: number,
      public projectRole: string,
      public projectAssignDate: string,
      // public releaseDate: string,
      public currentProjectWorkingStatus:string
    ){}
  }