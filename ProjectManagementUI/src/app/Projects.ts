export class Projects{
    constructor(
                public projId:number,
                public projName:string,
                public plannedStartDate:Date,
                public plannedEndDate:Date,
                public actualStartDate:Date,
                public actualEndDate:Date,
                public projDesc:string)
                {}
}