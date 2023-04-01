    // Trouver si le mot est un palyndrome
    function IsPalindrome(Mot) {
    const X = Mot
            .split("") //séparé
            .reverse() //renversé
            .join("") //joindre
    return Mot.toUpperCase() === X.toUpperCase() // retourne vraie ou faut en méttant tout en majuscule
    }

    console.log("Kayak", IsPalindrome("Kayak"))      // test à afficher sur console
    console.log("Bonjour", IsPalindrome("Bonjour"))
    console.log("SOS", IsPalindrome("SOS"))


    // Classer les élèves en fonction de leurs moyenne et afficher les lauréats avec notes Max et Min
const Eleves = [
    {
    Name: "Faniry",
    Notes: [10, 12, 15, 18],
    },
    {
    Name: "Elisa",
    Notes: [09, 12, 13, 14]
    },
    {
    Name: "Ando",
    Notes: [12, 12, 06, 14]
    },
    {
    Name: "Ndraina",
    Notes: [18, 19, 16, 14]
    }
]

Tab = [18, 19, 16, 14]

// Créer une fonction pour calculer une moyenne des notes
function Moyenne(Notes) {
    let Sum = 0
    for (Note of Notes) {
    Sum = Sum + Note
    }
    return Sum / Notes.length
}

// boucle pour créer des objets Moyenne (à partir de la première fonction) et Note Max et Min à partir du tableau des notes
for (Eleve of Eleves) {
    Eleve.MoyenElv = Moyenne(Eleve.Notes)
    Eleve.NoteMax = Math.max(...Eleve.Notes)
    Eleve.NoteMin = Math.min(...Eleve.Notes)
}

// Créer une fonction pour comparer les notes moyennes d'un éleve a et d'un autre b
const Reorganiser = (a, b) => {
    return b.MoyenElv - a.MoyenElv
}

// Réorganiser le tableau (transforme le tableau) en fonction des moyennes des notes de chaque élève moyennant la fonction Reorganiser
Eleves.sort(Reorganiser)

// Créer une fonction pour faciliter l'écriture du résumé des notes et moyenne d'un élève
let FormuLaur = (Eleve) => {
    return `${Eleve.Name} avec une note moyenne de ${Eleve.MoyenElv}/20.
    Il/Elle a eu une note Maximale de ${Eleve.NoteMax} et une note Minimale de ${Eleve.NoteMin}`
}

// Afficher dans le document les trois premiers de la classe
document.write(`Les lauréats de cette année sont : <br>
01er: ${FormuLaur(Eleves[0])}<br>
02eme: ${FormuLaur(Eleves[1])}<br>
03eme: ${FormuLaur(Eleves[2])}`)

console.log(Eleves) //Afficher le tableau dans la console