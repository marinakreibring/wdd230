const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

getProphetData();

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    
    displayProphets(data.prophets);
}

function getAge(birthdate, death){
    let birthDate = new Date(birthdate);
    let deathDate = new Date(death);
    if(death === null){
        deathDate = new Date();
    }
    const msPerYear = 365*24*60*60*1000;
    return Math.floor((deathDate - birthDate) / msPerYear);
}

const displayProphets = (prophets) => {
    const cards = document.querySelector("div.cards");
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let p5 = document.createElement("p");
        let p6 = document.createElement("p");
        let portrait = document.createElement("img");
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        p1.textContent = `Date of Birth: ${prophet.birthdate}`;
        p2.textContent = `Place of Birth: ${prophet.birthplace}`;
        p3.textContent = `Children: ${prophet.numofchildren}`;
        p4.textContent = `Prophet Years: ${prophet.length}`;
        p5.textContent = `Date of death: ${prophet.death}`;
        p6.textContent = `Age: ${getAge(prophet.birthdate, prophet.death)}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");
        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        card.appendChild(p5);
        card.appendChild(p6);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}
