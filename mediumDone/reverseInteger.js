/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const num = x.toString().split('');
    num.reverse();
    if (num[num.length-1] === '-'){
        num.pop();
        num.unshift('-');
    };
    if(+num.join('') > 0-2**31 && +num.join('') < (2**31)-1){
        return +num.join(''); 
    }else {
        return 0;
    }
};
//67ms 51.73