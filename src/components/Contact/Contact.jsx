import React,{useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Contact.css'

// Your Cal.com link. REACT_APP_BOOKING_URL in .env overrides it, but the button works without it.
const bookingUrl = process.env.REACT_APP_BOOKING_URL || "https://cal.com/ayesha-areej-1ms6m7/intro-meeting";

// builds the embed address for Calendly or Cal.com; any other link is used as given
const embedUrl = (url) => {
  if (!url) return "";
  const join = url.includes("?") ? "&" : "?";
  if (url.includes("calendly.com")) return url + join + "hide_gdpr_banner=1&background_color=0d0e2e&text_color=ffffff&primary_color=7500fa";
  if (url.includes("cal.com")) return url + join + "embed=true&theme=dark";
  return url;
};

const Contact = () => {
    const [showCal, setShowCal] = useState(false)
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
        <Container style={{paddingTop: '130px', paddingBottom: '20px'}} >
            <Row className="align-items-center">
            <Col md={6} className="c-left" >
            <h1 >Get in Touch</h1>
            <h1 className="yellow">Contact me</h1>
            <div className="call-card">
              <h4>Prefer to talk?</h4>
              <p>Book a free 15-minute call to discuss your project, automation or SaaS idea.</p>
              <Button variant="primary" onClick={() => setShowCal(true)}>Book a 15-minute call</Button>
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
            <Modal show={showCal} onHide={() => setShowCal(false)} size="lg" centered contentClassName="cal-modal">
              <Modal.Header closeButton closeVariant="white">
                <Modal.Title>Book a 15-minute call</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ padding: 0 }}>
                <iframe title="Book a call" src={embedUrl(bookingUrl)} className="cal-frame" />
              </Modal.Body>
              <Modal.Footer>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer">Not loading? Open in a new tab</a>
              </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Contact