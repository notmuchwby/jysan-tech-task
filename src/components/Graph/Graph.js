import dataService from '../../services/dataService';
import styles from './Graph.module.css';
import { RiArrowUpFill } from 'react-icons/ri'
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'
import { 
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend
  } from 'chart.js'

  ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
  )


function Graph() {
    const [buttonSelected, setButtonSelected] = useState(0)
    const [priceData, setPriceData] = useState({})
    const [currentButton, setCurrentButton] = useState('week1')
    const [graphData, setGraphData] = useState([])
    useEffect(() => {
        dataService.getAll().then(data => {
            setPriceData(data.graph)
            setGraphData([data.graph[0].price, data.graph[1].price, data.graph[2].price, data.graph[3].price, data.graph[4].price])
            setData({
                labels: ['1', '2', '3', '4', '5'],
                datasets: [{
                    labels:'Whatever',
                    data: [data.graph[0].price, data.graph[1].price, data.graph[2].price, data.graph[3].price, data.graph[4].price],
                    backgroundColor: 'black',
                    borderColor: 'black',
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    pointHitRadius: 0,
                    pointBorderColor: 'black',
                    tension: 0.1
                }]        
            })
        })
    }, [])
  
    const [data, setData] = useState({
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
            labels:'Whatever',
            data: graphData,
            backgroundColor: 'black',
            borderColor: 'black',
            pointRadius: 0,
            pointHoverRadius: 0,
            pointHitRadius: 0,
            pointBorderColor: 'black',
            tension: 0.1
        }]

    })

    

    const options = { 
        plugins: {
            legend: {
              display: false
            }
          },
          tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        },
        scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
                drawChartArea: false
              },
              ticks: {
                display: false 
            }
            },
            y: {
              grid: {
                display: false
              },
              ticks: {
                display: false
            }
            }
          },
          
        elements: {
            rectangle: {
                borderWidth: 0
            }
        },
        chartArea: {
            backgroundColor: 'rgba(0, 0, 0, 0)'
        } 
    }

    const handleButtonPress = (button) => {
        setCurrentButton(button);

        if (button === 'week1') {
            setGraphData([])
            const newArray = []
            for(let i = 0; i < 5; i++) {
                newArray.push(priceData[i].price)
            }
            setGraphData(newArray)
            console.log(newArray)
            setData({
                labels: ['1', '2', '3', '4', '5'],
                datasets: [{
                    labels:'Whatever',
                    data: newArray,
                    backgroundColor: 'black',
                    borderColor: 'black',
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    pointHitRadius: 0,
                    pointBorderColor: 'black',
                    tension: 0.1
                }]
            });

            setButtonSelected(0)

        } else if (button === 'week2') {
            setGraphData([])
            const newArray = []
            for(let i = 0; i < 10; i++) {
                newArray.push(priceData[i].price)
            }
            setGraphData(newArray)
            console.log(newArray)
            setData({
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                datasets: [{
                    labels:'Whatever',
                    data: newArray,
                    backgroundColor: 'black',
                    borderColor: 'black',
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    pointHitRadius: 0,
                    pointBorderColor: 'black',
                    tension: 0.1
                }]
            });

            setButtonSelected(1)
        } else {
            setGraphData([])
            const newArray = []
            for(let i = 0; i < 20; i++) {
                newArray.push(priceData[i].price)
            }
            setGraphData(newArray)
            console.log(newArray)
            setData({
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                datasets: [{
                    labels:'Whatever',
                    data: newArray,
                    backgroundColor: 'black',
                    borderColor: 'black',
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    pointHitRadius: 0,
                    pointBorderColor: 'black',
                    tension: 0.1
                }]
            });

            setButtonSelected(2)
        }
    }

    return (
      <div>
        <div className={styles.numsContainer}>
            <div className={styles.firstNum}>
                $1 038.29
            </div>

            <div className={styles.secondNum}>
                <RiArrowUpFill className={styles.arrow} />$48.69 (4.69%)
            </div>
        </div>
    
        <div className={styles.chartContainer} style={{width: '350px', height: '180px'}}>
            <Line data={data} options={options}/>
        </div>

        <div className={styles.buttons}>
            <button className={buttonSelected === 0 ? styles.buttonSelected : styles.button} onClick={() => handleButtonPress('week1')}>
                1 неделя
            </button>
            <button className={buttonSelected === 1 ? styles.buttonSelected : styles.button} onClick={() => handleButtonPress('week2')}>
                2 недели
            </button>
            <button className={buttonSelected === 2 ? styles.buttonSelected : styles.button} onClick={() => handleButtonPress('month')}>
                месяц
            </button>
        </div>
      </div>
    );
  }

export default Graph