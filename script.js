// Our labels along the x-axis
var years = ['Jan','Feb','Mar','Apr','May','Jun','Aug','Sep','Oct','Nov','Dec',''];
// For drawing the lines
var YMCN = [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478, 2478];
var YMTT = [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267, 2478];
var YPMV = [168, 170, 178, 190, 203, 276, 408, 547, 675, 734, 2478];
var YMVN = [40, 20, 10, 16, 24, 38, 74, 167, 508, 784, 2478];
var YIMM = [6, 3, 2, 2, 7, 26, 82, 172, 312, 433, 2478];

var chartData = {
  labels: years,
  datasets: [{
    type: 'line',
    label: 'LINE',
    borderColor: "#3e95cd",
    borderWidth: 2,
    fill: false,
    data: LINE
  }, {
    type: 'bar',
    label: 'YMCN',
    backgroundColor: "#3e95cd",
    data: YMCN,
    borderColor: 'white',
    stack: 'CV',
    borderWidth: 2
  }, {
    type: 'bar',
    label: 'YMCN',
    backgroundColor: "#3e95cd",
    data: YMCN,
    borderColor: 'white',
    stack: 'OM',
    borderWidth: 2
  }, {
    type: 'bar',
    label: 'YMCN',
    backgroundColor: "#3e95cd",
    data: YMCN,
    borderColor: 'white',
    stack: 'GC',
    borderWidth: 2
  }]
};