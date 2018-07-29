import React, { Component } from 'react'
import { statistics } from 'blockchain.info'
import { Line } from 'react-chartjs-2';

export default class Graph extends Component {

    state = {
        chartData: {
            labels: [],
            datasets: [
                {
                    label: 'Bitcoin price chart',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: []
                }
            ]
        }
    }



    componentWillMount() {
        statistics.getChartData('market-price', {
            timespan: '30d',
            rollingAverage: '1d'
        })
        .then((response) => {
            this.setState({
                chartData: {
                    labels: response.map( ({x}) => {
                       return (new Date(x*1000)).toLocaleDateString()
                    }),
                    datasets: [{
                        ...this.state.chartData.datasets[0],
                        data: response.map( ({y}) => y )
                    }]
                },
            })
        })
    }

    render() {
        return (
            <div>
                <Line data={this.state.chartData} />
            </div>
        )
    }
}