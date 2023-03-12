let arr = ['the','those','these'];
let mOutput = document.querySelector('.messageOutput');
let mInput = document.querySelector('.message');
let word = [];
let temp = arr;
let i = 0; let j = 1;

document.onkeydown = function textPrediction(e){
    if(e.key !== 'Backspace'){ 
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
    }else{
        word.pop();
        if(mInput.value.length === 1 || e.key === 'Space'){
            mOutput.value = '';
            i = 0;
        }
    }
}