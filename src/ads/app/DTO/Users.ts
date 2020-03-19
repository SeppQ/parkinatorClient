
export class Users {
    user_id: number;
    user_fullname: string;
    email: string;
    hash: string;
    user_type: string;
    question: string;
    answer_hash: string;
    has_disabled_badge : boolean;
    public constructor(user_id: number ,user_fullname: string,email: string,hash: string,user_type: string,question: string,answer_hash: string,has_disabled_badge : boolean)
        {
            this.user_id = user_id;
            this.user_fullname = user_fullname;
            this.email = email;
            this.hash = hash;
            this.user_type = user_type;
            this.question = question;
            this.answer_hash = answer_hash;
            this.has_disabled_badge = has_disabled_badge;
        }

    
}

