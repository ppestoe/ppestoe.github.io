let shoppingCart = 
[
    { name: "T-shirt", price: 20 },
    { name: "Jeans", price: 50 },
    { name: "Sneakers", price: 80 },
    { name: "Backpack", price:30 },
];

function calculateTotal() {
let total = 0;
for(i =0; i < 4; i++)
{
   total = total + shoppingCart[i].price;
   console.log(total);
 }
 let discount = 0.1;
 let discountedPrice = 0;
 if(total>100)
 {
    discountedPrice = total - total * discount;
 }
 console.log("total so far", total);
 console.log("discounted price is", discountedPrice);
}
 calculateTotal();