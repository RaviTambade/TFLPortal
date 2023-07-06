export class Task {
    constructor(
        public id: number,
        public title: string,
        public projectId: number,
        public description: string,
        public date: string,
        public fromTime: string,
        public toTime: string,
    ) { }
}
