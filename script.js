let arr;
let wordString;
let sentences = [];

function readTextFile(file){
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function (){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
                let data = rawFile.responseText;
                arr = data.split("\n");
                console.log(arr);
            }
        }
    }
    rawFile.send(null);
}

function readSenTextFile(file){
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function (){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
                let data = rawFile.responseText;
                sentences = data.split("\n");
                console.log(sentences);
            }
        }
    }
    rawFile.send(null);
}

readSenTextFile("sentences.txt");

class MarkovChain {
    constructor() {
      this.chain = {};
    }
  
    addWord(word) {
      if (!this.chain[word]) {
        this.chain[word] = {};
      }
    }
  
    addTransition(word, nextWord) {
      if (!this.chain[word]) {
        this.addWord(word);
      }
      if (!this.chain[word][nextWord]) {
        this.chain[word][nextWord] = 0;
      }
      this.chain[word][nextWord]++;
    }
  
    getNextWord(word) {
      let words = Object.keys(this.chain[word]);
      let count = words.map((w) => this.chain[word][w]).reduce((a, b) => a + b);
      let rand = Math.floor(Math.random() * count);
      for (let i = 0; i < words.length; i++) {
        rand -= this.chain[word][words[i]];
        if (rand < 0) {
          return words[i];
        }
      }
    }
}
  
  let chain = new MarkovChain();
  
let wordPred = sentences.toString().split(" ");
for (let i = 0; i < wordPred.length - 1; i++) {
  chain.addTransition(wordPred[i], wordPred[i + 1]);
}

const printNextWord = (currentWord) => {
   let nextWord = chain.getNextWord(currentWord);
   mOutput.value = nextWord;
   return nextWord;
};
  
readTextFile("words.txt");
readSenTextFile("sentences.txt");
let mOutput = document.querySelector('.messageOutput');
let mInput = document.querySelector('.message');
let word = [];
let temp = arr;
let i = 0; let j = 1;

document.onkeydown = function textPrediction(e){
    if(e.key !== 'Backspace'){ 
        if(e.key === ' ' || e.key === 'Tab'){
            if(e.key === 'Tab'){
                e.preventDefault();
            }
            if(word !== mOutput.value){
                mInput.value = mInput.value.split(' ').slice(0,-1).join(' ') + ' ' + mOutput.value;
                mOutput.value = printNextWord(word.join(''));
                word = [];
                if(e.key === 'Tab'){
                    mInput.value = mInput.value + ' ';
                }
            }else if(word === mOutput.value){
              mOutput.value = printNextWord(word.join(''));
              word = [];
            }
        }else{
        temp = arr;
        word.push(e.key);
        console.log(word);
        if(i !== 0){
            i = 0;
        }
        while(word.join('') !== temp[i].substring(0,word.length) && i < arr.length){
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