let goldList = [
    {
        "name": "Empolis GmbH",        
        "motto": "Fast problem solving with computing and enterprise AI",
        "phone": "+49 631680370",
        "web": "https://www.empolis.com",
        "logo": "images/business/empolis-logo.png",
        "level": "gold"           
    },
    {
        "name": "FK Kraemer GmbH",
        "motto": "We train YOU in civil engineering and road building!",
        "phone": "+49 63154154",
        "web": "https://www.fk-kraemer.de",
        "logo": "images/business/kramer-logo.png",
        "level": "gold"           
    },
    {
        "name": "Human Solutions GmbH",
        "motto": "We make ergonomics digital and your vehicles better",
        "phone": "+49 631343593",
        "web": "https://www.human-solutions.com",
        "logo": "images/business/HumSol-logo.png",
        "level": "gold"         
    },
    {
        "name": "WIPOTEC GmbH",
        "motto": "Innovation and passion for technology",
        "phone": "+49 631341460",
        "web": "https://www.wipotec.com",
        "logo": "images/business/wipotec-logo.png",
        "level": "gold"             
    }
]








//add spotlights to div
const addSpotlight = (business) => {
    const spotlight = document.querySelector("div.spotlight");
    business.forEach((item) => {
        //find gold level
        if (item.level == "gold"){
            
        }


        let spot = document.createElement("section");
        let logo = document.createElement("img");
        let name = document.createElement("h3");
        let address1 = document.createElement("p");
        let address2 = document.createElement("p");
        let phone = document.createElement("p");
        let web = document.createElement("a");

        logo.setAttribute("src", item.logo);
        logo.setAttribute("alt", `Logo of ${item.name}`);
        logo.setAttribute("loading", "lazy");        
        
        name.textContent = `${item.name}`;
        address1.textContent = `${item.address[0]}`;
        address2.textContent = `${item.address[1]}`;
        phone.textContent = `${item.phone}`;
        web.innerHTML = `${item.web}`;            
        web.setAttribute("href", `${item.web}`);
        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address1);
        card.appendChild(address2);
        card.appendChild(phone);
        card.appendChild(web);
        
        spotlight.appendChild(spot);
    });
}

