export class Task {
    constructor(
        public id: number,
        public title: string,
        public ProjectId: number,
        public Description: string,
        public Date: string,
        public FromTime: string,
        public ToTime: string,
    ) { }
}
