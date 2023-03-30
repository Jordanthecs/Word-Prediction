let arr = ["the","of","and","a","ant","apple","to","in","is","you","your","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"];
let mOutput = document.querySelector('.messageOutput');
let mInput = document.querySelector('.message');
let word = [];
let temp = arr;
let i = 0; let j = 1;

document.onkeydown = function textPrediction(e){
    if(e.key !== 'Backspace'){ 
        if(e.key === ' '){
            word = [];
            mOutput.value = '';
        }else{
        word.push(e.key);
        console.log(word);
        if(i > arr.length){
            i = 0;
        }
        while(word.join("") !== temp[i].substring(0,word.length) && i < arr.length){
            i++;
        }
        console.log(temp[i].substring(0,word.length));
        mOutput.value = arr[i];
    }
    }else{
        word.pop();
        i = 0;
        while(word.join("") !== temp[i].substring(0,word.length) && i < arr.length){
            i++;
        }
        if(mInput.value.length === 1 || e.key === 'Space'){
            mOutput.value = '';
            i = 0;
        }
    }
}