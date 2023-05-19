let fun = (discountPrice, ...originalPrice) => {
  let  totalPrice = 0;
  for (const key in originalPrice) {
       totalPrice = totalPrice+ originalPrice[key];
  }
  console.log(  totalPrice);
  let tot =  totalPrice-discountPrice;
  let per = (tot * 100) /  totalPrice;
  let perr = per.toFixed(2);
    return perr;
};

console.log(`${fun(10000, 5000,5000,566,50,46,9000)}%`);
