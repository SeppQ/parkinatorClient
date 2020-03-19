
export class Login {
    email: string;
    hash: string;

    public constructor(email: string,hash: string)
        {
            this.email = email;
            this.hash = hash;
        }
}

