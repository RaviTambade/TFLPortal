export class ReleaseEmployee{
    constructor(  
      public employeeId: number,
      public projectId: number,
      public releaseDate: string,
      public status:string
    ){}
  }