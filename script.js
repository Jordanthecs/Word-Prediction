let arr = ['the','those','these'];
let mOutput = document.querySelector('.messageOutput');
let mInput = document.querySelector('.message');
let word = [];
let temp = arr;
let j = 0,i = 0;

document.onkeydown = function textPrediction(e){
    if(e.key !== 'Backspace'){ 
        word.push(e.key);
        console.log(word);
        console.log(temp[i].split(i,0));
        while(word === temp[i].split(i)){
            mOutput.value = arr[i];
            
        }
    }
    else{
        word.pop();  
        mOutput.value = word.join('');
    }
}

 