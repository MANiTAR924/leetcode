function regular(s,p){
    const lastCharP = p.charAt(p.length-1);
    const preLastCharP = p.charAt(p.length-2);
    const pArray = p.split('*');
    const arrayP = p.split(pArray[0])
    console.log(pArray[1])
    let doneExpr;
    s.split('').forEach(el => {
       if (pArray[0] === el){
        doneExpr = true
       } 
    });
    if (s === p){
        console.log('falos')
        return true;
    }else if (lastCharP === '*' && doneExpr){
        console.log('last')
        return true
    }else if (preLastCharP === '.' && lastCharP === '*'){
        console.log('W')
        return true
    }else {
        return false
    };
console.log(p.length)
console.log('w', pArray)
console.log(lastCharP)
};
regular('ab', '.*');
//1   syntax on                                                                                                                                                         
// set number                                                                                                                                                        
 // set tabstop=4                                                                                                                                                     
  // set expandtab                                                                                                                                                     
  // set shiftwidth=4                                                                                                                                                  
  // set wildmenu                                                                                                                                                      
  // set smarttab                                                                                                                                                      
  // set relativenumber                                                                                                                                                
  // colorscheme retrobox 
