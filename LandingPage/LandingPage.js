import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

class LandingPage extends React.Component {
    render() {
        return (
            <>
                <h1>LandingPage</h1>
                <Link to='/'>Home</Link>
            </>
        )
    }
}

export default LandingPage;