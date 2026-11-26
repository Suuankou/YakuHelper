import 'htmx.org'
import './style.css'

import {TileGenerator} from "./lib/TileGenerator.ts"
import {TileActions} from "./lib/TileActions.ts"
import {renderWall} from './views/wall.ts'

const generator = new TileGenerator();

const button = document.querySelector<HTMLButtonElement>("#load-wall");
const content = document.querySelector<HTMLElement>("#content")
//const buttonHand = document.querySelector<HTMLButtonElement>("#load-hand");
button?.addEventListener("click", async () => {
    const tiles = generator.generate();
    TileActions.shuffle(tiles, true);
    const hand1 = TileActions.delegateHand(tiles);
    TileActions.sortByNotation(hand1);
    content_hand!.innerHTML = await renderWall(hand1);
    content!.innerHTML = await renderWall(tiles);
    console.table(hand1);
});

