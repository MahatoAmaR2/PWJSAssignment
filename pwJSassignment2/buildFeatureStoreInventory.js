console.log("Radhe Radhe");

let inventory = [
  {
    itemName: "Macbook",
    priceUSD: 1200,
  },
  {
    itemName: "Thar",
    priceUSD: 15000,
  },
  {
    itemName: "KTM",
    priceUSD: 800,
  },
  {
    itemName: "Home",
    priceUSD: 8200,
  },
];
let items = inventory.map(e => {
  let usdPrice = e.priceUSD;
  let indianPrice = usdPrice * 80;
  e.priceUSD = indianPrice;
  return ({
    [e.itemName]:e.priceUSD
  });
});

let obj = Object.assign({},...items);
console.log(obj);
// *******isko fir se accha se banana hai question dekh kar*************
// node pwJSassignment2/buildFeatureStoreInventory.js
