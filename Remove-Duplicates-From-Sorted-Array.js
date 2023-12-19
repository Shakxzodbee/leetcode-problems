function removeDuplicates(nums: number[]): number {
    let tmp = nums[0];
    let cnt = 1;
   
    for(let i = 0;i<nums.length;i++){
        if(nums[i]>tmp){
            tmp = nums[i];
            nums[cnt] = tmp;
            cnt++;
        }
    }
    return cnt;
   };