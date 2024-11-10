// src/pages/Home.jsx

import React from "react";
// State
import { useGetUsersQuery } from "../app/apiSlice";
// Components
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";
// Config
import { filteredProjects, moreInfo } from "../config";
// Utils
import { updateTitle } from "../utils";
// Import Container from React-Bootstrap
import { Container } from "react-bootstrap";

const Home = () => {
  const { data: userData } = useGetUsersQuery();

  React.useEffect(() => {
    if (userData && userData.name) {
      updateTitle(`${userData.name} | Portfolio`);
    }
  }, [userData]);

  return (
    <>
      <Hero name={userData.name} />
      <main>
        <AboutMe
          avatar_url={userData.avatar_url}
          bio={userData.bio}
          moreInfo={moreInfo}
        />
        <Skills />
        <Projects projects={filteredProjects} />
        {/* <Contact /> */}
      </main>
      <BackToTop />
    </>
  );
};

export default Home;