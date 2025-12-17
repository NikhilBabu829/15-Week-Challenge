
const sampleOrderedArray = [5, 7, 23, 32, 34, 62];

const valueToFind = 30;

function linearSearch(arr, valueFind){
    for(const [index, value] of arr.entries()){
        if(value == valueFind){
            return index;
        }else if(value > valueFind){
            return -1;
        }
    }
    return -1;
}

linearSearch(sampleOrderedArray, valueToFind);

