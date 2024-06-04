document.getElementById('btn-senha').addEventListener('click', validarSenha);

document.getElementById('mostrar-senha-atual').addEventListener('change', MostrarSenhaAtual);
document.getElementById('mostrar-senha-nova').addEventListener('change', MostrarSenhaNova);
document.getElementById('mostrar-senha-confirmacao').addEventListener('change', MostrarSenhaConfirmacao);

function validarSenha(event) {
    event.preventDefault(); // Impede o envio do formulário para verificar a senha primeiro

    const novaSenha = document.getElementById('nova-senha').value;
    const confirmacaoSenha = document.getElementById('confirm-nova-senha').value;

    const temEspacos = /\s/.test(novaSenha);
    const temMaiuscula = /[A-Z]/.test(novaSenha);
    const temMinuscula = /[a-z]/.test(novaSenha);
    const ehSequenciaNumerica = /^\d+$/.test(novaSenha);
    const temCaractereEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(novaSenha);

    if (temEspacos) {
        alert('A senha não pode conter espaços.');
        return;
    }

    if (ehSequenciaNumerica) {
        alert('A senha não pode ser uma sequência numérica.');
        return;
    }

    if (!temMaiuscula) {
        alert('A senha deve conter pelo menos uma letra maiúscula.');
        return;
    }

    if (!temMinuscula) {
        alert('A senha deve conter pelo menos uma letra minúscula.');
        return;
    }

    if (!temCaractereEspecial) {
        alert('A senha deve conter pelo menos um caractere especial.');
        return;
    }

    if (novaSenha !== confirmacaoSenha) {
        alert('A confirmação da senha não corresponde à senha.');
        return;
    }

    // Se passou todas as verificações
    alert('Sua senha foi alterada com sucesso!');
}

function MostrarSenhaAtual() {
    const senhaAtual = document.getElementById('senha');
    const mostrarSenhas = document.getElementById('mostrar-senha-atual').checked;

    if (mostrarSenhas) {
        senhaAtual.type = 'text';
    } else {
        senhaAtual.type = 'password';
    }
}

function MostrarSenhaNova() {
    const novaSenha = document.getElementById('nova-senha');
    const mostrarSenhas = document.getElementById('mostrar-senha-nova').checked;

    if (mostrarSenhas) {
        novaSenha.type = 'text';
    } else {
        novaSenha.type = 'password';
    }
}

function MostrarSenhaConfirmacao() {
    const confirmacaoSenha = document.getElementById('confirm-nova-senha');
    const mostrarSenhas = document.getElementById('mostrar-senha-confirmacao').checked;

    if (mostrarSenhas) {
        confirmacaoSenha.type = 'text';
    } else {
        confirmacaoSenha.type = 'password';
    }
}
