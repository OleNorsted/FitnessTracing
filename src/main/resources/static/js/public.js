function formatDeta ( exercise, session, output, antall){
    output.html("");
    let lengde;
    if (typeof antall !== 'undefined' && antall < session.length){
        lengde = antall
    }
    else {
        lengde = session.length
    }
    let ut = "";
    for (let i = lengde-1; i>=0; i--) {
        let s = session[i]
        ut += "<tr class='headerRow'><th class='thR'>" + s.sesName + " </th><th class='thR'>"+s.date+"</th><td class='tdR'>"+s.oppvarming+"</td></tr>"
        for (let e of exercise) {
            if (s.sId === e.sId){
                ut += "<tr class='indentRow'><td>"+e.antallRep+" x "+e.antallSet+" med "+e.typeOvelse+"</td>";
                for (let i = 1;i < e.antallSet+1;i++){
                    let tyngde = "tyngdeS"+i
                    ut += "<td> Sett "+i+": "+e[tyngde]+"Kg </td>";
                }
            }
        }
    }
    ut += "</table>"
    output.html(ut);
}

function visNewTrainTask(){
    document.getElementById("newTrainingTask").style.visibility = "visible";
    document.getElementById("main").style.display = "none";
}

function moveToIndexNewExercise (){
    location.href='../index.html';
    visNewTrainTask()
}

