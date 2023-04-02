let arr;

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
readTextFile("words.txt");
let mOutput = document.querySelector('.messageOutput');
let mInput = document.querySelector('.message');
let word = [];
let temp = arr;
let i = 0; let j = 1;

document.onkeydown = function textPrediction(e){
    if(e.key !== 'Backspace'){ 
        if(e.key === ' '){
            word = [];
            mOutput.value = ''
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