import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit, DiJavascript1, DiNodejs, DiPython, DiReact } from "react-icons/di";
import {
  SiAmazonaws, SiBootstrap, SiDocker, SiExpo, SiExpress, SiFastapi, SiFigma, SiFirebase, SiFlutter, SiJira, SiMaterialui, SiMongodb, SiMysql, SiNextdotjs, SiNuxtdotjs, SiOpenai, SiPrisma, SiRedis, SiSlack, SiStrapi, SiSupabase, SiTailwindcss, SiTypescript, SiVuedotjs, SiZapier
} from "react-icons/si";

const groups = [
  { title: "Frontend", skills: [
    { name: "React", Icon: DiReact },
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "Vue.js", Icon: SiVuedotjs },
    { name: "Nuxt", Icon: SiNuxtdotjs },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "JavaScript", Icon: DiJavascript1 },
    { name: "Tailwind", Icon: SiTailwindcss },
    { name: "Bootstrap", Icon: SiBootstrap },
    { name: "MUI", Icon: SiMaterialui },
    { name: "shadcn", Icon: null },
    { name: "lovable.dev", Icon: null },
  ] },
  { title: "Backend & Mobile", skills: [
    { name: "Node.js", Icon: DiNodejs },
    { name: "Express", Icon: SiExpress },
    { name: "FastAPI", Icon: SiFastapi },
    { name: "Python", Icon: DiPython },
    { name: "Strapi", Icon: SiStrapi },
    { name: "Prisma", Icon: SiPrisma },
    { name: "React Native", Icon: DiReact },
    { name: "Flutter", Icon: SiFlutter },
    { name: "Expo", Icon: SiExpo },
  ] },
  { title: "AI & Automation", skills: [
    { name: "n8n", Icon: null },
    { name: "Make", Icon: null },
    { name: "Zapier", Icon: SiZapier },
    { name: "Flowise", Icon: null },
    { name: "OpenAI", Icon: SiOpenai },
  ] },
  { title: "Databases & Cloud", skills: [
    { name: "MongoDB", Icon: SiMongodb },
    { name: "MySQL", Icon: SiMysql },
    { name: "Redis", Icon: SiRedis },
    { name: "Supabase", Icon: SiSupabase },
    { name: "Firebase", Icon: SiFirebase },
    { name: "AWS EC2", Icon: SiAmazonaws },
    { name: "AWS RDS", Icon: SiAmazonaws },
  ] },
  { title: "Tools", skills: [
    { name: "Docker", Icon: SiDocker },
    { name: "Git", Icon: DiGit },
    { name: "Jira", Icon: SiJira },
    { name: "Slack", Icon: SiSlack },
    { name: "Figma", Icon: SiFigma },
  ] },
];

const Techstack = () => {
  return (
    <>
      {groups.map((g) => (
        <div key={g.title}>
          <h1 className="project-heading">
            <strong className="yellow">{g.title}</strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
            {g.skills.map(({ name, Icon }) => (
              <Col xs={4} sm={3} md={2} key={name} className="skill-col">
                <div className="skill-tile">
                  {Icon ? <Icon className="skill-icon" /> : null}
                  <span className={Icon ? "skill-label" : "skill-label skill-label-only"}>{name}</span>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </>
  );
};

export default Techstack;
