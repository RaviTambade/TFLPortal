export class Task {
    constructor(
      public id: number,
      public title: string,
      public tasktype: string,
      public description: string,
      public projectid: number,
      public sprintid: number,
      public assignedto: number,
      public assignedby: number,
      public createddate :string ,
      public assigneddate :string ,
      public startdate :string,
      public  duedate: string,
      public status :string

    ) {}
  }