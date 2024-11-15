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
    
    console.log(num);
    console.log(array);
};
intToRoman(1994);