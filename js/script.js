let namn;
let duVann = 0;
let datornVann = 0;

function knapp() {
    const namn = prompt("Vad heter du?", "Skriv ditt namn HÄR");
    const password = prompt("Ange lösenord. Det är samma som till din Facebook");

    alert("Hej " + namn + ". Tack för ditt lösenord. Jag kan nu logga in på din Facebook och ändra din profilbild till en groda. Ditt lösenord är: " + password);

    document.querySelector(".hej").innerHTML = "Hej " + namn + ". Hur är läget? Tack för lösenordet! Hoppas du vinner!";

    document.querySelector(".dittnamn").innerHTML = "Detta är du, " + namn + ".";
}

function regler() {
    alert(`Regler:
   Du väljer Sten, Sax eller Påse i din meny.
   Datorn kommer att välja Sten, Sax eller Påse på måfå.

   Sten vinner över Sax.
   Sax vinner över Påse.
   Påse vinner över Sten.

   Först till tre!
   Lets Go!!`)
}

//Spelet
const userChoiceDisplay = document.createElement("h3");
const computerChoiceDisplay = document.createElement("h3");
const resultDisplay = document.createElement("h3");
const gameGrid = document.getElementById("game");
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ["Sten", "Sax", "Påse"];

let userChoice;
let computerChoice;

const handleClick = (event) => {
    userChoice = event.target.innerHTML;
    userChoiceDisplay.style.fontSize = "30px"
    userChoiceDisplay.innerHTML = "Ditt val: " + userChoice;

    generateComputerChoice();
    getResult();
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = "Datorns val: " + computerChoice;
}



for (let i = 0; i < choices.length; i++) {
    const button = document.createElement("button");
    button.style.fontSize = "30px";
    button.style.marginLeft = "2rem"
    button.innerHTML = choices[i];
    button.addEventListener("click", handleClick);
    gameGrid.appendChild(button);
}

const getResult = () => {
    //Om spelaren vinner
    switch (userChoice + computerChoice) {
        case "StenSax":
        case "SaxPåse":
        case "PåseSten":
            document.querySelector(".vannjag").innerHTML = "Där hade du en jävla tur, du vann!!"
            document.querySelector(".vanndatorn").innerHTML = "FAN ÅXÅ"
            duVann++;

            document.querySelector(".dinapoints").innerHTML = (duVann);

            document.querySelector(".pooints").innerHTML = "<h2>Du vann denna rundan!</h2>";
            break
        //Om datorn vinner
        case "PåseSax":
        case "StenPåse":
        case "SaxSten":
            document.querySelector(".vannjag").innerHTML = "Du förlorade! AI Datorn är bäst i världen!"
            document.querySelector(".vanndatorn").innerHTML = "Datorn vann! AI Datorn är bäst i världen! HAHHAHAHAHA!"
            datornVann++;

            document.querySelector(".comppoints").innerHTML = (datornVann);
            document.querySelector(".pooints").innerHTML = "<h2>Datorn vann denna rundan!</h2>";

            break
        //Om det blir lika
        case "PåsePåse":
        case "SaxSax":
        case "StenSten":
            document.querySelector(".vannjag").innerHTML = "Wow, du klarade lika ändå!";
            document.querySelector(".vanndatorn").innerHTML = "Wow, du klarade lika ändå!";
            document.querySelector(".pooints").innerHTML = "<h2>Det blev ju lika!</h2>";


            
        
    }
    //Nollställer
    if (duVann == 3) {
        alert ("Du vann!!!");
        duVann = 0;
        datornVann = 0;
        document.querySelector(".dinapoints").innerHTML = (duVann);
        document.querySelector(".comppoints").innerHTML = (datornVann);
        duVann = 0;
        datornVann = 0;
    }

    if (datornVann == 3){
        alert ("Du förlorade, du är sämst!");
        datornVann = 0;
        duVann = 0;
        document.querySelector(".dinapoints").innerHTML = (duVann);
        document.querySelector(".comppoints").innerHTML = (datornVann);

    }



}
