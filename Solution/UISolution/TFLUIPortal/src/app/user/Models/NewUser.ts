export class NewUser {
    constructor(
      public id:number,
      public firstname: string,
      public lastname: string,
      public birthdate: string,
      public aadharid: string,
      public imageurl: string,
      public gender: string,
      public email: string,
      public contactnumber: string,
      public createdon: string,
      public modifiedon: string,
      public password: string,
    ) {}
  }