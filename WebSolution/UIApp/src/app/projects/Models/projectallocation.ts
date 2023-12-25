export class ProjectAllocation{
    constructor(
      public Id: number,  
      public employeeId: number,
      public projectId: number,
      public membership: string,
      public assignDate: string,
      // public releaseDate: string,
      public status:string
    ){}
  }