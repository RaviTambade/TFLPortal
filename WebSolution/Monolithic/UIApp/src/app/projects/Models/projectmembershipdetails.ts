
export class ProjectMembershipDetails {
    constructor(
        public userId: number,
        public hireDate: number,
        public reportingId: string,
        public projectId: number,
        public employeeId: number,
        public projectRole: string,
        public projectAssignDate: string,
        public firstName: string,
        public lastName: string,

    ) { }
}