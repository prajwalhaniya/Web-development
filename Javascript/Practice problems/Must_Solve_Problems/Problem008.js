// Kadane's Algorithm

const maxSubArray = nums => {
    let currentMax = nums[0];
    let globalMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        if (currentMax > globalMax) {
            globalMax = currentMax; 
        }
    }
    return globalMax;
}

const arr = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(arr));