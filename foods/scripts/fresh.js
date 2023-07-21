//get info from json file
const fruitList = 'json/fruitData.json';
getFruitData();
async function getFruitData(){
    const response = await fetch(fruitList);
    const data = await response.json();    
    displayFruitData(data);
    getNutritionData(data);
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
async function createOutputForm(){
    function getNutritionData(fruits){
        //calculate nutrition 
        let carbs = 0;
        let prot = 0;
        let fat = 0;
        let sugar = 0;
        let cal = 0;
        const fruit1 = document.getElementById("ingredient1").value;
        const fruit2 = document.getElementById("ingredient2").value;
        const fruit3 = document.getElementById("ingredient3").value;
        const chosenFruit = [fruit1, fruit2, fruit3];
        chosenFruit.forEach(fruitName => {
        const fruit = fruits.find(fruit => fruit.name === fruitName);
        if (fruit) {
            carbs += fruit.nutritions.carbohydrates;
            prot += fruit.nutritions.protein;
            fat += fruit.nutritions.fat;
            sugar += fruit.nutritions.sugar;
            cal += fruit.nutritions.calories;
            }
        });  
        return{
            carbs,
            prot,
            fat,
            sugar,
            cal
        }
    }
    const nutritionData = getNutritionData();
    //create order summary output
    const output = `
        <h3>Thank you for the order!</h3>
        <p>Your order details are:</p>      
        <p><strong>Your Name:</strong> ${document.querySelector('input[name="name"]').value}</p>
        <p><strong>Your Email:</strong> ${document.querySelector('input[name="email"]').value}</p>
        <p><strong>Your Phone Number:</strong> ${document.querySelector('input[name="phone"]').value}</p>
        <p><strong>Your Chosen Fruit:</strong> ${document.getElementById("ingredient1").value}, ${document.getElementById("ingredient2").value}, ${document.getElementById("ingredient2").value}</p>
        <h2><strong>Your Instructions:</strong> ${document.querySelector('textarea[name="instructions"]').value}</h2>
        <p><strong>Total Nutrition:</strong></p>
        <p><strong>Carbohydrates:</strong> ${nutritionData.carbs.toFixed(1)}g</p>
        <p><strong>Protein:</strong> ${nutritionData.protein.toFixed(1)}g</p>
        <p><strong>Fat:</strong> ${nutritionData.fat.toFixed(1)}g</p>
        <p><strong>Sugar:</strong> ${nutritionData.sugar.toFixed(1)}g</p>
        <p><strong>Calories:</strong> ${nutritionData.cal.toFixed(0)}kcal</p>
        <p><strong>Order Date:</strong> ${new Date().toLocaleString('en-US')}</p> `;
      
    // Display the output
    document.getElementById("output").innerHTML = output;

    
    //save order information
    storeOrder();
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
       
};
//activate function by submit button
document.querySelector("#orderDrink").addEventListener("click", createOutputForm);
