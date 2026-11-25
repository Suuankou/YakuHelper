export type Shupai = "man" | "pin" | "sou";
export type Kazehai = "ton" | "nan" | "sha" | "pei";
export type Sangenpai = "haku" | "hatsu" | "chun";
export type Jihai = Kazehai | Sangenpai;

export interface BaseTile {
    readonly id: string;
    readonly notation: string;
    readonly img: string;
}

export interface ShupaiTile extends BaseTile {
    readonly type: "shupai";
    readonly suit: Shupai;
    readonly value: number;
    readonly red?: boolean;
}

export interface JihaiTile extends BaseTile {
    readonly type: "jihai";
    readonly value: Jihai;
}

export type Tile = ShupaiTile | JihaiTile;
