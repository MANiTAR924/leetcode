const nums ={
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
};

function intToRoman(num){
   const arr = []; 
   const array = [];
   let res = 0;
    i = 0;
    while(i < num.toString().length){
        arr.push(num.toString().charAt(i));
        array.push(nums[num.toString().charAt(i)]);
    i++
    };        
//    arr.reverse();
    console.log(array.join(''));
    const sun = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log(sun);
    return sun; 
};
intToRoman(1994);