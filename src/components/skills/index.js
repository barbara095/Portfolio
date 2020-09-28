import React from "react";
import { Container, Reveal, Image } from "semantic-ui-react";
import Profile from '../../assets/images/profile.png';
import './style.css';

function Skills() {
    return (
        <Container>
        <Reveal animated='move'>
            <Reveal.Content visible>
            <Image src={Profile} size='small' />
            </Reveal.Content>
            <Reveal.Content hidden>
            <a href="../../assets/images/resume.pdf" target="_blank" className="btn btn-primary"
                >Resume</a>
            </Reveal.Content>
        </Reveal>
    </Container>
    );
}

export default Skills;