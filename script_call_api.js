    // $(document).ready(function () {
        
    //     $("#Password").on('blur', function () {
            
    //         if ($("#UserName").val() !== '' && $("#Password").val() !== '') {
    //             $('#spinner').addClass('spinner');
    //             var data = {
    //                 "UserName": $("#UserName").val(),
    //                 "Password": $("#Password").val()
    //             };
    //             $.ajax({
    //                 url: "http://servapp00/ldapapi/api/Ldap/GetPreviousData",
    //                 type: "POST",
    //                 data: JSON.stringify(data),
    //                 contentType: "application/json; charset=utf-8",

    //                 success: function (response) {
    //                     console.log(response);
    //                     console.log(response.data);
    //                     if (response.success) {
    //                         $("#PostalCode").val(response.data.postalCode);
    //                         $("#Location").val(response.data.location);
    //                         $("#StreetAddress").val(response.data.streetAddress);
    //                         $("#TelephoneNumber").val(response.data.telephoneNumber);
    //                     }
    //                     $('#spinner').removeClass('spinner');
    //                 },
    //                 error: function (xhr, status, error) {
    //                     console.log(xhr.responseText);
    //                     $('#spinner').removeClass('spinner');
    //                 }
    //             });
    //         }
    //     });


    //     //////////
    //     $("#confirm-nova-senha").on('keyup', function () {
    //         var password = $("#nova-senha").val();
    //         var confirmPassword = $("#confirm-nova-senha").val();
    //         if (password != confirmPassword)
    //             $("#CheckPasswordMatch").html("Senhas não conferem!").css("color", "red");
    //         else
    //             $("#CheckPasswordMatch").html("").css("color", "green");
    //     });

    //     $("#btn-senha, #btn-dados").click(function (e) {
    //         var btn_id = this.id;
    //         var apiUrl = "http://servapp00/ldapapi/api/Authenticate/login";

    //         //var loginModel = { username: "user", password: "Password@123" };
    //         var data = {
    //             "username": "user",
    //             "password": "Password@123"
    //         };

    //         $('#spinner').addClass('spinner');

    //         $.ajax({
    //             url: apiUrl,
    //             type: "POST",
    //             //data: JSON.stringify(loginModel),
    //             data: JSON.stringify(data),
    //             contentType: "application/json; charset=utf-8",

    //             success: function (response) {
    //                 console.log(response);
    //                 console.log(response.data);
    //                 console.log(response.data.token);

    //                 if (btn_id === 'btn-senha') {
    //                     apiUrl = "http://servapp00/ldapapi/api/Ldap/ResetPassword";
    //                 } else {
    //                     apiUrl = "http://servapp00/ldapapi/api/Ldap/ChangeProperties";
    //                 }
    //                 var token = response.data.token;

    //                 CallAPI(token, apiUrl, btn_id);
    //             },
    //             error: function (xhr, status, error) {
    //                 console.log(xhr.responseText);
    //                 $('#spinner').removeClass('spinner');
    //             }
    //         });
    //     });

    //     function CallAPI(token, apiUrl, id) {

    //         //console.log(id);
    //         var data = '';
    //         if (id === 'btn-senha') {
    //             data = {
    //                 "UserName": $("#usuario").val(),
    //                 "Password": $("#senha").val(),
    //                 "NewPassword": $("#nova-senha").val(),
    //             };
    //         } else {
    //             data = {
    //                 "UserName": $("#UserName").val(),
    //                 "Password": $("#Password").val(),
    //                 "TelephoneNumber": $("#TelephoneNumber").val(),
    //                 "StreetAddress": $("#StreetAddress").val(),
    //                 "PostalCode": $("#PostalCode").val(),
    //                 "Location": $("#Location").val(),
    //             };
    //         }
    //         //console.log(data);
    //         // var loginModel = { username: "elsonms", password: "abc123", newPassword: "abc123" };
    //         var loginModel = { username: "elsonms", password: "abc123", newPassword: "abc123" }; //testes

    //         $.ajax({
    //             type: "POST",
    //             url: apiUrl,
    //             headers: {
    //                 Authorization: 'Bearer ' + token
    //             },
    //             data: JSON.stringify(data),
    //             contentType: "application/json; charset=utf-8",

    //             success: function (result, status, xhr) {
    //                 console.log(result);
    //                 $('#messageDivSuccess').css('display', 'block').html(result.message);
    //                 $('#spinner').removeClass('spinner');
    //             },
    //             error: function (xhr, status, error) {
    //                 console.log(error);
    //                 $('#messageDivDanger').css('display', 'block').html(result.message);
    //                 $('#spinner').removeClass('spinner');
    //             }
    //         });
    //     }
    // });
