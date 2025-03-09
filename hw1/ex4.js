function sumArea(W,H,w,h){
    let numbers = parseFloat(W,w,h,H);
   let bigRectangle = H*W
   let smallRectangle = h*w
   let differenceVerticalRectangle = H*w
   let result = bigRectangle + smallRectangle - differenceVerticalRectangle
   return result;
}


console.log(sumArea(2,3,4,5));