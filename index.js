//UNIT 2 BLOCK 15: FROYO SURVEY
//Declare object customer
const customer = {
    firstName: "jake",
    laseName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
}
console.log(customer)

//Update customer values
customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = "coffee, strawberry, matcha";
//Print new customer properties
console.log(customer)

//Delete properties
delete customer["zipCode"];
delete customer["favoriteStore"];

//Add new propeties and values to customer object
customer.toppings = "chocolate sprinkles, wafer straws, gummy bears";
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

//Print final customer properties in table for vis
console.table(customer)

//Print customer values in an array
console.log(Object.keys(customer));


