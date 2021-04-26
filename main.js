async function app() {
  try {
    let response = await fetch('http://ejd.songho.ca/ios/covid19.json');
    let json = await response.json();
    
    jsonData(json);
    sortedJsonForChart(json);

    // Current Date
    var NowMoment = moment();
    var eDisplayMoment = document.getElementById('date');
    eDisplayMoment.innerHTML = NowMoment.format('MMMM Do YYYY');

    // InnerHTML
    document.getElementById("daily").innerHTML = ca.numToday["numtoday"].toLocaleString();
    document.getElementById("total").innerHTML = ca.numToday["numtotal"].toLocaleString();

    // Default Chart View
    ctx = document.getElementById('dailyChart');
    tctx = document.getElementById('totalChart');

    dailyChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ca.DailyDates,
        datasets: [{
          label: 'Daily Confirmed Cases',
          data: ca.DailyDatesTotals,
          backgroundColor: "rgba(63, 142, 252, 0.2)",
          borderColor: "rgba(59, 40, 204, 1)",
          borderWidth: 1
        }]
      },
    });

    totalChart = new Chart(tctx, {
      type: 'line',
      data: {
        labels: ca.DailyDates,
        datasets: [{
          label: 'Total Confirmed Cases',
          data: ca.Totals,
          backgroundColor: "rgba(223, 115, 115, 0.2)",
          borderColor: "rgba(204, 68, 75, 1)",
          borderWidth: 1
        }]
      },
    });

    // Calling addeventListener function below
    document.getElementById('provNames').addEventListener('change', chartFunction);
    chartFunction();

  }
  catch(e) {
    console.log('Error! Loading JSON Failed', e);
  }
}

app();

// Filtered JSON Data By Province
function jsonData(data) {

  ca = filterDatabyProvName(data, "Canada");
  ca.numToday = filterDatabyToday(ca);
  on = filterDatabyProvName(data, "Ontario");
  on.numToday  = filterDatabyToday(on);
  qc = filterDatabyProvName(data, "Quebec");
  qc.numToday = filterDatabyToday(qc);
  bc = filterDatabyProvName(data, "British Columbia");
  bc.numToday = filterDatabyToday(bc);
  ab = filterDatabyProvName(data, "Alberta");
  ab.numToday = filterDatabyToday(ab);
  sk = filterDatabyProvName(data, "Saskatchewan");
  sk.numToday = filterDatabyToday(sk);
  mb = filterDatabyProvName(data, "Manitoba");
  mb.numToday = filterDatabyToday(mb);
  nl = filterDatabyProvName(data, "Newfoundland and Labrador");
  nl.numToday = filterDatabyToday(nl);
  nb = filterDatabyProvName(data, "New Brunswick");
  nb.numToday = filterDatabyToday(nb);
  ns = filterDatabyProvName(data, "Nova Scotia");
  ns.numToday = filterDatabyToday(ns);
  pei = filterDatabyProvName(data, "Prince Edward Island");
  pei.numToday = filterDatabyToday(pei);
  yk = filterDatabyProvName(data, "Yukon");
  yk.numToday = filterDatabyToday(yk);
  nw = filterDatabyProvName(data, "Northwest Territories");
  nw.numToday = filterDatabyToday(nw);
  nt = filterDatabyProvName(data, "Nunavut");
  nt.numToday = filterDatabyToday(nt);

}

// Function to filter data by Province Name
function filterDatabyProvName(data, string) {
  return data.filter(a => a.prname == string);
}

// Function to filter data by Today's Object
function filterDatabyToday(data) {
  return data.reduce((r, o) => o.date > r.date ? o : r);
}

// Sorted JSON Data By Province for Chart Data
function sortedJsonForChart() {

  ca.DailyDates = [];
  arraySortForDayStrings(ca, ca.DailyDates);
  ca.DailyDatesTotals = [];
  arraySortForDayTotals(ca, ca.DailyDatesTotals);
  ca.Totals = [];
  arraySortForTotalCases(ca, ca.Totals);

  on.DailyDates = [];
  arraySortForDayStrings(on, on.DailyDates);
  on.DailyDatesTotals = [];
  arraySortForDayTotals(on, on.DailyDatesTotals);
  on.Totals = [];
  arraySortForTotalCases(on, on.Totals);

  qc.DailyDates = [];
  arraySortForDayStrings(qc, qc.DailyDates);
  qc.DailyDatesTotals = [];
  arraySortForDayTotals(qc, qc.DailyDatesTotals);
  qc.Totals = [];
  arraySortForTotalCases(qc, qc.Totals);

  bc.DailyDates = [];
  arraySortForDayStrings(bc, bc.DailyDates);
  bc.DailyDatesTotals = [];
  arraySortForDayTotals(bc, bc.DailyDatesTotals);
  bc.Totals = [];
  arraySortForTotalCases(bc, bc.Totals);

  ab.DailyDates = [];
  arraySortForDayStrings(ab, ab.DailyDates);
  ab.DailyDatesTotals = [];
  arraySortForDayTotals(ab, ab.DailyDatesTotals);
  ab.Totals = [];
  arraySortForTotalCases(ab, ab.Totals);

  sk.DailyDates = [];
  arraySortForDayStrings(sk, sk.DailyDates);
  sk.DailyDatesTotals = [];
  arraySortForDayTotals(sk, sk.DailyDatesTotals);
  sk.Totals = [];
  arraySortForTotalCases(sk, sk.Totals);

  mb.DailyDates = [];
  arraySortForDayStrings(mb, mb.DailyDates);
  mb.DailyDatesTotals = [];
  arraySortForDayTotals(mb, mb.DailyDatesTotals);
  mb.Totals = [];
  arraySortForTotalCases(mb, mb.Totals);

  nl.DailyDates = [];
  arraySortForDayStrings(nl, nl.DailyDates);
  nl.DailyDatesTotals = [];
  arraySortForDayTotals(nl, nl.DailyDatesTotals);
  nl.Totals = [];
  arraySortForTotalCases(nl, nl.Totals);

  nb.DailyDates = [];
  arraySortForDayStrings(nb, nb.DailyDates);
  nb.DailyDatesTotals = [];
  arraySortForDayTotals(nb, nb.DailyDatesTotals);
  nb.Totals = [];
  arraySortForTotalCases(nb, nb.Totals);

  ns.DailyDates = [];
  arraySortForDayStrings(ns, ns.DailyDates);
  ns.DailyDatesTotals = [];
  arraySortForDayTotals(ns, ns.DailyDatesTotals);
  ns.Totals = [];
  arraySortForTotalCases(ns, ns.Totals);

  pei.DailyDates = [];
  arraySortForDayStrings(pei, pei.DailyDates);
  pei.DailyDatesTotals = [];
  arraySortForDayTotals(pei, pei.DailyDatesTotals);
  pei.Totals = [];
  arraySortForTotalCases(pei, pei.Totals);

  yk.DailyDates = [];
  arraySortForDayStrings(yk, yk.DailyDates);
  yk.DailyDatesTotals = [];
  arraySortForDayTotals(yk, yk.DailyDatesTotals);
  yk.Totals = [];
  arraySortForTotalCases(yk, yk.Totals);

  nw.DailyDates = [];
  arraySortForDayStrings(nw, nw.DailyDates);
  nw.DailyDatesTotals = [];
  arraySortForDayTotals(nw, nw.DailyDatesTotals);
  nw.Totals = [];
  arraySortForTotalCases(nw, nw.Totals);

  nt.DailyDates = [];
  arraySortForDayStrings(nt, nt.DailyDates);
  nt.DailyDatesTotals = [];
  arraySortForDayTotals(nt, nt.DailyDatesTotals);
  nt.Totals = [];
  arraySortForTotalCases(nt, nt.Totals);

}

// Function to push Date Strings per province into a new array
function arraySortForDayStrings(data, array) {
  for (let i = 0; i < data.length; i++) {
    array.push(data[i].date);
  }
}

// Function to push daily totals per day into a new array
function arraySortForDayTotals(data, array) {
  for (let i = 0; i < data.length; i++) {
    array.push(data[i].numtoday);
  }
}

// Function to push total cases per day into a new array
function arraySortForTotalCases(data, array) {
  for (let i = 0; i < data.length; i++) {
    array.push(data[i].numtotal);
  }
}


/****************************** INITIAL CHART DISPLAY **********************************/

/*Function to update the bar chart*/
function addData(chart, label, data) {
  chart.data.labels = label
  chart.data.datasets.forEach((dataset) => {
      dataset.data = data;
  });
  chart.update();
}

// AddEventListener Function for dropdownlist to change data in charts and innerHTML
function chartFunction() {
  switch (this.value) {

    case "Canada":
      addData(dailyChart, ca.DailyDates, ca.DailyDatesTotals);
      addData(totalChart, ca.DailyDates, ca.Totals);
      document.getElementById("daily").innerHTML = ca.numToday["numtoday"].toLocaleString();
      document.getElementById("total").innerHTML = ca.numToday["numtotal"].toLocaleString();
      break;

    case "Ontario":
      addData(dailyChart, on.DailyDates, on.DailyDatesTotals);
      addData(totalChart, on.DailyDates, on.Totals);
      document.getElementById("daily").innerHTML = on.numToday["numtoday"].toLocaleString();
      document.getElementById("total").innerHTML = on.numToday["numtotal"].toLocaleString();
      break;

    case "Quebec":
      addData(dailyChart, qc.DailyDates, qc.DailyDatesTotals);
      addData(totalChart, qc.DailyDates, qc.Totals);
      document.getElementById("daily").innerHTML = qc.numToday["numtoday"].toLocaleString();
      document.getElementById("total").innerHTM = qc.numToday["numtotal"].toLocaleString();
      break;

    case "British Columbia":
      addData(dailyChart, bc.DailyDates, bc.DailyDatesTotals);
      addData(totalChart, bc.DailyDates, bc.Totals);
      document.getElementById("daily").innerHTML = bc.numToday["numtoday"].toLocaleString();
      document.getElementById("total").innerHTML = bc.numToday["numtotal"].toLocaleString();
      break;

    case "Alberta":
      addData(dailyChart, ab.DailyDates, ab.DailyDatesTotals);
      addData(totalChart, ab.DailyDates, ab.Totals);
      document.getElementById("daily").innerHTML = ab.numToday["numtoday"].toLocaleString();
      document.getElementById("total").innerHTML = ab.numToday["numtotal"].toLocaleString();
      break;

    case "Saskatchewan":
      addData(dailyChart, sk.DailyDates, sk.DailyDatesTotals);
      addData(totalChart, sk.DailyDates, sk.Totals);
      document.getElementById("daily").innerHTML = sk.numToday["numtoday"].toLocaleString();
      document.getElementById("total").innerHTML = sk.numToday["numtotal"].toLocaleString();
      break;

    case "Manitoba":
      addData(dailyChart, mb.DailyDates, mb.DailyDatesTotals);
      addData(totalChart, mb.DailyDates, mb.Totals);
      document.getElementById("daily").innerHTML = mb.numToday["numtoday"].toLocaleString();
      document.getElementById("total").innerHTML = mb.numToday["numtotal"].toLocaleString();
      break;

    case "Newfoundland and Labrador":
      addData(dailyChart, nl.DailyDates, nl.DailyDatesTotals);
      addData(totalChart, nl.DailyDates, nl.Totals);
      document.getElementById("daily").innerHTML = nl.numToday["numtoday"].toLocaleString();
      document.getElementById("total").innerHTML = nl.numToday["numtotal"].toLocaleString();
      break;

    case "New Brunswick":
      addData(dailyChart, nb.DailyDates, nb.DailyDatesTotals);
      addData(totalChart, nb.DailyDates, nb.Totals);
      document.getElementById("daily").innerHTML = nb.numToday["numtoday"].toLocaleString();
      document.getElementById("total").innerHTML = nb.numToday["numtotal"].toLocaleString();
      break;

    case "Nova Scotia":
      addData(dailyChart, ns.DailyDates, ns.DailyDatesTotals);
      addData(totalChart, ns.DailyDates, ns.Totals);
      document.getElementById("daily").innerHTML = ns.numToday["numtoday"].toLocaleString();
      document.getElementById("total").innerHTML = ns.numToday["numtotal"].toLocaleString();
      break;

    case "Prince Edward Island":
      addData(dailyChart, pei.DailyDates, pei.DailyDatesTotals);
      addData(totalChart, pei.DailyDates, pei.Totals);
      document.getElementById("daily").innerHTML = pei.numToday["numtoday"].toLocaleString();
      document.getElementById("total").innerHTML = pei.numToday["numtotal"].toLocaleString();
      break;

    case "Yukon":
      addData(dailyChart, yk.DailyDates, yk.DailyDatesTotals);
      addData(totalChart, yk.DailyDates, yk.Totals);
      document.getElementById("daily").innerHTML = yk.numToday["numtoday"].toLocaleString();
      document.getElementById("total").innerHTML = yk.numToday["numtotal"].toLocaleString();
      break;

    case "Northwest Territories":
      addData(dailyChart, nw.DailyDates, nw.DailyDatesTotals);
      addData(totalChart, nw.DailyDates, nw.Totals);
      document.getElementById("daily").innerHTML = nw.numToday["numtoday"].toLocaleString();
      document.getElementById("total").innerHTML = nw.numToday["numtotal"].toLocaleString();
      break;

    case "Nunavut":
      addData(dailyChart, nt.DailyDates, nt.DailyDatesTotals);
      addData(totalChart, nt.DailyDates, nt.Totals);
      document.getElementById("daily").innerHTML = nt.numToday["numtoday"].toLocaleString();
      document.getElementById("total").innerHTML = nt.numToday["numtotal"].toLocaleString();
      break;

    default:
      break;
  }
};