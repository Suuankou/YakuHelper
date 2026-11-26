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

const TA_EVEN: number[] = [5, 2, 6, 13];
const TA_ODD1: number[] = [5, 2, 9, 6, 13];
const TA_ODD2: number[] = [2,5,21, 45, 3, 8, 66, 19, 32, 96, 940, 52, 2, 76, 69, 2, 9, 6, 13];
//TileActions.mSort(TA_ODD1);
//TileActions.mSort(TA_ODD2);
TileActions.mSort(TA_EVEN);
TileActions.mSort(TA_ODD1);
