// function _GetToken() {
//     var token = "";
//     var apiUrl = "https://localhost:7187/api/Authenticate/login"; //testes
//     // var apiUrl = "https://webapp.ipt.br/ldapapi/api/Authenticate/login"; //produção
//     //var loginModel = { username: "user", password: "Password@123" };
//     var data = {
//         "username": "user",
//         "password": "Password@123" //mudar aqui
//     };
//     $.ajax({
//         async: false,
//         url: apiUrl,
//         type: "POST",
//         //data: JSON.stringify(loginModel),
//         data: JSON.stringify(data),
//         contentType: "application/json; charset=utf-8",
//         success: function (response) {
//             token = response.data.token;
//         },
//         error: function (xhr, status, error) {
//             console.log(xhr.responseText);
//         }
//     });
//     return token;
// }

// function enviarEmail() {
    
//     var token = _GetToken();
//     var apiUrl = "https://localhost:7187/api/Home/SendMailAsync"; //testes
//     //var apiUrl = "https://webapp.ipt.br/ldapapi/api/Home/SendMailAsync"; //produção
    
//     var data = {
//         // "email": "elsonms@ipt.br", //mudar aqui
//         "email": "falves@ipt.br",
//         "codigo": GetAcessCode()
//     };

//     $.ajax({
//         url: apiUrl,
//         type: "POST",
//         headers: {
//             Authorization: 'Bearer ' + token
//         },
//         data: JSON.stringify(data),
//         contentType: "application/json; charset=utf-8",

//         success: function (response) {
//         console.log(response);
//             if(response.toLowerCase() === 'success')
//             alert('email enviado com sucesso');                
//             else 
//             alert(response);
//         },
//         error: function (xhr, status, error) {
//             console.log(xhr.responseText);                
//         }
//     });       
// }

// function GetAcessCode() {
//     var date = new Date();
//     //var hours = date.getUTCHours();
//     var hours = date.getHours() + 3;        
//     var minutes = date.getMinutes() + 3;
//     var day = date.getDate() + 3;
//     var seconds = date.getSeconds() + 3;

//     day = day < 10 ? '0' + day : day;        
//     hour = hours < 10 ? '0' + hours : hours;
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     seconds = seconds < 10 ? '0' + seconds : seconds;

//     return codigoGerado = seconds + '' + minutes + '' + hours;// + '' + hours;
// }

// // function GetAcessCode(){
// //     var codigoGerado = Math.floor(100000 + Math.random() * 900000).toString();
// //     return codigoGerado;
// // }

function _GetToken() {
    var token = "";
    var apiUrl = "https://webapp.ipt.br/ldapapi/api/Authenticate/login"; // URL de produção
    var data = {
        "username": "user",
        "password": "Password@123" // Defina sua senha aqui
    };

    return new Promise(function(resolve, reject) {
        $.ajax({
            url: apiUrl,
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                token = response.data.token;
                resolve(token); // Resolve a Promise com o token recebido
            },
            error: function(xhr, status, error) {
                console.error("Erro ao obter token:", xhr.responseText);
                reject(xhr.responseText); // Rejeita a Promise com o erro
            }
        });
    });
}

function enviarEmail() {
    _GetToken().then(function(token) {
        var apiUrl = "https://webapp.ipt.br/ldapapi/api/Home/SendMailAsync"; // URL de produção

        var data = {
            "email": "falves@ipt.br", // Altere o email conforme necessário
            "codigo": GetAcessCode()
        };

        $.ajax({
            url: apiUrl,
            type: "POST",
            headers: {
                Authorization: 'Bearer ' + token
            },
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                console.log(response);
                if (response.toLowerCase() === 'success')
                    alert('Email enviado com sucesso');
                else
                    alert(response);
            },
            error: function(xhr, status, error) {
                console.error("Erro ao enviar email:", xhr.responseText);
                alert('Erro ao enviar email');
            }
        });
    }).catch(function(error) {
        console.error("Erro ao obter token:", error);
        alert('Erro ao obter token');
    });
}

function GetAcessCode() {
    var date = new Date();
    var hours = date.getHours() + 3;
    var minutes = date.getMinutes() + 3;
    var day = date.getDate() + 3;
    var seconds = date.getSeconds() + 3;

    day = day < 10 ? '0' + day : day;
    hour = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return seconds + '' + minutes + '' + hours;
}
