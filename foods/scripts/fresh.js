//get info from json file
const fruitList = 'json/fruitData.json';
getFruitData();
async function getFruitData(){
    const response = await fetch(fruitList);
    const data = await response.json();    
    displayFruitData(data);
}
//add option elements to the form 3 times (probably there is a better way to  do it, but I didn't have time to find the way, I'll think about it later)
const displayFruitData = (fruits) => {
    const select1 = document.querySelector("select#ingredient1");
    fruits.forEach((fruit) => {
        let option = document.createElement("option");
        option.value = fruit.name;
        option.textContent = fruit.name;        
        select1.appendChild(option);
    });
    const select2 = document.querySelector("select#ingredient2");
    fruits.forEach((fruit) => {
        let option = document.createElement("option");
        option.value = fruit.name;
        option.textContent = fruit.name;        
        select2.appendChild(option);
    });
    const select3 = document.querySelector("select#ingredient3");
    fruits.forEach((fruit) => {
        let option = document.createElement("option");
        option.value = fruit.name;
        option.textContent = fruit.name;        
        select3.appendChild(option);
    });
}
const getNutritionData = (json, fruits) => {
    //calculate nutrition 
    let carbs = 0;
    let prot = 0;
    let fat = 0;
    let sugar = 0;
    let cal = 0;
    //const fruit1 = document.getElementById("ingredient1")
    //const fruit2 = document.getElementById("ingredient2");
    //const fruit3 = document.getElementById("ingredient3");
    //const chosenFruit = [fruit1, fruit2, fruit3];

    //const optionFruit = document.querySelectorAll("select[id^='fruit']");
    //optionFruit.forEach(select => {
        //const chosenFruit = fruits.find(fruit => fruit.name === select.value);
        //if (chosenFruit) {
            //carbs += chosenFruit.nutritions.carbohydrates;
            //prot += chosenFruit.nutritions.protein;
            //fat += chosenFruit.nutritions.fat;
            //sugar += chosenFruit.nutritions.sugar;
            //cal += chosenFruit.nutritions.calories;
        //}
    //});

    fruits.forEach(fruit => {
        json.forEach(item => {
            if(item.name == fruit){
                carbs += item.nutritions.carbohydrates;
                prot += item.nutritions.protein;
                fat += item.nutritions.fat;
                sugar += item.nutritions.sugar;
                cal += item.nutritions.calories;

            }
        });
    });
    
    return{
        carbs,
        prot,
        fat,
        sugar,
        cal
    }
};
const nutritionData = getNutritionData();
//create order summary output
function createOutput(){
    //document.getElementById("output").innerHTML = ""; //to start with the new document
    const form = document.getElementById("output");
    const thankyou = document.createElement("h3");
    const note = document.createElement("p");
    const customer = document.createElement("p");
    const email = document.createElement("p");
    const phone = document.createElement("p");
    const fruit = document.createElement("p");
    const instructions = document.createElement("p");
    const date = document.createElement("p")
    const nutrition = document.createElement("p");
    //fill the elements
    thankyou.textContent = `Thank you for the order!`;
    note.textContent = `Your order details are:`;
    customer.innerHTML = `Your Name:  ${document.querySelector('input[name="name"]').value}`;
    email.innerHTML = `Your e-mail: ${document.querySelector('input[name="email"]').value}`;
    phone.innerHTML = `Your phone number: ${document.querySelector('input[name="phone"]').value}`;
    fruit.innerHTML = `Your chosen fruit: ${document.getElementById("ingredient1").value}, ${document.getElementById("ingredient2").value}, ${document.getElementById("ingredient2").value}`;
    instructions.innerHTML = `Your instructions:${document.querySelector('textarea[name="instructions"]').value} `;
    date.innerHTML = `Order date: ${new Date().toLocaleString('en-US')}`;   
    nutrition.innerHTML = `Nutrition - Carbohydrates: ${nutritionData.carbs.toFixed(1)}, Protein: ${nutritionData.protein.toFixed(1)}, Fat: ${nutritionData.fat.toFixed(1)}, Sugar: ${nutritionData.sugar.toFixed(1)},Calories: ${nutritionData.cal.toFixed(0)} `;
    //add elements to section
    form.appendChild(thankyou);
    form.appendChild(note);
    form.appendChild(customer);
    form.appendChild(email);
    form.appendChild(phone);
    form.appendChild(fruit);
    form.appendChild(instructions);
    form.appendChild(date);
    form.appendChild(nutrition)
};
//save order information
function storeOrder(){
    const store = localStorage;
    if ("numberOrders" in store){
        const orders = store.getItem("numberOrders");
        store.setItem("numberOrders", orders*1+1);
    }
    else{        
        store.setItem("numberOrders", "1")
    }
}
//activate functions by submit button

const form = document.getElementById("orderForm");
const orderDetails = document.getElementById("output");
form.addEventListener('submit', handleSubmit);


function handleSubmit(event){
    orderDetails.innerHTML = `${createOutput()}`;
    event.preventDefault();
}
//document.getElementById("submitBtn").addEventListener("click", () => {
    //const form = document.getElementById("orderForm");
    //const orderDetails = document.getElementById("output");
    //form.addEventListener('submit', handleSubmit);
//});

