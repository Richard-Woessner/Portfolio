// src/components/SocialLinks.jsx

import React from "react";
// Styles
import styled from "styled-components";
// Config
import { socialLinks } from "../config";
// Icons
import { Icon } from "@iconify/react";

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

const SocialLinks = () => {
  return (
    <StyledSocialLinks>
      {socialLinks.map((element, index) => {
        let icon;
        switch (element.provider) {
          case "linkedin":
            icon = <Icon icon="fa-brands:linkedin" />;
            break;
          case "twitter":
            icon = <Icon icon="fa-brands:twitter" />;
            break;
          case "facebook":
            icon = <Icon icon="fa-brands:facebook" />;
            break;
          case "github":
            icon = <Icon icon="fa-brands:github" />;
            break;
          // Add more cases for additional providers
          default:
            icon = <Icon icon="ph:link-bold" />;
            break;
        }
        return (
          <a
            key={index}
            href={element.url}
            aria-label={`Visit my ${element.provider} profile`}
            className="link-icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </a>
        );
      })}
    </StyledSocialLinks>
  );
};

export default SocialLinks;