function canRotate (s, goal){
    if(s === goal) return true
    const arrayS = s.split('')
    for (i = 0; i < s.length; i++){
        arrayS.push(arrayS.shift());
        if(arrayS.join('') === goal) return true
    }
    return false
};
canRotate("abcde", "cdeab")