export class Support {
    message_id: number;
    title: string;
    message: string;
    date: string;
    user_id : number;
    status : string;
    public constructor(message_id: number ,title: string,message: string,date: string,user_id:number,status : string)
        {
            
            this.message_id = message_id;
            this.title = title;
            this.message = message;
            this.date = date;
            this.user_id = user_id;
            this.status = status;
        }

    
}