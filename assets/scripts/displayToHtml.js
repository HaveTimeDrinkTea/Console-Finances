// Display the finance report on webpage

document.getElementById("tableFinAna").innerHTML = 
    ("<tr><th>Total Periods (Months)</th><td class='contentPLAmt'>" + periodNumTotal + "</td></tr>"
    + "<tr><th>Total Profit & Loss For This Period (" + periodNumTotal + " Months)</th><td class='contentPLAmt'>" + formatAmount(netProfitLoss, 0) + "</td></tr>"
    + "<tr><th>Total Monhly Changes in Profit & Loss</th><td class='contentPLAmt'>" + formatAmount(plCompareNetTotal, 0)  + "</td></tr>"
    + "<tr><th>Average Monthly Change in Profit & Loss</th><td class='contentPLAmt'>" + formatAmount(plCompareNetTotal / (periodNumTotal - 1), 2) + "</td></tr>"
    );

document.getElementById("maxIncreasePL").innerHTML = ("Maximum Monthly Increase in Profit of <strong>" + formatAmount(maxProfitAmtD,0) + "</strong> is from <strong>" + maxProfitMthFrom + "</strong> <strong><em>(" + formatAmount(maxProfitAmtFrom, 0) + ")</strong></em> to <strong>" + maxProfitMthTo + "</strong> <strong><em>("+ formatAmount(maxProfitAmtTo , 0) + ")</strong></em>.");
document.getElementById("maxDecreasePL").innerHTML = ("Maximum Monthly Decrease in Profit of <strong>"+  formatAmount(maxLossAmtD, 0) + "</strong> is from <strong>" + maxLossMthFrom + "<strong> <strong><em>(" + formatAmount(maxLossAmtFrom, 0) + ")</strong></em> to <strong>" + maxLossMthTo + "</strong> <strong><em>("+ formatAmount(maxLossAmtTo, 0) + ")</strong></em>.");
    
    
let tableContent = "<tr><th class='center'>Period</th><th class='center'>Profit & Loss</th></tr>";
    for (var i = 0; i < finances.length; i++) {
        tableContent = tableContent + "<tr><td class='contentPLPeriod'>" + finances[i][0] + "</td><td class='contentPLAmt'>" + formatAmount(finances[i][1],0) + "</td></tr>";
    };


document.getElementById("dataSet").innerHTML = tableContent;