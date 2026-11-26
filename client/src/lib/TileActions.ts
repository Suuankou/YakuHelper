export class TileActions{
    // Fisher-Yates - Random permutation of array elements.
    // For puposes of debugging, set the second parameter to true
    
    // placeholder for now
    static shuffle<T>(arr: T[], debug = false): T[]{
        const n = arr.length - 1;
        for (let i=n; i>=0; i--){
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
            if(debug){
                console.log(`Switching array elemets: ${i} and ${j}`);
            }
        }
        if(debug){
            console.table(arr);
        }
        return arr;
    }
    static delegateHand<T>(arr: T[]): T[]{
            const MAX_HAND = 13;
            const TEMP_HAND: string[] = [];
            for (let i=0; i < MAX_HAND; i++){
                TEMP_HAND.push(arr[0]);
                arr.shift();
        }
        console.log(`your hand: ${TEMP_HAND}`);
        return TEMP_HAND;
        }

    static delegateTile<T>(arr: T[], ): T[]{
    
    arr.push();
    }


        /*
        const p:number = 0;
        const r:number = A.length;
        const q:number = Math.floor(r/2);
        const n1:number = q-p+1;
        const n2:number = r-q;
        */

    //  
    //  Comments -> (Notation from "ITRODUCTION TO ALGORITHMS, THIRD EDITION", P.31, Merge Sort)
    static mSort<T>(arr: T[]): void{
        // MERGE
        const START:number = 0;                 // p
        const END:number = arr.length;          // r
        const MID:number = Math.floor(END/2);   // q

        const n1:number = MID-START;
        const n2:number = END-MID;
            console.log(`n1: ${n1}`);
            console.log(`n2: ${n2}`);


        const LEFT: number[] = [];
        const RIGHT: number[] = [];

        for(let i=0; i<n1; i++){
            LEFT.push(arr[START + i]);
            console.log(`LEFT: ${LEFT}`);
            }
        for(let j=0; j<n2; j++){
            RIGHT.push(arr[MID + j]);
            console.log(`RIGHT: ${RIGHT}`);
           }
            console.table(LEFT);
            console.table(RIGHT);
            console.table(arr);
    }
}
