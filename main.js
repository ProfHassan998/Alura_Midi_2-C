function tocaSom(idElementoAudio){
    const audio = document.querySelector(idElementoAudio);
    audio.play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


let contador = 0; 

while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    console.log(instrumento)
    const idAudio = `som_${instrumento}`; 
    console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio)
    }
    contador = contador + 1;
    console.log(contador)
}