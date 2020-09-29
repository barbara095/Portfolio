import React, {useState, useEffect } from "react";
import { Header, Grid } from "semantic-ui-react";
import { Col, Row } from '../Grid';
import Wrapper from '../wrapper';
import './style.css';


function Skills() {

    const [ offSetX, setOffSetX ] = useState(0); 
    const handleScroll = () => setOffSetX(window.pageXOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Wrapper className="wrapper">
            
                {/* <div className='skills'  
                    style={{transform: `translateY(${offSetX * 0.5}px)`}}>
                        <Header as='h2' textAlign='center'
                        className="main-name center aligned header"
                        >Skills
                        </Header>
                        <ul>
                    <li></li>
                </ul>
                </div> */}
               
                <div className='technologies'
                    style={{transform: `translateY(${offSetX * 0.3}px)`}}>
                    <h2 textAlign='center'
                    className="tech-title"
                    >Technologies / Languages
                    </h2>
                    <div className="tech-list">
                    <p>HTML, CSS, Javascript, jQuery <br /> 
                    Bootstrap <br /> 
                    React.js, Redux <br /> 
                    Node.Javascript <br /> 
                    MongoDB, MySQL <br /> 
                    MVC Framework, Handlebars <br /> 
                    APIs, JSON, AJAX <br /> 
                    Heroku, Git, Github
                    </p>
                </div>
                </div>
            
        </Wrapper>
    );
}

export default Skills;