$(document).ready(function(){
    $("#mostrar").on( "click", function() {
    $('#target').show(); //muestro mediante id
    $('.target').show(); //muestro mediante clase
    });
    $("#ocultar").on( "click", function() {
    $('#target').hide("linear"); //oculto mediante id
    $('.target').hide("linear"); //oculto mediante clase
    });
    });