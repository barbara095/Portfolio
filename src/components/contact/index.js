import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react';
import './style.css';

function ContactForm () {
    return (
      <div className='contact'>
          <div className='heading' style={{writingMode:'vertical-rl', textOrientation: 'mixed'}}>Reach Out.
          </div>
        <Segment style={{background: 'pink'}}>
        <Form  style={{background: 'pink'}}>
          <Form.Group widths='equal' style={{width: '700px', background: 'pink'}}>
            <Form.Input fluid label='First name' placeholder='First name' />
            <Form.Input fluid label='Last name' placeholder='Last name' />
            <Form.Input fluid label='Email' placeholder='Last name' />
          </Form.Group>
          <Form.Group >
            <Form.Input fluid label='Message' placeholder='Send me a message!' style={{width: '700px', height: '200px'}}/>
          </Form.Group>
          <Button type='submit' style={{background: 'darkgrey', color: 'white'}}>Submit</Button>
        </Form>
      </Segment>
      </div>
   
    )
}

export default ContactForm;