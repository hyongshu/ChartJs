var label = ["CV;Jan", "OM;Jan", "GC;Jan"];
label.push("CV;Feb", "OM;Feb", "GC;Feb");
label.push("CV;Mar", "OM;Mar", "GC;Mar");
label.push("CV;Apr", "OM;Apr", "GC;Apr");
label.push("CV;May", "OM;May", "GC;May");
label.push("CV;Jun", "OM;Jun", "GC;Jun");
label.push("CV;Jul", "OM;Jul", "GC;Jul");
label.push("CV;Aug", "OM;Aug", "GC;Aug");
label.push("CV;Sep", "OM;Sep", "GC;Sep");
label.push("CV;Oct", "OM;Oct", "GC;Oct");
label.push("CV;Nov", "OM;Nov", "GC;Nov");
label.push("CV;Dec", "OM;Dec", "GC;Dec");


var LINE = [27, 6, 11, 21, 24, 19, 11, 35, 12, 14, 5, 9, 15, 7, 9, 8, 16, 20, 14, 8, 6, 6, 8, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //CV, OM, GC

var YMCN = [2, 0, 1, 1, 1, 3, 5, 12, 4, 2, 1, 2, 7, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //CV, OM, GC
var YMTT = [10, 2, 2, 4, 0, 2, 2, 2, 2, 6, 1, 1, 6, 0, 2, 1, 5, 3, 0, 2, 1, 2, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var YPMV = [5, 1, 5, 3, 22, 1, 2, 1, 2, 2, 1, 5, 0, 1, 0, 3, 2, 2, 2, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var YMVN = [5, 2, 1, 6, 0, 11, 0, 20, 2, 1, 2, 0, 2, 3, 3, 1, 2, 5, 9, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var YIMM = [5, 1, 2, 7, 1, 2, 2, 0, 2, 3, 0, 1, 0, 1, 2, 1, 5, 8, 1, 3, 1, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var type = ['CV', 'OM', 'GC'];
var group = [YMCN, YMTT, YPMV, YMVN, YIMM];

var text_label = ['YMCN', 'YMTT', 'YPMV', 'YMVN', 'YIMM'];
var color = ['#3e95cd', '#fae910', '#abc6c3', '#ff0381', '#191970', '#26cad3']


var set = [];
set.push({ type: 'line', label: 'Total remaining reject', borderColor: "#ff0000", backgroundColor: "#ff0000", borderWidth: 2, fill: false, data: LINE });


var i = 0;
group.forEach(function (group) {
    set.push({ type: 'bar', label: text_label[i], backgroundColor: color[i], data: group, borderColor: 'white', stack: "", borderWidth: 2 });
    i += 1
});


var chartData = {
    labels: label,
    showTooltips: false,
    datasets: set
};

var ctx = $("#mybarChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
        legend: {
            position: 'bottom'
        },
        animation: {
            onProgress: function (animation) {
                //progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
            }
        },
        scales: {
            xAxes: [
                {
                    id: 'xAxis1',
                    type: "category",
                    ticks: {
                        callback: function (label) {
                            var month = label.split(";")[0];
                            var year = label.split(";")[1];
                            return month;
                        }
                    }
                },
                {
                    id: 'xAxis2',
                    type: "category",
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                    ticks: {
                        callback: function (label) {
                            var month = label.split(";")[0];
                            var year = label.split(";")[1];
                            if (month === "OM") {
                                return year;
                            } else {
                                return "";
                            }
                        }
                    }
                }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});