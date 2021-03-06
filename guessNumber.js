/*Ecrivez un petit jeu qui demande à un utilisateur de trouver un nombre qui aura été passé en ligne de commande par le maitre du jeu. Le programme s'exécutera tant que l'utilisateur n'aura pas trouvé le bon nombre. Après chaque tentative de l'utilisateur pour trouver le nombre secret, celui entré en argument de la ligne de commande du programme à son lancement, les messages suivant lui apparaîtront:

    si le nombre entré par l'utilisateur est plus petit que le nombre secret: 'Nombre trop petit' en rouge
    si le nombre entré par l'utilisateur est plus grand que le nombre secret: 'Nombre trop grand' en rouge
    si le nombre entré par l'utilisateur est égal au nombre secret: 'Bravo!' en vert

Utiliser readline-sync pour l'interaction avec l'utilisateur.*/

const chalk = require('chalk')
const readline = require ('readline-sync')

const MN = process.argv[2]


let isNotSolved = true
let userNb = 0

while (isNotSolved){
   userNb = readline.question('Donne moi le nombre secret : ')
  
  
   if (userNb === MN) {
    isNotSolved = false
  } else if (userNb > MN){
 console.log('Ton nombre est trop grand')
  } else {
    console.log('Ton nombre est trop petit')
  }
}
console.log(chalk.green('Bravo'))
