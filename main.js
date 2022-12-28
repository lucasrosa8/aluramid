function tocaSom (seletorAudio) {
   const  elemento = document.querySelector(seletorAudio);

    if (elemento  && elemento. localName === 'audio'){
            elemento.play();
 
    }
    else{
         //alert('elemento nao encontrado');
         console.log('Elemento não encontrado ou seletor inválidoS');
    }
}

const ListaDeTeclas = document.querySelectorAll ('.tecla');

// Enquanto
for (let contador = 0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];
    const instrumento= tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//template string

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {

        console.log(evento.code == 'Space')

        if (evento.code === 'Space' || evento.code === 'Enter') { 
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }


}







