

function loadValuesSet(){
    let select = '';
    for (let i=0;i<=5;i++) {
        select += '<option value=' + i + '>' + i + '</option>';
    }
    $('#antallSet').html(select);
}

function loadValuesRep(){
    let select = '';
    for (let i=1;i<=30;i++) {
        select += '<option value=' + i + '>' + i + '</option>';
    }
    $('#antallRep').html(select);
}


function loadValuesTyngde(){
    let select = '';
    for (let i=1;i<=100;i++) {
        select += '<option value=' + i + '>' + i + ' Kg</option>';
    }
    $('#tyngdeS1').html(select);
    $('#tyngdeS2').html(select);
    $('#tyngdeS3').html(select);
    $('#tyngdeS4').html(select);
    $('#tyngdeS5').html(select);
}


function synligTyngde() {
    for (let i = 1; i < 5; i++) {
        if ($('#antallSet').val() >= i) {
            document.getElementById("tyngdeSet"+ i ).style.display = 'initial';
        } else {
            document.getElementById("tyngdeSet" + i).style.display = 'none';
        }
    }
}


function visSessions(){
    $.get("/getSession", function (session){
        let options = "";
        for (let s of session){
            options += "<option value= "+s.sId+">"+s.sesName+" "+s.date+"</option>";
        }
        $("#slcSession").html(options)
        document.querySelector("#slcSession").selectedIndex = document.querySelector("#slcSession").length - 1;

    })
}


function reg (){

    const trening = {
        sId : $("#slcSession").val(),
        typeOvelse : $("#slcTypeOvelse").val(),
        antallSet : $("#antallSet").val(),
        antallRep : $("#antallRep").val(),
        tyngdeS1 : $("#tyngdeS1").val(),
        tyngdeS2 : $("#tyngdeS2").val(),
        tyngdeS3 : $("#tyngdeS3").val(),
        tyngdeS4 : $("#tyngdeS4").val(),
        tyngdeS5 : $("#tyngdeS5").val(),
    };
    const feil = validerEnTrening();
    if(!feil){
       $.post("/saveNewExercise", trening, function () {
           showAllExercise();
       });
        $('#slcTypeOvelse').get(0).selectedIndex = 0;
        $('#antallSet').get(0).selectedIndex = 0;
        $('#antallRep').get(0).selectedIndex = 0;
        $('#tyngdeS1').get(0).selectedIndex = 0;
        $('#tyngdeS2').get(0).selectedIndex = 0;
        $('#tyngdeS3').get(0).selectedIndex = 0;
        $('#tyngdeS4').get(0).selectedIndex = 0;
        $('#tyngdeS5').get(0).selectedIndex = 0;
        synligTyngde();
    }
}


function regSession(){
    const session = {
        sesName : $("#inpSesName").val(),
        date : $("#inpDate").val(),
        oppvarming: $("#inpOppvarming").val(),
    }
    const feil = validerEnSession()
    if (!feil){
        $.post("/saveNewSession", session, function (){
        visSessions();
        })
    }
}


function showAllExercise(){
    let output = $("#Result")
   $.get( "/getExercise", function( exercise ) {
        $.get("/getSession", function (session){
            formatDeta( exercise , session, output);
        })
   });
}


function validerEnTrening(){
    $("#slcSessionFeil").html("");
    $("#slcTypeOvelseFeil").html("");
    $("#antallSetFeil").html("");
    $("#antallRepFeil").html("");
    let feil = false;
    if ($("#slcSession").val()==0){
        $("#slcSessionFeil").html("Må velde en session å linke trening til");
    }
    if($("#slcTypeOvelse").val()== "Type Of Exercise"){
        $("#slcTypeOvelseFeil").html("Må velge noe inn i type ovelse");
        feil=true;
    }
    if($("#antallSet").val()== 0){
        $("#antallSetFeil").html("Må velge noe inn i antall Set");
        feil=true;
    }
    if($("#antallRep").val()== 0){
        $("#antallRepFeil").html("Må velge noe inn i antall rep");
        feil=true;
    }
    return feil;
}


function validerEnSession(){
    $("#inpSesNameFeil").html("");
    $("#inpDateFeil").html("");
    $("#inpOppvarmingFeil").html("");

    let feil = false;
    if ($("#inpSesName").val() == ""){
        $("#inpSesNameFeil").html("Du må velge et navn på treningsøkten");
        feil = true;
    }
    if ($("#inpDate").val()==0){
        $("#inpDateFeil").html("må velge en dato");
        feil = true;
    }
    if ($("#inpOppvarming").val() == ""){
        $("#inpOppvarmingFeil").html("må velge en oppvarming");
        feil = true;
    }
    return feil;
}


function visNewTrainTask(){
    document.getElementById("newTrainingTask").style.visibility = "visible";
    document.getElementById("main").style.display = "none";
}

function visMain(){
    document.getElementById("newTrainingTask").style.visibility = "hidden";
    document.getElementById("main").style.display = "block";
}


function leggTilNyOvelse() {
    let inp = $("#inpNyOvelse");
    $("#inpNyOvelseFeil").html("")
    let inpText = $("#inpNyOvelse").val();
    if (inpText != null) {
        let values = document.querySelector('#slcTypeOvelse').options;
        let alike = false;
        for (let i = 0; i < values.length; i++) {
            if (values[i].value === inpText) {
                alike = true;
            }
        }
        if (!alike) {
            const newTypeOfExercise = {type: inpText}
            $.post("/saveNewTypeOfExercise", newTypeOfExercise, function () {
                showTypesOfExercises();
                $("#inpNyOvelseFeil").html("Ny øvelse lagret");
            });
            /*let newOption = new Option(inpText,inpText);
            document.getElementById("slcTypeOvelse").add(newOption,undefined)
            $("#inpNyOvelseFeil").html("Ny øvelse lagret");*/
        }
    }
}

function showTypesOfExercises(){
    $.get("/getTypeOfExercise", function (typesOfExercises){
        $("#slcTypeOvelse").html("")
        for (let toe of typesOfExercises){
            let newOption = new Option(toe.type,toe.type);
            document.getElementById("slcTypeOvelse").add(newOption,undefined)
        }
    })
}


function setDate(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    $("#inpDate").val(today)
}

/*function comapreFillInpust(){
    if ($("slcTypeCompare").val() != 0){
        if ($("slcTypeCompare").val() == "exercises") {
            let options = "";
            for (let s of session) {
                options += "<option value= " + s.sId + ">" + s.sesName + " " + s.date + "</option>";
            }
            $("#slcTypeCompareInput1").html(options)
            $("#slcTypeCompareInput2").html(options)
        }
        else if ($("slcTypeCompare").val() == "exercise"){
            $.get("/getTypeOfExercise", function (typesOfExercises) {
                $("#slcTypeCompareInput1").html("")
                $("#slcTypeCompareInput2").html("")
                let values1 = document.querySelector('#slcTypeCompareInput1').options;
                let values2 = document.querySelector('#slcTypeCompareInput2').options;
                for (let toe of typesOfExercises) {
                    let newOption = new Option(toe.type, toe.type);
                    document.getElementById("slcTypeCompareInput1").add(newOption, undefined)
                    document.getElementById("slcTypeCompareInput2").add(newOption, undefined)
                }
            });
        }
    }
}*/



$(function (){
    visMain();
    visSessions();
    showAllExercise();
    loadValuesSet();
    loadValuesRep();
    loadValuesTyngde();
    showTypesOfExercises();
});
