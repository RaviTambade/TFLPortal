export class PaymentGateway{
    constructor(public fromAccountNumber:string,
                public fromIfscCode :string,
                public toAccountNumber:string,
                public toIfscCode :string,
                public transactionType:string,
                public amount :number,
    ){}
}  