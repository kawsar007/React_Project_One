import React from 'react';
import styles from './sideNav.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const SideNavItem = () => {

    const items = [
        {
            type: styles.option,
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: styles.option,
            icon: 'file-text-o',
            text: 'News',
            link: '/news'
        },
        {
            type: styles.option,
            icon: 'play-circle',
            text: 'Videos',
            link: '/videos'
        },
        {
            type: styles.option,
            icon: 'sign-in',
            text: 'Sign In',
            link: '/sign-in'
        },
        {
            type: styles.option,
            icon: 'sign-out',
            text: 'Sign Out',
            link: '/sign-out'
        },
    ]

    const showItems = () => {
        return items.map( (item,i) => {
            return(
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon}/>
                        {item.text}
                    </Link>
                </div>
            )
        })
    }

    // <div className={styles.option}>
    //         <Link to="">
    //             <FontAwesome name="home"/>
    //             Home
    //         </Link>
    // </div>
    return ( 
        <div>
            {showItems()}
        </div>
     );
}
 
export default SideNavItem;