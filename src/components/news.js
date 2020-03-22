import React, { Component } from 'react';
import axios from 'axios';

import { countries, countriesDropdown } from './countries';
import { Dropdown } from 'semantic-ui-react';


class News extends Component {
  state = {
    news: [],
    countryList: [],
    country_code: '',
    country_name: ''
  };

  // componentDidMount() {
    // this.getNews();
    // let dropdownobject = [];
    // countries.forEach(function(country) {
    //   jsonObj = {
    //     "order_contents": [
    //       {
    //         "id": itemVal['id'],
    //         "name": itemVal['name'],
    //         "price": itemVal['price'],
    //         "quantity": itemVal['quantity'],
    //         "total": "itemVal['total']
    //       }
    //     ]
    //   };
    //   result.business.push(jsonObj);
    // const countryList = countries.map((country, index) => {
    //   {
    //     'key': '',
    //     text: 'Justen Kitsune',
    //     value: 'Justen Kitsune',
    //     image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg' }
    //   }
    // });
  // }

  getCountryData = (event, {value}) => {
    console.log(value);
    this.setState({
      country_code: value,
      country_name: event.target.textContent
    });
    this.getNews();
  };

  getNews() {
    axios.get('https://thevirustracker.com/free-api?countryTotal=' + this.state.country_code, { headers: { "Accept": "application/json" }})
      .then(data => {
        console.log(data);
        // this.setState({
        //   quote: data.data.contents.quotes[0]
        // });
      })
      .catch(error => {
          console.log(error);
          if (error.toString() === 'Error: Network Error') {
            setTimeout(this.getNews(), 1000);
          }
        }
      )
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row clearMargin">
          <div className="col">
            <h1>Select your Country</h1>
            <Dropdown
              placeholder='Select Country'
              fluid
              clearable
              search
              selection
              options={countriesDropdown}
              onChange={this.getCountryData}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
