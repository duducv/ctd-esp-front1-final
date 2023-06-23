export declare function VoidFunction(): () => void;

export interface IActionType<T, K> {
    type: T
    payload?: K
}