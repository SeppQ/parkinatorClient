export class Support {
    message_id: number;
    title: string;
    message: string;
    date: string;
    user_id : number;
    public constructor(message_id: number ,title: string,message: string,date: string,user_id:number)
        {
            
            this.message_id = message_id;
            this.title = title;
            this.message = message;
            this.date = date;
            this.user_id = user_id;
        }

    
}