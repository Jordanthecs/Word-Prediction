let arr = ['the','those','these'];
let mOutput = document.querySelector('.messageOutput');
let word = [];
let temp = [];
let i = 0;

document.onkeydown = function textPrediction(e){
    if(e.key){ 
        if(e.key === 'Backspace' || e.key === 'Shift'){
            word.pop();
        }else{
            word.push(e.key);
        }               
        while(i < arr.length && arr[i].splice(arr[i].length)){
            temp = arr;
            if(word === temp[i]){
                temp.slice(i);
                mOutput.value = arr[i];
            }
            i++;
        }
    }
}

 