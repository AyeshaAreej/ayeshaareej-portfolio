
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import './Social.css';

const Social = () => {
  return (
    <Container style={{ padding: '30px' }}>
      <Row>
        <Col md={12} className="contact-social">
          <div className="contact-text">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{' '}
              <span className="yellow">connect.</span>
            </p>
          </div>

          <ul className="contact-social-links">
            <li className="contact-icons">
              <a
                href="https://github.com/AyeshaAreej"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="contact-icons">
              <a
                href="https://x.com/itsAyeshaAreej"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
                aria-label="Twitter / X"
              >
                <AiOutlineTwitter />
              </a>
            </li>

            <li className="contact-icons">
              <a
                href="https://www.linkedin.com/in/ayesha-areej-b44834232/"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Social;
