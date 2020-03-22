import React, { Component } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';


class GlobalStats extends Component {
  state = {
    stats: {},
    total_cases: 0,
    total_recovered: 0,
    total_unresolved: 0,
    total_deaths: 0,
    total_new_cases_today: 0,
    total_new_deaths_today: 0,
    total_active_cases: 0,
    total_serious_cases: 0
  };

  componentDidMount() {
    this.getStats();
  }

  getStats() {
    axios.get('https://thevirustracker.com/free-api?global=stats', { headers: { "Accept": "application/json" }})
      .then(data => {
        console.log(data.data.results[0]);
        this.setState({
          stats: data.data.results,
          total_cases: data.data.results[0].total_cases,
          total_recovered: data.data.results[0].total_recovered,
          total_unresolved: data.data.results[0].total_unresolved,
          total_deaths: data.data.results[0].total_deaths,
          total_new_cases_today: data.data.results[0].total_new_cases_today,
          total_new_deaths_today: data.data.results[0].total_new_deaths_today,
          total_active_cases: data.data.results[0].total_active_cases,
          total_serious_cases: data.data.results[0].total_serious_cases
        });
      })
      .catch(error => {
          console.log(error.response);
        }
      )
  }

  render() {
    return (
      <div className="container">

        <div className="row text-center">
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="counter">
              {/*<i className="fa fa-code fa-2x"></i>*/}
              <p className="fa-2x">Total Cases</p>
              <CountUp className="timer count-title count-number Danger" start={0} end={this.state.total_cases} />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="counter">
              {/*<i className="fa fa-coffee fa-2x"></i>*/}
              <p className="fa-2x">Total Recovered</p>
              <CountUp className="timer count-title count-number Success" start={0} end={this.state.total_recovered} />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="counter">
              {/*<i className="fa fa-lightbulb-o fa-2x"></i>*/}
              <p className="fa-2x">Total Unresolved</p>
              <CountUp className="timer count-title count-number Warning" start={0} end={this.state.total_unresolved} />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="counter">
              {/*<i className="fas fa-skull-crossbones fa-2x"></i>*/}
              <p className="fa-2x">Total Deaths</p>
              <CountUp className="timer count-title count-number Inverse" start={0} end={this.state.total_deaths} />
            </div>
          </div>
        </div>
        <br/>
        <div className="row text-center">
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="counter">
              {/*<i className="fa fa-code fa-2x"></i>*/}
              <p className="fa-2x ">Total New Cases Today</p>
              <CountUp className="timer count-title count-number Primary" start={0} end={this.state.total_new_cases_today} />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="counter">
              {/*<i className="fa fa-coffee fa-2x"></i>*/}
              <p className="fa-2x ">Total New Deaths Today</p>
              <CountUp className="timer count-title count-number Today" start={0} end={this.state.total_new_deaths_today} />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="counter">
              {/*<i className="fa fa-lightbulb-o fa-2x"></i>*/}
              <p className="fa-2x ">Total Active Cases</p>
              <CountUp className="timer count-title count-number Active" start={0} end={this.state.total_active_cases} />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="counter">
              {/*<i className="fa fa-bug fa-2x"></i>*/}
              <p className="fa-2x ">Total Serious Cases</p>
              <CountUp className="timer count-title count-number Serious" start={0} end={this.state.total_serious_cases} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GlobalStats;
