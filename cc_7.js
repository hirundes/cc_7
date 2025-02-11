//Task 1 - Customer Invoice Calculation
function calculateInvoice(subTotal, taxRate, discount) { //function calculateInvoice
    let total = (subTotal + (subTotal * taxRate)) - discount //formula total
    console.log(`Total Invoice: $${total}`)   //logging total invoice for function
}
console.log("---Task 1---")
calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"  
