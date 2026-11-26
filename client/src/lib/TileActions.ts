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

    static mSort<T>(arr: T[]): void{
        const SORTED_ARR:number[] = [];
        if(arr.length >= 2){
        const LEN:number = Math.floor(arr.length);
        const MID:number = Math.floor(LEN/2);
        console.log(`MID NUM: ${MID}`);
        // IF EVEN
        if(LEN%2 !== 0){
            console.log(`Array has an odd number of elements: mid index ${MID} arr[${MID-1}]`);
            const SUB_1:number[] = [];
            const SUB_2:number[] = [];
            for(let i=0; i<= MID; i++){
                console.log(`${i}`);
                SUB_1.push(arr[i]);
            }
            for(let i=(LEN-1); i > MID; i--){
                console.log(`${i}`);
                SUB_2.push(arr[i]);
            }
            console.table(SUB_1);
            console.table(SUB_2);
        }
     }
     else{
        console.log(``);
     }
    }
}
