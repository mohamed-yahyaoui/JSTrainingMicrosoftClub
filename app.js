var nb = Math.round(Math.random()*100) + 1;
var suggestion;
var essais = 10;
var gagne = false;

console.log(nb)

document.getElementById('envoyer').addEventListener('click',function(){
    suggestion = document.getElementById('champ').value;/*lecture*/
    if(essais>0){
        if(suggestion<=100 && suggestion>=1){
            if(!gagne){
                prevoir();
                essais--;
                console.log(essais)
            }
        }
        else document.getElementById('titre').innerHTML = "L'entier voulu est compris entre 1 et 100";
    } else {
        document.getElementById('titre').innerHTML = "Perdu!!";
    }
});

function prevoir(){
    if(nb>suggestion){
        document.getElementById('titre').innerHTML ='augementez un peu';
    }
    else if(nb<suggestion){
        document.getElementById('titre').innerHTML ='diminuez un peu';
    }
    else if(nb==suggestion){
        document.getElementById('titre').innerHTML ='Gagné!!';
        gagne=true
    }
}