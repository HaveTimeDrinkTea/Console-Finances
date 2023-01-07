// to check each period so there are no duplicates. If duplicates then need to sum them

// define the vars
let periodNumTotal = finances.length; // To hold the total number of months
let netProfitLoss = finances[0][1]; // Set to the first month's profit & loss

let plCompare = 0; // To hold the month to month change in profit & loss
let plCompareNetTotal = 0; // To hold the total changes of month to month profit & loss

let maxProfitAmtD = 0;  // To hold the maximum INcrease in monthly profit & loss
var maxProfitMthFrom;   // To hold the FROM month of maximum INcrease in monthly profit & loss
var maxProfitAmtFrom;   // To hold the profit & loss amount of the FROM month of maximum INcrease in monthly profit & loss
var maxProfitMthTo;     // To hold the TO month of maximum INcrease in monthly profit & loss
var maxProfitAmtTo;     // To hold the profit & loss amount of the FROM month of maximum INcrease in monthly profit & loss

let maxLossAmtD = 0;  // To hold the maximum DEcrease in monthly profit & loss
var maxLossMthFrom; 
var maxLossAmtFrom;
var maxLossMthTo;
var maxLossAmtTo;

for (var i = 0, j = 1; (i < periodNumTotal) &&  (j < periodNumTotal); i++, j++) {
    // sum of all profit and loss
    netProfitLoss = netProfitLoss + finances[j][1];
    // compute the monthly change in profit & loss and then add it to the cumulative total of changes
    plCompare = (finances[j][1]) - (finances[i][1]);
    plCompareNetTotal = plCompareNetTotal + plCompare;

    // uncoment the following console.log for debug purposes.
    // console.log("i:", i, "amt is", finances[i][1], " compared with j:", j, "amt is", finances[j][1]);
    // console.log("for maxprofit between periods:", i, "vs", j, "& the plCompare: ", plCompare, "& maxprofit", maxProfitAmt);  
    // console.log("for maxLoss between periods j:", i, "vs", j, "& the plCompare: ", plCompare, "& maxLoss", maxLossAmt); 
    // console.log("cumulative profit and loss: £", netProfitLoss);

    // check for the max and min change in profit & loss
    if (plCompare > 0) {
        if (plCompare > maxProfitAmtD) {
            maxProfitAmtD = plCompare;
            maxProfitMthFrom = finances[i][0];
            maxProfitAmtFrom= finances[i][1];
            maxProfitMthTo = finances[j][0];
            maxProfitAmtTo= finances[j][1];
        // console.log("------------max profit updated to", maxProfitAmt);
        }
    } else if (plCompare < 0 ) {
        if (plCompare < maxLossAmtD) {
            maxLossAmtD = plCompare;
            maxLossMthFrom = finances[i][0];
            maxLossAmtFrom = finances[i][1];
            maxLossMthTo = finances[j][0];
            maxLossAmtTo = finances[j][1];
            // console.log("------------max loss updated to", maxLossAmt);
        } 
    }
    // if monthly change in profit & loss is zero
    else {
        plCompare = 0;
    };
};

// function to convert financial values to Sterling £ format with the desired decimal places.
// parameter x is for any numerical value to be formatted and parameter y is the specified number of decimal places
function formatAmount(x, y) {
  x = x.toLocaleString('en-GB', {style: 'currency', 
  currency: 'GBP', minimumFractionDigits: y});
  return x;
}



// Outputting the finance report to browser's console:
console.log("----------------------------");
console.log("Financial Analysis");
console.log("----------------------------");
console.log("Total Periods (Months):", periodNumTotal );
console.log("Total Profit & Loss For This Period (" + periodNumTotal, "Months): " + formatAmount(netProfitLoss, 0));
console.log("Total Changes in Profit And Loss In This Period: " + formatAmount(plCompareNetTotal, 0));
console.log("Average Monthly Change in Profit and Loss: " + formatAmount(plCompareNetTotal / (periodNumTotal - 1), 2));
console.log("Maximum Monthly Increase in Profit of", formatAmount(maxProfitAmtD,0), "is from", maxProfitMthFrom, "(" + formatAmount(maxProfitAmtFrom, 0) + ") to", maxProfitMthTo, "("+ formatAmount(maxProfitAmtTo , 0) + ").");
console.log("Maximum Monthly Decrease in Profit of", formatAmount(maxLossAmtD, 0), "is from", maxLossMthFrom, "(" + formatAmount(maxLossAmtFrom, 0) + ") to", maxLossMthTo, "("+ formatAmount(maxLossAmtTo, 0) + ").");