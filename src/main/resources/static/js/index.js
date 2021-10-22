
$(function(){
    let select = '';
    for (let i=0;i<=5;i++) {
        select += '<option value=' + i + '>' + i + '</option>';
    }
    $('#antallSet').html(select);
});

$(function(){
    let select = '';
    for (let i=1;i<=30;i++) {
        select += '<option value=' + i + '>' + i + '</option>';
    }
    $('#antallRep').html(select);
});

$(function(){
    let select = '';
    for (let i=1;i<=100;i++) {
        select += '<option value=' + i + '>' + i + ' Kg</option>';
    }
    $('#tyngdeS1').html(select);
    $('#tyngdeS2').html(select);
    $('#tyngdeS3').html(select);
    $('#tyngdeS4').html(select);
    $('#tyngdeS5').html(select);
});

function SynligTyngde() {
for (let i = 1; i < 5; i++) {
    if ($('#antallSet').val() >= i) {
        document.getElementById("tyngdeSet"+ i ).style.display = 'initial';
    } else {
        document.getElementById("tyngdeSet" + i).style.display = 'none';
    }
}
   /* if ($('#antallSet').val() >= 2){
        document.getElementById("tyngdeSet2").style.display = 'initial';}
    else { document.getElementById("tyngdeSet2").style.display = 'none';}

    if ($('#antallSet').val() >= 3){
        document.getElementById("tyngdeSet3").style.display = 'initial';}
    else { document.getElementById("tyngdeSet3").style.display = 'none';}

    if ($('#antallSet').val() >= 4){
        document.getElementById("tyngdeSet4").style.display = 'initial';}
    else { document.getElementById("tyngdeSet4").style.display = 'none';}

    if ($('#antallSet').val() >= 5){
        document.getElementById("tyngdeSet5").style.display = 'initial';}
    else { document.getElementById("tyngdeSet5").style.display = 'none';}*/
}

function reg (){

    const trening = {
        typeOvelse : $("#typeOvelse").val(),
        antallSet : $("#antallSet").val(),
        antallRep : $("#antallRep").val(),
        tyngdeS1 : $("#tyngdeS1").val(),
        tyngdeS2 : $("#tyngdeS2").val(),
        tyngdeS3 : $("#tyngdeS3").val(),
        tyngdeS4 : $("#tyngdeS4").val(),
        tyngdeS5 : $("#tyngdeS5").val(),
    };
    const feil = validerEnInput();
    if(!feil){
       $.post("/saveNewExercise", trening, function (){
           showAllExercise();
       });
        $('#typeOvelse').get(0).selectedIndex = 0;
        $('#antallSet').get(0).selectedIndex = 0;
        $('#antallRep').get(0).selectedIndex = 0;
        $('#tyngdeS1').get(0).selectedIndex = 0;
        $('#tyngdeS2').get(0).selectedIndex = 0;
        $('#tyngdeS3').get(0).selectedIndex = 0;
        $('#tyngdeS4').get(0).selectedIndex = 0;
        $('#tyngdeS5').get(0).selectedIndex = 0;
        SynligTyngde();
    }
}

function regSession(){

    const exercise = {
        date : $("#trainSession").val(),
        oppvarming: $("#oppvarming").val(),
    }

    const feil = validateInputsSetion()
    if (!feil){
        $.post("/saveNewSession", exercise, function (){

        })
    }
}

function showAllExercise(){
   // $.get( "/getExercise", function( exercise ) {
        $.get("/getSession", function (session){
            formatDeta( session);
        })
   // });

}


function formatDeta ( session){
    let ut = "<table id='output'><tr><th>Treningsøkt Dato</th><th>Type Øvelse</th><th>Antall Set</th><th>Antall Rep per set</th><th>Tyngde</th></tr>";
    for (let s of session){
        console.log(s.date);

        ut += "<tr><th>"+exercise.antallSet+"</th>";
    }


       ut += "</table>"
    $("#Result").html(ut);
}



function validerEnInput(){
    $("#typeOvelseFeil").html("");
    $("#antallSetFeil").html("");
    $("#antallRepFeil").html("");
    let feil = false;
    if($("#typeOvelse").val()== 0){
        $("#typeOvelseFeil").html("Må velge noe inn i type ovelse");
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

function validateInputsSetion(){
    $("#trainSessionFeil").html("");
    $("#oppvarmingFeil").html("");

    let feil = false;
    if ($("#trainSession").val()==0){
        $("#trainSessionFeil").html("må velge en dato");
        feil = true;
    }
    console.log($("#oppvarming").val())
    if ($("#oppvarming").val() == ""){
        $("#oppvarmingFeil").html("må velge en oppvarming");
        feil = true;
    }
    return feil;
}





