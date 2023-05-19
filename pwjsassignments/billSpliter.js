function billSpliter(nops, ...coed) {
  let tbill = 0;
  for (const key in coed) {
    tbill = tbill + coed[key]; //total bill
  }
  console.log(tbill);
  let perPerson = tbill / nops;
  console.log(perPerson);
  return {
    totalBill: tbill,
    billPerPerson: perPerson,
  };
}

console.log(billSpliter(5, 200, 500, 561, 2, 88, 55, 44, 35, 22));

