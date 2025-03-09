function isOddOrEven(num) {
    let number = parseFloat(num);
    if (!Number.isInteger(number)) {
        console.log(`Въведеното число ${number} не е цяло число и не е четно нито нечетно.`)
    }
    else if (number % 2 == 0 && number) {
        console.log(`Въведеното число ${number} е четно.`)
    } else {
        console.log(`Въведеното число ${number} е нечетно.`)
    }
}

isOddOrEven(2);