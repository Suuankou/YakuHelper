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
            const MAX_HAND = 14;
            const TEMP_HAND: string[] = [];
            for (let i=0; i <= 13; i++){
                TEMP_HAND.push(arr[0]);
                arr.shift();
        }
        console.log(`your hand: ${TEMP_HAND}`);
        return TEMP_HAND;
        }

}
