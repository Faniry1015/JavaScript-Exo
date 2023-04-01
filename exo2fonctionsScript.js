//Texte à compté la fréquence de répétition de chaque mot
let text = "Vous êtes un développeur / une développeuse freelance qui entame son premier contrat avec son premier client. Votre objectif est de construire un site responsive, version mobile et desktop, sur l’univers de BATMAN (univers cinématographique). Le client vous a normalement transmis tous les documents dont vous aurez besoin pour développer ce site. Votre mission sera de satisfaire les souhaits du client, en réalisant un site internet le plus fidèle possible au cahier des charges.  Tous les détails sont présents à la suite de ce document. Pour réaliser ce projet, vous avez initialement 2 semaines. Le rendu de l’évaluation se fera sur Github en respectant impérativement la nomenclature suivante :"
//Créer un tableau des caractères spéciaux à ne pas prendre en compte
    const specCarTab = ["/", ".", "(", ")", ",", ":"]
//Enlever les caractères spéciaux
    for (let specCar of specCarTab) {
        text = text.replaceAll(specCar, "")
    }
//Miniscul et séparé le texte dans un tableau
    const textSepar = text.toLowerCase().split(" ")
//Objet vide pour y mettre chaque mot en clé et fréquence en valeur
    const freqObj = {}
//Ne pas considéré les vides (""). Pour chaque mot du tableau textSepar, si le mot existe déjà dans l'objet, incrémenté sa valeur : si non créer la clé correspondant au mot et lui donné la valeure de 1
    for (word of textSepar) {
        if (word !== "") { 
            if (freqObj[word]) {
                freqObj[word]++
            } else {
                freqObj[word] = 1
            }
        }
    }
//Créer un tableau pour récupérer les mots et leurs fréquences
    const freqTab = []
// Pour chaque Clé (ici les mots) dans l'objet freqObj, créer les clés "mot" et "répétition" ; chaque clé correspondra à la valeur de mot et le nombre de répétition à la valeur de Répétition
    for (let k in freqObj) {
        freqTab.push({
            mot: k,
            Répétition: freqObj[k]
        })
    }
//Arranger le tableau des fréquences des mots par ordre décroissant en fonction du nombre de répétition.
    freqTab.sort(rang = (a, b) => {
        return b.Répétition - a.Répétition
    }) 
    console.log(freqTab)