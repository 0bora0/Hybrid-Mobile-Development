function calculateDistance(coords) {
    let x1 = Number(coords[0]);
    let y1 = Number(coords[1]);
    let x2 = Number(coords[2]);
    let y2 = Number(coords[3]);
    let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    console.log(distance);
}

calculateDistance([3, 4, 7, 1]); 

