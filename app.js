// DECLARATION DES VARIABLES OU CONSATANTES

const bouttons = [...document.querySelectorAll('button')] ;
const ecranCalcul = document.querySelector('.calcul-container') ;
const ecranResultat = document.querySelector('.resultat-container')
const heurDiv = document.querySelector('.heures')
const tableauDesTouches = bouttons.map(button => button.textContent)

// APPELS DES FONCTIONS ET EVENEMENTS 

addEventListener('click',(e)=>{
    const touche = e.target.textContent;
    if (tableauDesTouches.includes(touche))
    {

        calculer(touche) ;
        cal() ;
    }
       
})

function cal()
{
    if(ecranCalcul.value == "")
        ecranResultat.value = 0
    else
     ecranResultat.value = eval(ecranCalcul.value)
  
}


setInterval(affichageHeure)

//  IMPLEMENTATIONS DES FONCTIONS 
function calculer(touche)
{
    switch(touche)
    {
        case 'DEL':
            ecranCalcul.value = ecranCalcul.value.substr(0 , ecranCalcul.value.length-1)
            break
        case '=' :
            ecranResultat.value = eval(ecranCalcul.value)
            break
        case 'C':
            ecranCalcul.value = ''
            break
        default :
            ecranCalcul.value += touche
            break
           
    }
}

function affichageHeure()
{
    function ajoutZero(data)
    {
        if(data < 10)
            data = "0" + data
        return data
    }

    var heures , secondes , minutes , date
    date = new Date()
    heures = ajoutZero(date.getHours())
    minutes = ajoutZero(date.getMinutes())
    secondes = ajoutZero(date.getSeconds())

    heurDiv.textContent = heures +":" + minutes + ":" +  secondes

}


