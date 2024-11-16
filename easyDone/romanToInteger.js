const nums = {
I: 1,
V: 5,
X: 10,
L: 50,
C: 100,
D: 500,
M: 1000,
};
var romanToInt = function(s) {
        const arr = [];
        i = 0;
        while(i < s.length){
                if(nums[s.charAt(i)] < nums[s.charAt(i+1)]){
                        
                        arr.push(nums[s.charAt(i+1)] - nums[s.charAt(i)]);
                        console.log(s.charAt(i))
                        console.log(arr)
                        i++
                }else{
                        arr.push(nums[s.charAt(i)]);
                }
                
        i++
        };        
        console.log(arr.join(''));
        const sun = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
        console.log(sun);
        return sun;
};
romanToInt('MCMXCIV');