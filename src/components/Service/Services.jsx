import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"User-Centric Interface Design"}
            disc={`As a Frontend Developer,my primary focus revolves around crafting user-centric interface designs.I specialize in creating visually appealing and intuitive user interfaces that prioritize an exceptional user experience. By employing industry-leading design principles and staying abreast of the latest trends in frontend technologies,I ensure that the digital products I work on not only meet but exceed user expectations.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Responsive Web Development"}
            disc={`In today's dynamic digital landscape, the importance of responsive web development cannot be overstated. I specialize in building websites and applications that seamlessly adapt to various devices and screen sizes. Through my expertise in responsive design techniques and frameworks, I ensure a consistent and optimal user experience across desktops, tablets, and mobile devices.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"API Integration and Consumption"}
            disc={`My proficiency extends to seamlessly integrating and consuming APIs, enabling web applications to interact with external services and data sources. Whether working with RESTful APIs or GraphQL, I ensure efficient communication between frontend interfaces and backend systems, enhancing the overall functionality and richness of web applications.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
