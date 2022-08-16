function formatDeta ( exercise,session, output){
    output.html("");
    let ut = "";
    for (let i = session.length-1; i>=0; i--) {
        let s = session[i]
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

