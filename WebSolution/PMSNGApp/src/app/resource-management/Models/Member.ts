export class MemberResponse {
  constructor(
    public memberId: number,
    public projectId: number,
    public membership: string,
    public membershipDate: string,
    public fullName: string,
    public imageUrl: string
  ) {}
}
