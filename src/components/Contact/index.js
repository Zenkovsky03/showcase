import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import {Container, Wrapper, Title, Desc} from "./ContactStyles";



const Contact = () => {

    //hooks
    const [open, setOpen] = React.useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
            .then((result) => {
                setOpen(true);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    }



    return (
        <Container>
            <Wrapper>
                <Title>Contact</Title>
                <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
                <br/>
                <Desc>✉️ mateuszzaniewski1@gmail.com</Desc>
                {/*<ContactForm ref={form} onSubmit={handleSubmit}>*/}
                {/*    <ContactTitle>Email Me 🚀</ContactTitle>*/}
                {/*    <ContactInput placeholder="Your Email" name="from_email" />*/}
                {/*    <ContactInput placeholder="Your Name" name="from_name" />*/}
                {/*    <ContactInput placeholder="Subject" name="subject" />*/}
                {/*    <ContactInputMessage placeholder="Message" rows="4" name="message" />*/}
                {/*    <ContactButton type="submit" value="Send" />*/}
                {/*</ContactForm>*/}
                {/*<Snackbar*/}
                {/*    open={open}*/}
                {/*    autoHideDuration={6000}*/}
                {/*    onClose={()=>setOpen(false)}*/}
                {/*    message="Email sent successfully!"*/}
                {/*    severity="success"*/}
                {/*/>*/}
            </Wrapper>
        </Container>
    )
}

export default Contact