const someArray = [4,5,6]

const target = 10

function addSum(nums, target){
    let index = [];
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j < nums.length; j++){
            if(( (i<=index[0]) && (j<=index[1]) || (index.length ==0)) && (nums[i] + nums[j] == target) && (i!==j)){
                index[0] = i
                index[1] = j
            }
        }
    }

    return index
}

console.log(addSum(someArray, target))
