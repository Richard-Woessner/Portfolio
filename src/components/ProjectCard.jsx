// src/components/ProjectCard.jsx

import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
// Icons
import { Icon } from "@iconify/react";
// Images
import GH from "../images/GH.svg";
// Components
import { Card } from "react-bootstrap";

// #region styled-components
const StyledCard = styled.div`
  .card {
    border: var(--border);
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) =>
    theme.name === "light" ? "" : "var(--bs-gray)"};
    box-shadow: ${({ theme }) =>
    theme.name === "light"
      ? "0 3px 10px rgb(0 0 0 / 0.2)"
      : "0 3px 10px rgb(255 255 255 / 0.2)"};
    display: flex;
    flex-direction: column;
    height: 100%;

    .card-img-top {
      height: 50%;
      object-fit: contain;
    }

    .card-link {
      text-decoration: none;
      font-size: 1.5rem;

      &:hover {
        color: ${({ theme }) =>
    theme.name === "light" ? "var(--bs-dark)" : "var(--bs-light)"};
      }
    }

    .card-body {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    .card-text {
      margin-bottom: 0.5rem;
    }

    .technologies {
      margin-top: auto;
      font-weight: bold;
    }

    &:hover {
      transform: scale(1.03);
    }
  }
`;
// #endregion

// #region component
const propTypes = {
  demo: PropTypes.string,
  description: PropTypes.string,
  additionalInfo: PropTypes.string,
  technologies: PropTypes.string,
  image: PropTypes.node,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const ProjectCard = ({
  demo,
  description,
  additionalInfo,
  technologies,
  image,
  name,
  url,
}) => {
  return (
    <StyledCard>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={image ? image : GH}
          alt={name}
          className="mx-auto"
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {additionalInfo && (
            <Card.Text className="card-text">
              <strong>Details:</strong> {additionalInfo}
            </Card.Text>
          )}
          {demo && (
            <Card.Link href={demo} className="mb-2">
              Live Demo <Icon icon="icon-park-outline:code-computer" />
            </Card.Link>
          )}
          {technologies && (
            <Card.Text className="technologies">
              <strong>Technologies:</strong> {technologies}
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </StyledCard>
  );
};

ProjectCard.propTypes = propTypes;
// #endregion

export default ProjectCard;