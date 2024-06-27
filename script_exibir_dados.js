document.getElementById('btn-exibir-dados').addEventListener('click', function () {
    const senhaDigitada = document.getElementById('Password').value.trim();

    // Verifica se o campo de senha não está vazio
    if (senhaDigitada === '') {
        alert('Por favor, insira a senha para continuar.');
        return;
    }

    $('#spinner').addClass('spinner');
    var data = {
        "UserName": $("#UserName").val(),
        "Password": senhaDigitada // Utiliza a senha digitada pelo usuário
    };
    $.ajax({
        url: "http://servapp00/ldapapi/api/Ldap/GetPreviousData",
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",

        success: function (response) {
            console.log(response);
            console.log(response.data);
            if (response.success) {
                $("#PostalCode").val(response.data.postalCode);
                $("#Location").val(response.data.location);
                $("#StreetAddress").val(response.data.streetAddress);
                $("#TelephoneNumber").val(response.data.telephoneNumber);

                // Mostra os dados se a requisição for bem-sucedida
                document.getElementById('dados').style.display = 'block';
                document.getElementById('btn-exibir-dados').style.display = 'none';
                document.getElementById('btn-dados').style.display = 'block';
            }
            $('#spinner').removeClass('spinner');
        },
        error: function (xhr, status, error) {
            console.log(xhr.responseText);
            $('#spinner').removeClass('spinner');
            //alert('Erro ao carregar os dados. Verifique as credenciais e tente novamente.');
        }
    });
});

