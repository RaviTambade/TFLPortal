
export class WorkCategory {

    constructor(
        public userStory: number,
        public task: number,
        public bug: number,
        public issues: number,
        public meeting: number,
        public learning: number,
        public mentoring: number,
        public clientCall: number,
        public other: number
    ) { }
}