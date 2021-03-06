import React, { Component } from 'react';
import styles from './videosList.css';

import VideosListTemplate from './videosListTemplate';

import axios from 'axios';

import { URL } from '../../../config';
import Button from '../Buttons/button'; 

class VideosList extends Component {
    state = { 
        teams: [], 
        videos: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
     }

     //WARNING! To be deprecated in React v17. Use componentDidMount instead.
     componentWillMount() {
         this.request(this.state.start, this.state.end)
     }

     request = (start, end) => {
         if(this.state.teams.length < 1) {
             axios.get(`${URL}/teams`)
                 .then(response => {
                     this.setState({
                         teams: response.data
                     })
                 })
         }

         axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
             .then(response => {
                 this.setState({
                     videos: [...this.state.videos,...response.data],
                     start,
                     end
                 })
             })
     }

     renderVideos = () => {
         let template = null;

         switch(this.props.type){
             case('card'):
                 template = <VideosListTemplate data={this.state.videos} teams={this.state.teams}/>
                 break;
             default:
                 template = null
         }
         return template;
     }

     loadMore = () => {
         let end = this.state.end + this.state.amount;
         this.request(this.state.end, end)
     }

     renderButton = () => {
         return this.props.loadmore ? 
               <Button
                   type="loadmore"
                   loadMore={() => this.loadMore()}
                   cta="Load More Videos"
                /> 
               :
               <Button type="linkTo" cta="More videos" linkTo="/videos"/>
     }

     renderTitle = (title) => {
         return title ? 
         <h3 className={styles.micWin}><strong>Microsoft</strong> Windows</h3>
         :
          null
     }

    render() { 
        
        return ( 
            <div className={styles.videosList_wrapper}>
               { this.renderTitle(this.props.title) }
               { this.renderVideos () }
               { this.renderButton() }
            </div>
         );
    }
}
 
export default VideosList;
