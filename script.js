const bottonesasso = document.getElementById("sasso");
const bottonecarta = document.getElementById("carta");
const bottoneforbice = document.getElementById("forbice");

const imguser = document.getElementById("userimg");
const imgcomputer = document.getElementById("computerimg");

const punteggio = document.getElementById("punteggio");
const sceltaSimbolo = document.getElementById("containersceltasimbolo");

let sceltautente = 0;
let x = 0;//user
let y = 0;//cpu
let timeoutID = "";



bottonesasso.addEventListener('click', function () {
    // console.log("ciaoooo");
    let sceltabot = Math.floor(Math.random()*3);
    sceltabot++;
    sceltautente = 1;
    // console.log("utente",sceltautente);
    // console.log("bot",sceltabot);
    if(verificaVincitore(sceltautente, sceltabot) === 1){
        x++;
        sceltaSimbolo.textContent = "HAI VINTO!";
    } else if(verificaVincitore(sceltautente, sceltabot) === 0){
        y++;
        sceltaSimbolo.textContent = "HAI PERSO";
    } else{
        sceltaSimbolo.textContent = "TE LA SEI SCAMPATA! PAREGGIO";
    }
    
    console.log("Player sta a =", x , "mentre il cpu sta a", y);
    punteggio.innerHTML = "" + x + " | " + y;
});

bottonecarta.addEventListener('click', function () {
    // console.log("ciaoooo");
    let sceltabot = Math.floor(Math.random()*3);
    sceltabot++;
    sceltautente = 2;
    console.log("utente",sceltautente);
    console.log("bot",sceltabot);
    if(verificaVincitore(sceltautente, sceltabot) === 1){
        x++;
        sceltaSimbolo.textContent = "HAI VINTO!";
    } else if(verificaVincitore(sceltautente, sceltabot) === 0){
        y++;
        sceltaSimbolo.textContent = "HAI PERSO";
    } else{
        sceltaSimbolo.textContent = "TE LA SEI SCAMPATA! PAREGGIO";
    }
    console.log("Player sta a =", x , "mentre il cpu sta a", y);
    punteggio.innerHTML = "" + x + " | " + y;
});

bottoneforbice.addEventListener('click', function () {
    // console.log("ciaoooo");
    let sceltabot = Math.floor(Math.random()*3);
    sceltabot++;
    sceltautente = 3;
    console.log("utente",sceltautente);
    console.log("bot",sceltabot);
    if(verificaVincitore(sceltautente, sceltabot) === 1){
        x++;
        sceltaSimbolo.textContent = "HAI VINTO!";
    } else if(verificaVincitore(sceltautente, sceltabot) === 0){
        y++;
        sceltaSimbolo.textContent = "HAI PERSO";
    } else{
        sceltaSimbolo.textContent = "TE LA SEI SCAMPATA! PAREGGIO";
    }
    //console.log("Player sta a =", x , "mentre il cpu sta a", y);
    punteggio.innerHTML = "" + x + " | " + y;
});

function verificaVincitore(user, computer){
    switch(user){
        case 1 :
            if(computer === 2){
                return 0;//vince cpu
            } else if( computer == 3){
                return 1;//vince user
            }
        break;    
        case 2 :
            if(computer === 3){
                return 0;
            } else if (computer == 1){
                return 1;
            }
        break;    
        case 3 :
            if(computer === 1){
                return 0;
            } else if(computer === 2){
                return 1;
            }
        break;    
        default : return 2;  //pareggio      
    }
}