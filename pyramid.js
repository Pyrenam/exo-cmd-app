let baseNb = process.argv[2]
let character = process.argv[3]
let isRvd = false

process.argv[4] === '-r' ? isRvd = true : isRvd = false // condition pour enclencher '-r'



if (isRvd){
  for (let i = baseNb; i >0; i--) {
  console.log(character.repeat(i))
} 
}else{
for (let i = 1; i <= baseNb; ++i) {
  console.log(character.repeat(i))
}
}