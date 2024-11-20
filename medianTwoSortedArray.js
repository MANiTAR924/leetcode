function median(nums1, nums2){
    nums2.forEach(el => {
       nums1.push(el) 
    });
    nums1.sort((a,b) => {
        return a-b;
    });
    console.log(nums1[nums1.length / 2 - 1] + nums1[nums1.length / 2]); 
    if (nums1.length % 2 !== 0){
        console.log(`0the median of [${nums1}] is ${nums1[(nums1.length-1) / 2]}`);
    console.log('index: ' , (nums1.length-1) / 2)
        return nums1[(nums1.length-1) / 2]
    }else if (nums1.length % 2 === 0){
        console.log(`1the median of [${nums1}] is ${(nums1[nums1.length / 2 - 1] + nums1[nums1.length / 2]) / 2 }`);
        return (nums1[nums1.length / 2 - 1] + nums1[nums1.length / 2]) / 2;  
    }
};
median([1,2], [3,4]);