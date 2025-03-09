function calculateDistance(input) {
    let v1 = parseFloat(input[0]); 
    let v2 = parseFloat(input[1]); 
    let t = parseFloat(input[2]);  
    let v1_mps = (v1 * 1000) / 3600;
    let v2_mps = (v2 * 1000) / 3600;
    let distance1 = v1_mps * t;
    let distance2 = v2_mps * t;
    let distanceBetween = Math.abs(distance1 - distance2);
    console.log(distanceBetween.toFixed(2)); 
}
calculateDistance([60, 80, 3600]); 

