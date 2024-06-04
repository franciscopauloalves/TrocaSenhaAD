function validarEmail() {
    var email = document.getElementById("UserName").value;
    var dominiosPermitidos = ["@ipt.br", "@fipt.org.br"];
    var emailValido = false;

    for (var i = 0; i < dominiosPermitidos.length; i++) {
        if (email.endsWith(dominiosPermitidos[i])) {
            emailValido = true;
            break;
        }
    }

    if (emailValido) {
        // Extrair o nome do email (remover o domínio)
        var nomeDoEmail = email.split('@')[0];

        // Armazenar o nome do email no localStorage
        localStorage.setItem('nomeDoEmail', nomeDoEmail);

        alert("Email válido. Um código foi enviado para o seu email.");
        mostrarCamposCodigo();
    } else {
        alert("Não foi possível enviar email. Domínio não permitido.");
    }

    return false;
}
