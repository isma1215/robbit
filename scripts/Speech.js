import find from "./find_routine.js";

const recognition = new webkitSpeechRecognition();
    recognition.lang='es-Es';
    recognition.continuous = true;
    recognition.intermResults = false;

export default function Speech(micBtn,inputchat){
    document.addEventListener("click",(e)=>{
        if(e.target.matches(micBtn)){
            const $inputchat= document.querySelector(inputchat);

            recognition.start();

            recognition.onresult = (e) => {
                const results = e.results[0][0].transcript;
                $inputchat.value=results;
                recognition.abort();
                find(results);
            }
            
        }
    })
}