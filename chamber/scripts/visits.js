//localStorage.clear(); // this line is to check how it works from the beginning
const currentDate = new Date(); 
const lastVisitDate = localStorage.getItem('lastVisitDate'); 
let daysSinceLastVisit;

if (lastVisitDate) {  
  const timeSinceLastVisit = currentDate.getTime() - new Date(lastVisitDate).getTime();
  daysSinceLastVisit = Math.floor(timeSinceLastVisit / (1000 * 60 * 60 * 24)); // value in brackets - milliseconds per day
  
} else {
  daysSinceLastVisit = `This is your first visit`;
}
document.getElementById("visits").innerHTML = daysSinceLastVisit;
localStorage.setItem('lastVisitDate', currentDate.toISOString()); 
