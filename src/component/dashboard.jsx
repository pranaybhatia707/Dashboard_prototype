import React,{Component} from 'react';
import Chart from "react-google-charts";
import './dashboard.css';

class Charts1 extends Component{
    render(){
        return(
            <>
                <Chart
                    // width={'625px'}
                    height={'370px'}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                      data={[
                        ['Job Type', 'Revenue'],
                        ['Service Plumbing', 8175000],
                        ['Bid Work HVAC', 3192000],
                        ['Service HVAC', 2615000],
                        ['HWT Replacement', 2029000],
                        ['Maintenance', 152600],
                      ]}
                    options={{
                        title: 'Revenue By Job Type',
                        chartArea: { width: '70%' },
                        hAxis: {
                        title: 'Revenue for November 2019',
                        minValue: 0,
                        },
                        legend: {position: 'none'},
                        // vAxis: {
                        // title: 'City',
                        // },
                        colors:[ 'rgb(9, 180, 138)'],
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '3' }}
                />
            </>
        );
    }
}

class Charts extends Component{
    render(){
        return(
            <>
                <Chart
                    // width={'625px'}
                    height={'370px'}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                      data={[
                        ['City', 'Revenue'],
                        ['New York City, NY', 8175000],
                        ['Los Angeles, CA', 3792000],
                        ['Chicago, IL', 2695000],
                        ['Houston, TX', 2099000],
                        ['Philadelphia, PA', 1526000],
                      ]}
                    options={{
                        title: 'Revenue By Job Location',
                        chartArea: { width: '70%' },
                        hAxis: {
                        title: 'Revenue for November 2019',
                        minValue: 0,
                        },
                        legend: {position: 'none'},
                        // vAxis: {
                        // title: 'City',
                        // },
                        colors:[ 'rgb(9, 180, 138)'],
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '3' }}
                />
            </>
        );
    }
}

class Cards extends Component{
    render(){
      let val = this.props.val;
      let desc = this.props.desc;
      let c = this.props.c;
      return(
        <>
          <div id="card">
            <h4 className={c}><i>{val}</i></h4>
            <p><i> {desc} </i></p>
          </div>
        </>
      );
    }
}
  
class Dashboard extends Component{
    

    componentDidMount() {
        document.body.style.backgroundColor = "rgba(243, 243, 245, 0.74)"
    }

    render(){
        
        let r1 = [];
        let r2 = [];
        let i = 0;
        let data = [['Total Revenue','$406,411.29'],['Total Jobs Avg','$620'],['Tickets Created','655'],['Tickets Scheduled','735'],
        ['Outstanding Amount','$110,448.8'],['Memberships Sold','105'],['Jobs Completed','436'],['Total Canceled','65']];
        data.forEach(x => {
            i+=1;
            if(i<5){
                r1.push(
                    <td><Cards val={x[1]} desc={x[0]} c={i===1?"g":"b"} /></td>
                );
            }
            else{
                r2.push(
                    <td><Cards val={x[1]} desc={x[0]} c={i===5?"r":"b"}  /></td>
                );
            }
        });
        
        return(
            <div id="fin">
                <h3><i>Company Metrics</i></h3>
                <table id="disp">
                    <tr>
                        {r1}
                    </tr>
                    <tr>
                        {r2}
                    </tr>
                </table>
                <div id="c1"><Charts /></div>
                <div id="c2"><Charts1 /></div>
            </div>
        );
    }
}

  export default Dashboard;