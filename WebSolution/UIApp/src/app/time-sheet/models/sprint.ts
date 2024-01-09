export class Sprint {
  constructor(
    public id: number,
    public projectId: number,
    public title: string,
    public goal: string,
    public startDate: string,
    public endDate: string
  ) {}
}
