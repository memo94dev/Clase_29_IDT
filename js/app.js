$("button").on("click",function agregar() {
    var toAdd = $("input[name=message]").val();
    $("#messages").html("<p>"+toAdd+"</p>");
    });