export class User {
  constructor(
    public id: number,
    public imageUrl: number,
    public firstName: string,
    public lastName: string,
    public birthDate: string,
    public aadharId: string,
    public gender: string,
    public email: string,
    public contactNumber: string,
    public password: string,
    public createdOn: string,
    public modifiedOn: string
  ) {}
}