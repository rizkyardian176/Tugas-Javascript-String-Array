const rawInput = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap  ";

const cleanedUsers = rawInput
  .trim()                              
  .split(",")                          
  .map((name) => name.trim().toLowerCase()) 
  .join(" | ");                        

console.log("Case 1 - Cleaned Users:");
console.log(cleanedUsers);

const products = [
  { name: "Laptop", price: 1000, active: true },
  { name: "Mouse", price: 20, active: false },
  { name: "Keyboard", price: 50, active: true },
];

const activeProducts = products.filter((product) => product.active === true);

const upperCaseNames = activeProducts.map((product) => product.name.toUpperCase());

const totalPrice = activeProducts.reduce((total, product) => total + product.price, 0);

console.log("\nCase 2 - Product Filter:");
console.log("Active Products:", activeProducts);
console.log("Uppercase Names:", upperCaseNames);
console.log("Total Price:", totalPrice);
