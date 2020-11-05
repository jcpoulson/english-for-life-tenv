var ctx = document.getElementById('myChart').getContext('2d');
const module = document.querySelector('.module');
const tasks = document.querySelector('.task')
                      


var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Rachel Israel','Michael Kriegshauser', 'Jonah Poulson'],
        datasets: [{
            label: '# of tasks completed',
            data: [45, 14, 27, 50],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
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


module.addEventListener('click', function() {
    console.log("You clicked this button")
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ['Rachel Israel','Michael Kriegshauser', 'Jonah Poulson'],
            datasets: [{ 
                label: 'Course Completion %',
                data: [30, 5, 14, 100],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderWidth: 1
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
})

tasks.addEventListener('click', function() {
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ['Rachel Israel','Michael Kriegshauser', 'Jonah Poulson'],
            datasets: [{
                label: '# of tasks completed',
                data: [45, 14, 27, 50],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
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
})