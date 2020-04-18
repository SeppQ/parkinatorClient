
export class ServerMsg {
    status_code: number;
    message: string;
    public constructor(statusCode: number ,message: string,)
        {
            this.status_code = statusCode;
            this.message = message;

        }

    
}