function indexFirstwordWithSpecialPrefix (sentence, searchWord){
    const sentenceInArray = sentence.split(' ');
    output = -1;
    sentenceInArray.forEach(el => {
        if (el.split(searchWord).length === 2){
            output = sentenceInArray.indexOf(el)+1;
        };
    });
    console.log(output)
    return output
};
indexFirstwordWithSpecialPrefix("you dream duck you corona dumb google i", "d") //output must be 2 because 2 it's first word with searchWord in the form of prefix

