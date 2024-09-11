const agora = new Date();
const hora = agora.getHours();

if (hora >= 6 && hora < 12) {
    saudacao = 'Bom dia!'
} else if ( hora >= 12 && hora <18) {
    saudacao = 'Boa tarde!'
} else {
    saudacao = 'Boa noite!'
}

document.getElementById('saudacao').textContent = saudacao;