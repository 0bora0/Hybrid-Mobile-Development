function calculateBoxes(input) {
    let bottles = Number(input[0]); 
    let capacity = Number(input[1]); 
    let boxesNeeded = Math.ceil(bottles / capacity); 
    console.log(boxesNeeded);
}
calculateBoxes([5, 10]); 

