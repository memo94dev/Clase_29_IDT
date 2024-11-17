$("#habilitar").on("click", function () {
    $("#campo").prop("disabled", false);
});
$("#desabilitar").on('click', function () {
    $("#campo").prop('disabled', true);
});
$("#muestra").on('click', function () {
    alert("El valor en el campo es:" + $("#campo").val());
});