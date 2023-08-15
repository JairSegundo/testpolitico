let conservador=[1,2,,2,1,1,1,2,2,3,3,3,2,3,2,3,3,2,3,1];
let totalitario=[2,3,,,3,,,1,,2,,,,,,,,1,,];
let liberario=[3,1,2,,,3,3,,1,,,2,,,,2,,,1,2];
let progresista=[,,1,1,2,2,3,3,,1,1,1,1,2,1,1,1,3,2,3];
let centro=[,,3,3,,,,,3,,3,,3,1,3,,2,,,];

let opcion_elegida=[];
let resp_conservador=0;
let res_totalitario=0;
let res_liberalista=0;
let res_progresista=0;
let res_centro=0;

function respuesta(num_pregunta, seleccionada){
    opcion_elegida[num_pregunta]=seleccionada.value;
    id="btn-acordeon"+num_pregunta;

    labels= document.getElementById(id).childNodes;
    labels[3].style.backgroundColor ="white";
    labels[7].style.backgroundColor ="white";
    labels[7].style.backgroundColor ="white";
    seleccionada.parenNode.style.backgroundColor="#cec0fc";
}
function enviar(){
    resp_conservador=0;
    for(i=0; i<conservador.length;i++){
        if(conservador[i]==opcion_elegida[i]){
            resp_conservador++;
        }
    }
        document.getElementById("conservador").innerHTML=resp_conservador;  
    
        res_totalitario=0;
    for(i=0; i<totalitario.length;i++){
        if(totalitario[i]==opcion_elegida[i]){
            res_totalitario++;
        }
    }
    document.getElementById("totalitario").innerHTML=res_totalitario;

    res_liberalista=0;
    for(i=0; i<totalitario.length;i++){
        if(liberario[i]==opcion_elegida[i]){
            res_liberalista++;
        }
    }
    document.getElementById("liberalista").innerHTML=res_liberalista;

    res_progresista=0;
    for(i=0; i<progresista.length;i++){
        if(progresista[i]==opcion_elegida[i]){
            res_progresista++;
        }
    }
    document.getElementById("progresista").innerHTML=res_progresista;

    res_centro=0;
    for(i=0; i<centro.length;i++){
        if(centro[i]==opcion_elegida[i]){
            res_centro++;
        }
    }
    document.getElementById("neutro").innerHTML=res_centro;
}