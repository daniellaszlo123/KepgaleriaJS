window.addEventListener("load", init, false);
function ID(elem) {
    return document.getElementById(elem);
}
var kepek=[
    {
        eleresiUt:"kepek/_DSC7025.jpg",
        cim:"Kép1",
    },
    {
        eleresiUt:"kepek/_DSC7365.jpg",
        cim:"Kép2",
    },
    {
        eleresiUt:"kepek/_DSC7371_1.jpg",
        cim:"Kép3",
    },
    {
        eleresiUt:"kepek/_DSC7444.jpg",
        cim:"Kép4",
    },
    {
        eleresiUt:"kepek/_DSC7515.jpg",
        cim:"Kép5",
    },
];

var aktIndex=0;

function init() {
    megjelenit(aktIndex);
    for (let index = 0; index < kepek.length; index++) {
        cim="<h2>"+kepek[index].cim+"</h2>"
        txt="<img id='alapkep' src="+kepek[index].eleresiUt+" alt='kép'>";
        divLezaro="</div>";
        
        ID("kepek").innerHTML+=txt;
    }

    ID("bal").addEventListener("click", mozgasBalra);
    ID("jobb").addEventListener("click", mozgasJobbra);
    //ID("alapkep").addEventListener("click", kepBetolt);
}

/*
function kepBetolt() {
    megjelenit(kepIndex);
}
*/

function megjelenit(hely) {
    ID("kivalasztott").src=kepek[hely].eleresiUt;
    ID("kivalasztott").alt=kepek[hely].cim;
}

function mozgasBalra() {
    aktIndex--;
    if (aktIndex<0) {
        aktIndex=kepek.length-1;
    }
    megjelenit(aktIndex);
}

function mozgasJobbra() {
    aktIndex++;
    if (aktIndex>=kepek.length) {
        aktIndex=0;
    }
    megjelenit(aktIndex);
}