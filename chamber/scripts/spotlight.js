const businessDir = 'json/data.json';

getBusinessData();

async function getBusinessData(){
    const response = await fetch(businessDir);
    const data = await response.json();
    
    addSpotlight(data.business);
}
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

