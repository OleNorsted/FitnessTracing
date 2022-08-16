function comapareFillInpust(){
    if ($("slcTypeCompare").val() != 0){
        $("#slcTypeCompareInput1").html("")
        $("#slcTypeCompareInput2").html("")
        if ($("#slcTypeCompare").val() == "exercises") {
            $.get("/getSession", function (session){
                let options = "";
                for (let s of session) {
                    options += "<option value= " + s.sId + ">" + s.sesName + " " + s.date + "</option>";
                }
                $("#slcTypeCompareInput1").html(options)
                $("#slcTypeCompareInput2").html(options)
            });
            document.getElementById("slcTypeCompareInput1").style.visibility = "visible";
            document.getElementById("slcTypeCompareInput2").style.visibility = "visible";

        }
        else if ($("#slcTypeCompare").val() == "exercise"){
            $.get("/getTypeOfExercise", function (typesOfExercises) {
                for (let toe of typesOfExercises) {
                    let newOption = new Option(toe.type, toe.type);
                    document.getElementById("slcTypeCompareInput1").add(newOption, undefined);
                }
            });
            document.getElementById("slcTypeCompareInput1").style.visibility = "visible";
            document.getElementById("slcTypeCompareInput2").style.visibility = "hidden";

        }
    }
    else {
        initiate();
    }
}

function compare(){
    if ($("#slcTypeCompareInput1").val() != $("#slcTypeCompareInput2")){
        if ($("#slcTypeCompare").val() == "exercises"){
            let output = $("#divCompareOutput")
            let value1 = $("#slcTypeCompareInput1").val();
            let value2 = $("#slcTypeCompareInput2").val();
            const sqlS = `SELECT * FROM session WHERE sId IN (${value1}, ${value2})`
            const sqlE = `SELECT * FROM exercise WHERE sId IN (${value1}, ${value2})`
            $.get("/getSessionQuery", {sqlS}, function (session){
                $.get("/getExerciseQuery", {sqlE}, function (exercise){
                    formatDeta(exercise,session,output)
                });
            });
        }
        else if ($("#slcTypeCompare").val() == "exercise"){
            let output = $("#divCompareOutput")
            let value1 = $("#slcTypeCompareInput1").val();
            const sqlE = `SELECT * FROM exercise WHERE typeOvelse = ('${value1}')`
            $.get("/getExerciseQuery", {sqlE} , function (exercise){
                let sessionIds = []
                for (let e of exercise){
                    let id = e.sId
                    if (!sessionIds.includes(id)){
                        sessionIds.push(id)
                    }
                }
                const sqlS = `SELECT * FROM session WHERE sId IN (${sessionIds})`
                $.get("/getSessionQuery", {sqlS}, function (session){
                    formatDeta(exercise,session,output);
                })
            })
        }
    }
}

/*function formatDeta ( exercise,session){
    $("#divCompareOutput").html("");
    let ut = "";
    for (let s of session) {
        ut += "<tr><th>" + s.sesName + "</th><th>"+s.date+"</th><td>"+s.oppvarming+"</td></tr>"
        for (let e of exercise) {
            if (s.sId === e.sId){
                ut += "<tr><td>"+e.antallRep+" x "+e.antallSet+" med "+e.typeOvelse+"</td>";
                for (let i = 1;i < e.antallSet+1;i++){
                    let tyngde = "tyngdeS"+i
                    ut += "<td> Sett "+i+": "+e[tyngde]+" Kg </td>";
                }}
        }
    }
    ut += "</table>"
    $("#divCompareOutput").html(ut);
}*/

function initiate(){
    document.getElementById("slcTypeCompareInput1").style.visibility = "hidden";
    document.getElementById("slcTypeCompareInput2").style.visibility = "hidden";
}

$(function (){
    initiate();
})