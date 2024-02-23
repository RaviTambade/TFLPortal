export class PaymentGateway{
    constructor(public fromAcct:string,
                public fromIfsc :string,
                public toAcct:string,
                public toIfsc :string,
                public transactionType:string,
                public amount :number,
    ){}
}  