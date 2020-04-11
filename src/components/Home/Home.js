import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {NavBar} from './NavBar';
import Banner from './Banner';

export class Home extends React.Component {

    render() {

        return (
            <div>
                
                
                <NavBar/>

                <Banner/>
            </div>
        );
    }
}

export default Home;