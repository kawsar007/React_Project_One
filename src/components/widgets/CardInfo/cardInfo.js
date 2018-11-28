import React from 'react'
import styles from './cardInfo.css';
import FontAwesome from 'react-fontawesome';

const CardInfo = (props) => {

    const teamName = (teams, team) => {
        let data = teams.find((item) => {
            return item.id === team
        });
        if(data){
            return data.name
        }
    }

    return ( 
        <div className={styles.CardInfo}>
            <span className={styles.teamName}>
                {teamName(props.teams,props.team)}
            </span>
            <span className={styles.data}>
                <FontAwesome name="clock-o"/>
                {props.date}
            </span>
        </div>
     );
}
 
export default CardInfo;