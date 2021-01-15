var nb = Math.round(Math.random()*100) + 1;
var suggestion;
var essais = 10;
var gagne = false;
var compteur;

console.log(nb)

document.querySelector('#guess').addEventListener('keypress',function(ev){
    //console.log(ev.key)
    if(ev.key==="Enter"){
        suggestion = document.getElementById('guess').value;/*lecture*/
            if(essais>0){
                if(suggestion<=100 && suggestion>=1){
                    if(!gagne){
                        prevoir();
                        essais--;
                        document.querySelector("#title").innerText = 
                            `Il vous reste ${essais} essai${(essais>1)?'s':''}`;
                    }
                }
                else afficherResultat("L'entier voulu est compris entre 1 et 100");
            } else {
                document.querySelector('#notif').style.opacity = 1;
                document.querySelector('#titre').innerHTML = 'Perdu!!';
                document.querySelector('#playboard').style.display = "none";
                document.querySelector('#repeter').style.display = "flex"
            }
        }
})

function repeter(){
    document.querySelector('#guess').value = ''
    document.getElementById("notif").style.opacity = 0
    nb = Math.round(Math.random()*100) + 1;
    essais = 10
    gagne = false;
    document.querySelector("#title").innerText = `Il vous reste 10 essais`;
    document.querySelector('#playboard').style.display = "flex";
    document.querySelector('#repeter').style.display = "none"   
}

function afficherResultat(msg){
    clearInterval(compteur)
    document.getElementById("notif").style.opacity = 1;
    document.getElementById('titre').innerHTML = msg;
    let op = 1;
    compteur = setInterval(function(){
        if(op<=0){
            clearInterval(timer);
        }
        op -= 0.025
        document.getElementById("notif").style.opacity = op;
    },50);
    /*compteur = setInterval(function(){
        if(op>=0){
            op -= 0.025
            document.getElementById("notif").style.opacity = op;
        }
    },50);
    setTimeout(function(){
        clearInterval(compteur)
    },2000)
}

function prevoir(){
    if(nb>suggestion){
        afficherResultat('augementez un peu');
    }
    else if(nb<suggestion){
        afficherResultat('diminuez un peu');
    }
    else if(nb==suggestion){
        document.querySelector('#notif').style.opacity = 1;
        document.querySelector('#titre').innerHTML = 'Gagné!!';
        gagne=true
        document.querySelector('#playboard').style.display = "none";
        document.querySelector('#repeter').style.display = "flex"
    }
}