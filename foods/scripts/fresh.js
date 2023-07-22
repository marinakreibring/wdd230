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
async function createOutputForm(){
    console.log("here")
    //set values    
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const fruit1 = document.getElementById("ingredient1").value;
    const fruit2 = document.getElementById("ingredient2").value;
    const fruit3 = document.getElementById("ingredient3").value;
    const instructions = document.querySelector('textarea[name="instructions"]').value;
    const date = new Date().toLocaleDateString("en-UK");
    //calculate nutrition
    let data
    try {
        const  response = await fetch(fruitList);
        if (response.ok) {
            data = await response.json();
            console.log(data)
        }
    }catch(error){
        console.log(error)
    }
    const chosenFruit = [fruit1, fruit2, fruit3];
    let carbs = 0;
    let prot = 0;
    let fat = 0;
    let sugar = 0;
    let cal = 0;
    chosenFruit.forEach(fruitName => {
        const fruit = data.find(fruit => fruit.name === fruitName);
        if (fruit) {
            carbs += fruit.nutritions.carbohydrates;
            prot += fruit.nutritions.protein;
            fat += fruit.nutritions.fat;
            sugar += fruit.nutritions.sugar;
            cal += fruit.nutritions.calories;
        }
    }); 
    console.log(carbs,prot,fat,sugar,cal);   
    //create order summary output
    const output = `
        <h2>Thank you for the order!</h2>
        <h3>Your order details are:</h3>      
        <p><strong>Your Name:</strong> ${name}</p>
        <p><strong>Your Email:</strong> ${email}</p>
        <p><strong>Your Phone Number:</strong> ${phone}</p>
        <p><strong>Your Chosen Fruit:</strong> ${fruit1}, ${fruit2}, ${fruit3}</p>
        <p><strong>Your Instructions:</strong> ${instructions}</p>
        <h3>Total Nutrition:</h3>
        <p><strong>Carbohydrates:</strong> ${carbs.toFixed(1)} g</p>
        <p><strong>Protein:</strong> ${prot.toFixed(1)} g</p>
        <p><strong>Fat:</strong> ${fat.toFixed(1)} g</p>
        <p><strong>Sugar:</strong> ${sugar.toFixed(1)} g</p>
        <p><strong>Calories:</strong> ${cal.toFixed(0)} kcal</p>
        <p><i>Order Date: ${date}</i></p> `;
      
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
