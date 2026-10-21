import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col xs={12} sm={6} lg={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="insidercph.com"
              tags={["Lovable","Supabase","Web Scraping"]}
              description="Job search platform for Copenhagen, built with Lovable and Supabase. A scraper collects and filters new listings every day, and the site shows them in one place."
              demoLink="https://insidercph.com"
            />
          </Col>

          <Col xs={12} sm={6} lg={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Generate Genie"
              tags={["Next.js","Supabase","OpenAI"]}
              description="AI-powered automation platform cutting manual effort by 40%, built with Next.js, Supabase and OpenAI. Features real-time data integration, custom APIs, and an intuitive dashboard."
            />
          </Col>

          <Col xs={12} sm={6} lg={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Automated Sales Reporting System"
              tags={["n8n","Airtable","API Integration","Error Handling"]}
              description="End-to-end sales reporting automation built in n8n. It pulls data from a warehouse into Airtable, enriches it through external APIs, and delivers reports via Gmail and Discord, with error monitoring that flags failures in real time."
            />
          </Col>

          <Col xs={12} sm={6} lg={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="AI Voice Receptionist & Appointment Booking"
              tags={["n8n","Retell AI","Twilio","HubSpot","Google Calendar"]}
              description="End-to-end voice automation connecting Retell AI and Twilio for real-time call handling. n8n orchestrates the workflow, HubSpot manages leads and contacts, and Google Calendar handles live availability checks and automatic booking."
            />
          </Col>

          <Col xs={12} sm={6} lg={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="TailorConnect"
              tags={["Flutter","Node.js","MongoDB"]}
              description="Tailor and fabric connection app built with Flutter, Node.js and MongoDB at the Pak-Thai Digital Innovation Lab, NUST, with AI features for fabric recognition and measurement prediction. I led the project from documentation to deployment, including testing and closing feature gaps."
            />
          </Col>

          <Col xs={12} sm={6} lg={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="xct-future-forge"
              tags={["Flowise","Next.js","OpenAI"]}
              description="A 3-step AI pipeline built in Flowise and Next.js that turns a product idea into a full concept: researching and scoping it, projecting its evolution on a timeline, then generating a final report with AI-generated product images."
            />
          </Col>

          <Col xs={12} sm={6} lg={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="SUNT ERP System"
              tags={["React","Node","Docker","Prisma"]}
              description="Tailored ERP system for Sun Tech built with React, Node, Docker and Prisma, streamlining inventory, finance and HR with automated workflows, real-time data tracking and integrated reporting."
            />
          </Col>

          <Col xs={12} sm={6} lg={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Food Delivery App"
              tags={["React Native","Redux"]}
              description="Cross-platform mobile application built with React Native and Redux, with real-time updates for browsing menus, customizing orders, and managing carts."
            />
          </Col>

          <Col xs={12} sm={6} lg={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Emotion-Aware Chatbot"
              tags={["BERT/DistilBERT","Hugging Face"]}
              description="NLP chatbot built by fine-tuning DistilBERT on the Hugging Face Emotion dataset, with preprocessing, EDA, tokenization and the Trainer API. Reached 93.6% accuracy on the test set."
            />
          </Col>

          <Col xs={12} sm={6} lg={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="CodeDoc Genie"
              tags={["AWS","Amazon Bedrock","Titan Text Lite"]}
              description="AI-powered code documentation assistant on AWS Lambda, API Gateway and Amazon Bedrock (Titan Text Lite) that generates documentation and inline comments."
            />
          </Col>

          <Col xs={12} sm={6} lg={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="BlueJay Event Planner"
              tags={["React","React Native","Node.js"]}
              description="Event planning platform with web and mobile applications for event coordination and management, built with React, React Native and Node.js."
            />
          </Col>

          <Col xs={12} sm={6} lg={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Hospital Management System"
              description="Desktop application for efficient hospital record management, patient tracking, and administrative control."
              tags={["C#","SQL Server","Desktop App"]}
            />
          </Col>

          <Col xs={12} sm={6} lg={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Ozbot Robot Navigation"
              description="Programmed an Ozbot robot to run collision avoidance algorithms and pathfinding using sensor-based navigation."
              tags={["Robotics","Ozbot","OzoBlockly","Reactive Collision Avoidance","Maze Solving"]}
            />
          </Col>

          <Col xs={12} sm={6} lg={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Movie Genre Prediction"
              description="Machine learning project using NLP techniques to predict movie genres from textual features and metadata."
              tags={["Python","Machine Learning","NLP"]}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects