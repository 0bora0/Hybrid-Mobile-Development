function check(num){
    let number = parseFloat(num)
    if(number%10 == 0 && number%2==0){
        console.log(`Въведеното число ${number} е сложно.`)
    } else{
        console.log(`Въведеното число ${number} е просто.`)
    }
}

check(10)