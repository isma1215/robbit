const $tex_robit = document.getElementById("text-robit")
const $chat = document.getElementById("chat-text")
export default function find(msg){
   const pmsg = msg.toLowerCase();
   switch (pmsg){
    case 'hola':
        $tex_robit.innerHTML="Hola Humano 3.2!!";
        $tex_robit.style.opacity=1;
        setTimeout(()=>{
            $tex_robit.style.opacity=0;
        },"3000")
        break;
    case 'qué es un extra':
    case 'qué es un examen extraordinario':
    case 'qué es un extraordinario':
       
        $tex_robit.innerHTML="es un examen al final del semestre..";
        $tex_robit.style.opacity=1;

        
        $tex_robit.innerHTML="es un examen al final del semestre con el que puedes acreditar o subir calificacion";
        $tex_robit.style.opacity=1;
        
        setTimeout(()=>{
            $tex_robit.style.opacity=0;
        },"4000")
        
        break;
   }

    
}