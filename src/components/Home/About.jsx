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
                  I build <span className="yellow">production systems, not demos.</span> Software products, AI-driven automations, and SaaS platforms that hold up under real usage, not just in a pitch.
                  <br />
                  <br />
                  As <b className="yellow">Co-founder at Enumsol</b>, I lead engineering across a range of AI-native systems, from workflow automation to <b className="yellow">LLM-integrated backend pipelines</b>, architecting things that actually reduce manual work rather than just looking automated.
                  <br />
                  <br />
                  My background is in software engineering and AI: a <b className="yellow">Master's in Computer Science from NUST</b>, with hands-on work in full-stack development, NLP, and automation. I also build <b className="yellow">SaaS products</b>, from AI-powered internal tools to automation platforms that cut hours of repetitive effort for founders and teams, and I have shipped products that moved from a rough idea to a paying customer's daily workflow.
                  <br />
                  <br />
                  This summer I served as <b className="yellow">Team Lead</b> at the Pak-Thai Digital Innovation Lab at NUST, and I was awarded the Talent Hunt Scholarship by Sukkur IBA University for my Bachelor's degree.
                  <br />
                  <br />
                  If you have a process held together by memory instead of a system, <span className="yellow">I would like to hear about it.</span>
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