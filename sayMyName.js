//Ecrivez un script sayMyName.js qui prend en argument de la ligne de commande une string et affiche un message comme ci-dessous:
//% node sayMyName.js Sofiane    My name is Sofiane.

//process argv[0]   node
//process argv[1]   proj.js(exo-cmd-app sayMyName)
// process argv[2]  Sofiane

   

const name = process.argv[2]
console.log(`My name is ${name}`)



