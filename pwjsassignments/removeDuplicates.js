function removeDuplicates(cart) {
    const uniqueCart = []; // initialize an empty array for unique items
    cart.forEach((item) => {
      if (!uniqueCart.includes(item)) { // check if the item is not already in the uniqueCart
        uniqueCart.push(item); // if not, add it to the uniqueCart
      }
    });
    return uniqueCart; // return the uniqueCarts
  }
  
  const cartWithDuplicates = ["item1", "item2", "item1", "item3", "item2"];
  const cartWithoutDuplicates = removeDuplicates(cartWithDuplicates);
  console.log(cartWithoutDuplicates); 