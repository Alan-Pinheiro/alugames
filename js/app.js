function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if(imagem.classList.contains('dashboard__item__img--rented')) {
        let validacaoDevolucao = prompt(`Confirma a devolução do jogo ${nomeJogo.innerHTML} ?`);

        if(validacaoDevolucao.toLowerCase() === 'sim') {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.innerHTML = 'Alugar';
            botao.classList.remove('dashboard__item__button--return');
            alert(`Jogo ${nomeJogo.innerHTML} devolvido com sucesso!`);
        } else {
            alert('Devolução cancelada!');
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.innerHTML = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }
}
