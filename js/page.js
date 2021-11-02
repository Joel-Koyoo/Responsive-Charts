// Accessing the objects
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');

let yearlyLabel = document.getElementById('yearlyTotal');

// Values from the form
let newAmount = document.getElementById('itemAmount');
let newMonth = document.getElementById('monthId');

let yearlyTotal = 0;


const monthlySales = new Set();
const monthlyLabels = new Set();

function addSale() {

    monthlySales.add(parseInt(newAmount.value))
    monthlyLabels.add(newMonth.value)


    yearlyTotal = 0;

    monthlySalesChart.data.datasets.forEach((dataset) => {
        dataset.data = [];
    });


    for (let amount of monthlySales) {
        yearlyTotal = amount + yearlyTotal;
        yearlyLabel.innerHTML = yearlyTotal;
        monthlySalesChart.data.datasets.forEach((dataset) => {
            dataset.data.push(amount)
        });

    }

    monthlySalesChart.data.labels = Array.from(monthlyLabels);
    monthlySalesChart.update();
}

function deleteVal() {
    monthlySales.forEach((value1, value2, monthlySales) => {
        alert(value1);
    })
}

function Addtotal() {

}

// Bar chart
var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: '# of Sales',
            data: monthlyLabels,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Pie Chart
// var deptSalesChart = new Chart(pieCtx, {
//     type: 'pie',
//     data: {
//         labels: deptLabels,
//         datasets: [{
//             label: '# of Sales',
//             data: deptSales,
//             backgroundColor: [
//                 'rgba(238, 184, 104, 1)',
//                 'rgba(75, 166, 223, 1)',
//                 'rgba(239, 118, 122, 1)',
//             ],
//             borderWidth: 0
//         }]
//     },
//     options: {

//     }
// })