function checkIfExist(arr){
    let g = 0;
    iterator0 = 0;
    for (let i = 0; i < arr.length; i++){

        for (iterator1 of arr){

            if((arr[i] === 2 * arr[g] && i != g) === true) return true 
                
            g++
            iterator0++ 

        };

        g = 0
    }; 
    return false
};
checkIfExist([10,2,5,3]);