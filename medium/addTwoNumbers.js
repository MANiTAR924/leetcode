function addTwoNumbers(l1,l2) { 
    let l1var = '';
    l1.reverse().forEach( el => {
    l1var= `${l1var+el}`;
    }); 
    l1var = +l1var;

    let l2var = '';
    l2.reverse().forEach( el =>  {
    l2var= `${l2var+el}`;
    }); 
    l2var = +l2var;

    console.log('l1: '+l1var);
    console.log('l2: '+l2var);
    console.log(typeof l1var);
    console.log(typeof l2var);
    
    const preSum = +(l1var+l2var);
    const sum  = [];
    for (let i = 0; i < preSum.toString().length; i++){
        sum.push(preSum.toString().charAt(i));    
    };
    console.log(sum.reverse().toString());
    return sum.reverse();
};
addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]);
   const lox = []
for (let i = 0; i < 15; i++){
    lox.push(i);
    const penis = lox.reduce(
  (accumulator, currentValue) => accumulator + currentValue);

console.log(penis);
};

