const randomArray = [64, 21, 87, 43, 12, 98, 5, 76, 31, 54, 89, 2, 67, 34, 19, 92, 45, 78, 23, 56, 3 , 11, 83, 49, 7, 61, 38, 95, 27, 72, 50, 15, 81, 40, 6, 69, 33, 90, 24, 58, 13, 4, 86, 42, 4, 75, 29, 52, 97, 18, 65, 36, 91, 26, 73, 51, 8, 80, 41, 1, 68, 32, 5, 94, 22, 59, 14, 85, 44, 3, 77, 30, 53, 99, 17, 66, 35, 93, 25, 74, 48, 9, 82, 6, 39, 0, 70, 37, 96, 28, 60, 16, 84, 47, 10, 79, 46, 71, 62, 20, 88, 55, 63, 57]

function bubbleSort(array){

    let unsorted = false
    let unsortedLength = array.length - 1

    while(!unsorted){

        unsorted = true

        for(let i=0; i < unsortedLength; i++){
            if(array[i] > array[i+1]){
                [array[i], array[i+1]] = [array[i+1], array[i]]
                unsorted = false
            }
        }

        unsortedLength = unsortedLength - 1
    }

    return array

}

console.log(bubbleSort(randomArray))
