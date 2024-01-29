export class Task {
    constructor(
      public taskId: number,
      public title: string,
      public tasktype: string,
      public description: string,
      public projectId: number,
      public sprintId: number,
      public assignedTo: number,
      public assignedBy: number,
      public createdDate :string ,
      public assignedDate :string ,
      public startDate :string,
      public dueDate: string,
      public status :string
    ) {}
  }