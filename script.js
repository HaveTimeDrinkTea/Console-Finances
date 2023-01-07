// Outputting the finance report:



document.getElementById("tableFinAna").innerHTML = 
    ("<tr><th>Total Months</th><td class='contentPLAmt'>" + periodNumTotal + "</td></tr>"
    + "<tr><th>Total Profit & Loss For The Period</th><td class='contentPLAmt'>" + formatAmount(netProfitLoss, 0) + "</td></tr>"
    + "<tr><th>Total Period to Period Changes in Profit & Loss</th><td class='contentPLAmt'>" + formatAmount(plCompareNetTotal, 0)  + "</td></tr>"
    + "<tr><th>Average Period to Period Change in Profit & Loss</th><td class='contentPLAmt'>" + formatAmount(plCompareNetTotal / (periodNumTotal - 1), 2) + "</td></tr>"
    );

document.getElementById("maxIncreasePL").innerHTML = ("Maximum Monthly Increase in Profit of " + formatAmount(maxProfitAmtD,0) + " is from " + maxProfitMthFrom + " (" + formatAmount(maxProfitAmtFrom, 0) + ") to " + maxProfitMthTo + " ("+ formatAmount(maxProfitAmtTo , 0) + ").");
document.getElementById("maxDecreasePL").innerHTML = ("Maximum Monthly Decrease in Profit of "+  formatAmount(maxLossAmtD, 0) + " is from " + maxLossMthFrom + " (" + formatAmount(maxLossAmtFrom, 0) + ") to " + maxLossMthTo + " ("+ formatAmount(maxLossAmtTo, 0) + ").");
    
    
let tableContent = "<tr><th class='center'>Period</th><th class='center'>Profit & Loss</th></tr>";
    for (var i = 0; i < finances.length; i++) {
        tableContent = tableContent + "<tr><td class='contentPLPeriod'>" + finances[i][0] + "</td><td class='contentPLAmt'>" + formatAmount(finances[i][1],0) + "</td></tr>";
    };


document.getElementById("dataSet").innerHTML = tableContent;