const nums = [2,7,11,15];

function functionToFindDuplicates(nums){
    let result = false
    for(let i=0; i < nums.length; i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] == nums[j]){
                result = true
            }
        }
    }
    return result
}

console.log(functionToFindDuplicates(nums))
