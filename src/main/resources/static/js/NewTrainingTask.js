function leggTilNyOvelse() {
    let inp = $("#inpNyOvelse");
    $("#inpNyOvelseFeil").html("")
    let inpText = $("#inpNyOvelse").val();
    if (inpText != null) {
        $.get("/getTypeOfExercise", function (types) {
            let alike = false;
            for (let i = 0; i < types.length; i++) {
                if (types[i].value === inpText) {
                    alike = true;
                }
            }
            if (!alike) {
                const newTypeOfExercise = {type: inpText}
                $.post("/saveNewTypeOfExercise", newTypeOfExercise, function () {
                    $("#inpNyOvelseFeil").html("Ny øvelse lagret");
                });
            }
        });
    }
}