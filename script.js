let arr = ['The','For','Hey'];
let mOutput = document.querySelector('.messageOutput');

document.onkeydown = function textPrediction(e){
    let word = [];
    if(e.key){
        word.push(e.key);
        for(let i = 0; i < arr.length; i++){
            if(e.key === arr[i].split('')[i]){
                console.log(arr[i]);
            }
        }
    }
} 