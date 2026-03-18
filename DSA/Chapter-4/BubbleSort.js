const sampleUnsortedArray = [5, 2, 9, 1, 5, 6];

function thisIsBubbleSort(sampleArray){

    let unsortedTill = sampleArray.length - 1
    let sorted = false

    while(!sorted){
        sorted = true

        for(let i=0; i<unsortedTill; i++){
            if(sampleArray[i] > sampleArray[i+1]){
                [sampleArray[i], sampleArray[i+1]] = [sampleArray[i+1], sampleArray[i]]
                sorted = false
            }
        }
        unsortedTill = unsortedTill - 1
    }
    return sampleArray
}

console.log(thisIsBubbleSort(sampleUnsortedArray))
