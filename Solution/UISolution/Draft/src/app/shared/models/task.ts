export class Task {
    constructor(
      public id: number,
      public title: string,
      public taskType: string,
      public description: string,
      public projectId: number,
      public sprintId: number,
      public assignedTo: number,
      public assignedBy: number,
      public createdDate :string ,
      public assignDate :string ,
      public startDate :string,
      public  dueDate: string,
      public status :string

    ) {}
  }