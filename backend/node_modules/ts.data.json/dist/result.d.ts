export declare class Ok<a> {
    readonly value: a;
    constructor(value: a);
    map<b>(fn: (a: a) => b): Result<b>;
}
export declare class Err<a> {
    readonly error: string;
    constructor(error: string);
    map<b>(fn: (a: a) => b): Result<b>;
}
export declare type Result<a> = Ok<a> | Err<a>;
export declare function ok<a>(value: a): Result<a>;
export declare function err<a>(error: string): Result<a>;
