

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
            formatDeta( exercise , session, output,4);
        })
   });
}


function validerEnTrening(){
    let ses = $("#slcSession");
    let sesFeil = $("#slcSessionFeil");
    let typeOvelse = $("#slcTypeOvelse");
    let typeOvelseFeil = $("#slcTypeOvelseFeil");
    let antSet = $("#antallSet")
    let antSetFeil = $("#antallSetFeil");
    let antRep = $("#antallRep");
    let antRepFeil = $("#antallRepFeil");

    sesFeil.html("");
    typeOvelseFeil.html("");
    antSetFeil.html("");
    antRepFeil.html("");
    let feil = false;
    if (ses.val()===0){
        sesFeil.html("Må velde en session å linke trening til");
    }
    if(typeOvelse.val() === "Type Of Exercise"){
        typeOvelseFeil.html("Må velge noe inn i type ovelse");
        feil=true;
    }
    if(antSet.val()=== 0){
        antSetFeil.html("Må velge noe inn i antall Set");
        feil=true;
    }
    if(antRep.val()=== 0){
        antRepFeil.html("Må velge noe inn i antall rep");
        feil=true;
    }
    return feil;
}


function validerEnSession(){
    let sesName = $("#inpSesName");
    let sesNameFeil = $("#inpSesNameFeil");
    let date = $("#inpDate");
    let dateFeil = $("#inpDateFeil");
    let oppvarming = $("#inpOppvarming");
    let oppvarmingFeil = $("#inpOppvarmingFeil");

    sesNameFeil.html("");
    dateFeil.html("");
    oppvarmingFeil.html("");

    let feil = false;
    if (sesName.val() === ""){
        sesNameFeil.html("Du må velge et navn på treningsøkten");
        feil = true;
    }
    if (date.val()===0){
        dateFeil.html("må velge en dato");
        feil = true;
    }
    if (oppvarming.val() === ""){
        oppvarmingFeil.html("må velge en oppvarming");
        feil = true;
    }
    return feil;
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
    visSessions();
    showAllExercise();
    loadValuesSet();
    loadValuesRep();
    loadValuesTyngde();
    showTypesOfExercises();
});
