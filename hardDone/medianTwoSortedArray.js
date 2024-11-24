function median(nums1, nums2){
    nums2.forEach(el => {
       nums1.push(el) 
    });
    nums1.sort((a,b) => {
        return a-b;
    });
    if (nums1.length % 2 !== 0){
        return nums1[(nums1.length-1) / 2]
    }else if (nums1.length % 2 === 0){
        return (nums1[nums1.length / 2 - 1] + nums1[nums1.length / 2]) / 2;  
    }
};
median([1,2], [3,4]);