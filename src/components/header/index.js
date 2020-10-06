import React, { useState, useEffect }from "react";
import './style.css';
import { Header, Container, Image, Reveal, Grid } from "semantic-ui-react";
import { Col } from '../Grid';
import Wrapper from '../wrapper';
import Skills from '../skills';
import Resume from "../../assets/images/BarbaraResume.pdf";
import Profile from '../../assets/images/profile.png';
import Mount1 from '../../assets/images/mountain1.png';
import Mount2 from '../../assets/images/mountain2.png 14-09-49-651.png';

function Heading() {

    const [ offSetY, setOffSetY ] = useState(0); 
    const handleScroll = () => setOffSetY(window.pageYOffset);

    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
       
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
        <div className="container-fluid">
        <Wrapper>
            <Container >
                <div className="heading-name" >
                <Col size="sm-6 center" style={{transform: `translateY(${offSetY * 0.3}px)`}}>
                    <Header as='h2' textAlign='center'
                        className="main-name center aligned header"       
                        > Hi there, <br /> I'm Barbara Potiriadis</Header>
                    </Col>
                 
                    </div>
                    
                    <Reveal className="resume" animated='move'>
                        <Reveal.Content visible>
                            <Image centered src={Profile} size='small' />
                            <div className="image-text">Hover to view Resume</div>
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <a href={Resume} target="_blank" className="btn btn-primary"
                            >Resume</a>
                        </Reveal.Content>
                    </Reveal>
                {/* <div className="section">
                    <img src={Mount1} className="mountain1" alt="mountain-1" style={{width: `(100 - ${offSetY} / 20) + '%'`}}/>
                    <img src={Mount2} className="mountain1" alt="mountain-2" style={{width: `(100 + ${offSetY} / 20) + '%'`}} />
                </div> */}

                <div className="about">
                <Grid columns={2}>
                    <Grid.Column>
                        <div className="about-me-1"
                        style={{transform: `translateY(${offSetY * 0.2}px)`}}>
                            Full Stack Web Developer with a background in Market Research bringing a passion for writing clean code
                            to architect creative user-friendly interfaces. Curious and experimental by nature with strengths in creativity and problem
                            solving skills that have enabled me to build dynamic front and back-end applications.
                            <br /><br />
                            Always attuned to the latest UX/UI designs and thrives on continuous learning and experimentation to develop polished and interactive
                            applications with a strong attention to detail. I'm an adventurous risk taker, whether I'm in the office or outdoors, who's not
                            afraid to step outside the boundaries and tackle any challenge with persistance. 
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="about-me-2"
                        style={{transform: `translateY(${offSetY * 0.35}px)`}}>
                            I have demonstrated a solid ability to work under pressure in the field of market research to manage an online community/panel, including
                            survey scripting and designing email marketing campaigns, whilst working on internal projects using statistical
                            methods to draw inferences and insights for clients.
                            <br /><br />
                            When I'm not coding, you'll find me cooking, working out and devouring in ice-cream. Travelling is a core passion of mine, where my travel highlights include the US and Europe. I am
                            eager to apply the many skills learned in this rewarding course to work as a professional in the field of Web development.
                        </div>
                    </Grid.Column>
                </Grid>
                </div>
                <Skills />
            </Container>
            </Wrapper>
        </div>
      </>
    )
}

export default Heading;
