var msg = 'Exo ++';
console.log ("Exercice 5.11");
var nbr1;
var nbr2;
var diviseur;

nbr1 = parseInt(prompt("Entrez le premier nombre"));
nbr2 = parseInt(prompt("Entrez le second nombre"));

if (nbr1 > 0 && nbr2 > 0) {
    for (var i=1; i <= nbr1 ;i++){

    if((nbr1 % i == 0) && (nbr2 % i == 0)){
    diviseur = i;
    }
    }
console.log ("Le PGCD entre "+nbr1+" et "+nbr2+ " est : " +diviseur);
}