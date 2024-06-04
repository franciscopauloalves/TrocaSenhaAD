document.getElementById('btn-exibir-dados').addEventListener('click', function () {
    const senhaCorreta = "123456"; // Defina a senha correta aqui
    const senhaDigitada = document.getElementById('Password').value;

    if (senhaDigitada === senhaCorreta) {
        document.getElementById('dados').style.display = 'block';
        document.getElementById('btn-exibir-dados').style.display = 'none';
        document.getElementById('btn-dados').style.display = 'block';
    } else {
        document.getElementById('dados').style.display = 'none';
        alert('Senha incorreta. Não foi possível visualizar os dados, tente novamente.');
    }
});
