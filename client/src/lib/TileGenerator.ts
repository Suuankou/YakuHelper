import type * as TileTypes from "./Tile.ts";

export class TileGenerator {
    private static readonly SUITS: TileTypes.Shupai[] = [
        "man", "pin", "sou"
    ];

    private static readonly JIHAIS: TileTypes.Jihai[] = [
        "ton", "nan", "sha", "pei",
        "haku", "hatsu", "chun"
    ];

    private id = 0;

    private readonly BrightTiles = "/static/assets/mahjong-tiles/Regular/";
    //private readonly DarkTiles = "/assets/mahjong-tiles/Black/";

    public generate(): TileTypes.Tile[] {
        this.id = 0;

        const tiles: TileTypes.Tile[] = [];

        this.generateShupai(tiles);
        this.generateJihai(tiles);

        return tiles;
    }

    private generateShupai(tiles: TileTypes.Tile[]): void {
        for (const suit of TileGenerator.SUITS) {
            for (let value = 1; value <= 9; value++) {
                for (let copy = 0; copy < 4; copy++) {
                    tiles.push({
                        id: String(this.id++),
                        type: "shupai",
                        notation: `${value}${suit[0]}`,
                        suit,
                        value,
                        red: value === 5 && copy === 0,
                        img: `${this.BrightTiles}${suit}${value}.svg`
                    });
                }
            }
        }
    }

    private generateJihai(tiles: TileTypes.Tile[]): void {
        for (const [index, jihai] of TileGenerator.JIHAIS.entries()) {
            for (let copy = 0; copy < 4; copy++) {
                tiles.push({
                    id: String(this.id++),
                    type: "jihai",
                    notation: `${index + 1}z`,
                    value: jihai,
                    img: `${this.BrightTiles}${jihai}.svg`
                });
            }
        }
    }
}
