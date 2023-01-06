var finances = [
  ['Jan-2010', 867884], 
  ['Feb-2010', 984655], 
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
];

// testing area

console.log(finances[0][1]);
console.log(finances[3][1]);

// to check each period so there are no duplicates. If duplicates then need to sum them
// total amount of Profit and loss
// total of months
// average of PL changes
// max incresase in profit
// max decrease in loss

// define the vars
let periodNumTotal = finances.length;
let netProfitLoss = 0;

let plCompare = 0;
let plCompareNetTotal = 0;
let maxProfitAmt = 0;
var maxProfitMth;
let maxLossAmt = 0;
var maxlossMth;


// Total months:
console.log("Total Months:", periodNumTotal );

for (var i = 0, j = 1; (i < periodNumTotal) &&  (j < periodNumTotal -1); i++, j++) {
  // sum of all profit and loss
  netProfitLoss = netProfitLoss + finances[i][1];
  console.log("round:", i)
  // find the changes in profit or changes in loss from period to period

    plCompare = (finances[j][1]) - (finances[i][1]);
    plCompareNetTotal = plCompareNetTotal + plCompare;
    console.log("i:", i, "amt is", finances[i][1], " compared with j:", j, "amt is", finances[j][1]);
    console.log("for maxprofit between periods:", i, "vs", j, "& the plCompare: ", plCompare, "& maxprofit", maxProfitAmt);  
    console.log("for maxLoss between periods j:", i, "vs", j, "& the plCompare: ", plCompare, "& maxLoss", maxLossAmt); 
    console.log("cumulative profit and loss: £", netProfitLoss);

    if (plCompare > 0 ){
      if (plCompare > maxProfitAmt) {
        maxProfitAmt = plCompare;
        console.log("------------max profit updated to", maxProfitAmt);
      } else {
        console.log(i, "-----------not max profit-----------------");        
      }
    } else if (plCompare < 0 ) {
      if (plCompare < maxLossAmt) {
        maxLossAmt = plCompare;
        console.log("------------max loss updated to", maxLossAmt);
      } else {
        console.log(i, "-----------not max loss-----------------");
      }
    }
    else {
      plCompare = 0;
      console.log("-------------plCompare is zero---------------");
    };
  };
  
let avgProfitLoss = parseFloat(parseFloat(netProfitLoss/periodNumTotal).toFixed(0)).toLocaleString("en-GB", {useGrouping: true,});  

console.log("Greatest Increase in Profit");

// Outputting the finance report:
console.log("----------------------------");
console.log("Financial Analysis");
console.log("----------------------------");
console.log("Total Months:", periodNumTotal );
console.log("Total: £" + netProfitLoss.toLocaleString('en-GB'));
console.log("total net changes: £", plCompareNetTotal);
console.log("total average net changes: £", plCompareNetTotal / (periodNumTotal-1));
// console.log("Average Change: £" + avgProfitLoss);
// console.log("Max Profit Change: £" + maxProfitAmt);
// console.log("Max Loss Change: £" + maxLossAmt);