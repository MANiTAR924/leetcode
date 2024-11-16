const nums ={
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
};
const numsi ={
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M',
    2000: 'MM',
    3000: 'MMM',
};

function intToRoman(num){
    const arr = []; 
    const array = [];
    
    for(let i = 0; i<num.toString().length; i++){// each digits push in array
        arr.push(num.toString().charAt(i));
    };

    let numder = '';
    i = 0;
    
    while(arr.length > 0){
 //   console.log(arr.join(' '));
        first = arr[0];//  take the first digit in array with us number
        arr.shift();// remove first digit to see how length remains, of course I understand that I can just subtract 1, but it's my first medium, i want to leave everything as is 
        let len = arr.length;
        number = first;// do var with first digit

    w = 0;
        while(w < len){ // append to var(number) 0 
            number+= `0`
        w++
        }

        array.push(Number(number));// and push it into array in number
//    console.log(`first digit: ${first}\narray: ${arr}\nlength: ${len}\n`);
    i++
    }
     
    const arr0 = [];
    l = 0;
    array.forEach(el => {
        arr0.push(numsi[el])
    })
//    console.log(nums[4]);
    console.log(array);
    console.log(arr0.join(''));
    return arr0.join('')
//task: you must write code snippet to each number in array make same as in object nums,so for example 900 it 400, 500 by object and 400 to the same way, then push it into array
};
intToRoman(1994);