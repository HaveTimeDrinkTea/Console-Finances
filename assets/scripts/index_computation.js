
// to check each period so there are no duplicates. If duplicates then need to sum them
// total amount of Profit and loss
// total of months
// average of PL changes
// max incresase in profit
// max decrease in loss

// define the vars
let periodNumTotal = finances.length;
let netProfitLoss = finances[0][1]; //set to the first month's profit/loss
let netProfitLosstest = 0;
let plCompare = 0;
let plCompareNetTotal = 0;

let maxProfitAmtD = 0;
var maxProfitMthFrom;
var maxProfitAmtFrom;
var maxProfitMthTo;
var maxProfitAmtTo;

let maxLossAmtD = 0;
var maxLossMthFrom;
var maxLossAmtFrom;
var maxLossMthTo;
var maxLossAmtTo;

for (var i = 0, j = 1; (i < periodNumTotal) &&  (j < periodNumTotal); i++, j++) {
  // sum of all profit and loss
  netProfitLoss = netProfitLoss + finances[j][1];
  // console.log("round:", i);
  // find the changes in profit or changes in loss from period to period

    plCompare = (finances[j][1]) - (finances[i][1]);
    plCompareNetTotal = plCompareNetTotal + plCompare;
    // console.log("i:", i, "amt is", finances[i][1], " compared with j:", j, "amt is", finances[j][1]);
    // console.log("for maxprofit between periods:", i, "vs", j, "& the plCompare: ", plCompare, "& maxprofit", maxProfitAmt);  
    // console.log("for maxLoss between periods j:", i, "vs", j, "& the plCompare: ", plCompare, "& maxLoss", maxLossAmt); 
    // console.log("cumulative profit and loss: £", netProfitLoss);

    if (plCompare > 0 ){
      if (plCompare > maxProfitAmtD) {
        maxProfitAmtD = plCompare;
        maxProfitMthFrom = finances[i][0];
        maxProfitAmtFrom= finances[i][1];
        maxProfitMthTo = finances[j][0];
        maxProfitAmtTo= finances[j][1];
        // console.log("------------max profit updated to", maxProfitAmt);
      } 
      // else {
      //   console.log(i, "-----------not max profit-----------------");        
      // }
    } else if (plCompare < 0 ) {
      if (plCompare < maxLossAmtD) {
        maxLossAmtD = plCompare;
        maxLossMthFrom = finances[i][0];
        maxLossAmtFrom = finances[i][1];
        maxLossMthTo = finances[j][0];
        maxLossAmtTo = finances[j][1];
        // console.log("------------max loss updated to", maxLossAmt);
      } 
      // else {
      //   console.log(i, "-----------not max loss-----------------");
      // }
    }
    // else {
      plCompare = 0;
      // console.log("-------------plCompare is zero---------------");
    // }
    ;
  };


function formatAmount(x, y) {
  x = x.toLocaleString('en-GB', {style: 'currency', 
  currency: 'GBP', minimumFractionDigits: y});
  return x;
}



// Outputting the finance report:
console.log("----------------------------");
console.log("Financial Analysis");
console.log("----------------------------");
console.log("Total Months:", periodNumTotal );
console.log("Total profit and loss for the period: " + formatAmount(netProfitLoss, 0));
console.log("Total Period to Period Changes in Profit And Loss: " + formatAmount(plCompareNetTotal, 0));
console.log("Average Period to Period Change in Profit and Loss: " + formatAmount(plCompareNetTotal / (periodNumTotal - 1), 2));
console.log("Maximum Monthly Increase in Profit of", formatAmount(maxProfitAmtD,0), "is from", maxProfitMthFrom, "(" + formatAmount(maxProfitAmtFrom, 0) + ") to", maxProfitMthTo, "("+ formatAmount(maxProfitAmtTo , 0) + ").");
console.log("Maximum Monthly Decrease in Profit of", formatAmount(maxLossAmtD, 0), "is from", maxLossMthFrom, "(" + formatAmount(maxLossAmtFrom, 0) + ") to", maxLossMthTo, "("+ formatAmount(maxLossAmtTo, 0) + ").");