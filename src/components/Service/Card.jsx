import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { Icon, disc, title } = props;
  return (
    <Container>
      <span className="green">
        <Icon />
      </span>
      <h1>{title}</h1>
      <p>{disc}</p>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 1rem;
  @media (max-width: 1420px) {
    height: 380px;
  }
  @media (max-width: 573px) {
    height: 300px;
  }
  @media (max-width: 373px) {
    height: 360px;
  }
  span {
    font-size: 4rem;
    display: flex;
    justify-content: center;
  }

  h1 {
    font-size: 1.2rem;
    padding-bottom: 1rem;
    text-align: center;
  }

  p {
    font-size: 0.8rem;
  }
`;
