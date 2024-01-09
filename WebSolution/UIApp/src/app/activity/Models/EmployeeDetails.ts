export class EmployeeDetails {
  constructor(
    public employeeId: number,
    public userId: number,
    public hireDate: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public gender: string,
    public imageUrl: string,
    public birthDate: string,
    public contactNumber: string
  ) {}
}
