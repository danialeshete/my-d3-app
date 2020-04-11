import React from 'react';
import Lottie from 'react-lottie'
import 'bootstrap/dist/css/bootstrap.min.css';
import animationData from '../../assets/lotties/9408-creative-process.json'
import {Container, Row, Col, Button} from 'react-bootstrap'
import './Banner.css'
import Login from '../Login/Login'

export class Banner extends React.Component {

    constructor(props){
        super(props);
        this.state ={

        }
        this.openLogin = this.openLogin.bind(this);
    }

    openLogin(){
        return(<Login/>)
    }

    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
        return (
            <div>
                <Container>
                    <Row >
                    <Col className="pt-3">
                        <Col ml="8">
                            <h1>
                                Online Brainstorming
                            </h1>
                            <h2>
                                It all starts with an Idea
                            </h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, natus. Natus reprehenderit fugit voluptate a quidem, quo porro temporibus fuga aut sed hic, voluptates, non ipsam est molestiae reiciendis eaque?
                            </p>
                        </Col>

                    </Col>
                    <Col className="lottie" ml="6">

                        <Lottie options={defaultOptions} height={600} width={600}/>
                        {/* <a className="btn btn-success" href="../Login/Login.js"> Start Brainstorming</a> */}
                        <Button onClick={this.openLogin}>
                                Start Brainstorming
                        </Button>
                        
                        
                    </Col>
                    </Row>
                    
                    

                </Container>

            </div>
        );
    }
}



export default Banner;