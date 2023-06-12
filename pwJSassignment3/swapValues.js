function swap(x,y){
    console.log("x =",x);
    console.log("y =",y);
 [x,y]=[y,x];
 return [x,y];
}
console.log(swap(2,8));