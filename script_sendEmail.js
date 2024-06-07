function _GetToken() {
    var token = "";
    //var apiUrl = "https://localhost:7187/api/Authenticate/login";
    var apiUrl = "https://webapp.ipt.br/ldapapi/api/Authenticate/login";
    //var loginModel = { username: "user", password: "Password@123" };
    var data = {
        "username": "user",
        "password": "Password@123"
    };
    $.ajax({
        async: false,
        url: apiUrl,
        type: "POST",
        //data: JSON.stringify(loginModel),
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            token = response.data.token;
        },
        error: function (xhr, status, error) {
            console.log(xhr.responseText);
        }
    });
    return token;
}

function teste() {
    
    var token = _GetToken();
    //var apiUrl = "https://localhost:7187/api/Home/SendMailAsync";
    var apiUrl = "https://webapp.ipt.br/ldapapi/api/Home/SendMailAsync";
    
    var data = {
        "email": "elsonms@ipt.br", //trocar pelo email informado natela de login
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

        success: function (response) {
        console.log(response);
            if(response.toLowerCase() === 'success')
            alert('email enviado com sucesso');                
            else 
            alert(response);
        },
        error: function (xhr, status, error) {
            console.log(xhr.responseText);                
        }
    });       
}

function GetAcessCode() {
    var date = new Date();
    //var hours = date.getUTCHours();
    var hours = date.getHours() + 3;        
    var minutes = date.getMinutes() + 3;
    var day = date.getDate() + 3;
    var seconds = date.getSeconds() + 3;

    day = day < 10 ? '0' + day : day;        
    hour = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return seconds + '' + minutes + '' + hours;// + '' + hours;
}

