export class PaymentLogs {
    create_time: string;
    id: string;
    intent: string;
    status: string;
    public constructor(create_time: string ,id: string,intent: string,status: string)
        {
            
            this.create_time = create_time;
            this.id = id;
            this.intent = intent;
            this.status = status;

        }

    
}