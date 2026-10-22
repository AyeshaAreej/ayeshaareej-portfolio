import React,{useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css'

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const [notDone, setNotDone] = useState(false)
    const [failed, setFailed] = useState(false)
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
        setDone(false)
        setNotDone(false)
        setFailed(false)
    }

    const sendEmail = (e) => {
    e.preventDefault();
    
    if(!formData.from_name || !formData.reply_to ||!formData.message){
      setNotDone(true)
    } else {
      
      //  Please use your own credentials from emailjs or i will recive your email
      
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
          setFailed(true);
        }
      );
    }
    };
    

    return(
        <Container style={{paddingTop: '50px'}} >
            <Row >
            <Col md={6} className="c-left" >
            <h1 >Get in Touch</h1>
            <h1 className="yellow">Contact me</h1>
            <p style={{ color: "white" }}>Or email me directly at <a href="mailto:ayeshaareej59@gmail.com">ayeshaareej59@gmail.com</a></p>
            <div className="call-card">
              <h4>Prefer to talk?</h4>
              <p>Book a free 15-minute call to discuss your project, automation or SaaS idea.</p>
              <a
                className="btn btn-primary"
                href={process.env.REACT_APP_BOOKING_URL || "mailto:ayeshaareej59@gmail.com?subject=15-minute%20call%20request"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a 15-minute call
              </a>
            </div>
            </Col>
            <Col md={6} className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                <input type="hidden" name="to_email" value="ayeshaareej59@gmail.com" />
                <input type="text" name="from_name" className="user"  placeholder="Name" onChange={handleChange}/>
                <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
                <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
                <span className='not-done' >{notDone && "Please, fill all the input field"}</span>
                <Button type="submit" className="button" disabled={done}>Send</Button>
                <span className='not-done'>{failed && "Sorry, your message could not be sent. Please email me directly at ayeshaareej59@gmail.com"}</span>
                <span className='done'>{done && "Thanks for reaching out! I have received your message and will reply soon. You can also find me on LinkedIn."}</span>
                </form>
            </Col>
            </Row>
        </Container>
    )
}

export default Contact