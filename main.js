function tocaSom (idElementoAudio) {
   const  elemento = document.querySelector(idElementoAudio).play();

    if (elemento === null) {
        //alert('elemento nao encontrado');
        console.log('elemento nao enontrado');
    }

    if (elemento != null){
        elemento.play();
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







