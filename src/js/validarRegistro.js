var alerts = new Array();
alerts['user'] = "aluser";
alerts['email'] = "alemail";
alerts['password'] = "alpass";
alerts['copassword'] = "alcopass";
function validar(obj){
    var alert = document.getElementById(alerts[obj.id]);
    if(obj.value == ""){
        alert.innerHTML= '<div class="alert alert-danger" role="alert">' +
                                "El campo no puede estar vacio!!"+
                            "</div>";
                            }
    else{
        if(obj.id == "email"){
            var element = document.getElementById(obj.id)
            var arroba = element.value.indexOf("@");
            var punto = element.value.lastIndexOf(".");

            if(arroba<1 || punto < arroba + 2 || element.length<punto+2){
                alert.innerHTML= '<div class="alert alert-danger" role="alert">' +
                "Correo no valido!!"+
                "</div>";
            }
            else {
                alert.innerHTML= "";
            }
        }
        else if(obj.id == 'copassword'){
            var element1 = document.getElementById(obj.id)
            var element2 = document.getElementById("password");
            if(element1.value != element2.value){
                alert.innerHTML= '<div class="alert alert-danger" role="alert">' +
                                    "Las contraseñas no coinciden!!"+
                                    "</div>";
            }
            else{
                alert.innerHTML= "";
            }

        }
        else{
            alert.innerHTML= "";
        }
    }
}
function validarTodos(){
    for( i in alerts){
        var alert = document.getElementById(alerts[i]);
        console.log(alert);
        if(alert.innerHTML != ""){
            document.getElementById("valTodos").innerHTML = '<div class="alert alert-danger" role="alert">' +
                                                                "Hay campos que estan vacios!!"+
                                                            "</div>";
            return false;
        }
    }
    document.getElementById("valTodos").innerHTML = "";
    window.location.href = "/login/login.html";
}