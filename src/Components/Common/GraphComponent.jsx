// import { DisplayCardGraph } from './GraphComponent';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);



export const DisplayCardGraph = ({ id, data, brColor, bgColor }) => {
    var ctx = document.getElementById(id).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: "myChart",
            datasets: [
                {
                    label: id,
                    data: data,
                    borderColor: brColor,
                    backgroundColor: bgColor,
                    fill: true,
                    tension: 0.5,
                }]
        },
        options: {
            scales: {
                x: {
                    display: false,
                    title: { display: false }
                },
                y: {
                    display: false,
                    title: { display: false }
                },
            },
            plugins: {
                legend: { display: false }
            }
        },
        reponsive: true,
        maintainAspectRatio: false,
    });
    return myChart;
};
