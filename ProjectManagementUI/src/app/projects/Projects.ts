export class Projects{
    constructor(
                public projId:number,
                public projName:string,
                public planedStartDate:string,
                public planedEndDate:string,
                public actualStartDate:string,
                public actualEndDate:string,
                public description:string)
                {}
}