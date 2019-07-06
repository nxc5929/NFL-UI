export class GenericResponse<T>{
    constructor(
    public message: string,
    public error: boolean,
    public data: T
    ){}
}