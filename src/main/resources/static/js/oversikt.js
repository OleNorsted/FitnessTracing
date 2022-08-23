function loadOversikt(){
    let output = $("#UtOversikt")
    $.get( "/getExercise", function( exercise ) {
        $.get("/getSession", function (session){
            formatDeta( exercise , session, output);
        })
    });
}

$(function (){
    loadOversikt();
});