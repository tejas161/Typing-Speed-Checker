const setOfWords = ["My name is Robocco and I am an engineer.",
                    "Hope you are having fun and enjoying this game.",
                    "you study in Atharva College in Cs field.",
                     "You are a honest and a active citizen right."];




const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime,endTime;


const playGame = () => {
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
     msg.innerText = setOfWords[randomNumber];
     let date = new Date();
     startTime = date.getTime();
     btn.innerText = "Done";


}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/ 1000);
   

    let totalStr = typeWords.value;
    if(totalStr.length == 0)
    {
        msg.innerText= "You cannot keep it blank!! Please type something.";
    }
    else{
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime) * 60);

    let finalMsg = "You typed at the rate of  " + speed + " words per minute. ";

    finalMsg += compareWord(msg.innerText,totalStr);
    msg.innerText = finalMsg;
    }

}

const compareWord = (str1,str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;


    words1.forEach(function(item,index) {
        if(item == words2[index]) {
            cnt++;
        }
    })

    let errorWords = (words1.length - cnt);
    return (cnt + " correct out of " + words1.length + " words and the total number of errors are " + errorWords
    +".");
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;

}


btn.addEventListener('click', function(){
    if(this.innerText == 'Start')
    {
     typeWords.disabled = false;
     playGame();
    }else if(this.innerText == "Done"){
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
      typeWords.value="";
    }

})
