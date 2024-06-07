var codigoCorreto = "123456";
var tempoRestante;
var intervalo;

function submeterEmail() {
    var email = document.getElementById("UserName").value;
    var dominiosPermitidos = ["@ipt.br", "@fipt.org.br"];
    var emailValido = false;

    if (email === "") {
        alert('O campo e-mail é obrigatório!');
        return false; // Previne o envio do formulário
    }

    for (var i = 0; i < dominiosPermitidos.length; i++) {
        if (email.endsWith(dominiosPermitidos[i])) {
            emailValido = true;
            break;
        }
    }

    if (emailValido) {
            // Extrair o nome do email (remover o domínio)
            var loginUsuario = email.split('@')[0];
    
            // salvar objeto no email no localStorage
            //localStorage.setItem("loginUsuario", JSON.stringify({loginUsuario: loginUsuario}));
            localStorage.setItem('loginUsuario', loginUsuario);

// // Salvando o valor no localStorage
// document.getElementById('btn-submeter').addEventListener('click', function() {
//     // Extrair o nome do email (remover o domínio)
//     //var email = document.getElementById("UserName").value;
//     let loginUsuario = email.split('@')[0];
//     localStorage.setItem('loginUsuario', loginUsuario);
// });


        // alert("Email válido. Um código foi enviado para o seu email.");
            mostrarCamposCodigo();

        } else {
            alert("Não foi possível enviar e-mail. Domínio não permitido.");
            return false; // Previne o envio do formulário
        }

    return false; // Previne o envio do formulário mesmo quando o email é válido
}

function validarEmail(event) {
    var emailInput = document.getElementById("UserName");
    var email = emailInput.value;
    var dominiosPermitidos = ["@ipt.br", "@fipt.org.br"];
    var errorMessage = document.getElementById("error-message");
    var emailValido = false;

    if (email === "") {
        errorMessage.textContent = 'O campo e-mail é obrigatório!';
        event.preventDefault();
        emailInput.focus();
        return false; // Previne o envio do formulário
    }

    for (var i = 0; i < dominiosPermitidos.length; i++) {
        if (email.endsWith(dominiosPermitidos[i])) {
            emailValido = true;
            break;
        }
    }

if(!emailValido){
    errorMessage.textContent = 'Digite um e-mail válido. Domínio não permitido!';
    emailInput.focus();
    event.preventDefault();
    return false;
}

adicionarAtributosAoBotao();
return true;

}


function mostrarCamposCodigo() {
    alert("Email válido. Um código foi enviado para o seu email.");
}

function mostrarCamposCodigo() {
    var codeContainer = document.getElementById("codeContainer");
    var codeInputs = document.getElementById("codeInputs");
    codeContainer.style.display = "block";

    // Limpa os campos existentes (se houver)
    codeInputs.innerHTML = '';

    // Cria 6 campos de input
    for (var i = 0; i < 6; i++) {
        var input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
        input.className = "code-input form-control";
        codeInputs.appendChild(input);
    }

    // Foca no primeiro input
    codeInputs.firstChild.focus();

    iniciarContador(2);
}

function iniciarContador(minutos) {
    var timer = document.getElementById("timer");
    tempoRestante = minutos * 60;

    intervalo = setInterval(function () {
        var minutosRestantes = Math.floor(tempoRestante / 60);
        var segundosRestantes = tempoRestante % 60;

        // Formatação do tempo
        minutosRestantes = minutosRestantes < 10 ? "0" + minutosRestantes : minutosRestantes;
        segundosRestantes = segundosRestantes < 10 ? "0" + segundosRestantes : segundosRestantes;

        timer.textContent = "Tempo restante: " + minutosRestantes + ":" + segundosRestantes;

        tempoRestante--;

        if (tempoRestante < 0) {
            clearInterval(intervalo);
            timer.textContent = "O tempo expirou. Solicite um novo código.";
            // Desabilita os campos de input
            var inputs = document.querySelectorAll('.code-input');
            inputs.forEach(input => input.disabled = true);
        }
    }, 1000);
}

function validarCodigo() {
    if (tempoRestante < 0) {
        alert("O tempo expirou. Solicite um novo código.");
        return;
    }

    var inputs = document.querySelectorAll('.code-input');
    var codigoDigitado = "";
    inputs.forEach(function (input) {
        codigoDigitado += input.value;
    });

    if (codigoDigitado === codigoCorreto) {
        clearInterval(intervalo);
        window.location.href = "index.html";
    } else {
        alert("O código digitado não confere, tente outra vez.");
        inputs.forEach(function (input) {
            input.value = "";
        });
        inputs[0].focus();
    }
}

function adicionarAtributosAoBotao() {
    // Seleciona o botão pelo ID
    var botaoSubmit = document.getElementById("btn-submeter");
    
    // Adiciona os atributos ao botão
    botaoSubmit.setAttribute('data-bs-toggle', 'modal');
    botaoSubmit.setAttribute('data-bs-target', '#myModal');
}

