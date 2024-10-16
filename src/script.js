function toggleDetails(element) {
    const detalhes = element.querySelector('.detalhes');
    if (detalhes.style.display === 'none' || detalhes.style.display === '') {
        detalhes.style.display = 'block';
    } else {
        detalhes.style.display = 'none';
    }
}

document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada! Obrigado pelo contato.');
    this.reset(); // Limpa o formulário após o envio
});
