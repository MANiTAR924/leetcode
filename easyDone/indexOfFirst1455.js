function indexFirstwordWithSpecialPrefix (sentence, searchWord){
    const sentenceInArray = sentence.split(' ');
    index = -1; 
    const indexInArray = []
    sentenceInArray.forEach(el => {
        if (el.split('').slice(0,searchWord.length).join('') === searchWord){
            indexInArray.push(sentenceInArray.indexOf(el)+1);  
            index = indexInArray[0]
        };
    });
    return index
};
indexFirstwordWithSpecialPrefix("abcad", "ad") 
