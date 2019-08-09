var listActua= [];

function addActuaToList(workToAdd){
    listActua.push(workToAdd);
}
function removeActuaToList(indexOfWork){
    listActua.splice(indexOfWork, 1);
}
$(".table-add").on("click", function (event){
        event.preventDefault();
        var remove = $('<span>').addClass("table-remove glyphicon glyphicon-remove");
        remove.on("click", removeItem2);

        var itemProducto = {proveedor:$('#ProveedorProducto').val(),precio:$('#precioProducto').val()};
        addActuaToList(itemProducto);
        var line = $("<tr>").append($("<td>").text(itemProducto["proveedor"])).append($("<td>").text(itemProducto["precio"])).append($("<td>").append(remove));
        $('#table > tbody').append(line);
        $('#ProveedorProducto').val("");
        $('#precioProducto').val("");
});

function removeItem2() {
    removeWorkToList($(this).parents("tr").index());
    $(this).parents("tr").detach();
}