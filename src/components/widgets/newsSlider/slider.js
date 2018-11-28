import React, { Component } from 'react';
import axios from 'axios';
import SliderTemplate from './slider_template';

import { URL } from '../../../config';

class NewsSlider extends Component {
    state = { 
         news: []
     }

     //WARNING! To be deprecated in React v17. Use componentDidMount instead.
     componentWillMount() {
         axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
             .then(response => {
                 this.setState({
                     news:response.data 
                 })
             })
     }

    render() { 
        // console.log(this.state.news)
        return ( 
            <div>
                <SliderTemplate data={this.state.news} type={this.props.type}/>
            </div>
         );
    }
}
 
export default NewsSlider;