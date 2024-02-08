export class TimesheetEntry {
  constructor(
    public id: number,
    public taskId: number,
    public fromTime: string,
    public toTime: string,
    public timesheetId: number,
    public durationInHours: number
  ) {}
}
