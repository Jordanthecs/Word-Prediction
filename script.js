let arr = ['The','Those','These'];
let mOutput = document.querySelector('.messageOutput');
let word = [];
let i = 0;

document.onkeydown = function textPrediction(e){
    if(e.key){
        if(e.key === 'Shift'){
          return;  
        }else if(e.key === 'Backspace'){
            word.pop();
        }else{
            word.push(e.key);
            while(i < arr.length){
                console.log(arr.splice(i));
                if(word === arr.splice(i)){
                    mOutput.value = arr.splice(i);
                }
            }
        }
    }
}
 