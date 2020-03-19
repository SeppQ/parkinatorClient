
export class ServerMsg {
    statusCode: number;
    message: string;
    public constructor(statusCode: number ,message: string,)
        {
            this.statusCode = statusCode;
            this.message = message;

        }

    
}