
const nums = [1,2,2,3,3,3]
const k = 2

const randomArray = [42, 7, 89, 23, 56, 11, 94, 3, 67, 31, 50]
console.log(randomArray.sort((a, b) => a - b))

function KFrequentElements(nums, k){
    const orderedList = nums.sort()
    const frequency = {}
    for(let i=0; i<orderedList.length;i++){
        const currentValue = orderedList[i]
        if(frequency[currentValue] !== undefined){
            let currentCount = frequency[currentValue]
            frequency[currentValue] = currentCount+1
        }else{
            frequency[currentValue] = 1
        }
    }
    const topN = Object.entries(frequency).sort(([, a], [, b]) => b - a).slice(0, k).map(([key]) => key)
    return topN
}

KFrequentElements(nums, k)
