function addProduct(id){

    var oCells = document.getElementById(id).cells;
    var nombreProducto = oCells.item(1).innerHTML;
    var precio = parseFloat(oCells.item(3).innerHTML);
    var cantidad = parseFloat(oCells.item(4).firstChild.value);
    var total = precio*cantidad;
    if(!Number.isNaN(cantidad)){
        var table = document.getElementById("productobuylist");
        table.innerHTML+=   "<td>" + nombreProducto + "</td>" +
                            "<td>"+ cantidad + "</td>" +
                            "<td>"+ total +"</td>";
        var subtotal = document.getElementById("subtotal");
        subtotal.innerHTML = parseFloat(subtotal.innerHTML) + total;
        var iva = document.getElementById("iva");
        iva.innerHTML = Math.round((parseFloat(subtotal.innerHTML) + total)*0.19);
        var totalFinal = document.getElementById("total");
        totalFinal.innerHTML = Math.round(parseFloat(subtotal.innerHTML)*1.19);
        oCells.item(4).firstChild.value = "";
    }

}
function searchByCategory(obj){
    // var oTable = document.getElementById('productList');
    // for(i =1;i<oTable.rows.length; i++){
    //     var ojbCells = oTable.rows.item(i).cells;
    //     var categoria = ojbCells.item(2).innerHTML;
    //     if(categoria != obj.value){
    //         ojbCells.hidden = true;
    //     }
    // }
}