export class Project{
    constructor(
        public id:number,
        public title:string,
        public startDate:string,
        public teamManagerId:number,
        public status:string,
        public endDate:string,
        public description:string
        ){}
}
