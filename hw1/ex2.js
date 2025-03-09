function resultDDS(pricesArray) {
    const total = pricesArray.reduce((sum, price) => sum + parseFloat(price) || 0, 0);
    const vat = total * 0.20;
    const finalAmount = total + vat;
    console.log(`Сума: ${total.toFixed(2)} лв.`);
    console.log(`ДДС (20%): ${vat.toFixed(2)} лв.`);
    console.log(`Крайно салдо: ${finalAmount.toFixed(2)} лв.`);
}

 console.log(resultDDS(["10", "20.5", "30", "40", "50"]));