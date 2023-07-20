//script for order information
window.onload = function getOrder(){
    const store = localStorage;
    if ("numberOrders" in store){
        const orders = store.getItem("numberOrders");
        document.getElementById("orders").innerHTML = orders;
    }
    else{        
        document.getElementById("orders").innerHTML = "0";
    }
}