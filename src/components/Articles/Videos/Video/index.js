import React, { Component } from 'react';
import styles from '../../Articles.css'; 
import axios from 'axios';
import { URL } from '../../../../config'; 
import Header from '../../News/Post/header';
//import videosRelated from '../../../widgets/VideosLists/VideosRelated.js/videosRelated';
import videosRelated from '../../../widgets/VideosLists/VideosRelated/videosRelated';


class VideoArticle extends Component {
    state = { 
        article: [],
        team: [],
        teams: [],
        related: []
     }

     //WARNING! To be deprecated in React v17. Use componentDidMount instead.
     componentWillMount() {
         axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
            .then( response => {
                let article = response.data[0]; 

                axios.get(`${URL}/teams?id=${article.team}`)
                    .then( response => {
                        this.setState({
                            article,
                            team: response.data
                        });
                        this.getRelated();
                    })
            })
     }

     getRelated = () => {
        //console.log(this.state)
        axios.get(`${URL}/teams`)
            .then(response => {
                 let teams = response.data

                 axios.get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`)
                     .then( response => {
                         this.setState({
                             teams,
                             related: response.data
                         })
                     })
            })
     }

    render() { 
        const article = this.state.article;
        const team = this.state.team; 
        return ( 
            <div>
                <Header teamData={team[0]}/>
                <div className={styles.videoWrapper} >
                    <h1>{article.title}</h1>
                    <iframe
                       title="videoplayer"
                       width="100%"
                       height="300px"
                       src={`https://www.youtube.com/embed/${article.url}`}
                    >

                    </iframe>
                </div> 
                <videosRelated
                   data={this.state.related}
                   teams={this.state.teams}
                /> 
            </div>
         );
    }
}
 
export default VideoArticle; 
