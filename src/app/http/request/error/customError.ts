class CustomError extends Error {
    message;
    statusCode;
    constructor(statusCode: number, message: any){
        super(message)
        this.message = message;
        this.statusCode = statusCode;
    }
}

export {CustomError};