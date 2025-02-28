// exemple d'utilisation de map

//tableau = [3, 2, 5]
//const nouveautableau = tableau.map(element => element * 2)
//console.log(tableau)
//console.log(nouveautableau) // [6, 4, 10]

// DOM element 
const touches = [...document.querySelectorAll('.button')];
//recuperation des elements data-key du DOM et retourne l'element dans un nouveau tableau
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran'); 



document.addEventListener('keydown',(e) => {
    const valeur = e.keycode.toString();
    //console.log(valeur,typeof valeur);
})

document.addEventListener('click',(e) =>{
    const valeur = e.target.dataset.key;
    //console.log(valeur, typeof valeur);
    calculer(valeur);
})

const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)){
        switch (valeur) {
            case '8':
                ecran.textContent = '';
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;            
        }
    }
}

window.addEventListener('error',(e) => {
    alert('Une erreur est survenue dans votre calcul: ' + e.message);

});