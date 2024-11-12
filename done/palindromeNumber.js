function loli(n){
    const arr = [];
    i = 0;
    while(i < n.toString().length){
        arr.push(n.toString().charAt(i));
        i++
    };
    arr.reverse();
    const result = +arr.join(''); 
    if (n === result) {
    console.log('true', result,n); 
    return true;
    } else {
    console.log('false', result,n);
    return false;
    };
};
loli(121);
