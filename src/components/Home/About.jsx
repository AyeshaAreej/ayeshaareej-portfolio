import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Ayesha Areej </span>
                 and I'm a <span className="yellow"> Full-Stack Web & Mobile App Developer.</span>
                <br />
               
                <br />
                 I specialize in building modern, 
                  <b className="yellow"> user-friendly </b>software 
                  using technologies like React.js, Node.js, NestJS, and React Native.
                  <br />
                  <br />I am proficient in
                    <b className="yellow"> Javascript, </b>
                    as well as have knowledge in programming languages such as C, 
                  <b className="yellow"> Java, and Python.</b>
                  <br />
                  <br />
                  I enjoy building projects that solve  
                  with <b className="yellow">real-world problems</b> — from event planning platforms and mobile apps to management systems and interactive clones.
                  <br />
                  <br />
                  Beyond coding, I’m a 
                    <b className="yellow"> problem solver, strong communicator, and team player. </b>
                   Being awarded the Talent Hunt scholarship by <b className="yellow"> Sukkur IBA University</b> to pursue my Bachelor's degree, reflects my academic excellence and dedication.
                  <br />
                  <br/>
                  In short, I’m driven by a passion for technology and a focus on delivering  <b className="yellow"> high-quality, scalable solutions</b> that thrive in  <b className="yellow"> dynamic environments.</b>
                </p>
              </Col>
              {/* svg img to be update form having male to female */}
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/AyeshaAreej"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://x.com/itsAyeshaAreej"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/ayesha-areej-b44834232/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About