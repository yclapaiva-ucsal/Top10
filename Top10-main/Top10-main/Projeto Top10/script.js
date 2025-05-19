function toggleClasse(elemento) {
    // Fecha todos os outros cards primeiro
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card !== elemento) {
            card.classList.remove('card-pessoa-select');
            card.classList.add('card-pessoa');
            
            const conteudo = card.querySelector('.conteudo');
            if (conteudo) {
                conteudo.classList.remove('visivel');
                conteudo.classList.add('escondido');
            }
        }
    });
    
    // Alterna o estado do card clicado
    elemento.classList.toggle('card-pessoa');
    elemento.classList.toggle('card-pessoa-select');
    
    // Alterna o conteúdo entre visível e escondido
    const conteudoInterno = elemento.querySelector('.conteudo');
    if (conteudoInterno) {
        if (conteudoInterno.classList.contains('visivel')) {
            conteudoInterno.classList.remove('visivel');
            conteudoInterno.classList.add('escondido');
        } else {
            conteudoInterno.classList.remove('escondido');
            conteudoInterno.classList.add('visivel');
        }
    }
}
