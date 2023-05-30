const $chat = document.getElementById("chat-text")
const $tex_robit = document.getElementById("text-robit")
console.log($chat)
$chat.addEventListener("submit" , (e)=>{
    e.preventDefault();
    const mgs = $chat.chat.value.toLowerCase();
    $chat.chat.value="";
    console.log(mgs)
    if(mgs==="hola"){
        $tex_robit.innerHTML="Hola Humano 3.2!!";
        $tex_robit.style.opacity=1;
        setTimeout(()=>{
            $tex_robit.style.opacity=0;
        },"3000")
        
    } 
    


})