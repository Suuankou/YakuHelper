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
    content!.innerHTML = await renderWall(tiles);
    const hand = TileActions.delegateHand(tiles);
    console.table(hand);
    console.table(`Your hand: ${hand}`);
});

