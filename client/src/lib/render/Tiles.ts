import type { Tile } from "../Tile.ts"
export class Tiles{
    static renderTile(tile: Tile): string {
        return `
        <div class="tile-cards p-1 w-24 h-34 object-contain border-3 draggable=true hover:border-blue-500 cursor-grab active:border-blue-500 select-none
        id="${tile.id}"
            <img
                src="${tile.img}"
                alt="${tile.notation}"
                class="w-full h-full"
            >
        </div>
    `;}


}
