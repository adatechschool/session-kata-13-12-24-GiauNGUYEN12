let colors = [ "A", "B", "C", "D", "E", "F", "G", "H" ]
//let monSetColors = new Set(colors)
let nombreEssais = 12
let combinationToGuess = new Array ()

for ( let i = 0; i < 4; i++){
    combinationToGuess[i] = colors[Math.floor(Math.random()*colors.length)]
    // choisir les combinaision des couleurs de manière aléatoire
}
console.log(combinationToGuess)

let usersCombination = new Set(["D", "R", "C", "D"])
function isGoodColors (CombinationChoose) {
    for ( let i = 0; i < 4; i++ ) {
    if ( CombinationChoose.has(colors[i]) ) { 
    } else {
        return false
    }
}
return true
}

console.log("c'est des bonnes couleur" +" "+ isGoodColors(usersCombination))

function hasCombinationFound (usersCombination) {
    for ( let i = 0; i < 4; i++ ){
        if ( usersCombination[i] == combinationToGuess[i]) {
        } else {
            return false
        }
    }
    return true
}

console.log(hasCombinationFound(usersCombination))

function runGame () {
    var combinaisonFound = false
    //while (!combinaisonFound) {
        if(isGoodColors(usersCombination)){
            combinaisonFound = hasCombinationFound(usersCombination)
        }
    //} 
    console.log(combinaisonFound)
}
runGame()