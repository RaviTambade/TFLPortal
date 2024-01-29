export class Project {
  constructor(
    public projectId: number,
    public title: string,
    public startDate: string,
    public managerId: number,
    public status: string,
    public endDate: string,
    public description: string
  ) {}
}
