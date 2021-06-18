var alerts = new Array();
alerts['user'] = "aluser";
alerts['pass'] = "alpass";
function validar(obj){
    var alert = document.getElementById(alerts[obj.id]);
    if(obj.value == ""){
        alert.innerHTML= '<div class="alert alert-danger" role="alert">' +
                                "El campo no puede estar vacio!!"+
                            "</div>";
                            }
    else{
        alert.innerHTML = "";
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
    window.location.href = "/form/home.html";
}