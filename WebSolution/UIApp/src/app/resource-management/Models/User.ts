export class User {
  constructor(
    public id:number,
    public firstName: string,
    public lastName: string,
    public birthDate: string,
    public aadharId: string,
    public imageUrl: string,
    public gender: string,
    public email: string,
    public contactNumber: string,
    public password: string,
    public createdOn: string,
    public modifiedOn: string,
    public hireDate:string,
    public salary:number
  ) {}
}