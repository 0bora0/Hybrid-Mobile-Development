function coneMeasurements(input) {
    let r = Number(input[0]); 
    let h = Number(input[1]); 

    let l = Math.sqrt(r ** 2 + h ** 2);
    let volume = (1 / 3) * Math.PI * r ** 2 * h; 
    let surfaceArea = Math.PI * r * (r + l); 

    console.log(`Обем: ${volume.toFixed(2)}`);
    console.log(`Лице на повърхнината: ${surfaceArea.toFixed(2)}`);
}
coneMeasurements([3, 5]);

