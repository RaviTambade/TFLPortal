export class TotalProjectDetails {
    constructor(
        public projectId: number,
        public title: string,
        public firstName :string,
        public lastName :string,
        public description :string,
        public workingDate : string,
        public startDate:string,
        public endDate :string,
        public totalTime:string,
        public status :string

    ) { }
}
