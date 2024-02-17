export class TaskModel {
  constructor(
    public id: number,
    public title: string,
    public taskType: string,
    public description: string,
    public projectId: number,
    public sprintId: number,
    public assignedTo: number,
    public assignedBy: number,
    public createdOn: string,
    public assignedOn: string,
    public startDate: string,
    public dueDate: string,
    public status: string,

    public assignee: string,
    public assignor: string,
    
    public projectTitle: string,
    public sprintTitle: string
  ) {}
}
