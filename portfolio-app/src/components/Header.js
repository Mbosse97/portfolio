import React from 'react';
import Navigation from './Navigation';

const styles = {
    header: {
        background: '#ece4db',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerName: {
        color:'black',
        textDecoration: 'none',
        marginLeft: '40px',
        marginTop:'20px',
        fontSize: '50px'
    },
    headerNav: {
        
    }
};

export default function Header({handlePageChange}) {
    return (
        <div style={styles.header} > 
            <div style={styles.headerName} className='header'>
                <p>Michael Bosse</p>
            </div>
            <div className='header-navbar'>
                <Navigation handlePageChange={handlePageChange}/>
            </div>
        </div>
    )
}