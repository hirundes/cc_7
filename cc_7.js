//Task 1 - Customer Invoice Calculation
function calculateInvoice(subTotal, taxRate, discount) {    //function calculateInvoice
    let total = (subTotal + (subTotal * taxRate)) - discount;    //formula total
    console.log(`Total Invoice: $${total}`);   //logging total invoice for function
};
console.log("---Task 1---")
calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"  


//Task 2 - Employee Hourly Wage Calculation
const calculateHourlyWage = function(salary, hoursPerWeek) {    // function expression calculateHourlyWage
    let hourlyWage = (salary / (hoursPerWeek * 52));     //formula hourlyWage
    console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`);   //logging hourlyWage
};
console.log("---Task 2---")
calculateHourlyWage(52000, 40); // Expected output: "Hourly Wage: $25.00"
calculateHourlyWage(75000, 35); // Expected output: "Hourly Wage: $41.21"

