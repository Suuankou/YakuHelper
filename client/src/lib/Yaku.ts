export interface BaseYaku{
    readonly id: string;
    readonly name: string;
    readonly han: number;
    readonly closedHan?: number;
    readonly yakuman?: boolean;
}

