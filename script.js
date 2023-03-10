let arr = ['the','those','these'];
let mOutput = document.querySelector('.messageOutput');
let mInput = document.querySelector('.message');
let word = [];
let temp = arr;
let j = 0,i = 0;

document.onkeydown = function textPrediction(e){
    if(e.key){ 
        if(e.key === 'Backspace' || e.key === 'Shift'){
            word.pop();
            console.log(word);  
            mOutput.value = word.join('');
        }else /*if(word === temp[i].split(word[i]))*/{
            word.push(e.key);
            console.log(temp);
            console.log(temp[i].split(i));
            mOutput.value = temp.join('');
        }
    }
}

 