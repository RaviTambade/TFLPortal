export class Timesheet {
  constructor(
    public id: number,
    public status: string,
    public createdOn: string,
    public modifiedOn: string,
    public createdBy: number,
    public totalHours: number
  ) {}
}
