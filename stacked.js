// Our labels along the x-axis
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// For drawing the lines
var LINE = [27, 21, 11, 11, 30, 12, 27, 6, 11, 0, 0, 0];

var CV_YMCN = [2, 1, 5, 5, 11, 2, 2, 0, 1, 0, 0, 0];    //CV
var CV_YMTT = [10, 4, 2, 2, 2, 2, 10, 2, 2, 0, 0, 0];
var CV_YPMV = [5, 3, 5, 2, 5, 5, 5, 1, 5, 0, 0, 0];
var CV_YMVN = [5, 6, 1, 0, 5, 2, 5, 2, 1, 0, 0, 0];
var CV_YIMM = [5, 7, 2, 2, 7, 2, 5, 1, 2, 0, 0, 0];

var OM_YMCN = [0, 0, 1, 5, 11, 4, 2, 0, 1, 0, 0, 0];    //OM
var OM_YMTT = [2, 2, 2, 2, 2, 2, 10, 2, 2, 0, 0, 0];
var OM_YPMV = [1, 1, 5, 2, 3, 2, 5, 5, 1, 0, 0, 0];
var OM_YMVN = [2, 2, 2, 0, 5, 2, 2, 2, 1, 0, 0, 0];
var OM_YIMM = [1, 1, 2, 2, 7, 2, 5, 1, 2, 0, 0, 0];

var GC_YMCN = [2, 0, 1, 5, 11, 4, 2, 0, 1, 0, 0, 0];    //GC
var GC_YMTT = [6, 2, 2, 2, 2, 2, 10, 2, 2, 0, 0, 0];
var GC_YPMV = [5, 1, 5, 2, 2, 1, 5, 1, 5, 0, 0, 0];
var GC_YMVN = [5, 2, 1, 0, 1, 2, 3, 2, 1, 0, 0, 0];
var GC_YIMM = [5, 1, 2, 2, 2, 2, 5, 1, 2, 0, 0, 0];

var type = ['CV', 'OM', 'GC'];
var cv = [CV_YMCN, CV_YMTT, CV_YPMV, CV_YMVN, CV_YIMM];
var om = [OM_YMCN, OM_YMTT, OM_YPMV, OM_YMVN, OM_YIMM];
var gc = [GC_YMCN, GC_YMTT, GC_YPMV, GC_YMVN, GC_YIMM];
var group = [];
var label = ['YMCN', 'YMTT', 'YPMV', 'YMVN', 'YIMM'];
var color = ['#3e95cd', '#fae910', '#abc6c3', '#ff0381', '#191970', '#26cad3']
var set = [];

set.push({ type: 'line', label: 'Total remaining reject', borderColor: "#ff0000", backgroundColor: "#ff0000", borderWidth: 2, fill: false, data: LINE });

var i = 0;
cv.forEach(function (cv) {
    set.push({ type: 'bar', label: "CV " + label[i], backgroundColor: color[i], data: cv, borderColor: 'white', stack: "CV", borderWidth: 2 });
    i += 1
});

i = 0;
om.forEach(function (om) {
    set.push({ type: 'bar', label: "OM " + label[i], backgroundColor: color[i], data: om, borderColor: 'white', stack: "OM", borderWidth: 2 });
    i += 1
});

i = 0;
gc.forEach(function (gc) {
    set.push({ type: 'bar', label: "GC " + label[i], backgroundColor: color[i], data: gc, borderColor: 'white', stack: "GC", borderWidth: 2 });
    i += 1
});

var chartData = {
    labels: months,
    datasets: set
};
