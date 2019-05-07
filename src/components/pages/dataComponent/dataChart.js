import { Line } from 'react-chartjs-2';
import React from 'react';

class ChartData extends React.Component{

  constructor(props){
    super(props);
    this.state={
        data: {labels:[], datasets:[]} 
    }
  }
 


  componentDidMount(a){
      this.getChartData();
     console.log(this.state.data);
  }

  getChartData(){
      this.setState({
        data : {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: this.props.label,
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
                data: [65, 59, 80, 81, 56, 55, 40]
              }
            ]
          }
      })
  }
 render(){
    console.log(this.state.data);
   return(
       <data>
     <div className="chart">
        <Line
          data={this.state.data}
          options={{ maintainAspectRatio: false,
        responsive: true }}
    />
     </div>
     </data>
   )
 }

}

export default ChartData;