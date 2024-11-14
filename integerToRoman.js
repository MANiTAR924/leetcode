const nums ={
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
};
// const numsi ={
//     1: 'I',
//     4: 'IV',
//     5: 'V',
//     9: 'IX',
//     10: 'X',
//     40: 'XL',
//     50: 'L',
//     90: 'XC',
//     100: 'C',
//     400: 'CD',
//     500: 'D',
//     900: 'CM',
//     1000: 'M',
// };

function intToRoman(num){
   const arr = []; 
   const array = [];
   const arr0 = [];
    i = 0;
    while(i < num.toString().length){
        array.push(nums[num.toString().charAt(i)]);
        arr.push(num.toString().charAt(i))
    i++
    };        
    i0 = 0;
    let n = ''
    while(arr.length !== 0){
        let len = arr.length;
       
        arr.shift()
    i0++
    }
    array.reverse();
    
    console.log(array.join(' '));
    console.log(arr.join(' '))
    console.log(num);
    console.log(arr0)
};
intToRoman(1994);