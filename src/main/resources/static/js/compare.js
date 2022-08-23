function comapareFillInpust(){
    if ($("slcTypeCompare").val() !== 0){
        let comp = $("#slcTypeCompare")
        let comp1 = $("#slcTypeCompareInput1")
        let comp2 = $("#slcTypeCompareInput2")
        comp1.html("")
        comp2.html("")
        if (comp.val() === "exercises") {
            $.get("/getSession", function (session){
                let options = "";
                for (let s of session) {
                    options += "<option value= " + s.sId + ">" + s.sesName + " " + s.date + "</option>";
                }
                comp1.html(options)
                comp2.html(options)
            });
            document.getElementById("lblSlcTypeCompareInput1").style.visibility = "visible";
            document.getElementById("slcTypeCompareInput1").style.visibility = "visible";
            document.getElementById("lblSlcTypeCompareInput2").style.visibility = "visible";
            document.getElementById("slcTypeCompareInput2").style.visibility = "visible";

        }
        else if (comp.val() === "exercise"){
            $.get("/getTypeOfExercise", function (typesOfExercises) {
                for (let toe of typesOfExercises) {
                    let newOption = new Option(toe.type, toe.type);
                    document.getElementById("slcTypeCompareInput1").add(newOption, undefined);
                }
            });
            document.getElementById("lblSlcTypeCompareInput1").style.visibility = "visible";
            document.getElementById("slcTypeCompareInput1").style.visibility = "visible";
            document.getElementById("lblSlcTypeCompareInput2").style.visibility = "hidden";
            document.getElementById("slcTypeCompareInput2").style.visibility = "hidden";

        }
    }
    else {
        initiate();
    }
}

function compare(){
    let comp = $("#slcTypeCompare")
    let comp1 = $("#slcTypeCompareInput1")
    let comp2 = $("#slcTypeCompareInput2")
    let outFeil = $("#compareFeil")
    outFeil.html("")
    if (comp1.val() !== comp2.val()) {
        if (comp.val() === "exercises") {
            let output = $("#divCompareOutput")
            let value1 = comp1.val();
            let value2 = comp2.val();
            const sqlS = `SELECT *
                          FROM session
                          WHERE sId IN (${value1}, ${value2})`
            const sqlE = `SELECT *
                          FROM exercise
                          WHERE sId IN (${value1}, ${value2})`
            $.get("/getSessionQuery", {sqlS}, function (session) {
                $.get("/getExerciseQuery", {sqlE}, function (exercise) {
                    formatDeta(exercise, session, output)
                });
            });
        } else if (comp.val() === "exercise") {
            let output = $("#divCompareOutput")
            let value1 = comp1.val();
            const sqlE = `SELECT *
                          FROM exercise
                          WHERE typeOvelse = ('${value1}')`
            $.get("/getExerciseQuery", {sqlE}, function (exercise) {
                let sessionIds = []
                for (let e of exercise) {
                    let id = e.sId
                    if (!sessionIds.includes(id)) {
                        sessionIds.push(id)
                    }
                }
                const sqlS = `SELECT *
                              FROM session
                              WHERE sId IN (${sessionIds})`
                $.get("/getSessionQuery", {sqlS}, function (session) {
                    formatDeta(exercise, session, output);
                })
            })
        }
    }
    else{
        outFeil.html("Kan ikke sammenligne en session med seg selv")
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
    document.getElementById("lblSlcTypeCompareInput1").style.visibility = "hidden";
    document.getElementById("slcTypeCompareInput2").style.visibility = "hidden";
    document.getElementById("lblSlcTypeCompareInput2").style.visibility = "hidden";
}

$(function (){
    initiate();
})