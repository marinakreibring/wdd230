//the list of businesses with gold level membership
let goldList = [
    {
        name: "Empolis GmbH",        
        motto: "Fast problem solving with computing and enterprise AI",
        phone: "+49 631680370",
        web: "https://www.empolis.com",
        logo: "images/business/empolis-logo.png"        
    },
    {
        name: "FK Kraemer GmbH",
        motto: "We train YOU in civil engineering and road building",
        phone: "+49 63154154",
        web: "https://www.fk-kraemer.de",
        logo: "images/business/kramer-logo.png"          
    },
    {
        name: "Human Solutions GmbH",
        motto: "We make ergonomics digital and your vehicles better",
        phone: "+49 631343593",
        web: "https://www.human-solutions.com",
        logo: "images/business/HumSol-logo.png"       
    },
    {
        name: "WIPOTEC GmbH",
        motto: "Innovation and passion for technology",
        phone: "+49 631341460",
        web: "https://www.wipotec.com",
        logo: "images/business/wipotec-logo.png"         
    }
];
//function to generate random number in given range
function getRandomBetween(min, max) {
    return Math.floor(min + Math.random()*(max - min + 1))
};
//choose random index between second and prelast, and then use +1/-1 
const i = getRandomBetween(1, goldList.length-2);
const j = i-1;
const h = i+1;
//fill spans for elements in the spotlight section
//for spotlight 1
let logo1 = document.querySelector("#logo1");
logo1.setAttribute("src", `${goldList[i].logo}`);
logo1.setAttribute("alt", `Logo of ${goldList[i].name}`);
logo1.setAttribute("loading", "lazy"); 
document.querySelector("#motto1").textContent = `${goldList[i].motto}`;
document.querySelector("#tel1").textContent = `${goldList[i].phone}`;
let web1 = document.querySelector("#web1");
web1.innerHTML = `${goldList[i].web}`;            
web1.setAttribute("href", `${goldList[i].web}`);
//for spotlight 2
let logo2 = document.querySelector("#logo2");
logo2.setAttribute("src", `${goldList[j].logo}`);
logo2.setAttribute("alt", `Logo of ${goldList[j].name}`);
logo2.setAttribute("loading", "lazy"); 
document.querySelector("#motto2").textContent = `${goldList[j].motto}`;
document.querySelector("#tel2").textContent = `${goldList[j].phone}`;
let web2 = document.querySelector("#web2");
web2.innerHTML = `${goldList[j].web}`;            
web2.setAttribute("href", `${goldList[j].web}`);
//for spotlight 3
let logo3 = document.querySelector("#logo3");
logo3.setAttribute("src", `${goldList[h].logo}`);
logo3.setAttribute("alt", `Logo of ${goldList[h].name}`);
logo3.setAttribute("loading", "lazy"); 
document.querySelector("#motto3").textContent = `${goldList[h].motto}`;
document.querySelector("#tel3").textContent = `${goldList[h].phone}`;
let web3 = document.querySelector("#web3");
web3.innerHTML = `${goldList[h].web}`;            
web3.setAttribute("href", `${goldList[h].web}`);
