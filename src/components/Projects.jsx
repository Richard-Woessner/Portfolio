// src/components/Projects.jsx

import React from "react";
// Router
import { Link } from "react-router-dom";
// Components
import { Element } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import ProjectCard from "./ProjectCard";

// #region component
const Projects = ({ projects }) => {
  let content;

  if (projects && projects.length > 0) {
    content = (
      <>
        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
          {projects.slice(0, 3).map((project) => (
            <Col key={project.id} className="d-flex">
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
        {projects.length > 3 && (
          <Container className="text-center mt-5">
            <Link to="/All-Projects">
              <Button size="lg" variant="outline-primary">
                All Projects
              </Button>
            </Link>
          </Container>
        )}
      </>
    );
  } else {
    content = (
      <h2 className="text-center">
        Oops, you do not have any projects yet...
      </h2>
    );
  }

  return (
    <Element name={"Projects"} id="projects">
      <section className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Projects"} />
          </Container>
          {content}
        </Container>
      </section>
    </Element>
  );
};
// #endregion

export default Projects;