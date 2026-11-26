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
    //const hand2 = TileActions.delegateHand(tiles);
    //const hand3 = TileActions.delegateHand(tiles);
    //const hand4 = TileActions.delegateHand(tiles);
    console.table(hand1);
    console.table(`Your hand: ${hand1}`);
    content_hand!.innerHTML = await renderWall(hand1);
    content!.innerHTML = await renderWall(tiles);
});

