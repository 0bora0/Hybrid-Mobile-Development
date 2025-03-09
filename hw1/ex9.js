function areaOfTriangle(a,b,c){
let a1 = parseFloat(a)
let b1 = parseFloat(b)
let c1 = parseFloat(c)
let s = (a1+b1+c1)/2
let area = Math.sqrt(s*(s-a1)*(s-b1)*(s-c1))
console.log(area.toFixed(2))
}
areaOfTriangle(3,5,6)