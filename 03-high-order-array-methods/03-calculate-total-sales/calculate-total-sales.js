function calculateTotalSalesWithTax(products, taxRate) {
  if (typeof taxRate !== "number" || isNaN(taxRate)) {
    console.error("Invalid tax rate:", taxRate);
    return NaN;
  }

  if (!Array.isArray(products)) {
    console.error("Invalid products array:", products);
    return NaN;
  }

  const totalSales = products.reduce((acc, product) => {
    if (
      typeof product.price !== "number" ||
      typeof product.quantity !== "number"
    ) {
      console.error("Invalid product data:", product);
      return acc;
    }

    const productTotal = product.price * product.quantity;
    console.log(
      `Product: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}, Product Total: ${productTotal}`
    );

    return acc + productTotal;
  }, 0);

  if (totalSales === 0) {
    console.error(
      "Total sales calculated as 0, which might indicate invalid or missing data."
    );
    return NaN;
  }

  const taxAmount = (totalSales * taxRate) / 100;
  const totalSalesWithTax = totalSales + taxAmount;

  console.log(
    `Tax Amount: ${taxAmount}, Total Sales With Tax: ${totalSalesWithTax}`
  );

  return totalSalesWithTax;
}

module.exports = calculateTotalSalesWithTax;
