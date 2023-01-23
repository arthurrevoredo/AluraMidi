function tocaSom (seletorAudio) {

const elemento = document.querySelector(seletorAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0 

while (contador < listaDeTeclas.length) {

const tecla = listaDeTeclas[contador]

const instrumento =	tecla.classList[1];

//template string
const idAudio = `#som_${instrumento}`;

	tecla.onclick = function () {
		tocaSom(idAudio);
	}

	contador = contador + 1;

	tecla.onkeydown = function (evento) {

		if (evento.code === 'Space' || evento.code ==='Enter') {
			tecla.classList.add('ativa');
		}

		}

	tecla.onkeyup = function () {
		tecla.classList.remove('ativa');
	}
}

/* for (let contador = 0; contador < listaDeTeclas.length; contador++) */
