export class Projects{
    constructor(
                public projId:number,
                public projName:string,
                public planedStartDate:Date,
                public planedEndDate:Date,
                public actualStartDate:Date,
                public actualEndDate:Date,
                public description:string)
                {}
}