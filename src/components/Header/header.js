import React from 'react';
import styles from './header.css';

import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import SideNavigation from './SideNav/sideNav';

const Header = (props) => {

    const navBars = () => (
        <div>
            <FontAwesome name="bars"
                onClick={props.onOpenNav}
                style={{
                    color: '#dfdfdf',
                    padding: '10px',
                    cursor: 'pointer'
                }}
            />
        </div>
    )

    const logo = () => {
         return(
             <Link to="/" className={styles.logo}>
                 <img alt="logo" src="/images/win.png"/>
             </Link>
         )
    }


    return ( 
        <header className={styles.header}>
          <SideNavigation {...props}/>
            <div className={styles.headerOpt}>
                {navBars()} 
                {logo()}
            </div>
        </header>
     );
}
 
export default Header;