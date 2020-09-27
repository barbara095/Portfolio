import React from "react";
import { Header, Icon, Image } from 'semantic-ui-react';
import './style.css';


function Heading() {
    return (
        <div className="header">
            <Header as='h2' icon textAlign='center'>
            <Icon name='pic' circular />
            <Header.Content>Hi there, I'm Barbara Potiriadis</Header.Content>
            </Header>
            <Image
            centered
            size='large'
            url='/public/Assets/images/profile.png'
            />
        </div>
)
        // <section>
        //     <img className="mountain1" src={require('../public/assets/images/mountain1.png')}></img>
        //     <img className="mountain2" src={require('../public/assets/images/mountain2 14-09-49-651.png.png')}></img>
        // </section>
}

export default Heading;
