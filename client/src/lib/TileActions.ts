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

    // Some Magic Numbers for now 
    // (Notation from "ITRODUCTION TO ALGORITHMS, THIRD EDITION", P.31, Merge Sort)
    //
    static mSort<T>(arr: T[]): void{
        // MERGE
        const p:number = 0;
        const r:number = arr.length;
        const q:number = Math.floor(r/2);

        const n1:number = q-p+1;
        const n2:number = r-q;

        const L: number[] = [];
        const R: number[] = [];
        const ARR_TEMP: number[] = [];

        for(let i=0; i<n1; i++){
            L.push(arr[p + i]);
            }
        for(let j=0; j<n2; j++){
            R.push(arr[q + 1 - j]);
           }
            console.table(L);
            console.table(R);
        let i:number = 0;
        let j:number = 0;
        let k: number = 0;
        while(i<n1 && j<n2){
            if(L[i]<= R[j]){
                ARR_TEMP[k] = L[i]
                i++
            }
            else{
                ARR_TEMP[k] = R[j];
                j++;
            }
            k++;
        }
        
}
}
