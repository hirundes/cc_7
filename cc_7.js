//Task 1 - Customer Invoice Calculation
function calculateInvoice(subTotal, taxRate, discount) {    //function calculateInvoice
    let total = (subTotal + (subTotal * taxRate)) - discount;    //formula total
    console.log(`Total Invoice: $${total.toFixed(2)}`);   //logging total invoice for function
};
console.log("---Task 1---");
calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"  


//Task 2 - Employee Hourly Wage Calculation
const calculateHourlyWage = function(salary, hoursPerWeek) {    // function expression calculateHourlyWage
    let hourlyWage = (salary / (hoursPerWeek * 52));     //formula hourlyWage
    console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`);   //logging hourlyWage
};
console.log("---Task 2---");
calculateHourlyWage(52000, 40); // Expected output: "Hourly Wage: $25.00"
calculateHourlyWage(75000, 35); // Expected output: "Hourly Wage: $41.21"


//Task 3 - Customer Loyalty Discount
const calculateLoyaltyDiscount = (amount, years) => {   //arrow function calculateLoyaltyDiscount
    let loyaltyDiscount = 0; 
    if (years >= 5) loyaltyDiscount = amount * 0.15;    //applying discount with if / else statements
    else if (years >= 3) loyaltyDiscount = amount * 0.10;
    else loyaltyDiscount = amount * 0.05;
    console.log(`Discounted Price: $${(amount - loyaltyDiscount).toFixed(2)}`);   //logging loyaltyDiscount

};
console.log("---Task 3---");
calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00" 


//Task 4 - Product Shipping Cost Calculation
function calculateShippingCost(weight, location, expedited = false) {   //function calculateShippingCost
    let shippingCost = 0;
    if (location === "USA") shippingCost = 5 + 0.5 * weight;     //location: USA = 5 + 0.5/lb
    else if (location === "Canada") shippingCost = 10 + 0.7 * weight;    //location: Canada = 10 + 0.7/lb
    if (expedited) shippingCost += 10;      // expedited: += 10
    
    console.log(`Shipping Cost: $${shippingCost.toFixed(2)}`);     //logged shippingCost
};
console.log("---Task 4---");
calculateShippingCost(10, "USA", true); // Expected output: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected output: "Shipping Cost: $13.50"


//Task 5 - Business Loan Interest Calculation
function calculateLoanInterest(principle, rate, years) {    //function calculateLoanInterest
    let interest = (principle * rate * years).toFixed(2);      //formula interest w/ 2 decimal places
    console.log(`Total Interest: $${interest}`);     //logged interest
}
console.log("---Task 5---");
calculateLoanInterest(1000, 0.05, 3); // Expected output: "Total Interest: $150.00"
calculateLoanInterest(5000, 0.07, 5); // Expected output: "Total Interest: $1750.00"


//Task 6 - Filtering High-Value Transactions
function filterHighValueTransactions(transactions, filterFunction) {    //higher order function
    let transactionOrders = transactions.filter(filterFunction);    //defined transactionOrders and .filter() to filter
    console.log(`Filtered Transactions: ${transactionOrders}`);     //logged filtered transactions: transactionOrders
};
console.log("---Task 6---");
let transactions = [500, 1200, 3000, 800, 2200];    //declare array transactions w/ 5 amounts
filterHighValueTransactions(transactions, amount => amount > 1000);     
// Expected output: [1200, 3000, 2200]


//Task 7 - Budget Tracker
function createBudgetTracker() {    //function createBudgetTracker
    let totalBudget = 0;    //defining totalBudget
    return function(budget) {       //returns another function(budget)
        totalBudget -= budget;      
        return console.log(`Current Balance: $${totalBudget}`);     //logging totalBudget
    }
};
console.log("---Task 7---");
let budget = createBudgetTracker();
budget(300); // Expected output: "Current Balance: -$300"
budget(200); // Expected output: "Current Balance: -$500"


//Task 8 - Business Growth Projection
function calculateGrowth(years, revenue) {      //recursive function calculateGrowth
    if (years === 10) return console.log(`Projected Revenue: $${revenue.toFixed(2)}`);  //logging revenue.toFixed(2)
        return calculateGrowth(years + 1, revenue * 1.05)   //return 5% increase until year 10
    }
console.log("---Task 8---");
calculateGrowth(8, 1000); // Expected output: "Projected Revenue: $1102.50"
calculateGrowth(5, 5000); // Expected output: "Projected Revenue: $6381.41"

















