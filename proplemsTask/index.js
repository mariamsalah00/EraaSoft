function recharge() { 
    let amount =parseFloat( prompt("Enter the recharge amount:"));
    console.log("Recharge Amount: " + amount);
    let fee = amount * .02;
    console.log(" Fee (2%): " + fee);
    let VAT = (amount + fee) * .14;
    console.log("VAT (14%): " + VAT);
    let total = amount + fee + VAT;
    console.log("Total Amount: " + total);
}

function calculateFuelCost() {
    let gallons = parseFloat(prompt("Enter the number of gallons:"));
    console.log("Gallons: " + gallons);
    let gallonPrice = parseFloat(prompt("Enter the price per gallon:"));
    console.log("Price per Gallon: " + gallonPrice);
    let total= gallons * gallonPrice;
    let payment = prompt("Enter payment method (cash/card):").toLowerCase();
    console.log("Payment Method: " + payment);
    let discount = 0;
    if (payment === "cash") {
        discount = 0.05 * total;
        console.log("Discount (5%): " + discount * 100 + "%");
    }
    let Vat = .14* (total - discount);
    console.log("VAT (14%): " + Vat * 100 + "%");
  
    let finalAmount = total - discount + Vat;
    console.log("Final Amount: " + finalAmount);


}   
function currencyExchange() { 
    let amountUSD = parseFloat(prompt("Enter amount in USD:"));
    console.log("Amount in USD: " + amountUSD);
    let exchangeRate = 48;
    console.log("Exchange Rate (1 USD = " + exchangeRate + " EGP)");
    let convertedAmount = amountUSD * exchangeRate;
    console.log("Converted Amount in EGP: " + convertedAmount);
    let commission = 0.03 * convertedAmount;
    console.log("Commission (3%): " + commission);
    let totalAmount = convertedAmount - commission;
    console.log("Total Amount after Commission: " + totalAmount);
}
function parkingFee() { 
    let hours = parseFloat(prompt("Enter parking duration in hours:"));
    console.log("Parking Duration: " + hours + " hours");
    let fee = 0;
    if (hours <= 2) {
        fee =  10;
    }
    else {
        fee= 10 + (hours - 2) * 5;
    }
    let VAT = 0.14 * fee;
    console.log("VAT (14%): " + VAT);
    let totalFee = fee + VAT;
    console.log("Total Parking Fee: " + totalFee);
}
function cinemaTicket() {
    let ticketPrice = 100;
    console.log("Ticket Price: " + ticketPrice);
    let isStudent = prompt("Are you a student? (yes/no):").toLowerCase();
    console.log("Student Status: " + isStudent);
    let discount = 0;
    
    let glasses = prompt("Do you want 3D glasses? (yes/no):").toLowerCase();
    console.log("3D Glasses: " + glasses);
    let glassesFee = 0;
    if (glasses === "yes") {
        glassesFee = 20;
        console.log("3D Glasses Fee: " + glassesFee);
    }
    if (isStudent === "yes") {
        discount = 0.15 * (ticketPrice+ glassesFee);
        console.log("Discount (15%): " + discount);
    }
    let VAT = 0.14 * (ticketPrice - discount + glassesFee);
    console.log("VAT (14%): " + VAT);
    let totalAmount = ticketPrice - discount + glassesFee + VAT;
    console.log("Total Amount: " + totalAmount);
}
function restaurantBill() {
    let mealCost = parseFloat(prompt("Enter the meal cost:"));
    let peopleNumber = parseInt(prompt("Enter number of people:"));
    console.log("Meal Cost: " + mealCost);
    let serviceCharge = 0.12 * mealCost;
    console.log("Service Charge (12%): " + serviceCharge);
    let VAT = 0.14 * (mealCost + serviceCharge);
    console.log("VAT (14%): " + VAT);
    let totalBill = mealCost + serviceCharge + VAT;
    console.log("Total Bill Amount: " + totalBill);
    console.log("Number of People: " + peopleNumber);
    let amountPerPerson = totalBill / peopleNumber;
    console.log("Amount per Person: " + amountPerPerson);
}
    
