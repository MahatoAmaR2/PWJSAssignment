function acessRandomElement([firstEl,secondEl,...last]){
    let lastSlice = last.slice(-1);
    let lastEl = parseInt(lastSlice);
    return [firstEl,secondEl,lastEl];
}
console.log(acessRandomElement([11,22,2,3,5,7,8,25,556]))
// node pwJSassignment3/acessRandomElement.js