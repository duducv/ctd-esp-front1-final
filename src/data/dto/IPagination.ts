import { IChars } from "./IChar";

export interface IPagination {
    total: number,
    actual: number,
    charsToShow: IChars[]
}

